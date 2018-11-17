import React from 'react';
import PropTypes from 'prop-types';

import MenuIcon from '@material-ui/icons/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	link: {
	  textDecoration: 'inherit',
		color: 'inherit',
	},
};

function Header(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					{/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> */}
					{/* <MenuIcon /> */}
					{/* </IconButton> */}
					<Typography variant="title" color="inherit" className={classes.flex}>
						<a href="/home" className={classes.link}>
            Saral
						</a>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
