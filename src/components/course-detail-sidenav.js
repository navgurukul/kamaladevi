// Course list
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import CloseIcon from '@material-ui/icons/Close';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
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

import { getExerciseIdFromSlug } from '../services/utils';
import { isEnrolled } from '../services/session';
import { enrollCourseAPI } from '../services/api';


const styles = () => ({
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
	unEnrollButton:{
		padding: 20,
		width: '100%',
	},
	close: {
	 padding: '10px',
 	}
});


// Change this property to let multiple panels to be open simultaneously
const onlyonePanelOpen = true;

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
			showEnrolledNotification:false
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

	handleCloseSnackBar = () =>{
		this.setState({ showEnrolledNotification: false })
	}

	render() {
		const {
			openExercises, selectedvalue, selectedchildExercise, enrolled,
		} = this.state;
		const { classes, loadExercise } = this.props;
		//  getting exercises as an object because react/forbid-prop-types array in .eslintrc
		const { exercises } = this.props;

		const notifcationMessage = <div> You have enrolled in the course</div>;

		return (
			<div className={classes.root}>
				{/* Check whether the user is enrolled in the course.
          If enrolled, do not show the enroll button */}
					<Snackbar
						anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
						open={this.state.showEnrolledNotification}
						message={notifcationMessage}
						autoHideDuration={6000}
						onClose={this.handleCloseSnackBar}
						action={[
	            <IconButton
	              key="close"
	              aria-label="Close"
	              color="inherit"
	              className={classes.close}
	              onClick={this.handleCloseSnackBar}
	            >
              <CloseIcon />
            	</IconButton>
          	]}
					/>
				{!enrolled ?
					<ExpansionPanel
						expanded
					>
						<Button
							variant="raised"
							color="primary"
							className={classes.enrollButton}
							onClick={() => {
								const { id } = Router.query;
								enrollCourseAPI(id, success => this.setState({ enrolled: success }));
								this.setState({showEnrolledNotification:true});
							}}
						>
            Enroll In Course
						</Button>
					</ExpansionPanel>
					: null
				}
				{/* Display the exercises */}
				{exercises.map((value, index) => (
					<ExpansionPanel
						expanded={(value.childExercises.length !== 0) ? openExercises[index] : false}
						key={value.id}
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
										loadExercise(value.slug);
									}}
								>
									<ListItemIcon>
										<InboxIcon color={(selectedvalue === value.id) ? 'primary' : 'inherit'} />
									</ListItemIcon>
									<ListItemText
										disableTypography
										primary={
											<Typography variant="subheading" color={(selectedvalue === value.id) ? 'primary' : 'inherit'}>
												{value.name}
											</Typography>
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
												<Typography variant="subheading" color={(selectedvalue === value.id && selectedchildExercise === child.id) ? 'primary' : 'inherit'}>
													{child.name}
												</Typography>
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
							variant="raised"
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
};

export default withStyles(styles)(CourseDetailSideNav);
