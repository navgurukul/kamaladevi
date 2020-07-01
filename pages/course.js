// This is main entry page for route '/course'
import React from 'react';
import localforage from 'localforage';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import * as Sentry from '@sentry/browser';
import withRoot from '../src/with-root';

import { fetchApi } from '../src/services/api';
import { getTitleFromSlug } from '../src/services/utils';
import {withGATag} from '../src/with-ga-tag';
import Header from '../src/components/header';
import CourseDetail from '../src/components/course-detail';

const sendToCourse = async (courseId, slug, setExerciseCallback) => {
	let value;
	let response;
	try {
		value = await localforage.getItem('authResponse');
		if (!value) {
			// No access tokens saved
			response = await fetchApi(`/courses/${courseId}/exercises`, {}, {});
			// Router.replace('/home');
			// return null;
		}
	} catch (e) {
		// Do not remove this catch block, as the server side rendering
		// is taken care by this catch block. Couldn't figure out a way to stop
		// fetching of data on server side, hence, leaving it like this
		// TODO: Handle localforage error cases
		return;
	}

	try {
		if (value != null) {
			const { jwt } = value;
		response = await fetchApi(`/courses/${courseId}/exercises`, {}, { Authorization: jwt });
		}
	} catch (e) {
		// TODO: Handle network error cases
		return;
	}
	const exercises = response.data;

	setExerciseCallback(exercises);
	// If there is a slug in the URL, use that slug, else get the
	// slug of the first exercise
	if (!slug) {
		const firstExerciseSlug = exercises[0].slug;
		// Calling replace instead of slug, since we don't want the back
		// button to take to ?id=courseId page.
		Router.replace({
			pathname: '/course',
			query: { id: courseId, slug: firstExerciseSlug },
		});
	}
};

class Course extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exercises: [],
		};
	}

	componentDidMount() {
		Sentry.init({ dsn: 'https://dac738139bd14514bbec319da7c8b28c@sentry.io/1417825' });
		this.configSentryOnMount();
	}

	configSentryOnMount= async ()=>{
		let userId = await localforage.getItem('authResponse').then((value)=>{
			let id = value ? value.user.id : 'non logged in user';
			return id;
	 })

	 Sentry.configureScope((scope) => {
		scope.setExtra("userId", userId);
	  });
	 }

	async componentDidCatch(error, errorInfo) {
		this.triggerSentry(error, errorInfo);
		}
		 triggerSentry=async (error, errorInfo)=>{
		  let userId = await localforage.getItem('authResponse').then((value)=>{
			 let id = value ? value.user.id : 'non logged in user';
			 return id;
		})
		Sentry.configureScope((scope) => {
			scope.setExtra("userId", userId);
		  });
		this.setState({ error });
		Sentry.withScope(scope => {
		  Object.keys(errorInfo).forEach(key => {
			scope.setExtra(errorInfo, errorInfo[key])
		  });
		  Sentry.captureException(error);
		});
	};

	render() {
		const { id, slug } = this.props.router.query;
		const title = getTitleFromSlug(slug);
		// If exercises.length is 0, it means the exercises are not loaded yet

		console.log("id, slug", id, slug, title);

		if (!this.state.exercises.length) {
			// TODO: Only run this code on server side
			sendToCourse(id, slug, exercises => this.setState({ exercises }));
			return null;
		}
		// Router prop might get updated in the next render cycle
		if (!slug) {
			return null;
		}
		return (
				<DocumentTitle title={title}>
					<div>
						<Header searchHidden={true}/>
						<CourseDetail
							id={id}
							slug={slug}
							exercises={this.state.exercises}
							updateExercises={exercises => this.setState({ exercises })}
							/>
					</div>
				</DocumentTitle>
		);
	}
}

Course.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withGATag(withRoot(withRouter(Course)));
