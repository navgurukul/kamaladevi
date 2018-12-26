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


import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CheckIcon from "@material-ui/icons/Check";

import { withStyles } from "@material-ui/core/styles";

import {
	       getSlugOfPreviousCourse,
				 getSlugOfNextCourse,
				 getExerciseDetailFromSlug,
				 getExerciseIdFromSlug,
			 } from '../services/utils';

import {
					fetchApi,
          submitExerciseAPI,
          getExerciseSubmissionAPI,
        } from '../services/api';

import CourseDetailSideNav from './course-detail-sidenav';
import CourseDetailSubmission from './course-detail-submission';

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
      float: "right",
      color:"white",
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
    progress: {
      margin: theme.spacing.unit * 2
    },
    loaderRoot: {
      textAlign: "center",
      paddingTop: theme.spacing.unit * 20
    },
    editLink: {
      float: "right",
      clear:"right",
      marginTop:theme.spacing.unit,
      marginBottom:theme.spacing.unit,
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
	// debugger;
  Router.push({
    pathname: "/course",
    query: { id, slug }
  });
};

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
			// console.log('updating props', props);

    this.state = {
      prefetchedData: false,
      content: "",
      notes: "",
      previousNotesData: "",
      selectedExercise:{},
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
    const { submissionType, id: exerciseId } = getExerciseDetailFromSlug(slug,exercises);

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
			submitExerciseAPI(id, exerciseId, notes);
			this.loadExercise();
	}
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
		// let response, previousNotesData;
		// const { id:courseId, slug, exercises } = this.props;
		// const { id:exerciseId } = getExerciseDetailFromSlug(slug, exercises);
		// try {
		// 	response = await getExerciseFromSlugAPI(courseId, slug);
		// 	// response =  await authenticatedFetchAPI(`/courses/${courseId}/exercise/getBySlug`, {slug})
		// 	previousNotesData = await getExerciseSubmissionAPI(courseId , exerciseId);
		// } catch (e) {
		// 	// TODO: Handle network error cases
		// 	console.error(e);
		// 	return;
		// }
		//
		// // get the exerciseId for the exercise
		// const content = response.content.replace(/```ngMeta[\s\S]*?```/, '');
		//
		// this.setState(prevState => ({
    //   content,
    //   prefetchedData: true,
    //   notes: "",
    //   previousNotesData: previousNotesData.data,
    //   selectedExercise:response
    // }));

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
		const { id:courseId, slug, exercises } = this.props;
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
    const previousNotesData = await getExerciseSubmissionAPI(courseId, exerciseId);
    const content = response.content.replace(/```ngMeta[\s\S]*?```/, "");
		console.log(slug)
    this.setState({
      content,
      prefetchedData: true,
      notes: "",
      previousNotesData: previousNotesData.data,
      selectedExercise:response
    });

  }


  render() {
		// console.log(this.state)
		// console.log(this.props)
    const { classes, exercises, id, slug } = this.props;
    const {
      reviewType,
      submissionType,
      githubLink
    } = getExerciseDetailFromSlug(slug, exercises);

    const reviewrs = ["peer", "facilitator", "automatic"];

    const {
      prefetchedData,
      content,
      previousNotesData,
      selectedExercise
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
                variant="fab"
                color="secondary"
                className={classes.submitExercise}
                onClick={this.submitExercise}
              >
                <CheckIcon />
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
            selectedExercise={selectedExercise}
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
