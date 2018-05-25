// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import ReactMarkdown from 'react-markdown';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { fetchApi } from '../services/api';

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
});


class CourseDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prefetchedData: false,
			exercises: [],
			content: '',
		};
	}

	async componentDidMount() {
		// Using async await, just to avoid deep nesting of asynchronous callbacks
		let value;
		let response;
		try {
			value = await localforage.getItem('authResponse');
			if (!value) {
				// No access tokens saved
				Router.replace('/');
				return;
			}
		} catch (e) {
			// TODO: Handle localforage error cases
			return;
		}
		const { id } = Router.query;
		const { jwt } = value;
		response = await fetchApi(`/courses/${id}/exercises`, {}, { Authorization: jwt });
		const exercises = response.data.data;
		this.setState({ // eslint-disable-line  react/no-did-mount-set-state
			exercises,
		});
		const firstExerciseSlug = exercises[0].slug;
		response = (
			await fetchApi(`/courses/${id}/exercise/getBySlug`, { slug: firstExerciseSlug }, { Authorization: jwt })
		);
		this.setState({ // eslint-disable-line  react/no-did-mount-set-state
			content: response.data.content,
			prefetchedData: true,
		});
	}

	render() {
		const { classes } = this.props;
		const { prefetchedData, content } = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.root} id="content-container">
				<ReactMarkdown source={content} />
			</div>
		);
	}
}

CourseDetail.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetail);
