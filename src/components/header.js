import React from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import Link from 'next/link';
import * as Sentry from '@sentry/browser';
import { EventEmitter } from 'events';

import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { fetchAPI, selectLanguage, login } from '../store/action/index';
import { fetchApi } from '../services/api';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit * 10,
  },
  flex: {
    flex: 1,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.appBar - 1,
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.grey[50],
    opacity: 0.8
  },
  link: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  drawerContent: {
    marginTop: theme.spacing.unit * 10,
  },
  sideNavList: {
    listStyleType: 'none',
  },
  sideNavItem: {
    cursor: 'pointer',
    padding: theme.spacing.unit,
    borderRadius: '3px',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      transition: theme.transitions.easing.easyInOut,
    },
  },
  sideNavItem: {
    cursor: 'pointer',
    padding: theme.spacing.unit,
    borderRadius: '3px',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      transition: theme.transitions.easing.easyInOut,
    },
  },
  hidden: {
    display: 'none',
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      open: false,
      email: '',
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  openMenu = open => {
    this.setState({
      open,
    });
  };

  closeMenu = open => {
    this.setState({
      open,
    });
  };

  checkIsAuthenticated = () => {
    localforage.getItem('authResponse', (error, value) => {
      if (error) {
        // Do not remove this catch block, as the server side rendering
        // is taken care by this catch block. Couldn't figure out a way to stop
        // fetching of data on server side, hence, leaving it like this
        // TODO: Handle localforage error cases
        if (!window.navigator.onLine) {
          alert('Aap internet se connected nhi ho.');
        }
        console.log(e);
      } else if (!value) {
        this.props.selectLanguage(localStorage.getItem("selected_language"))
        // No access tokens saved
        // Do nothing
      } else {
        this.props.login()
        // Access token is already saved
        this.setState({
          isAuthenticated: true,
        });
      }
    });
  };
  
  selectLanguage = async (id) => {
    await fetchApi(`/users/${id}/selected_language`, {}, { Authorization: "null" })
    .then((res) => {
      if(res) {
        localStorage.setItem("selected_language", res.selected_language)
        this.props.selectLanguage(res.selected_language)
      }
    });
  }
  
  async componentDidMount() {
    this.checkIsAuthenticated();
    const value = await localforage.getItem('authResponse')
    if (value) {
      this.setState({
        email: value.user.email 
      })
      this.selectLanguage(value.user.id)
    }
  }
  
  handelChange = async (event) => {
    const { value } = event.target;
    const { isAuthenticated } = this.props;

    const isAuth = await localforage.getItem("authResponse");
    let userId = isAuth ? isAuth.user.id : null;
    
    if (isAuthenticated ) {
      this.props.fetchAPI(value, userId)
    }

    localStorage.setItem("selected_language", value)
    this.props.selectLanguage(value)
  }

  changeHandler = e => {
    this.props.bus.emit('search', e.target.value);
  };
  render() {
    console.log(this.props, "Babau JP")
    const { classes, selectedLanguage } = this.props;
    const hidden = this.props.classes.hidden;
    const { isAuthenticated, open, email } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            {isAuthenticated ? (
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleMenu}>
                <MenuIcon />
              </IconButton>
            ) : null}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              <a href="/home" className={classes.link}>
                Saral
              </a>
            </Typography>
            <input
              type="text"
              ref="filterInput"
              className={this.props.searchHidden ? hidden : ''}
              onChange={this.changeHandler}
              placeholder="Search"
            />
            <select style={{margin: 5}} value={selectedLanguage} onChange={this.handelChange} >
              <option value='hi'>hi</option>
              <option value='en'>en</option>
              <option value='ta'>ta</option>
              <option value='te'>te</option>
            </select>
          </Toolbar>
        </AppBar>
        {/* Drawer should be here. */}
        <SwipeableDrawer

          variant="persistent"
          open={open}
          onOpen={() => this.openMenu(true)}
          onClose={() => this.closeMenu(false)}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerContent}>
            <List className={classes.sideNavList}>
              <Link href="/home">
                <div className={classes.sideNavItem}>
                  <span>Home</span>
                </div>
              </Link>
              <Link href="/assignment-review">
                <div className={classes.sideNavItem}>
                  <span>PeerReview</span>

								</div>
							</Link>
							<Link href='/reports/course-progress-report-per-mentor'>
								<div className={classes.sideNavItem}>
											<span>Mentee courses</span>

                </div>
              </Link>
              { email.includes('@navgurukul') ?  <Link href="/githubAccess">
                <div className={classes.sideNavItem}>
                  <span>Get Github Student Pack</span>
								</div>
							</Link> : null }
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedLanguage: state.state.selectedLanguage,
    isAuthenticated: state.state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchAPI: (language, userId) => { dispatch(fetchAPI(language, userId)) },
     login: () => dispatch(login()),
     selectLanguage: (language) => dispatch(selectLanguage(language))
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header));
