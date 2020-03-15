import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import localforage from 'localforage';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withRoot from '../src/with-root'
import { fetchApi } from '../src/services/api';
import Header from '../src/components/header';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  paper: {
    width: '25%',
    minWidth: '300px',
    margin: 'auto',
    marginTop: '-130px',
    padding: theme.spacing.unit * 2.5,
  },
});


class GitHubAccess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  async componentDidMount() {
    const value = await localforage.getItem('authResponse')
    if (value) {
      this.setState({
        email: value.user.email
      })
    }
  }

  accessGitHubLink = async () => {
    const { email } = this.state;
    const response = await fetchApi(`/users/github/${email}`, {}, {});
    const { url } = response
    if (url) {
      Router.replace('/home');
      window.open(url, "_blank")
    }
  }

  render() {
    const { classes } = this.props;
    const { email } = this.state;
    return (
      <div>
        <Header searchHidden={true} />
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Typography
              variant="body1"
              gutterBottom
            >
              Aap {email} se SARAL par logged in hai.
          </Typography>
            <Typography variant="body1"
              gutterBottom
            >
              Sabse pehle aap <a href='https://github.com/' target="_blank">github.com</a> par, {email} se login karein.
          </Typography>
            <Typography variant="body1"
              gutterBottom
            >
              Aur phir, niche diye huye link button par click karein
          </Typography>
            <hr></hr>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.accessGitHubLink}
              style={{ 'height': 45 }}
          >
            Get Github Student Pack
          </Button>
          </Paper>
        </div>
      </div>
    );
  }
};

export default withRoot(withStyles(styles)(GitHubAccess));
