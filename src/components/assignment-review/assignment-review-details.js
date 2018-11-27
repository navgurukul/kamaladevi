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

inputHandler = (e) => {
    this.setState({ notes : e.target.value })
}

hasReviewerGivenFeedback = () => {
  if (this.state.notes === "") {
    return false
  } else {
    return true
  }
}

submitAssignment = (isApprove) => {
  // agar feedback me kuch data ha toh hi submit ho
  // warna alert dikha do aur kuch bi submit maat karo
  if(!this.hasReviewerGivenFeedback()){
    alert("Phele aap apna reason dijiye.");
    return;
  }

  const {selectedAssignment, removeCompletedAssignment} = this.props;
  const {notes} = this.state;
  // id, notes, isApproved
  reviewerFeedbackSubmission(notes, isApprove, selectedAssignment.id)
    .then(response => {
      this.setState({
        notes:"",
      })
      alert("Feedback dene ke liye sukhriya.")
      removeCompletedAssignment()
    })
    .catch(error => {
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
                  {/*
                    Link to exercise
                    Submitter pic and Name
                  */}
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
