// Submission Details of exercises solution
import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => {
  return {
    root: {
      flexGrow: 1
    },
    content: {
      paddingTop: theme.spacing.unit * 2
    },
    submissionContent:{
      padding: theme.spacing.unit * 2,
      background:theme.palette.grey["100"],
      boxShadow:theme.shadows[2],
      marginBottom:theme.spacing.unit * 4,
      marginTop:theme.spacing.unit * 2,

    },
    feedBackContent:{
      padding: theme.spacing.unit * 2,
      background:theme.palette.grey["100"],
      boxShadow:theme.shadows[2],
      marginBottom:theme.spacing.unit * 4,
      marginTop:theme.spacing.unit * 2,
    },
    reviewerProfilePicture:{
      display:"inline",
      marginTop:theme.spacing.unit,
      float:"right"
    },
    titles:{
      fontWeight:"bold"
    },
    reviewerName:{
      fontSize:theme.spacing.unit * 2,
    }
  }
};

const CourseDetailSubmission = (props) => {
  const { submissionDetails, classes } = props;
  return (
      <Card className={classes.content}>
        <CardContent>
          <Typography variant="body2">
            <span className={classes.titles}>
              Apke phele ka Solution :
            </span>
          </Typography>
          <div className={classes.submissionContent}>
            {
              submissionDetails.submitterNotes.startsWith("http")?
              <a href={submissionDetails.submitterNotes}>
                {submissionDetails.submitterNotes}
              </a>
              :submissionDetails.submitterNotes
            }
          </div>
          {
            submissionDetails.state !== 'pending'?
            <React.Fragment>
              <img
                className={classes.reviewerProfilePicture}
                src={`${submissionDetails.reviewerProfilePicture}`}
                height="40"
                />
              <Typography>
                <span className={classes.titles}>
                  Reviewed Ka Naam:
                </span>
                <span className={classes.reviewerName}>
                  {` ${submissionDetails.submitterName}`}
                </span>
              </Typography>

              <Typography>
                <span className={classes.titles}>
                  Reviewer Ka feedback Apke liye:
                </span>
              </Typography>

              <div className={classes.feedBackContent}>
                {`${submissionDetails.notesReviewer}`}
              </div>
            </React.Fragment>
            :null
          }
        </CardContent>
      </Card>
  );
};


CourseDetailSubmission.propTypes = {
  classes: PropTypes.object.isRequired,
  submissionDetails: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseDetailSubmission);
