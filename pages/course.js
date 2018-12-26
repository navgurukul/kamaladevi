// This is main entry page for route '/course'
import React from 'react';
import localforage from 'localforage';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import withRoot from '../src/with-root';

import { fetchApi } from '../src/services/api';
import { getTitleFromSlug } from '../src/services/utils';

import Header from '../src/components/header';
import CourseDetail from '../src/components/course-detail';

const sendToCourse = async (courseId, slug, setExerciseCallback) => {
	let value;
	let response;
	try {
		value = await localforage.getItem('authResponse');
		if (!value) {
			// No access tokens saved
			Router.replace('/');
			return null;
		}
	} catch (e) {
		// Do not remove this catch block, as the server side rendering
		// is taken care by this catch block. Couldn't figure out a way to stop
		// fetching of data on server side, hence, leaving it like this
		// TODO: Handle localforage error cases
		return;
	}
	const { jwt } = value;
	try {
		response = await fetchApi(`/courses/${courseId}/exercises`, {}, { Authorization: jwt });
	} catch (e) {
		// TODO: Handle network error cases
		return;
	}
	const exercises = response.data;
	// console.log(response)

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

	render() {
		const { id, slug } = this.props.router.query;
		console.log(slug)
		const title = getTitleFromSlug(slug);
		// If exercises.length is 0, it means the exercises are not loaded yet
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
						<Header />
						<CourseDetail
							id={id}
							slug={slug}
							exercises={this.state.exercises}
							/>
					</div>
				</DocumentTitle>
		);
	}
}

Course.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withRoot(withRouter(Course));
