// Course list
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import EnglishDiscussionEmbed from './comments';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { fetchApi } from '../services/api';
import { getSlugOfPreviousCourse, getSlugOfNextCourse, getExerciseReviewTypeFromSlug } from '../services/courses';
import CourseDetailSideNav from './course-detail-sidenav';

var blockEmbedPlugin = require("markdown-it-block-embed");

// Parse markdown content
const md = require('markdown-it')({
	html: true,
	linkify: true,
	breaks: true,
	typographer: true
})
.enable([ 'link' ])
.enable('image')
.use(require('markdown-it-highlightjs'));

md.use(blockEmbedPlugin, {
    containerClassName: "video-embed"
});

const styles = theme => {
	return {
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
		'& img':{
			maxWidth:'100%',
			display:'block',
			margin:'0 auto'
		}
	},
	floatButtonRight:{
		marginLeft:'auto'
	},
	floatRight:{
		float:'right'
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
		marginBottom: '10%'
	},
}
}

const navigateToExercise = id => (slug) => {
	Router.push({
		pathname: '/course',
		query: { id, slug },
	});
};


class CourseDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prefetchedData: false,
			content: '',
		};
		this.courseDetail = React.createRef();
		this.loadExercise = this.loadExercise.bind(this);
	}

	updateLinks = (htmlFromServer) => {

		let courseDetail = new DOMParser().parseFromString(htmlFromServer, 'text/html');
   	const anchorList = courseDetail.querySelectorAll('a');

		// setting links inside courseDetail to be open in new tab
		anchorList.forEach(anchor	 => {
			if (anchor.innerText === 'Saral'){
				return;
			}
			else {
				anchor.setAttribute('target', '_blank');
			}
		});
		return courseDetail.body.innerHTML;
	}


	componentDidMount() {
		this.loadExercise(this.props.slug);

	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.slug !== this.props.slug) {
			this.loadExercise(nextProps.slug);
		}
		return true;
	}

	async loadExercise() {
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
		const { id, slug } = this.props;
		const { jwt } = value;
		try {
			response = (
				await fetchApi(`/courses/${id}/exercise/getBySlug`, { slug }, { Authorization: jwt })
			);
		} catch (e) {
			// TODO: Handle network error cases
			return;
		}
		const content = response.data.content.replace(/```ngMeta[\s\S]*?```/, '');
		this.setState({
			content,
			prefetchedData: true,
		});
	}

	render() {
		const {
			classes, exercises, id, slug,
		} = this.props;
		const { prefetchedData, content } = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.loaderRoot}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		const previousSlug = getSlugOfPreviousCourse(slug, exercises);
		const nextSlug = getSlugOfNextCourse(slug, exercises);

		const reviewType = getExerciseReviewTypeFromSlug(slug, exercises);
		const reviewrs = ['peer', 'facilitator', 'automatic']
		const disqusConfig = {
			url: window.location.href,
			identifier: this.props.slug,
		}
		const disqusShortname = 'navgurukul';

		return (
			<Grid container spacing={0} className={classes.root}>
				<Grid item xs={12} md={8} className={classes.content}>
					<Card className={classes.content}>
						{/* eslint-disable-next-line react/no-danger */}
						<div id='course' dangerouslySetInnerHTML={{ __html: this.updateLinks(md.render(content)) }}/>
					</Card>
					<br />
					{
						!(reviewType in reviewrs)?
						<form autoComplete='off'>
							<TextField
								multiline={true}
								fullWidth
								label={'Exercise Submission'}
							/>
							<br />
							<br />
							<Button
								variant="raised"
								color="primary"
								className={classes.floatRight}
							>
								Submit
							</Button>
						</form>
						:null
					}
					<div className={classes.navigationBtnDiv}>
						{
							previousSlug?
							<Button
								variant="raised"
								color="primary"
								onClick={() => {
										navigateToExercise(id)(previousSlug);
								}}
								>
								Previous
							</Button>
							:null
						}
						{
							nextSlug?
							<Button
        				className={classes.floatButtonRight}
								variant="raised"
								color="primary"
								onClick={() => {
									navigateToExercise(id)(nextSlug);
								}}
								>
								Next
							</Button>
							:null
						}
					</div>
					<EnglishDiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
				</Grid>
				<Grid item xs={4} className={classes.sidebar}>
					<CourseDetailSideNav
						exercises={exercises}
						loadExercise={navigateToExercise(id)}
						slug={slug}
					/>
				</Grid>
			</Grid>

		);
	}
}

CourseDetail.propTypes = {
	classes: PropTypes.object.isRequired,
	exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
	id: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
};

export default withStyles(styles)(CourseDetail);
