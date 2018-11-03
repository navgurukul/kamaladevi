import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { fetchApi } from '../services/api';

const styles = {
	root: {

	}
};


class PeerReviewSidenav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		fetchApi()

		return (
			<div className={classes.root}>
				
			</div>
		);
	}
}

PeerReviewSidenav.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PeerReviewSidenav);
