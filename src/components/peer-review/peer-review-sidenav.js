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

function PeerReviewSidenav(props) {
  const { classes } = props;
  console.log("PeerReviewSideNav");
  console.log(props)
  return (
    <Card className={classes.blocks}>
      {/* {props.peer.map((value, key) => (
        <CardContent key={value.id}>
          <Typography className={classes.cardText}>{value.name}</Typography>
          <Typography>June 29, 2018</Typography>
          <Typography className={classes.studentName}>Komal Bhatt</Typography>
        </CardContent>
      ))} */}
    </Card>
  );
}

PeerReviewSidenav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeerReviewSidenav);
