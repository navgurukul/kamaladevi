// Course list
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import CloseIcon from '@material-ui/icons/Close';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import CancelIcon from '@material-ui/icons/Cancel';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateNewIcon from '@material-ui/icons/CreateNewFolder';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { withStyles } from '@material-ui/core/styles';

import AlertNotification from '../alert-notification';

import { getExerciseIdFromSlug } from '../../services/utils';
import { isEnrolled, setSession } from '../../services/session';
import { enrollCourseAPI, fetchApi } from '../../services/api';
import GoogleLogin from 'react-google-login';
import localforage from "localforage";


const styles = theme =>
	// console.log(theme);
	({
		root: {
			textAlign: 'center',
		},
		extPnlSmryRoot: {
			padding: 0,
		},
		expPnlSmryContent: {
			margin: 0,
		},
		expPnlSmryExpanded: {
			margin: '0px !important',
		},
		expPnlDetails: {
			flexDirection: 'column',
		},
		flex1: {
			flex: 1,
		},
		enrollButton: {
			padding: 20,
			width: '100%',
		},
		unEnrollButton: {
			padding: 20,
			width: '100%',
		},
		close: {
			padding: '10px',
		},
		Approved: {
			color: theme.palette.secondary.main,
		},
		Pending_Review: {
			color: theme.palette.warning.main,
		},
		Rejected: {
			color: theme.palette.error.main,
		},
		Open: {
			color: theme.palette.info.main,
		},
		typography: {
			display: 'inline-block',
		},

	});
const exerciseSubmissionClass = (status) => {
	switch (status) {
		case 'completed':
			return 'Approved';
		case 'pending':
			return 'Pending_Review';
		case 'rejected':
			return 'Rejected';
		default:
			return 'Open';
	}
};

const exerciseSubmissionStatus = (status) => {
	switch (status) {
		case 'completed':
			return <CheckCircleIcon />;
		case 'pending':
			return <ScheduleIcon />;
		case 'rejected':
			return <CancelIcon />;
		default:
			return <CreateNewIcon />;
	}
};
// Change this property to let multiple panels to be open simultaneously
const onlyonePanelOpen = true;

const authSuccess = async (response) => {
	//var that=this;
	const { tokenId } = response;
	return new Promise((resolve, reject)=>{
		fetchApi('/users/auth/google', { idToken: tokenId }, { 'Content-Type': 'application/json' }, 'post')
		.then(authResponse => {
			console.log('authResponse', authResponse);
			console.log('1st then');
			setSession(authResponse)
			resolve();
		}).catch(()=>{
			reject();
		})
	});
	// console.log('auth response');
	// console.log(response);
	// const { tokenId } = response;
	//  fetchApi('/users/auth/google', { idToken: tokenId }, { 'Content-Type': 'application/json' }, 'post')
	// 	.then(authResponse => {
	// 		console.log('authResponse', authResponse);
	// 		console.log('1st then');
	// 		setSession(authResponse)
	// 		p.resolve();
	// 	}).cathc(()=>{
	// 		p.reject();
	// 	})
};
const authFailure = (response) => {
	console.log(response);
};
class CourseDetailSideNav extends React.Component {
	constructor(props) {
		super(props);
		const { exercises, slug } = props;
		const openExercises = new Array(exercises.length);
		for (let i = 0; i < openExercises.length; i += 1) {
			openExercises[i] = false;
		}
		const {
			openExerciseId,
			selectedvalue,
			selectedchildExercise,
		} = getExerciseIdFromSlug(slug, exercises);

		openExercises[openExerciseId] = true;
		this.state = {
			openExercises,
			selectedvalue,
			selectedchildExercise,
			// setting enrolled to true to prevent the flicker,
			// when the button disappers after appearing
			enrolled: true,
			showEnrolledNotification: false,

			isAuthenticated: false,
			verient:"success",
			notifcationCustomeMessage:null
		};
	}

	componentWillMount() {
		// Check whether course is enrolled
		const { id } = Router.query;
		isEnrolled(id, success => this.setState({ enrolled: success }));
	}

	shouldComponentUpdate(nextProps) {
		const { slug, exercises } = nextProps;
		if (slug !== this.props.slug) {
			const {
				openExerciseId,
				selectedvalue,
				selectedchildExercise,
			} = getExerciseIdFromSlug(slug, exercises);
			this.switchPanel(openExerciseId);
			this.highLightSelectedList(selectedvalue, selectedchildExercise);
		}
		return true;
	}

	switchPanel = (index) => {
		const { openExercises } = this.state;
		// If open only one panel at a time, close all the active panels
		if (onlyonePanelOpen) {
			for (let i = 0; i < openExercises.length; i += 1) {
				openExercises[i] = false;
			}
		}
		openExercises[index] = true;
		this.setState({ openExercises });
	};

	highLightSelectedList(valueID, childID) {
		this.setState({
			selectedvalue: valueID,
			selectedchildExercise: childID,
		});
	}


	handleHideNotification = () =>{
		this.setState({ showEnrolledNotification: false,notifcationCustomeMessage:null})
	}
	checkIsAuthenticated = () => {
		localforage.getItem("authResponse", (error, value) => {
			if (error) {
				if (!window.navigator.onLine) {
					alert("Aap internet se connected nhi ho.");
				}
				console.log(e);
			} else {
				if (!value) {
				} else {
					this.setState({
						isAuthenticated: true
					})
				}
			}
		});
	}
	componentDidMount() {
		this.checkIsAuthenticated();

	}

	render() {
		const {
			openExercises,
			selectedvalue,
			selectedchildExercise,
			enrolled,
			showEnrolledNotification,
			isAuthenticated,
			verient,
			notifcationCustomeMessage
		} = this.state;
		const {
			classes,
			loadExercise,
			selectedExercise,
		} = this.props;

		//  getting exercises as an object because react/forbid-prop-types array in .eslintrc
		const { exercises } = this.props;

		const notifcationMessage = (notifcationCustomeMessage)?
		notifcationCustomeMessage
		:
		(enrolled && showEnrolledNotification) ?
																"You have enrolled in the course"
																:"Kuch Error Ayi ha Enrolled nhi kar paye";


		return (
			<div className={classes.root}>
				{/* Check whether the user is enrolled in the course.
          If enrolled, do not show the enroll button */}
					<AlertNotification
						open={showEnrolledNotification}
						message={notifcationMessage}
					
						autoHideDuration={6000}
						onClose={this.handleHideNotification}
					variant={verient}
					/>

				{!enrolled ?
					<ExpansionPanel
						expanded
					>
						{isAuthenticated ?
						<Button
							variant="contained"
							color="primary"
							className={classes.enrollButton}
							onClick={() => {
								const { id } = Router.query;
								enrollCourseAPI(id, success => {
									this.setState({ enrolled: success, showEnrolledNotification:true })
							}).catch(error => {
											this.setState({
												notifcationCustomeMessage: error.message,
												verient: 'error',
												showEnrolledNotification: true,
											});
										})
								}}
							>
								Enroll In Course
						</Button>
							:
							<Button
								color="primary"
								variant="contained"
								component={GoogleLogin}
								clientId="96851996756-7lfcdrojvu63k0jcjsqma61jggd72uli.apps.googleusercontent.com"
								cookiePolicy="single_host_origin"
								scope="profile email"
								onSuccess={(response) => {
									this.setState({ loading: true });
									authSuccess(response).then(() => {
										console.log('2nd then');
										const { id } = Router.query;
										enrollCourseAPI(id, (success) => {
											this.setState({ enrolled: success, showEnrolledNotification:true });
											Router.replace('/home');
										}).catch(error => {
													console.log('<-------------------error enrol course------------------------>',error);
													console.log(typeof error);
											this.setState({
														notifcationCustomeMessage: error.message,
														verient: 'error',
														showEnrolledNotification: true,
											});
										})
										});
							}}
								className={classes.enrollButton}
								onFailure={authFailure}
						>
            Enroll In Course
						</Button>
						}
					</ExpansionPanel>
					:
					(selectedExercise.usersCompletedExercise !== undefined) && selectedExercise.usersCompletedExercise.length !== 0 ?

						<ExpansionPanel
							expanded
						>
							<ExpansionPanelSummary>
								<span>
									{ // Name of the students who have completed the exercise.
										selectedExercise.usersCompletedExercise.slice(0, 3).map((user, index) => {
											if (index === selectedExercise.usersCompletedExercise.slice(0, 3).length - 1) {
												return `${user.name} `;
											}
											return `${user.name}, `;
										})
									}
									{
										selectedExercise.usersCompletedExercise.slice(3).length !== 0 ?
											<span>
											and {selectedExercise.usersCompletedExercise.slice(5).length} more have completed this exersise.
											</span>
											: null
									}
								</span>
							</ExpansionPanelSummary>
						</ExpansionPanel>
						: null

				}
				{/* Display the exercises */}
				{exercises.map((value, index) => (
					<ExpansionPanel
						expanded={(value.childExercises.length !== 0) ? openExercises[index] : false}
						key={value.id}
						classes={classes.disable}
					>
						{/* ExpansionPanelSummary wraps child in different classes,
								classes prop is to target the wrapper classes and style */}
						<ExpansionPanelSummary
							expandIcon={(value.childExercises.length !== 0) ? <ExpandMoreIcon /> : null}
							classes={{
								root: classes.extPnlSmryRoot,
								content: classes.expPnlSmryContent,
								expanded: classes.expPnlSmryExpanded,
							}}
						>
							{/* Had to customize listiem text, as we cannot target it directly to style it
									provided similar component inside primary where we can style
									disableTypography prevented 2 times wrapping */}
							<List component="nav" className={classes.flex1}>
								<ListItem
									onClick={() => {
									//	isAuthenticated?
										loadExercise(value.slug)
									//	:
										// this.setState({
										// 	showEnrolledNotification: true,
										// 	verient:'error',
										// 	notifcationCustomeMessage:"Please payhle login karo"
									}}
								>
									<ListItemIcon>
										<InboxIcon color={(selectedvalue === value.id) ? 'primary' : 'inherit'} />
									</ListItemIcon>
									<ListItemText
										disableTypography
										primary={
											<Grid container>
												<Grid item md={10} sm={10}>
													<Typography
														className={classes.typography}
														variant="subheading"
														color={(selectedvalue === value.id) ? 'primary' : 'inherit'}
													>
														{value.name}
													</Typography>
												</Grid>
												<Grid item md={2} sm={2}>
													<span className={classes[exerciseSubmissionClass(value.submissionState)]}>
														{value.submissionType ? exerciseSubmissionStatus(value.submissionState) : null}
													</span>
												</Grid>
											</Grid>
										}
									/>
								</ListItem>
							</List>
						</ExpansionPanelSummary>
						{/* checking if there are any sub categories,
							if not then hiding the ExpansionPanelDetails */}
						{(value.childExercises.length !== 0) ?
							<ExpansionPanelDetails className={classes.expPnlDetails}>
								{value.childExercises.map(child => (
									<ListItem
										button
										onClick={() => {
											loadExercise(child.slug);
										}}
										key={child.id}
									>
										<ListItemIcon>
											<DraftsIcon color={(selectedvalue === value.id && selectedchildExercise === child.id) ? 'primary' : 'inherit'} />
										</ListItemIcon>
										<ListItemText
											disableTypography
											primary={
												<Grid container>
													<Grid item md={10} sm={10}>
														<Typography
															className={classes.typography}
															variant="subheading"
															color={(selectedvalue === value.id && selectedchildExercise === child.id) ? 'primary' : 'inherit'}
														>
															{child.name}
														</Typography>
													</Grid>
													<Grid item md={2} sm={2}>
														<span className={classes[exerciseSubmissionClass(child.submissionState)]}>
															{child.submissionType ? exerciseSubmissionStatus(child.submissionState) : null}
														</span>
													</Grid>
												</Grid>
											}
										/>
									</ListItem>
								))}
							</ExpansionPanelDetails>
							: null}
						<Divider />
					</ExpansionPanel>
				))}
				{enrolled ?
					<ExpansionPanel
						expanded
					>
						<Button
							variant="contained"
							color="primary"
							className={classes.unEnrollButton}
						>
						UnEnroll From Course
						</Button>
					</ExpansionPanel>
					: null
				}
			</div>
		);
	}
}

CourseDetailSideNav.propTypes = {
	classes: PropTypes.object.isRequired,
	exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
	loadExercise: PropTypes.func.isRequired,
	slug: PropTypes.string.isRequired,
	selectedExercise: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetailSideNav);
