import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginTop: "40vh",
    height: "100%"
  },
  cardGrid: {
	maxWidth: "60vh",
  margin: "auto",
  },
  image: {
    display: "inline",
    float: "left",
    width: theme.spacing.unit * 14,
    height: theme.spacing.unit * 14,
    paddingRight: theme.spacing.unit * 4,
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing.unit*4,
      width: theme.spacing.unit * 23
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit*2,
      width: theme.spacing.unit * 15
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing.unit*2,
      width: theme.spacing.unit * 16,
      height:theme.spacing.unit * 16,
      paddingLeft: theme.spacing.unit * 4,
    }

  },
  content: {
    fontSize: theme.spacing.unit *3,
    fontWeight:"400",
    paddingTop:theme.spacing.unit,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing.unit * 5,
      paddingTop:theme.spacing.unit * 2,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing.unit * 4,
      paddingTop:theme.spacing.unit * 2,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing.unit * 2.5,
      paddingTop:theme.spacing.unit  *2,
    }
  },
  boldContent: {
    fontWeight: "bold"
  },
  showLoader: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
  },
  progress: {
		margin: theme.spacing.unit * 1,
	},
});

// TODO:  Need to edit this page
const AssignmentsReviewCompleted = props => {
  const { classes,showLoader } = props;

  if (showLoader === true) {
    return (
      <div className={classes.showLoader}>
        <CircularProgress className={classes.progress} size={50} />
      </div>);
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.cardGrid} container>
        <img src="static/icons/peer-review.png" className={classes.image} />
        <Typography className={classes.content}>
          <span className={classes.boldContent}>No</span><br />
          peer review requests <br /> right now.
        </Typography>
      </Grid>
    </div>
  );
};

AssignmentsReviewCompleted.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReviewCompleted);
