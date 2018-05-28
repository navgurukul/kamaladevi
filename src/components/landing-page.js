import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import localforage from 'localforage';

import { fetchApi } from '../services/api';


const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	paper: {
		width: '25%',
		margin: 'auto',
		padding: theme.spacing.unit * 2.5,
	},
});

const authSuccess = (response) => {
	const { tokenId } = response;
	fetchApi('/users/auth/google', { idToken: tokenId }, { 'Content-Type': 'application/json' }, 'post')
		.then((authResponse) => {
			localforage.setItem('authResponse', authResponse.data, (error) => {
				if (!error) {
					Router.replace('/home');
				} else {
					// TODO: Handle error case
				}
			})
				.catch(() => { /* TODO: Handle network error cases */ });
		});
};

const authFailure = () => {
	// TODO: Send analytics or do something meaningful here
};

const LandingPage = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Typography
					variant="headline"
					gutterBottom
				>
					SARAL <br />
				</Typography>
				<Typography
					variant="caption"
					gutterBottom
				>
					NavGurukul eLearning Platform
				</Typography>
				<br />
				<Button
					color="primary"
					variant="raised"
					component={GoogleLogin}
					clientId="330505979484-sgfkanh7p0nsqvua8susd9q60i94dnbh.apps.googleusercontent.com"
					cookiePolicy="single_host_origin"
					scope="profile email"
					onSuccess={authSuccess}
					onFailure={authFailure}
				>
          Sign In
				</Button>
				<br /><br />
				<Typography
					variant="body1"
					gutterBottom
				>
					Never doubt that a small group of thoughtful, committed citizens can change the world;
					indeed, it&apos;s the only thing
					that ever has.
				</Typography>
				<Typography
					variant="body1"
					gutterBottom
					style={{ textAlign: 'right' }}
				>
          ~ Margaret Mead
				</Typography>
			</Paper>
		</div>);
};

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LandingPage);
