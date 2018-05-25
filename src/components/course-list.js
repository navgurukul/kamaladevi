// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { fetchApi } from '../services/api';

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
});


class CourseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prefetchedData: false,
			availableCourses: [],
			// For future uses
			enrolledCourses: [], // eslint-disable-line react/no-unused-state
			facilitatingCourses: [], // eslint-disable-line react/no-unused-state
		};
	}

	componentDidMount() {
		localforage.getItem('authResponse', (error, value) => {
			if (!error) {
				if (value === null) {
					Router.replace('/');
				} else {
					const { jwt } = value;
					fetchApi('/courses', {}, { Authorization: jwt }).then((response) => {
						this.setState({
							prefetchedData: true,
							...response.data,
						});
					});
				}
			} else {
				// TODO: Handle error cases
			}
		});
	}

	render() {
		const { classes } = this.props;
		const { availableCourses, prefetchedData } = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.root}>
				{availableCourses.map(value => (
					<Typography key={value.id}>
						{value.name}
					</Typography>
				))}
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
