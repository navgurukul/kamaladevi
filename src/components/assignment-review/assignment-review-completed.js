import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
	root: {
		display:"flex",
		flexGrow: 1,
		marginTop:"40vh",
		height:"100%",
		maxWidth: "96vh",
		margin: "auto",
	},
	changeGrid:{
		maxWidth:"200vh",
		flexGrow: 1, 
	},
	image: {
		display: "inline",
		float: "left",
		paddingRight: 48,
		paddingTop: theme.spacing.unit * 2.5,
		[theme.breakpoints.down("sm")]: {
			paddingRight: 22,
    		width: "108",
		},
		[theme.breakpoints.down("md")]: {
			paddingRight: 30,
    		width: "160px",
		},
		[theme.breakpoints.down("xs")]: {
			paddingRight: 22,
    		width: "88px",
		},
	},
	content: {
		fontSize: "36px",
		fontFamily: "monospace",
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "34px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "20px",
		},
	},
	progress: {
		margin: theme.spacing.unit * 1,
	},
	rootLoader: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
});

// TODO:  Need to edit this page
const AssignmentsReviewCompleted = (props) => {
	const { classes,showLoader } = props;
	if (showLoader === true) {
		return (
			<div className={classes.rootLoader}>
				<CircularProgress className={classes.progress} size={50} />
			</div>);
	}
	return (	
		<div className={classes.root}>	
			<Grid className={classes.changeGrid} item xs={2} sm md>
				<img className={classes.image} src="static/icons/peerReviewImg_files/noPeerReviewImage.png"/>
				<p className={classes.content}>
					Aapimageke pass aur koi assignment nhi aye hai abhi review karne ke liye
					aap apni padhai continue karsakte ha.
				</p>
			</Grid>
		</div>
	);
}

AssignmentsReviewCompleted.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignmentsReviewCompleted);