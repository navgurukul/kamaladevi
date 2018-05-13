import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	paper: {
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
});


const LandingPage = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper style={{ width: 'auto', padding: 20, margin: 20 }}>
				<Typography
					variant="headline"
					gutterBottom
				>
            Idhar ya to login rahega, ya list courses, depending on
            authentication status!
				</Typography>
				<br />
				<Link prefetch href="/home" passHref>
					<Button variant="raised" color="secondary">
            List Courses
					</Button>
				</Link>
			</Paper>
		</div>);
};

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LandingPage);
