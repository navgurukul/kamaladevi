import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import GoogleLogin from 'react-google-login';


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

const responseGoogle = (response) => {
  console.log(response);
}

const LandingPage = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Paper style={{width: '25%', padding: 20, margin: 'auto' }}>
				<Typography
					variant="headline"
					gutterBottom
				>
          SARAL <br/>
        </Typography>
          <Typography
            variant="caption"
            gutterBottom
          >
          NavGurukul eLearning Platform
        </Typography>
        <br />
          <GoogleLogin
            clientId="330505979484-sgfkanh7p0nsqvua8susd9q60i94dnbh.apps.googleusercontent.com"
            buttonText="Sign In"
            cookiePolicy='single_host_origin'
            scope='profile email'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        <br/><br/>
        <Typography
          variant="body1"
          gutterBottom
        >
          Never doubt that a small group of thoughtful, committed citizens can change the world;
          indeed, it's the only thing
          that ever has.
          <p style={{textAlign: 'right'}}>~ Margaret Mead</p>
        </Typography>
				{/*<Link prefetch href="/home" passHref>*/}
					{/*<Button variant="raised" color="secondary">*/}
            {/*List Courses*/}
					{/*</Button>*/}
				{/*</Link>*/}
			</Paper>
		</div>);
};

LandingPage.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(LandingPage);
