import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  cardText: {
    float: "left",
    paddingRight: "18px"
  },
  studentName: {
    marginTop: "20px"
  },
  blocks: {
    marginLeft: "6px",
    marginTop: "12px",
    width: "225px"
  }
};

class PeerReviewSidenav extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }


  render() {
    const { classes, peer } = this.props;
    console.log("PeerReviewSideNav");
    console.log("peer",peer);
    return (
      <React.Fragment>
        {peer.map((value, key) => (
          <Card className={classes.blocks} key={value.id}>
            <CardContent>
              <Typography className={classes.cardText}>
                {value.exerciseName}
              </Typography>
              <Typography>{value.submittedAt}</Typography>
              <Typography className={classes.studentName}>
                {value.submitterName}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </React.Fragment>
    );
  }
}

PeerReviewSidenav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeerReviewSidenav);
