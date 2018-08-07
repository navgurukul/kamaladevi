import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import localforage from 'localforage';

import { fetchApi } from '../services/api';
import { setSession } from '../services/session';


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
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

const authSuccess = (response) => {
	const { tokenId } = response;
	fetchApi('/users/auth/google', { idToken: tokenId }, { 'Content-Type': 'application/json' }, 'post')
		.then(authResponse => setSession(authResponse));
};

const authFailure = (response) => {
	console.log(response);
	// TODO: Send analytics or do something meaningful here
};

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	render() {
		const { classes } = this.props;
		localforage.getItem('authResponse', (error, value) => {
			if (!error) {
				if (value !== null) {
					Router.replace('/home');
					return <CircularProgress className={classes.progress} size={50} />;
				}
			} else {
				// TODO: Handle error cases
			}
		}).catch(() => {
			// This catch block is for SSR. Since, on serverside, no storage service will
			// be found, and this will be safety cushion for that exception
		});
		// Show loader if auth is success, and waiting for Router to take to home
		if (this.state.loading) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>
			);
		}
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
						clientId="96851996756-7lfcdrojvu63k0jcjsqma61jggd72uli.apps.googleusercontent.com"
						cookiePolicy="single_host_origin"
						scope="profile email"
						onSuccess={(response) => {
							this.setState({ loading: true });
							authSuccess(response);
						}}
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
	}
}

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LandingPage);
