
import React from "react";
import Card from "@material-ui/core/Card";

const styles = theme => ({
    // root: {
    //   display: "flex",
    //   flexGrow: 1,
    //   marginTop: "10vh",
    //   height: "100%"
    // }
     solutionContent: {
      padding: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 3,
      fontFamily: "Ubuntu"
    },
  });

class SolutionDetail extends React.Component {
    render(){
      const { classes,solution } = this.props;
        return(
            <Card className={solutionContent.root}>
              <div
              dangerouslySetInnerHTML={{
                __html: this.updateLinks(md.render(content))
              }}
              />
            </Card>
        )
    }
}

SolutionDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SolutionDetail);

