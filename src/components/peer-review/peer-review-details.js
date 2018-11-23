import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {reviewerFeedbackSubmission} from '../../services/courses';

const styles = theme => ({
  root:{
    // marginTop:theme.spacing.unit*5,
    width:'80vw',
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

class PeerReviewDetails extends React.Component {
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
    alert('Aap apna feedback dijiye!!!'); 
    return; 
  }
  
  const submissionId = this.props.selectedCard.id;
  const {notes} = this.state;
  // id, notes, isApproved
  reviewerFeedbackSubmission(notes, isApprove, submissionId)
    .then(response => {
      console.log(response)
      this.setState({
        notes:notes,
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  //api call hone ke baad kya hona chaiye


  render() {
    const { classes, selectedCard:value } = this.props;
    return (
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.pendingReviewHeading}>
                {value.exerciseName}
              </Typography>
              <Typography className={classes.pendingReviewHeading}>
                assignments ko approve karo
              </Typography>
              <Typography className={classes.pendingReviewHeading}>
                Notes
              </Typography>
              <Typography className={classes.pendingReviewHeading}>
                {value.submitterNotes}
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

PeerReviewDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeerReviewDetails);
