import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fetchApi } from "../../services/api";
import localforage from "localforage";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
<<<<<<< HEAD
import PeerReviewSidenav from "./peer-review-sidenav";
import PeerReviewDetails from "./peer-review-details";
=======
import AssignmentsReviewSidenav from "./peer-review-sidenav";
import AssigmentsReviewDetails from "./peer-review-details";
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },

  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "60px",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      marginTop: "0px"
    }
  }
});

<<<<<<< HEAD
class Peereview extends React.Component {
=======
class AssignmentsReview extends React.Component {
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30
  constructor(props) {
    super(props);
    this.state = {
      peer: [],
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  async componentDidMount() {
    let value, response;
    try {
      value = await localforage.getItem("authResponse");
      if (!value) {
        // No access tokens saved
        Router.replace("/");
        return;
      }
    } catch (e) {
      console.log(e);
    }
    const { jwt } = value;
    try {
      response = await fetchApi(
        `/assignments/peerReview`,
        {},
        { Authorization: jwt }
      );
<<<<<<< HEAD
      const data = await response.data.data;
      this.setState({ peer: data });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
=======
      console.log(response.data.data);
      const assigmentsReview = await response.data.data;
      console.log(assigmentsReview);
      this.setState({ 
        assigments: assigmentsReview,
        selectedCard: assigmentsReview[0],
      });
    } catch (e) {
      console.log(e);
    }
  } 
  
  
removeCard = () => {
    const {peer, selectedCard} = this.state;
    var update_assignment_list = [];
    for (var i = 0; i < peer.length; i++) {
      if (peer[i] === selectedCard) {
          continue;
      }
      update_assignment_list.push(peer[i]);
    }
    // return update_assignment_list;
    this.setState ({
      peer : update_assignment_list,
    });
    this.updatedSelectedCard()
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          //   color="inherit"
          onClick={this.handleDrawerToggle}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Hidden mdUp>
          <Drawer
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
          >
<<<<<<< HEAD
            <PeerReviewSidenav peer={this.state.peer} />
=======
            <AssignmentsReviewSidenav 
              assigments={this.state.assigments} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
<<<<<<< HEAD
            <PeerReviewSidenav peer={this.state.peer} />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <PeerReviewDetails />
=======
            <AssignmentsReviewSidenav 
              assigments={this.state.assigments} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <AssigmentsReviewDetails selectedCard={this.state.selectedCard}/>
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30
        </main>
      </div>
    );
  }
}

<<<<<<< HEAD
Peereview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Peereview);
=======
AssignmentsReview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReview);
>>>>>>> 1012fdf0bb08555757457c40997b734e10289e30
