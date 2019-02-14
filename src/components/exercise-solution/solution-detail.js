
import React from "react";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

var blockEmbedPlugin = require("markdown-it-block-embed");
var DOMParser = require('xmldom').DOMParser

// Parse markdown content
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})
  .enable(["link"])
  .enable("image")
  .use(require("markdown-it-highlightjs"));

md.use(blockEmbedPlugin, {
  containerClassName: "video-embed"
});


const styles = theme => ({
     solutionContent: {
      padding: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 3,
      fontFamily: "Ubuntu",
      maxWidth: theme.spacing.unit * 120,
      margin: 'auto',
      marginTop: "20vh",
      [theme.breakpoints.down("xs")]: {
        marginTop: "10vh",
        maxWidth: theme.spacing.unit * 42,
      }
    },
  });

class SolutionDetail extends React.Component {

  updateLinks = htmlFromServer => {
    var parser = new DOMParser();
    let solutionDetail = parser.parseFromString(
      htmlFromServer,
      "text/html"
    );
    const anchorList = solutionDetail.querySelectorAll("a");
    anchorList.forEach(anchor => {
      if (anchor.innerText === "Saral") {
        return false;
      } else {
        anchor.setAttribute("target", "_blank");
      }
    });
    return solutionDetail.body.innerHTML;
  };
    render(){
      const { classes,solution } = this.props;
      console.log(solution)
        return(
            <Card className={classes.solutionContent}>
              <div
              dangerouslySetInnerHTML={{
                __html:this.updateLinks(md.render(solution))
              }}
              />
              {/* <div>
              {/* hi I am Rani I am studying in class 10TH and now I am in NavGurukul and doing softerware 
              engineering I love to enjoy the coding here really it is a awesome to be in NavGurukul and do the 
              things . */}
              {/* </div> */} 
            </Card>
        )
    }
}

SolutionDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SolutionDetail);

