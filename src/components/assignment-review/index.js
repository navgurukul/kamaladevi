import React from "react";
import PropTypes from "prop-types";
import localforage from "localforage";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { withStyles } from "@material-ui/core/styles";

import { fetchApi } from "../../services/api";
import {filterPendingAssignment}  from "../../services/courses"

import AlertNotification from "../alert-notification";
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
});

class AssignmentsReview extends React.Component {
  constructor(props) {
    super(props);
    const {assignments} =this.props;
    this.state = {
      assignments: assignments,
      mobileOpen: false,
      selectedAssignment:assignments.length?assignments[0]:{},
      showNotification:false,
      notifcationMessage:"",
      alertType:""
    };
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
      notifcationMessage: "",
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

    this.setState ({
      assignments : updateAssignmentList,
      // what if there is no assignment left?
      selectedAssignment: (nextAssignmentIndex === null)?
              {} : updateAssignmentList[nextAssignmentIndex],
    });
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
