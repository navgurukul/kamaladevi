import React from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage'

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  	root: {
  		flexGrow: 1,
  	},
});

class MenteeCoursesDetailReports extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		}
  }


  render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
          Hello
			</div>
		);
  }
}

MenteeCoursesDetailReports.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenteeCoursesDetailReports);
