// Course list

import React from "react";
import ReactGA from 'react-ga';
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import localforage from "localforage";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

import { fetchApi } from "../../services/api";
import { setEnrolledCourses } from "../../services/session";
import { sortCoursesBySequenceNum } from "../../services/utils";
import {connect} from "react-redux";
import CourseListCategoryView from "./course-list-category-view";
import CourseListDragAndDropView from "./course-list-dragdrop-view";


const styles = theme => ({
	rootLoader: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		marginTop: '46vh',
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	rootContent: {
		paddingTop: theme.spacing.unit * 5,
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingLeft: 10,
			paddingRight: 10,
		},
	},
	courseEditButton: {
		display: 'block',
		float: 'right',
		margin: '0',
		top: 'auto',
		float: 'right',
		right: theme.spacing.unit * 4,
		bottom: theme.spacing.unit * 4,
		left: 'auto',
		zIndex: '100',
		position: 'fixed',
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.spacing.unit * 2,
		},
	},

	courseSequenceEditRootContent: {
		width: '40%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	// dividerContainer: {
	// 	paddingTop: theme.spacing.unit * 2,
	// 	justifyContent: 'center',
	// },
	progress: {
		margin: theme.spacing.unit * 1,
	},
});

const navigateToEditMode = () => {
	Router.push({
		pathname: '/home',
		query: {
			edit: true,
		},
	});
};

const navigateToHome = () => {
	Router.push({
		pathname: '/home',
	});
};

class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefetchedData: false,
      editCourseSequence: false,
      availableCourses: [],
      // For future uses
      enrolledCourses: [],
      facilitatingCourses: [],
      isAdmin: false
    };
  }

  componentDidMount() {
    ReactGA.initialize('UA-135762938-1');
    ReactGA.pageview(window.location.pathname);
    if (typeof this.props.bus !== "undefined") {
      this.props.bus.on("search", (searchString) => {
        var updatedList = this.state.initialAvailableCourses;
        var updatedEnrolledCourses = this.state.initialEnrolledCourses;
        updatedList = updatedList.filter(function(course){
          return course.name.toLowerCase().search(
            searchString.toLowerCase()) !== -1;
        });
        updatedEnrolledCourses = updatedEnrolledCourses.filter(function(course){
          return course.name.toLowerCase().search(
            searchString.toLowerCase()) !== -1;
        });
        this.setState({availableCourses: updatedList});
        this.setState({enrolledCourses: updatedEnrolledCourses});
      })
  }
    this.getCoursesUpdated();
    this.checkIsAuthenticated();
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
  getCoursesUpdated = () => {
    localforage.getItem("authResponse", (error, value) => {
      if (!error) {
        if (value === null) {
         fetchApi("/courses", {})
           .then(response => {
              console.log(response);
             this.setState({
               prefetchedData: true,
               isAdmin: false,
               initialAvailableCourses: response.availableCourses,
               initialEnrolledCourses: [],
               ...response
             });
           })
           .catch(() => {
           });
          //Router.replace("/");
        } else {
          const { jwt, user } = value;
          fetchApi("/courses", {}, { Authorization: jwt })
            .then(response => {
              // console.log(response);
              setEnrolledCourses(response);
              this.setState({
                prefetchedData: true,
                isAdmin: user.isAdmin,
                initialAvailableCourses: response.availableCourses,
                initialEnrolledCourses: response.enrolledCourses,
                ...response
              });
            })
            .catch((error) => {
              throw(error);
              /* TODO: Handle network error cases */
            });
        }
      } else {
        // TODO: Handle error cases
      }
    });

  };
  stopCourseSequenceEditing = () => {
  	this.getCoursesUpdated();
  	this.setState({
  		editCourseSequence: false,
  	});
  };

  render() {
    const { classes } = this.props;
    const {
      availableCourses,
      enrolledCourses,
      facilitatingCourses,
      prefetchedData,
      editCourseSequence,
      isAdmin,
      isAuthenticated
    } = this.state;
    if (!prefetchedData) {
      return (
        <div className={classes.rootLoader}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    if (editCourseSequence === true) {
      return (
        <div className={classes.root}>
          <div
            className={`${classes.rootContent} ${
              classes.courseSequenceEditRootContent
            }`}
          >
            <CourseListDragAndDropView
              headline={"Aapke courses"}
              courses={sortCoursesBySequenceNum([
                ...availableCourses,
                ...enrolledCourses
              ])}
              stopCourseSequenceEditing={() => {
                this.stopCourseSequenceEditing();
                navigateToHome();
              }}
              paddingTop
            />
          </div>
        </div>
      );
    }
    // editCourseSequence false ho toh courselist display kardo
    // agar admin hai toh edit sequence button display kardo

    return (
      <div className={classes.root}>
        <div className={classes.rootContent}>
          {isAdmin ? (
            <div>
              <Button
                variant="fab"
                color="primary"
                title="Edit Course Sequence"
                className={classes.courseEditButton}
                onClick={() => {
                  this.setState({ editCourseSequence: true });
                  navigateToEditMode();
                }}
              >
                <EditIcon />
              </Button>
            </div>
          ) : null}
          {/* Enrolled courses list  */}
          {enrolledCourses.length ? (
            <CourseListCategoryView
              headline={"Courses jis mein aap enrolled hai"}
              courses={sortCoursesBySequenceNum(enrolledCourses)}
              showProgress
            />
          ) : (
            isAuthenticated ?
            (<CourseListCategoryView
            headline={"No enrolled courses found"}
            courses={sortCoursesBySequenceNum(enrolledCourses)}
            showProgress
          />) : ""
          )}

          <Grid container spacing={0} className={classes.dividerContainer}>
            <Grid item xs={6}>
              <Divider />
            </Grid>
          </Grid>

          {/* Available courses list */}
          {availableCourses.length ? (
            <CourseListCategoryView
              headline={"Aap yeh courses mein enroll kar skte hai"}
              courses={sortCoursesBySequenceNum(availableCourses)}
              paddingTop
            />
          ) : (
            <CourseListCategoryView
              headline={"No courses Found"}
              courses={sortCoursesBySequenceNum([])}
              paddingTop
            />
          )}
        </div>
      </div>
    );

  }
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedLanguage: state.state.selectedLanguage
  }
}

export default withStyles(styles)(connect(mapStateToProps, undefined)(CourseList));
