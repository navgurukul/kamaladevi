import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

import {reviewerFeedbackSubmission} from "../../services/courses";

const styles = theme => {
  return ({
    root:{
      flexGrow:1,
      marginLeft: theme.spacing.unit ,
      height:"100%",
      overFlow:"scroll",
      marginBottom: theme.spacing.unit * 3,
      width:"75vw",
      [theme.breakpoints.down('md')]:{
        width: "65vw"
      },
      [theme.breakpoints.down('sm')]:{
        width: "90vw"
      },
      [theme.breakpoints.down('xs')]:{
        width: "80vw",
      }
    },
    submissionContent:{
      background:theme.palette.grey['100'],
      boxShadow:theme.shadows[2],
      marginBottom:theme.spacing.unit * 4,
      marginTop:theme.spacing.unit * 2,

    },
    pendingReviewHeading: {
      fontWeight: "400",
      fontSize: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 1.5
    },
    approveButton:{
      marginTop: theme.spacing.unit * 1.5,
      float:"right",
    },
    rejectButton:{
      marginTop: theme.spacing.unit * 1.5,
      marginRight: theme.spacing.unit,
      float:"right",
      background:theme.palette.error.main,
      "&:hover":{
        backgroundColor:theme.palette.error.dark,
      },
      "&:select":{
        backgroundColor:theme.palette.error.dark,
      }
    },
    titles:{
      fontWeight:"bold",
    },
    typography:{
      display:"block",
      marginBottom:theme.spacing.unit * 3,
      marginTop:theme.spacing.unit,
    },
    profilePicture:{
      display:"inline-block"
    }
  })
}

class AssignmentsReviewDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: "",
    }
  }

  // helps to get the notes from the form to state
  inputHandler = (e) => {
      this.setState({ notes : e.target.value })
  }

  // validate if there is any feedback given by user
  // when he click approveOrDisApprove
  hasReviewerGivenFeedback = () => {
    if (this.state.notes === "") {
      return false
    } else {
      return true
    }
  }

  // submit the user feedback to api
  submitAssignment = (isApprove) => {
    const {
      selectedAssignment,
      removeCompletedAssignment,
      showNotification
    } = this.props;
    let message;
    // check if user has given any feedback or not
    if(!this.hasReviewerGivenFeedback()){
      message = "Phele aap apna reason dijiye.";
      showNotification(message, "warning");
      return;
    }

    const {notes} = this.state;

    //send the feedback to api
    reviewerFeedbackSubmission(notes, isApprove, selectedAssignment.id)
      .then(response => {
        console.log(response);
        // empty the textfield after it has been submitted
        this.setState({
          notes:"",
        });
        message = "Feedback dene ke liye sukhriya.";
        showNotification(message, "success");
        // remove the assignment from pending list
        removeCompletedAssignment()
      })
      .catch(error => {
        console.error(error);
        // check if the user is connected to internet
        if(!window.navigator.onLine){
          message = "Aap Internet se connect nhi ho.";
        } else {
          message = "Kuch problem ke karan apka data save nhi hua.";
        }
        showNotification(message, "error")
        console.log(error)
      })
  }

  render() {
    const { classes, selectedAssignment } = this.props;
    const {notes} = this.state;
    const { courseId, exerciseSlug } = selectedAssignment;
    // Need to improve the UI
    const submittedAt = new Date(selectedAssignment.submittedAt);
    const submitterNotes = selectedAssignment.submitterNotes;
    return (
          <Card className={classes.root}>
            <CardContent>
                  {/* Submitter Details */}
                  <Grid container>
                    <Grid item xs={3} sm={2} md={1} >
                      <img
                        src={`${selectedAssignment.submitterProfilePicture}`}
                        height="50"
                        className={classes.profilePicture}
                        />
                    </Grid>
                    <Grid item xs={9} sm={10} md={11}>
                      <span className={classes.titles}>
                        Submitted by:
                      </span>
                      {` ${selectedAssignment.submitterName}`}
                      <br />
                      <span className={classes.titles}>
                        Submitted At:
                      </span>
                      {` ${submittedAt.toDateString()}`}
                    </Grid>
                  </Grid>

                  {/*Exercise Details of submission*/}
                  <Typography className={classes.typography}>
                    <span className={classes.titles}>
                      Exercise Name:
                    </span>
                    {` ${selectedAssignment.exerciseName} `}
                    <a href={`/course?id=${courseId}&slug=${exerciseSlug}`} target="_blank">
                      (Link)
                    </a>
                    <br />
                    <span className={classes.titles}>
                      Student ka solution:
                    </span>
                  </Typography>
                  {/*Student Solution*/}
                  <CardContent className={classes.submissionContent}>

                    {
                      submitterNotes.startsWith("http")?
                      <a href={submitterNotes}>{submitterNotes}</a>
                      :submitterNotes
                    }
                  </CardContent>

                  {/*Reviewer feedback form*/}
                  <Typography>
                    <span className={classes.titles}>
                      Apna accept ya reject karne ka reason neeche diye gaye text box
                      mein likhe:
                    </span>
                  </Typography>
                  <TextField
                    multiline
                    fullWidth
                    label="Apka reason yahan likhe:"
                    rowsMax="10"
                    margin="normal"
                    variant="outlined"
                    value={notes}
                    onChange={this.inputHandler}
                  />
                  <Button
                    variant="fab"
                    color="secondary"
                    className={classes.approveButton}
                    onClick = {()=>this.submitAssignment(true)}
                    >
                    <CheckIcon />
                  </Button>
                  <Button
                    variant="fab"
                    className={classes.rejectButton}
                    onClick = {()=>this.submitAssignment(false)}
                    >
                    <CloseIcon />
                  </Button>
          </CardContent>
        </Card>
    );
  }
}

AssignmentsReviewDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedAssignment: PropTypes.object.isRequired,
  handleShowNotification:PropTypes.func,
};

export default withStyles(styles)(AssignmentsReviewDetails);
