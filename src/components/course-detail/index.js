// Course list
import React from "react";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import localforage from "localforage";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import { withStyles } from "@material-ui/core/styles";

import {
  getSlugOfPreviousCourse,
  getSlugOfNextCourse,
  getExerciseDetailFromSlug,
  getExerciseIdFromSlug
} from "../../services/utils";

import {
  fetchApi,
  submitExerciseAPI,
  getExerciseSubmissionAPI
} from "../../services/api";

import CourseDetailSideNav from "./course-detail-sidenav";
import CourseDetailSubmission from "./course-detail-submission";
import Utterances from "./utterances";

var blockEmbedPlugin = require("markdown-it-block-embed");

// Parse markdown content
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})
  .enable(["link"])
  .enable("image")
  .use(require("markdown-it-highlightjs"));

md.use(blockEmbedPlugin, {
  containerClassName: "video-embed"
});

const styles = theme => {
  return {
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: "10%",
      paddingRight: "10%",
      [theme.breakpoints.between("sm", "md")]: {
        paddingLeft: "5%",
        paddingRight: "5%"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
      },
      "& img": {
        maxWidth: "100%",
        display: "block",
        // margin: "0 auto"
      },
      "& iframe": {
        width: "100%"
      }
    },
    utterances: {
      width: "100%"
    },
    floatButtonRight: {
      marginLeft: "auto"
    },
    submitExercise: {
      float: "right",
      color: "white"
    },
    sidebar: {
      paddingLeft: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 1,
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    mainItem: {
      paddingRight: theme.spacing.unit
    },
    content: {
      padding: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 3,
      fontFamily: "Ubuntu"
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    loaderRoot: {
      textAlign: "center",
      paddingTop: theme.spacing.unit * 20
    },
    editLink: {
      float: "right",
      clear: "right",
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    navigationBtnDiv: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingTop: theme.spacing.unit * 1,
      marginBottom: "10%"
    },
    solution: {
      display: "flex"
    },
    solutionIcon: {
      marginLeft: "auto !important",
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    },
    solutionButtonYes: {
      textDecoration: 'none '
    }
  };
};

const navigateToExercise = id => slug => {
  Router.push({
    pathname: "/course",
    query: { id, slug }
  });
};

// console.log(navigateToExercise)

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log('updating props', props);

    this.state = {
      prefetchedData: false,
      content: "",
      prevSolutionDetail: "",
      selectedExercise: {},
      open: false,
      ifSolution:false,
      exerciseId:0
    };
    this.courseDetail = React.createRef();
    this.loadExercise = this.loadExercise.bind(this);
  }

  updateLinks = htmlFromServer => {
    let courseDetail = new DOMParser().parseFromString(
      htmlFromServer,
      "text/html"
    );
    const anchorList = courseDetail.querySelectorAll("a");
    // setting links inside courseDetail to be open in new tab
    anchorList.forEach(anchor => {
      if (anchor.innerText === "Saral") {
        return false;
      } else {
        anchor.setAttribute("target", "_blank");
      }
    });
    return courseDetail.body.innerHTML;
  };

  componentDidMount() {
    this.loadExercise();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.slug !== this.props.slug) {
      this.loadExercise();
    }
    return true;
  }

  async loadExercise() {
    // get the exerciseId for the exercise
    let value, response;
    try {
      value = await localforage.getItem("authResponse");
      if (!value) {
        // No access tokens saved
        Router.replace("/");
        return;
      }
    } catch (e) {
      // TODO: Handle localforage error cases
      return;
    }
    const { id: courseId, slug, exercises } = this.props;
    const { jwt } = value;
    try {
      response = await fetchApi(
        `/courses/${courseId}/exercise/getBySlug`,
        { slug },
        { Authorization: jwt }
      );
    } catch (e) {
      // TODO: Handle network error cases

      return;
    }
    const { id: exerciseId } = getExerciseDetailFromSlug(slug, exercises);
    const prevSolutionDetail = await getExerciseSubmissionAPI(
      courseId,
      exerciseId
    );


    const content = response.content.replace(/```ngMeta[\s\S]*?```/, "");
    const uniqueId = response.id
    const ifSolution = response.ifSolution;

    this.setState({
      exerciseId: uniqueId,
      content,
      ifSolution,
      prefetchedData: true,
      notes: "",
      prevSolutionDetail: prevSolutionDetail.data,
      selectedExercise: response
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      exercises,
      id,
      slug,
      updateExercises,
      fullScreen
    } = this.props;
    const {
      reviewType,
      submissionType,
      githubLink
    } = getExerciseDetailFromSlug(slug, exercises);

    const reviewrs = ["peer", "facilitator", "automatic"];

    const {
      prefetchedData,
      content,
      prevSolutionDetail,
      selectedExercise,
      ifSolution,
      exerciseId
    } = this.state;

    if (!prefetchedData) {
      return (
        <div className={classes.loaderRoot}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }
    const previousSlug = getSlugOfPreviousCourse(slug, exercises);
    const nextSlug = getSlugOfNextCourse(slug, exercises);
    const marginLeft = "auto";

    // console.log(exerciseId)

    if(ifSolution === true) {
     return(
       <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={8} className={classes.content}>
          <Card className={classes.content}>
            {/* eslint-disable-next-line react/no-danger */}
            <div
              id="course"
              dangerouslySetInnerHTML={{
                __html: this.updateLinks(md.render(content))
              }}
            />
            <div className={classes.solution}>
              <img
                src="static/icons/solution-icon.png"
                className={classes.solutionIcon}
              />
              <Button
                // className={classes.solutionButton}
                onClick={this.handleClickOpen}
                variant="contained" color="primary"
              >
                solution
              </Button>
              <Dialog
                fullScreen={fullScreen}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {
                    " Agar aap solution dekhna chahte ho to 'Yes' button par click kare warna 'No' button pr click kare "
                  }
                </DialogTitle>

                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    NO
                  </Button>
                  <a
                    href={`/solution?id=${exerciseId}`}
                    target="_blank"
                    className={classes.solutionButtonYes}
                  >
                    <Button color="primary" onClick={this.handleClose} autoFocus >
                      Yes
                    </Button>
                  </a>
                </DialogActions>
              </Dialog>
            </div>
          </Card>
          <br />

          {reviewrs.includes(reviewType) && submissionType != null ? (
            <CourseDetailSubmission
              prevSolutionDetail={prevSolutionDetail[0]}
              exercises={exercises}
              courseId={id}
              slug={slug}
              loadExercise={this.loadExercise}
              updateExercises={updateExercises}
            />
          ) : null}

          {/*link to github page*/}
          <div className={classes.editLink}>
            <a href={githubLink} target="_blank">
              Edit
            </a>{" "}
            on GitHub
          </div>

          <div className={classes.navigationBtnDiv}>
            {previousSlug ? (
              <Button
                variant="fab"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(previousSlug);
                }}
              >
                <NavigateBeforeIcon />
              </Button>
            ) : null}
            {nextSlug ? (
              <Button
                className={classes.floatButtonRight}
                variant="fab"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(nextSlug);
                }}
              >
                <NavigateNextIcon />
              </Button>
            ) : null}
          </div>
          <Utterances slug={slug} />
        </Grid>
        <Grid item xs={4} className={classes.sidebar}>
          <CourseDetailSideNav
            exercises={exercises}
            loadExercise={navigateToExercise(id)}
            slug={slug}
            selectedExercise={selectedExercise}
          />
        </Grid>
      </Grid>
     )
    }else {
       return (
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} md={8} className={classes.content}>
          <Card className={classes.content}>
            {/* eslint-disable-next-line react/no-danger */}
            <div
              id="course"
              dangerouslySetInnerHTML={{
                __html: this.updateLinks(md.render(content))
              }}
            />
          </Card>
          <br />

          {reviewrs.includes(reviewType) && submissionType != null ? (
            <CourseDetailSubmission
              prevSolutionDetail={prevSolutionDetail[0]}
              exercises={exercises}
              courseId={id}
              slug={slug}
              loadExercise={this.loadExercise}
              updateExercises={updateExercises}
            />
          ) : null}

          {/*link to github page*/}
          <div className={classes.editLink}>
            <a href={githubLink} target="_blank">
              Edit
            </a>{" "}
            on GitHub
          </div>

          <div className={classes.navigationBtnDiv}>
            {previousSlug ? (
              <Button
                variant="fab"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(previousSlug);
                }}
              >
                <NavigateBeforeIcon />
              </Button>
            ) : null}
            {nextSlug ? (
              <Button
                className={classes.floatButtonRight}
                variant="fab"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(nextSlug);
                }}
              >
                <NavigateNextIcon />
              </Button>
            ) : null}
          </div>
          <Utterances slug={slug} />
        </Grid>
        <Grid item xs={4} className={classes.sidebar}>
          <CourseDetailSideNav
            exercises={exercises}
            loadExercise={navigateToExercise(id)}
            slug={slug}
            selectedExercise={selectedExercise}
          />
        </Grid>
      </Grid>
    );

    }
  }
}

CourseDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  updateExercises: PropTypes.func.isRequired
};

export default withStyles(styles)(CourseDetail);
