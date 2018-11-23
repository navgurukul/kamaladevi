import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fetchApi } from "../../services/api";
import localforage from "localforage";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import assigmentsReviewSidenav from "./assigments-review-sidenav";
import assigmentsReviewDetails from "./assigments-review-details";

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

class assigmentsReview extends React.Component {
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
        `/assignments/assigmentsReview`,
        {},
        { Authorization: jwt }
      );
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
  
  // currentAssignment delete hona chaiye jab bi user Approve yeah Reject kare uske baad
  // agla assignment show hona chaiye agar ha toh warna 
  // Apke sare review ke kaam katam hogye display hona chaiye

  // humne yeh function kyu banaya hai aur ishe tumhe kya lagta ha kidar istamal karna chaiye?
  // aur kab?
  // function remove(cards, index){
  //   const newCards = [ ];
  //   for(let i =0; i<cards.length;i++){
  //      if(i===index){
  //         continue;
  //      }
  //      newCards.push(cards[i]);
  //   }
  //   return newCards;
  // }
  removeCard = (assignments,index) => {
    const {assignments:assigments,selectedCard:index} = this.state;
    const newAssigmentsList = []
    for (let i = 0; i<assignments.length;i++){
      if (i === selectedCard) {
        continue
      }
      newAssigmentsList.push(assignments[i])
    }
    return newAssigmentsList
    this.setState = (
      {
        
      }
    )
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
            <assigmentsReviewSidenav 
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
            <assigmentsReviewSidenav 
              assigments={this.state.assigments} 
              updatedSelectedCard={this.updatedSelectedCard} 
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <assigmentsReviewDetails selectedCard={this.state.selectedCard}/>
        </main>
      </div>
    );
  }x  
}

assigmentsReview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(assigmentsReview);
