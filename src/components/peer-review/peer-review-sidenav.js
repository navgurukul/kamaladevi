import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  cardText: {
    float: "left",
    paddingRight: "18px"
  },
  studentName: {
    marginTop: "20px"
  },
  blocks: {
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    width: theme.spacing.unit * 25,
    minHeight: theme.spacing.unit * 15,
    [theme.breakpoints.down('sm')]: {
			height: theme.spacing.unit * 30
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
    const { classes, assigments, updatedSelectedCard } = this.props;
    return (
      <React.Fragment>
        {assigments.map((value) => (
          <Card 
            className={classes.blocks} 
            onClick={() => updatedSelectedCard(value)} 
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
