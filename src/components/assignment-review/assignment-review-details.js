import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

import {reviewerFeedbackSubmission} from '../../services/courses';

const styles = theme => ({
  root:{
    marginLeft: theme.spacing.unit*2,
    minWidth:'70vw', // // TODO: Test is it responsive?
    height:'90vh'
  },
  pendingReviewHeading: {
    fontWeight: "400",
    fontSize: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1.5
  },
  button: {
    marginTop: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 1.5
  },
});

class AssignmentsReviewDetails extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    notes: '',
  }
}

inputHandler = (e) => {
    this.setState({ notes : e.target.value })
}

hasReviewerGivenFeedback = () => {
  if (this.state.notes === '') {
    return false
  } else {
    return true
  }
}

submitAssignment = (isApprove) => {
  // agar feedback me kuch data ha toh hi submit ho
  // warna alert dikha do aur kuch bi submit maat karo
  if(!this.hasReviewerGivenFeedback()){
    alert('Phele aap apna feedback dijiye!!!');
    return;
  }

  const {selectedAssignment, removeCompletedAssignment} = this.props;
  const {notes} = this.state;
  // id, notes, isApproved
  reviewerFeedbackSubmission(notes, isApprove, selectedAssignment.id)
    .then(response => {
      this.setState({
        notes:'',
      })
      alert('Feedback dene ke liye sukhriya.')
      removeCompletedAssignment()
    })
    .catch(error => {
      if(!window.navigator.onLine){
        alert('Aap Internet se connect nhi ho.');
      } else {
        alert('Kuch problem ke karan apka data save nhi hua.')
      }

      console.log(error)
    })
  }

  render() {
    const { classes, selectedAssignment } = this.props;
    // Need to improve the UI
    return (
          <Card className={classes.root}>
            <CardContent>
                  {/*
                    Link to exercise
                    Submitter pic and Name
                  */}

                  <Typography className={classes.pendingReviewHeading}>
                    {selectedAssignment.exerciseName}
                  </Typography>
                  <Typography className={classes.pendingReviewHeading}>
                    Assignments ko approve kare:
                  </Typography>
                  <Typography className={classes.pendingReviewHeading}>
                    Peer ke Notes:
                  </Typography>
                  <Typography className={classes.pendingReviewHeading}>
                    {selectedAssignment.submitterNotes}
                  </Typography>
                  <Typography>
                    Apna accept ya reject karne ka reason neeche diye gaye text box
                    mein likhe
                  </Typography>
                  <TextField
                    id="outlined-email-input"
                    fullWidth
                    type="text"
                    name="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.notes}
                    onChange={this.inputHandler}
                    />
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick = {()=>this.submitAssignment(true)}
                    >
                    Approve Assignment
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick = {()=>this.submitAssignment(false)}
                    >
                    Reject Assignment
                  </Button>
          </CardContent>
        </Card>
    );
  }
}

AssignmentsReviewDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReviewDetails);
