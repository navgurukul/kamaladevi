import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root:{
    flexGrow:1,
  },
  assignmentLogo:{
    height:theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 2.5 ,
    left:"50%",
    right:"50%",
  },
  studentName: {
    marginBottom: theme.spacing.unit*2,
  },
  assignmentsCards: {
    background:theme.palette.grey["50"],
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2.5,
    width: "100%",
    maxWidth:theme.spacing.unit * 33,
    minHeight: theme.spacing.unit * 15,
    boxShadow: theme.shadows[4],
    "&:hover":{
      cursor:"pointer",
      background: theme.palette.grey["200"]
    }
  },
  selectedAssignment:{
    background:theme.palette.grey["300"]
  }

});

const AssignmentsReviewSidenav = (props) => {
    const {
      classes,
      assignments,
      showSelectedAssignment,
      selectedAssignment,
    } = props;
    return (
      <div className={classes.root }>
        {
          assignments.map((assignment) => {
            const submittedAt = new Date(assignment.submittedAt).toDateString();

            return (
              <Card
                className={
                  assignment === selectedAssignment?
                  `${classes.assignmentsCards} ${classes.selectedAssignment}`
                  :classes.assignmentsCards
                }
                onClick={() => showSelectedAssignment(assignment)}
                key={assignment.id}
              >
                <CardContent>
                  <Grid container>
                    <Grid item sm={3}>
                      <img
                        className={classes.assignmentLogo}
                        src="/static/icons/assignment-logo.png"
                        height="40"
                      />
                    </Grid>
                    <Grid item sm={9}>
                      <Typography className={classes.studentName}>
                        {assignment.submitterName}
                      </Typography>
                      <Typography>
                        Exercise: {assignment.exerciseName}
                      </Typography>
                      <Typography>{submittedAt}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          }
        )
      }
    </div>
    );
  }


AssignmentsReviewSidenav.propTypes = {
  classes: PropTypes.object.isRequired,
  assignments: PropTypes.array.isRequired,
  showSelectedAssignment: PropTypes.func.isRequired,
  selectedAssignment: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignmentsReviewSidenav);
