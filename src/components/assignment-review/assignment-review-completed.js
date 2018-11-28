import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		display:"flex",
		flexGrow: 1,
		justifyContent:"center",
		marginTop:"40vh",
		alignItems:"center",
		height:"100%"
	},

});
// TODO:  Need to edit this page
const AssignmentsReviewCompleted = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			Aapke pass aur koi assignment nhi aye hai abhi review karne ke liye<br/>
			aap apni padhai continue karsakte ha.	
		</div>
	);
}

AssignmentsReviewCompleted.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AssignmentsReviewCompleted);
