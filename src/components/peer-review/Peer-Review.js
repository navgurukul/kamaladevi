import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fetchApi } from "../../services/api";
import localforage from "localforage";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import PeerReviewSidenav from "./peer-review-sidenav";
import PeerReviewDetails from "./peer-review-details";

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

class PeerReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peer: [],
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
      const peerReview = await response.data.data;
      console.log(peerReview);
      this.setState({ 
        peer: peerReview,
        selectedCard: peerReview[0],
      });
    } catch (e) {
      console.log(e);
    }
  } 

  removeCard = () => {
  //user jab bhi approve ya reject karega tab list me se current card remove hona chahiye
  //card ke remove hote hi ek nyaa list ayega (hamara list update hoga)
  //agar pahla card delete hoga to agla card show ho jayega
  //agar sabse last wala card delete hoga pichhe wala card show ho jayega
  //agar bich me se card delete hota hai to aage ya pichhe ka card show ho jayega
  //agar agla card bhi nhi hai to peerReviewDetail card me ek msg show ho jana chahiye
  const {peer} = this.state;
   

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
            <PeerReviewSidenav 
              peer={this.state.peer} 
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
            <PeerReviewSidenav 
              peer={this.state.peer} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <PeerReviewDetails selectedCard={this.state.selectedCard}/>
        </main>
      </div>
    );
  }x  
}

PeerReview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeerReview);
