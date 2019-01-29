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
    marginTop: "30vh",
    height: "100%"
  },
  cardGrid: {
	maxWidth: "80vh",
	margin: "auto"
  },
  image: {
    display: "inline",
    float: "left",
    paddingRight: theme.spacing.unit * 6,
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing.unit*4,
      width: "180px"
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit*2,
      width: "120px"
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing.unit*2,
      width: "60"
    }

  },
  content: {
    fontSize: "26px",
    fontWeight:"400",
    [theme.breakpoints.down("md")]: {
      fontSize: "40px"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
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
      <Grid className={classes.cardGrid}>
        <img src="static/icons/peer-review.png" className={classes.image} />
        <Typography className={classes.content}>
          Aapke pass aur koi assignment nhi aye hai abhi review karne ke liye
          aap apni padhai continue karsakte hai.
        </Typography>
      </Grid>
    </div>
  );
};

AssignmentsReviewCompleted.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReviewCompleted);
