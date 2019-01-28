import React from "react";
import PropTypes from "prop-types";
import localforage from "localforage";
import Router from "next/router";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { withStyles } from "@material-ui/core/styles";

import {filterPendingAssignment}  from "../../services/utils"

import AlertNotification from "../alert-notification";
import CircularProgress from '@material-ui/core/CircularProgress';
import AssignmentsReviewSidenav from "./assignment-review-sidenav";
import AssignmentsReviewDetails from "./assignment-review-details";
import AssignmentsReviewCompleted from "./assignment-review-completed";



const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    minWidth: drawerWidth,
    overFlow:'scroll',
    height:'92vh',
    zIndex:theme.zIndex.appBar - 100,
    marginTop: theme.spacing.unit * 7,
    [theme.breakpoints.up("md")]: {
      position: "relative",
      marginTop:'0px'
    }
  },
  progress: {
		margin: theme.spacing.unit * 1,
	},
	rootLoader: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
});

const navigateToAssignment = submissionId => {
  Router.push({
    pathname: '/assignment-review',
    query:{submissionId}
  });
}

class AssignmentsReview extends React.Component {
  constructor(props) {
    super(props);
    const {assignments} =this.props;
    const { submissionId } =  Router.query;
    this.state = {
      assignments: assignments,
      mobileOpen: false,
      selectedAssignment:this.getAssignment(submissionId),
      showNotification:false,
      notifcationMessage:"",
      alertType:""
    };

  }

  getAssignment = (id) => {
    const {assignments} = this.props;
    // if there is no assignment
    if (assignments.length === 0){
      return {}
    }

    // find the assignment when link is opened using id
    if(id){
      for (let i = 0; i < assignments.length; i++) {
        if (id == assignments[i].id){
          return assignments[i];
        }
      }
    }

    // if there is no id provided in url or
    // no assignment found for given id
    navigateToAssignment(assignments[0].id)
    return assignments[0];

  }

  // On clicking to any assignment in sidebar
  // it should be displayed in AssignmentsReviewDetails page
  showSelectedAssignment = (assignment) => {
    this.setState({
      selectedAssignment: assignment,
      mobileOpen:false
    })
  }

  // Hide the Notification
  handleHideNotification = () => {
    this.setState({
      showNotification: false,
    })
  }

  // show Notification to user
  handleShowNotification = (message, alertType) => {
    this.setState({
      showNotification: true,
      notifcationMessage: message,
      alertType: alertType,
    })
  }

  // to open and close the sidebar in mobile view
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  getNextAssignmentIndex = (updateAssignmentList, removedAssignmentIndex) => {
    // if there is no assignment left
    if (updateAssignmentList.length === 0){
      return null;
    }
    // if there is only 1 assignment just show it
    else if (updateAssignmentList.length === 1){
      return 0;
    }
    // if the approve assignment is the last one then
    // then get the previous one
    else if (updateAssignmentList.length == removedAssignmentIndex){
      return updateAssignmentList.length-1;
    }
    else {
      return removedAssignmentIndex;
    }
  }

  // remove a completed assignment
  removeCompletedAssignment = () => {
    const {assignments, selectedAssignment} = this.state;
    let updateAssignmentList = [],
        removedAssignmentIndex,
        nextAssignmentIndex;

    // The assignment which is approve or rejected
    // shall no longer be in pending list remove it.
    for (let i = 0; i < assignments.length; i++) {
      if (assignments[i] === selectedAssignment) {
          removedAssignmentIndex = i;
          continue;
      }
      updateAssignmentList.push(assignments[i]);
    }

    // which assignment to be shown after removing the
    // completed one in the main box
    nextAssignmentIndex = this.getNextAssignmentIndex(
          updateAssignmentList,
          removedAssignmentIndex
        );

    let nextAssignment = (nextAssignmentIndex === null)?
            {} : updateAssignmentList[nextAssignmentIndex];
    this.setState ({
      assignments : updateAssignmentList,
      // what if there is no assignment left?
      selectedAssignment: nextAssignment,
    });

    if(nextAssignmentIndex !== null){
      navigateToAssignment(nextAssignment.id);
    }
  }

  render() {
    
    const { classes,showLoader } = this.props;
    const {
      assignments,
      selectedAssignment,
      mobileOpen,
      showNotification,
      notifcationMessage,
      alertType,
    } = this.state;
    
    console.log("render");
  
    if (showLoader === true) {
      return (
        <div className={classes.rootLoader}>
          <CircularProgress className={classes.progress} size={50} />
        </div>);
    }
    
    return (
      <div className={classes.root}>
        {
          assignments.length?
          <React.Fragment>
            {/* Side Drawer to display assignment list*/}
            <IconButton
              color="inherit"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
              >
              <MenuIcon />
            </IconButton>
            {/*For mobile view*/}
            <Hidden mdUp>
              <Drawer
                variant="persistent"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                >
                <AssignmentsReviewSidenav
                  assignments={assignments}
                  selectedAssignment={selectedAssignment}
                  showSelectedAssignment={this.showSelectedAssignment}
                  />
              </Drawer>
            </Hidden>
            {/*For desktop view*/}
            <Hidden smDown>
              <Drawer
                variant="persistent"
                open
                classes={{
                  paper: classes.drawerPaper
                }}
                >
                <AssignmentsReviewSidenav
                  assignments={assignments}
                  selectedAssignment={selectedAssignment}
                  showSelectedAssignment={this.showSelectedAssignment}
                  />
              </Drawer>
            </Hidden>
            {/*Feedback page*/}
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
          :<AssignmentsReviewCompleted />
        }
      </div>
    );
  }
}

AssignmentsReview.propTypes = {
  classes: PropTypes.object.isRequired,
  assignments: PropTypes.array.isRequired
};

export default withStyles(styles)(AssignmentsReview);
