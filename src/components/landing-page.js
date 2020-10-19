import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import withRoot from '../../src/with-root';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';

import GoogleLogin from 'react-google-login';

import { fetchApi } from '../services/api';
import { setSession } from '../services/session';
import queryString from 'query-string';

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	paper: {
		width: '25%',
		minWidth: '200px',
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
		.then(authResponse => {
			console.log('authResponse', authResponse);
			setSession(authResponse)
		});
};

const authFailure = (response) => {
	console.log('authFailure', response);
	// TODO: Send analytics or do something meaningful here
};

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			queryParams: { "params": null }
		};
	}
	componentDidMount() {
		const values = queryString.parse(location.search);
		this.setState({ queryParams: { params: values.params } });
	}
	render() {
		const { classes } = this.props;
		const { loading, queryParams } = this.state;
		localforage.getItem('authResponse', (error, value) => {
			if (!error) {
				//user is authenticated
				if (value !== null) {
					Router.replace('/home');
					return <CircularProgress className={classes.progress} size={50} />;
				} else {
					// if (queryParams != undefined && queryParams.params == "signin") {
					// 	// Router.replace('/');
					// } else {
					// 	Router.replace('/home');
					// }
				}
			} else {
				// TODO: Handle error cases
			}
		}).catch(() => {
			// This catch block is for SSR. Since, on serverside, no storage service will
			// be found, and this will be safety cushion for that exception
		});


		// Show loader if auth is success, and waiting for Router to take to home
		// if (this.state.loading) {
		// 	return (
		// 		<div className={classes.root}>
		// 			<CircularProgress className={classes.progress} size={50} />
		// 		</div>
		// 	);
		// }

		// if (queryParams.params == "signin") {
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
							variant="contained"
							component={GoogleLogin}
							clientId="34917283366-tvria4h9kk6bnhjen4qgdkgl6m7u3g89.apps.googleusercontent.com"
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
				</div>
			);
		// } else {
		// 	return null;
		// }
	}
}

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withRoot(withStyles(styles)(LandingPage));
