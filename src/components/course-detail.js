// Course list
import React from "react";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import localforage from "localforage";
import ReactUtterences from "react-utterances";


import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import { withStyles } from "@material-ui/core/styles";

import { fetchApi } from "../services/api";

import {
  getSlugOfPreviousCourse,
  getSlugOfNextCourse,
  exerciseSubmission,
  getExerciseSubmission,
  getExerciseDetailFromSlug
} from "../services/courses";
import CourseDetailSubmission from "./course-detail-submission";

import { getExerciseIdFromSlug } from "../services/courses";

import CourseDetailSideNav from "./course-detail-sidenav";


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
        margin: "0 auto"
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
      float: "right"
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
      paddingTop: theme.spacing.unit * 3
    },
    submitBox: {
      marginTop: theme.spacing.unit * 2
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
      marginTop: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit
    },
    navigationBtnDiv: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingTop: theme.spacing.unit * 1,
      marginBottom: "10%"
    }
  };
};

const navigateToExercise = id => slug => {
  Router.push({
    pathname: "/course",
    query: { id, slug }
  });
};

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prefetchedData: false,
      content: "",
      notes: "",
      previousNotesData: ""
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

  isSubmissionTypeValid = (submissionType, notes) => {
    if (submissionType == "number") {
      return !isNaN(notes);
    } else if (submissionType == "text") {
      return notes.length <= 100;
    } else if (submissionType == "text_large") {
      return notes.length <= 1500;
    } else if (submissionType == "url") {
      if (!notes.startsWith("http")){
        return false
      } else {
        return notes.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null;
      }
    }
    return true;
  };
  // submit the exercise notes
  submitExercise = event => {
    const { notes } = this.state;
    const { id, exercises, slug } = this.props;
    const { submissionType, id: exerciseId } = getExerciseDetailFromSlug(
      slug,
      exercises
    );

    // here should be the validation
    if (!this.isSubmissionTypeValid(submissionType, notes)) {
      // TODO: something to alert user
      let message;
      if (submissionType == "number") {
        message = `App nich ek integer value hi dal sakte hai.`;
      } else if (submissionType == "text") {
        message = `App niche 100 se jada character nhi dal sakte hai.`;
      } else if (submissionType == "text_large") {
        message = `App niche 1500 se jada character nhi dal sakte hai.`;
      } else if (submissionType == "url") {
          message =  (!notes.startsWith("http"))?
                  `Link ke aage http:// yea https:// hona chaiye.`
                  : `Apko niche ek url ka link dalna hai.`;
      }
      alert(message);
      return;
    }
    exerciseSubmission(id, exerciseId, notes);
    this.loadExercise();
  };

  // handle the text in the input
  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
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
    const { id, slug, exercises } = this.props;
    const { jwt } = value;
    try {
      response = await fetchApi(
        `/courses/${id}/exercise/getBySlug`,
        { slug },
        { Authorization: jwt }
      );
    } catch (e) {
      // TODO: Handle network error cases
      return;
    }
    // gettuing exersise notes
    const query = {
      submissionUsers: "current",
      submissionState: "all"
    };

    // get the exerciseId for the exercise
    const { id: exerciseId } = getExerciseDetailFromSlug(slug, exercises);
    const previousNotesData = await getExerciseSubmission(id, exerciseId);
    const content = response.data.content.replace(/```ngMeta[\s\S]*?```/, "");

    this.setState({
      content,
      prefetchedData: true,
      notes: "",
      previousNotesData: previousNotesData
    });
  }

  render() {
    // const
    const { classes, exercises, id, slug } = this.props;

    const {
      reviewType,
      submissionType,
      githubLink
    } = getExerciseDetailFromSlug(slug, exercises);
    const reviewrs = ["peer", "facilitator", "automatic"];

    const { prefetchedData, content, previousNotesData } = this.state;
    console.log(previousNotesData);
    if (!prefetchedData) {
      return (
        <div className={classes.loaderRoot}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }
    const previousSlug = getSlugOfPreviousCourse(slug, exercises);
    const nextSlug = getSlugOfNextCourse(slug, exercises);

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
          {/*previously submitted notes*/}
          {
            previousNotesData[0] ?
            <CourseDetailSubmission submissionDetails={previousNotesData[0]} />
           : null
          }
          {/*submission form*/}
          {
            // TODO: Input box should be generated based on submissionType
          }
          {reviewrs.includes(reviewType) && submissionType != null ? (
            <form autoComplete="off">
              <TextField
                multiline={true}
                fullWidth
                value={this.state.notes}
                label={"Exercise Submission"}
                onChange={this.handleChange}
                name="notes"
              />
              <br />
              <br />
              <Button
                variant="raised"
                color="secondary"
                className={classes.submitExercise}
                onClick={this.submitExercise}
              >
                Submit Exercise
              </Button>
            </form>
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
                variant="raised"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(previousSlug);
                }}
              >
                Previous
              </Button>
            ) : null}
            {nextSlug ? (
              <Button
                className={classes.floatButtonRight}
                variant="raised"
                color="primary"
                onClick={() => {
                  navigateToExercise(id)(nextSlug);
                }}
              >
                Next
              </Button>
            ) : null}
          </div>
          <ReactUtterences
            className={classes.utterances}
            repo={"navgurukul/newton"}
            type={"title"}
          />
        </Grid>
        <Grid item xs={4} className={classes.sidebar}>
          <CourseDetailSideNav
            exercises={exercises}
            loadExercise={navigateToExercise(id)}
            slug={slug}
          />
        </Grid>
      </Grid>
    );
  }
}

CourseDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default withStyles(styles)(CourseDetail);
