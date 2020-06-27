import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		marginTop: '40vh',
		height: '100%',
	},
	cardGrid: {
		width: theme.spacing.unit * 44,
		margin: '0 auto',
		[theme.breakpoints.down('xs')]: {
			width: theme.spacing.unit * 24,
		},
	},
	image: {
		display: 'inline',
		float: 'left',
		height: theme.spacing.unit * 14,
		paddingRight: theme.spacing.unit * 4,
		[theme.breakpoints.down('xs')]: {
			paddingRight: theme.spacing.unit * 2,
			height: theme.spacing.unit * 12,
			float: 'none',
			marginLeft: theme.spacing.unit * 6,
		},

	},
	content: {
		fontSize: theme.spacing.unit * 3,
		fontWeight: '400',
		paddingTop: theme.spacing.unit,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.spacing.unit * 2.5,
			paddingTop: theme.spacing.unit * 2,
		},
	},
	boldContent: {
		fontWeight: 'bold',
	},
	showLoader: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		marginTop: '46vh',
	},
	progress: {
		margin: theme.spacing.unit * 1,
	},
});

// TODO:  Need to edit this page
const AssignmentsReviewCompleted = (props) => {
	const { classes, showLoader } = props;

	if (showLoader === true) {
		return (
			<div className={classes.showLoader}>
				<CircularProgress className={classes.progress} size={50} />
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<Grid className={classes.cardGrid}>
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
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignmentsReviewCompleted);
