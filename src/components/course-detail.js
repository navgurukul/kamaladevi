// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { fetchApi } from '../services/api';
import CourseDetailSideNav from './course-detail-sidenav';

// Parse markdown content
const md = require('markdown-it')({
	html: true,
})
	.use(require('markdown-it-highlightjs'));

const styles = theme => ({
	root: {
		paddingTop: theme.spacing.unit * 2,
		paddingLeft: '10%',
		paddingRight: '10%',
		[theme.breakpoints.between('sm', 'md')]: {
			paddingLeft: '5%',
			paddingRight: '5%',
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing.unit,
			paddingRight: theme.spacing.unit,
		},
	},
	sidebar: {
		paddingLeft: theme.spacing.unit,
		paddingTop: theme.spacing.unit * 1,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	mainItem: {
		paddingRight: theme.spacing.unit,
	},
	content: {
		padding: theme.spacing.unit * 2.5,
		paddingTop: theme.spacing.unit * 1,
	},
	progress: {
		margin: theme.spacing.unit * 2,
	},
	loaderRoot: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	navigationBtnDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: theme.spacing.unit * 2,
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
				<div className={classes.loaderRoot}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<Grid container spacing={0} className={classes.root}>
				<Grid item xs={12} md={8} className={classes.content}>
					<Card className={classes.content}>
						{/* eslint-disable-next-line react/no-danger */}
						<div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
					</Card>
					<div className={classes.navigationBtnDiv}>
						<Button
							variant="raised"
							color="primary"
							onClick={() => {
								/* eslint-disable-next-line no-alert,no-undef */
								alert('unAssigned');
							}}
						>
							Previous
						</Button>
						<Button
							variant="raised"
							color="primary"
							onClick={() => {
								/* eslint-disable-next-line no-alert,no-undef */
								alert('unAssigned');
							}}
						>
							Next
						</Button>
					</div>
				</Grid>
				<Grid item xs={4} className={classes.sidebar}>
					<CourseDetailSideNav exercises={{ exercises }} loadExercise={this.loadExercise} />
				</Grid>
			</Grid>
		);
	}
}

CourseDetail.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseDetail);
