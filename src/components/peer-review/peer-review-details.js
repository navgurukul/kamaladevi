import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {reviewerFeedbackSubmission} from '../../services/courses';

const styles = {
  pendingReviewHeading: {
    fontWeight: "400",
    fontSize: "20px",
    marginBottom: "10px"
  },
  button: {
    marginTop: "10px",
    marginRight: "10px"
  },
  textarea: {
    display: "block",
    marginTop: "10px",
    padding: "25px"
  }
};

class PeerReviewDetails extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    reviewerFeedback: '',
  }

}

inputHandler = (e) => {
    this.setState({ reviewerFeedback : e.target.value }) 
}

validatingReviewerFeedbackField = () => {
  if (this.state.reviewerFeedback == '') {
    alert('Aap apna feedback dijiye!!!')
  }
}

submitAssignment = (isApproved) => {
this.validatingReviewerFeedbackField()
reviewerFeedbackSubmission(this.state.reviewerFeedback,value.id)
}


  render() {
    const { classes, selectedCard:value } = this.props;
    return (
          <Card key={value.id}>
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
                  label="feedback"
                  className={classes.textField}
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
                onClick ={this.validatingReviewerFeedbackField}
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
