import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {
		flexGrow: 1,
	},
});


const MenteeCourseDetailReport = (props) => {
	const { classes } = props;
	return <div className={classes.root} />;
};

MenteeCourseDetailReport.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenteeCourseDetailReport);
