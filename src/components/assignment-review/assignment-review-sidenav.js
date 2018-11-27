import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  cardText: {
    float: "left",
    paddingRight: theme.spacing.unit * 2.5
  },
  studentName: {
    marginTop: theme.spacing.unit * 3
  },
  blocks: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    width: "100%",
    maxWidth:theme.spacing.unit * 35,
    minHeight: theme.spacing.unit * 15,
    [theme.breakpoints.down('sm')]: {
			height: theme.spacing.unit * 15
		},
  }
});

class AssignmentsReviewSidenav extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }


  render() {
    // Need to improve cards
    const { classes, assignments, showSelectedAssignment } = this.props;
    return (
      <React.Fragment>
        {assignments.map((value) => (
          <Card
            className={classes.blocks}
            onClick={() => showSelectedAssignment(value)}
            key={value.id}
            >
            <CardContent>
              <Typography className={classes.cardText}>
                {value.exerciseName}
              </Typography>
              <Typography>{value.submittedAt}</Typography>
              <Typography className={classes.studentName}>
                {value.submitterName}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </React.Fragment>
    );
  }
}

AssignmentsReviewSidenav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReviewSidenav);
