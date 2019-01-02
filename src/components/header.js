import React from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import Link from 'next/link';

import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

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

});

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false,
			open: false,
		};
	}
	componentDidMount() {
		this.checkIsAuthenticated();
	}

	toggleMenu = () => {
		this.setState(prevState => ({
			open: !prevState.open,
		}));
	}

	openMenu = (open) => {
		this.setState({
			open,
		});
	}

	closeMenu = (open) => {
		this.setState({
			open,
		});
	}

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
			} else if (!value) {
				// No access tokens saved
				// Do nothing
			} else {
				// Access token is already saved
				this.setState({
					isAuthenticated: true,
				});
			}
		});
	}


	render() {
		const { classes } = this.props;
		const {
			isAuthenticated,
			open,
		} = this.state;
		return (
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar>
						{
							isAuthenticated
								? (
									<IconButton
										color="inherit"
										aria-label="Menu"
										onClick={this.toggleMenu}
									>
										<MenuIcon />
									</IconButton>
								)
								: null
						}
						<Typography variant="title" color="inherit" className={classes.flex}>
							<a href="/home" className={classes.link}>
							Saral


							</a>
						</Typography>
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
					}}
				>
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
						</List>
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
