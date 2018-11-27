import React from "react";
import PropTypes from "prop-types";
import localforage from "localforage";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";

import { withStyles } from "@material-ui/core/styles";

import { fetchApi } from "../../services/api";
import {filterPendingAssignment}  from "../../services/courses"

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
    height:'90vh',
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
      selectedAssignment:assignments.length?assignments[0]:{}
    };
  }

  showSelectedAssignment = (assignment) => {
    this.setState({
      selectedAssignment: assignment,
      mobileOpen:false
    })
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  getNextAssignmentIndex = (updateAssignmentList, removedAssignmentIndex) => {
    // if there is no assignment left
    if (updateAssignmentList.length == 0){
      return null;
    }
    // if there is only 1 assignment just show it
    else if (updateAssignmentList.length == 1){
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

  removeCompletedAssignment = () => {
    const {assignments, selectedAssignment} = this.state;
    let updateAssignmentList = [], removedAssignmentIndex, nextAssignmentIndex;
    for (let i = 0; i < assignments.length; i++) {
      if (assignments[i] === selectedAssignment) {
          removedAssignmentIndex = i;
          continue;
      }
      updateAssignmentList.push(assignments[i]);
    }
    nextAssignmentIndex = this.getNextAssignmentIndex(
          updateAssignmentList,
          removedAssignmentIndex
        );
    this.setState ({
      assignments : updateAssignmentList,
      selectedAssignment: (nextAssignmentIndex === null)?
              {} : updateAssignmentList[nextAssignmentIndex],
    });
  }

  render() {
    const { classes } = this.props;
    const { assignments, selectedAssignment, mobileOpen} = this.state;
    return (
      <div className={classes.root}>
        {
          assignments.length?
          <React.Fragment>
            <IconButton
              color="inherit"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
              >
              <MenuIcon />
            </IconButton>
            <Hidden mdUp>
              <Drawer
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
            <Hidden smDown>
              <Drawer
                variant="permanent"
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
            <main className={classes.content}>
                <AssignmentsReviewDetails
                  selectedAssignment={selectedAssignment}
                  removeCompletedAssignment={this.removeCompletedAssignment}
                  />
            </main>
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
