import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

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
      [theme.breakpoints.down("xs")]: {
        float:"none",
        width:theme.spacing.unit * 28,
      },
    },
    rejectButton:{
      marginTop: theme.spacing.unit * 1.5,
      marginRight: theme.spacing.unit * 5,
      float:"left",
      [theme.breakpoints.down("xs")]: {
        float:"none",
        width:theme.spacing.unit * 28
      },
    },
    titles:{
      fontWeight:"bold"
    },
    typography:{
      display:"block",
      marginBottom:theme.spacing.unit * 3
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
    // check if user has given any feedback or not
    if(!this.hasReviewerGivenFeedback()){
      alert("Phele aap apna reason dijiye.");
      return;
    }

  const {selectedAssignment, removeCompletedAssignment} = this.props;
  const {notes} = this.state;

  //send the feedback to api
  reviewerFeedbackSubmission(notes, isApprove, selectedAssignment.id)
    .then(response => {
      // empty the textfield after it has been submitted
      this.setState({
        notes:"",
      })
      alert("Feedback dene ke liye sukhriya.")
      // remove the assignment from pending list
      removeCompletedAssignment()
    })
    .catch(error => {
      // check if the user is connected to internet
      if(!window.navigator.onLine){
        alert("Aap Internet se connect nhi ho.");
      } else {
        alert("Kuch problem ke karan apka data save nhi hua.")
      }

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
                  <img src={`${selectedAssignment.submitterProfilePicture}`} height="100" />

                  <Typography className={classes.typography}>
                    <span className={classes.titles}>
                      Submitted by:
                    </span>
                    {` ${selectedAssignment.submitterName}`}
                  </Typography>

                  <Typography className={classes.typography}>
                    <span className={classes.titles}>
                      Submitted At:
                    </span>
                    {` ${submittedAt.toDateString()}`}
                  </Typography>

                  {/*Exercise Details of submission*/}
                  <Typography className={classes.typography}>
                    <span className={classes.titles}>
                      Exercise Name:
                    </span>
                    {` ${selectedAssignment.exerciseName}`}
                  </Typography>
                  
                  <Typography className={classes.typography}>
                    <a href={`/course?id=${courseId}&slug=${exerciseSlug}`} target="_blank">
                      Link to exercise
                    </a>
                  </Typography>

                  {/*Student Solution*/}
                  <Typography>
                    <span className={classes.titles}>
                      Student ka solution:
                    </span>
                  </Typography>
                  <CardContent className={classes.submissionContent}>

                    {
                      submitterNotes.startsWith("http")?
                      <a href={submitterNotes}>{submitterNotes}</a>
                      :submitterNotes
                    }
                  </CardContent>
                    {/*// TODO: design a container for notes*/}

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
                  <br></br>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.approveButton}
                    onClick = {()=>this.submitAssignment(true)}
                    >
                    Approve Assignment
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.rejectButton}
                    onClick = {()=>this.submitAssignment(false)}
                    >
                    Dis-Approve Assignment
                  </Button>
          </CardContent>
        </Card>
    );
  }
}

AssignmentsReviewDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedAssignment: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReviewDetails);
