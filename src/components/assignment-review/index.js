import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import AlertNotification from '../alert-notification';

import AssignmentsReviewSidenav from './assignment-review-sidenav';
import AssignmentsReviewDetails from './assignment-review-details';
import AssignmentsReviewCompleted from './assignment-review-completed';


const drawerWidth = 300;

const styles = theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
	},

	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerPaper: {
		minWidth: drawerWidth,
		overFlow: 'scroll',
		height: '92vh',
		zIndex: theme.zIndex.appBar - 100,
		marginTop: theme.spacing.unit * 7,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
			marginTop: '0px',
		},
	},
});

const navigateToAssignment = (submissionId) => {
	Router.push({
		pathname: '/assignment-review',
		query: { submissionId },
	});
};

class AssignmentsReview extends React.Component {
	constructor(props) {
		super(props);
		const { assignments } = this.props;
		const { submissionId } = Router.query;
		this.state = {
			assignments,
			mobileOpen: false,
			selectedAssignment: this.getAssignment(submissionId),
			showNotification: false,
			notifcationMessage: '',
			alertType: '',
		};
	}

	getAssignment = (id) => {
		const { assignments } = this.props;
		// if there is no assignment
		if (assignments.length === 0) {
			return {};
		}

		// find the assignment when link is opened using id
		if (id) {
			for (let i = 0; i < assignments.length; i += 1) {
				if (parseInt(id, 10) === assignments[i].id) {
					return assignments[i];
				}
			}
		}

		// if there is no id provided in url or
		// no assignment found for given id
		navigateToAssignment(assignments[0].id);
		return assignments[0];
	}

	getNextAssignmentIndex = (updateAssignmentList, removedAssignmentIndex) => {
		// if there is no assignment left
		if (updateAssignmentList.length === 0) {
			return null;
		} else if (updateAssignmentList.length === 1) {
			// if there is only 1 assignment just show it
			return 0;
		} else if (updateAssignmentList.length === removedAssignmentIndex) {
			// if the approve assignment is the last one then
			// then get the previous one
			return updateAssignmentList.length - 1;
		} else {
			return removedAssignmentIndex;
		}
	}
	// to open and close the sidebar in mobile view
	handleDrawerToggle = () => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	// show Notification to user
	handleShowNotification = (message, alertType) => {
		this.setState({
			showNotification: true,
			notifcationMessage: message,
			alertType,
		});
	}
	// Hide the Notification
	handleHideNotification = () => {
		this.setState({
			showNotification: false,
		});
	}

	// On clicking to any assignment in sidebar
	// it should be displayed in AssignmentsReviewDetails page
	showSelectedAssignment = (assignment) => {
		this.setState({
			selectedAssignment: assignment,
			mobileOpen: false,
		});
	}
	// remove a completed assignment
	removeCompletedAssignment = () => {
		const { assignments, selectedAssignment } = this.state;
		const updateAssignmentList = [];


		let removedAssignmentIndex;

		// The assignment which is approve or rejected
		// shall no longer be in pending list remove it.\\

		for (let i = 0; i < assignments.length; i += 1) {
			if (assignments[i] === selectedAssignment) {
				removedAssignmentIndex = i;
			} else {
				updateAssignmentList.push(assignments[i]);
			}
		}

		// which assignment to be shown after removing the
		// completed one in the main box
		const nextAssignmentIndex = this.getNextAssignmentIndex(
			updateAssignmentList,
			removedAssignmentIndex,
		);

		const nextAssignment = (nextAssignmentIndex === null)
			? {} : updateAssignmentList[nextAssignmentIndex];
		this.setState({
			assignments: updateAssignmentList,
			// what if there is no assignment left?
			selectedAssignment: nextAssignment,
		});

		if (nextAssignmentIndex !== null) {
			navigateToAssignment(nextAssignment.id);
		}
	}

	render() {
		const { classes } = this.props;
		const {
			assignments,
			selectedAssignment,
			mobileOpen,
			showNotification,
			notifcationMessage,
			alertType,
		} = this.state;
		return (
			<div className={classes.root}>
				{assignments.length ?
					<React.Fragment>
						{ /* Side Drawer to display assignment list */}
						<IconButton
							color="inherit"
							onClick={this.handleDrawerToggle}
							className={classes.navIconHide}
						>
							<MenuIcon />
						</IconButton>
						{/* For mobile view */}
						<Hidden mdUp>
							<Drawer
								variant="persistent"
								open={mobileOpen}
								onClose={this.handleDrawerToggle}
								classes={{ paper: classes.drawerPaper }}
							>
								<AssignmentsReviewSidenav
									assignments={assignments}
									selectedAssignment={selectedAssignment}
									showSelectedAssignment={this.showSelectedAssignment}
								/>
							</Drawer>
						</Hidden>
						{/* For desktop view */}
						<Hidden smDown>
							<Drawer
								variant="persistent"
								open
								classes={{ paper: classes.drawerPaper }}
							>
								<AssignmentsReviewSidenav
									assignments={assignments}
									selectedAssignment={selectedAssignment}
									showSelectedAssignment={this.showSelectedAssignment}
								/>
							</Drawer>
						</Hidden>
						{/* Feedback page */}
						<main>
							<AssignmentsReviewDetails
								selectedAssignment={selectedAssignment}
								removeCompletedAssignment={this.removeCompletedAssignment}
								showNotification={this.handleShowNotification}
							/>
						</main>
						<AlertNotification
							open={showNotification}
							message={notifcationMessage}
							variant={alertType}
							autoHideDuration={6000}
							onClose={this.handleHideNotification}
						/>
					</React.Fragment>
					: <AssignmentsReviewCompleted />
				}
			</div>
		);
	}
}

AssignmentsReview.propTypes = {
	classes: PropTypes.object.isRequired,
	assignments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(AssignmentsReview);
