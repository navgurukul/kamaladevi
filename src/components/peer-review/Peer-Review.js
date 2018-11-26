import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fetchApi } from "../../services/api";
import localforage from "localforage";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentsReviewSidenav from "./peer-review-sidenav";
import AssigmentsReviewDetails from "./peer-review-details";

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

class AssignmentsReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigments: [],
      mobileOpen: false,
      selectedCard:{}
    };
  }
  updatedSelectedCard = (selectedCardDetail) => {
    this.setState({
      selectedCard:selectedCardDetail
    })
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
            <AssignmentsReviewSidenav 
              assigments={this.state.assigments} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
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
            <AssignmentsReviewSidenav 
              assigments={this.state.assigments} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <AssigmentsReviewDetails selectedCard={this.state.selectedCard}/>
        </main>
      </div>
    );
  }
}

AssignmentsReview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AssignmentsReview);
