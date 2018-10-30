// Course list
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactUtterences from "react-utterances";
import { fetchApi } from '../services/api';
import {
	       getSlugOfPreviousCourse,
				 getSlugOfNextCourse,
				 getExerciseGithubLinkFromSlug,
				 getExerciseReviewTypeFromSlug,
				 exerciseSubmission,
				 getExerciseSubmission
			 } from '../services/courses';

import CourseDetailSideNav from './course-detail-sidenav';
import { getExerciseIdFromSlug } from '../services/courses';
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
		},
		'& iframe':{
			width: '100%'
		}
	},
	utterances: {
		width: '100%'
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
	editLink: {
		float:'right',
		marginTop:theme.spacing.unit*2
	},
	navigationBtnDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: theme.spacing.unit * 1,
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
			notes:'',
			previousNotesData:'',
			exerciseId:0
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

	// submit the exercise notes
	submitExercise = (event) => {
			const {notes, exerciseId} = this.state;
			const { id, exercises, slug } = this.props;
			exerciseSubmission(id, exerciseId, notes);
			this.loadExercise();
	}

	// handle the text in the input
	handleChange = (event) => {
			const name = event.target.name;
			this.setState({
				[name]:event.target.value
			});
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
		let value, response;

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
		const { id, slug, exercises } = this.props;
		const { jwt } = value;
		const { exerciseId } = this.state;
		try {
			response = (
				await fetchApi(`/courses/${id}/exercise/getBySlug`, { slug }, { Authorization: jwt })
			);
		} catch (e) {
			// TODO: Handle network error cases
			return;
		}
		// gettuing exersise notes
		const query = {
			submissionUsers: 'current',
			submissionState: 'all',
		};

		// get the exerciseId for the exercise
		const { selectedvalue } = getExerciseIdFromSlug(slug, exercises);

		const previousNotesData = await getExerciseSubmission(id , selectedvalue);
		const content = response.data.content.replace(/```ngMeta[\s\S]*?```/, '');

		this.setState({
			content,
			prefetchedData: true,
			notes:'',
			previousNotesData:previousNotesData,
			exerciseId: selectedvalue
		});
	}

	render() {
		// const
		const {
			classes, exercises, id, slug,
		} = this.props;

		const reviewType = getExerciseReviewTypeFromSlug(slug, exercises);
		const reviewrs = ['peer', 'facilitator', 'automatic']

		const { prefetchedData, content, previousNotesData } = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.loaderRoot}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		const previousSlug = getSlugOfPreviousCourse(slug, exercises);
		const nextSlug = getSlugOfNextCourse(slug, exercises);

		const githubLink = getExerciseGithubLinkFromSlug(slug, exercises);


		return (
			<Grid container spacing={0} className={classes.root}>
				<Grid item xs={12} md={8} className={classes.content}>
					<Card className={classes.content}>
						{/* eslint-disable-next-line react/no-danger */}
						<div id='course' dangerouslySetInnerHTML={{ __html: this.updateLinks(md.render(content)) }}/>
					</Card>
					<br/>
						{/*previously submitted notes*/}
						{
							(previousNotesData.submitterNotes)?
							<Card className={classes.content}>
								<div>
									{previousNotesData.submitterNotes}
								</div>
							</Card>
							:null
						}
						{/*submission form*/}
						{
							(reviewType in reviewrs)?
							<form autoComplete='off'>
								<TextField
									multiline={true}
									fullWidth
									value={this.state.notes}
									label={'Exercise Submission'}
									onChange={this.handleChange}
									name='notes'
								/>
								<br />
								<br />
								<Button
									variant="raised"
									color="primary"
									fullWidth
									className={classes.floatRight}
									onClick={this.submitExercise}
								>
									Submit Exercise
								</Button>
							</form>
							:null
						}
					{/*link to github page*/}
					<div className={classes.editLink}>
						<a href={githubLink} target='_blank'>
							edit
						</a>
					</div>

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
					<ReactUtterences className={classes.utterances} repo={'navgurukul/newton'} type={'title'} />
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
