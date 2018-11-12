import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

function PeerReviewDetails(props) {
    const { classes } = props;
    return (
      <React.Fragment>
      {props.peer.map((value,key)=>(
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
            Apna accept ya reject karne ka reason neeche diye gaye text box mein
            likhe
          </Typography>
          <textarea className={classes.textarea} />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Approve Assignment
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Dis-Approve Assignment
          </Button>
        </CardContent>
      </Card>
       ))}
      </React.Fragment>
    );
}

PeerReviewDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeerReviewDetails);
