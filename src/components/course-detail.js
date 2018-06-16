// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import { fetchApi } from '../services/api';
import CourseDetailSideNav from './course-detail-sidenav';

// Parse markdown content
const md = require('markdown-it')({
	html: true,
})
	.use(require('markdown-it-highlightjs'));

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	paper: {
		width: '63%',
		margin: 'auto',
		padding: theme.spacing.unit * 2.5,
		float: 'left',
	},
	sidebar: {
		width: '35%',
		margin: 'auto',
		padding: theme.spacing.unit * 2.5,
		float: 'right',
	},
	container: {
		width: '80%',
		margin: 'auto',
		paddingTop: theme.spacing.unit * 2,
	},
	progress: {
		margin: theme.spacing.unit * 2,
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
		this.loadExercise = this.loadExercise.bind(this);
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
		try {
			response = await fetchApi(`/courses/${id}/exercises`, {}, { Authorization: jwt });
		} catch (e) {
			// TODO: Handle network error cases
			return;
		}

		const exercises = response.data.data;
		this.setState({ // eslint-disable-line  react/no-did-mount-set-state
			exercises,
		});

		const firstExerciseSlug = exercises[0].slug;
		this.loadExercise(firstExerciseSlug);

		this.setState({ // eslint-disable-line  react/no-did-mount-set-state
			exercises,
			prefetchedData: true,
		});
	}

	async loadExercise(slug) {
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
		try {
			response = (
				await fetchApi(`/courses/${id}/exercise/getBySlug`, { slug }, { Authorization: jwt })
			);
		} catch (e) {
			// TODO: Handle network error cases
			return;
		}
		this.setState({ // eslint-disable-line  react/no-did-mount-set-state
			content: response.data.content,
		});
	}

	render() {
		const { classes } = this.props;
		const { prefetchedData, exercises, content } = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.container}>
				<Card className={classes.paper}>
					{/* eslint-disable-next-line react/no-danger */}
					<div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
				</Card>

				<CourseDetailSideNav exercises={{ exercises }} loadExercise={this.loadExercise} />
			</div>
		);
	}
}

CourseDetail.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetail);
