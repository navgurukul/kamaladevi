import React from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginBottom:theme.spacing.unit * 10,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 3,
	},
	link: {
	  textDecoration: 'inherit',
		color: 'inherit',
	},
});

class Header extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			isAuthenticated:false
		}
  }

	checkIsAuthenticated = () => {
		localforage.getItem("authResponse", (error, value) => {
				if(error){
					// Do not remove this catch block, as the server side rendering
					// is taken care by this catch block. Couldn't figure out a way to stop
					// fetching of data on server side, hence, leaving it like this
					// TODO: Handle localforage error cases
					if(!window.navigator.onLine){
						alert("Aap internet se connected nhi ho.");
					}
					console.log(e);
				} else {
						if (!value) {
							// No access tokens saved
							// Do nothing
						} else {
							// Access token is already saved
							this.setState({
								isAuthenticated:true
							})
						}
				}
		});
	}
	componentDidMount() {
		this.checkIsAuthenticated();
	}

  render() {
		const { classes } = this.props;
		const {isAuthenticated} =  this.state;
		return (
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar>
						{
							isAuthenticated?
							<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>
							:null							
						}
						<Typography variant="title" color="inherit" className={classes.flex}>
							<a href="/home" className={classes.link}>
							Saral
							</a>
						</Typography>
						{
							isAuthenticated?
							<IconButton className={classes.menuButton} color="inherit" aria-label="Review Assignments">
								<a href='/assignment-review'>
									<img src='/static/icons/assignment-logo.png' height='45' />
								</a>
							</IconButton>
							:null
						}
					</Toolbar>
				</AppBar>
			</div>
		);
  }
}

// function Header(props)  {
// 	const { classes } = props;
// 	const isAuthenticated =  checkIsAuthenticated();
// 	console.log(isAuthenticated)
// 	return (
// 		<div className={classes.root}>
// 			<AppBar position="static">
// 				<Toolbar>
// 					{/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> */}
// 					{/* <MenuIcon /> */}
// 					{/* </IconButton> */}
// 					<Typography variant="title" color="inherit" className={classes.flex}>
// 						<a href="/home" className={classes.link}>
//             Saral
// 						</a>
// 					</Typography>
// 					{
// 						isAuthenticated?
// 						<IconButton className={classes.menuButton} color="inherit" aria-label="Review Assignments">
// 							<a href='/assignment-review'>
// 								<img src='/static/icons/assignment-logo.png' height='45' />
// 							</a>
// 						</IconButton>
// 						:null
// 					}
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// }

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
