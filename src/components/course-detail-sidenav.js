// Course list
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { enrollCourse, isEnrolled } from '../services/courses';


const styles = () => ({
	root: {
		textAlign: 'center',
	},
	sidebar: {
		width: '35%',
		margin: 'auto',
		float: 'right',
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
});


class CourseDetailSideNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openExercises: [],
			selectedvalue: null,
			selectedchildExercise: null,
			onlyonePanelOpen: true,
			// setting enrolled to true to prevent the flicker,
			// when the button disappers after appearing
			enrolled: true,
		};
	}
	componentWillMount() {
		const { exercises } = this.props.exercises;
		const openExercises = new Array(exercises.length);
		for (let i = 0; i < openExercises.length; i += 1) {
			openExercises[i] = false;
		}
		this.setState({ openExercises, selectedvalue: exercises[0].id });
		// Check whether course is enrolled
		const { id } = Router.query;
		isEnrolled(id, success => this.setState({ enrolled: success }));
	}
	switchPanel = (index) => {
		const { exercises } = this.props.exercises;
		const oldpanel = this.state.openExercises;

		if (this.state.onlyonePanelOpen) {
			const openExercises = new Array(exercises.length);
			for (let i = 0; i < openExercises.length; i += 1) {
				openExercises[i] = false;
			}
			openExercises[index] = !oldpanel[index];
			this.setState({ openExercises });
		} else {
			oldpanel[index] = !oldpanel[index];
			this.setState({ openExercises: oldpanel });
		}
	};
	highLightSelectedList(valueID, childID) {
		this.setState({
			selectedvalue: valueID,
			selectedchildExercise: childID,
		});
	}

	render() {
		const {
			openExercises, selectedvalue, selectedchildExercise, enrolled,
		} = this.state;
		const { classes, loadExercise } = this.props;
		//  getting exercises as an object because react/forbid-prop-types array in .eslintrc
		const { exercises } = this.props.exercises;
		return (
			<div className={classes.root}>
				<div className={classes.sidebar}>
					{/* Check whether the user is enrolled in the course.
          If enrolled, do not show the enroll button */}
					{!enrolled ?
						<Button
							variant="raised"
							color="primary"
							className={classes.button}
							onClick={() => {
								const { id } = Router.query;
								enrollCourse(id, success => this.setState({ enrolled: success }));
							}}
						>
            Enroll In Course
						</Button> : null
					}
					{/* Display the exercises */}
					{exercises.map((value, index) => (
						<ExpansionPanel
							expanded={(value.childExercises.length !== 0) ? openExercises[index] : false}
							onChange={() => { this.switchPanel(index); }}
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
											this.highLightSelectedList(value.id, null);
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
												this.highLightSelectedList(value.id, child.id);
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
				</div>
			</div>
		);
	}
}

CourseDetailSideNav.propTypes = {
	classes: PropTypes.object.isRequired,
	exercises: PropTypes.object.isRequired,
	loadExercise: PropTypes.func.isRequired,
};

export default withStyles(styles)(CourseDetailSideNav);
