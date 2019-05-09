import axios from 'axios';
import Router from 'next/router';
import localforage from 'localforage';

import { BACKEND_URL } from './config';
import { clearSession, addEnrolledCourses } from './session';

// export const fetchApi = (endpoint, payload, headers, method = 'get') => {
// 	const axiosConfig = {
// 		method: method.toLowerCase(),
// 		headers,
// 	};
// 	if (axiosConfig.method === 'get') {
// 		axiosConfig.params = payload;
// 	} else {
// 		axiosConfig.data = payload;
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, axiosConfig)
// 		.catch((error) => {
// 			// TODO: More sane error handling. Currently, assuming that
// 			// the access token has expired, and hence sending to / to
// 			// ask user to log in again
// 			if (error.response && error.response.status === 401) {
// 				clearSession();
// 			}
// 			throw error;
// 		});
// };

export const fetchApi = (endpoint, payload, headers, method = 'GET') => {
	const options = {
		method: method.toUpperCase(),
		headers,
	};
	const url = new URL(`${BACKEND_URL}${endpoint}`);

	if (options.method === 'GET') {
		Object.keys(payload).forEach(key => url.searchParams.append(key, payload[key]));
	} else {
		options.body = JSON.stringify(payload);
	}

	return fetch(url, options)
		.then((response) => {
			if (!response.ok) {
				console.error(response);
				// TODO: More sane error handling. Currently, assuming that
				// the access token has expired, and hence sending to / to
				// ask user to log in again
				if (response.status === 401) {
					clearSession();
					// throw response.statusText;
				}
    	}
			return response.json();
		})
		.catch((error) => {
			console.log('errr fetchApi');
			console.error(error);
			throw error;
		});
};



export const authenticatedFetchAPI = (endpoint, payload = {}, method = 'get') => {
	return localforage.getItem('authResponse')
						.then(value => {
								if(value === null){
				Router.replace('/home');
								} else {
									const { jwt } = value;
									return fetchApi(endpoint, payload, { Authorization: jwt }, method)
								}
						});
}

export const markCourseCompleteAPI = (courseId, menteeId) => {
	return authenticatedFetchAPI(`/courses/${courseId}/complete`, {"menteeId":menteeId}, 'post')
  };
// Make notes submission api call to submit notes for students
export const submitExerciseAPI = (courseId, exerciseId, notes) => authenticatedFetchAPI(`/courses/${courseId}/exercise/${exerciseId}/submission`, { notes }, 'post');

export const getExerciseFromSlugAPI = (courseId, slug) => authenticatedFetchAPI(`/courses/${courseId}/exercise/getBySlug`, { slug });
export const saveCoursesSequenceAPI = payload => authenticatedFetchAPI('/courses/sequenceNum', { courses: payload }, 'put');

export const deleteCourseAPI = courseId => authenticatedFetchAPI(`/courses/${courseId}/delete`, {}, 'delete');

// Make notes submission api call to get submitted notes
export const getExerciseSubmissionAPI = (courseId, exerciseId) => {
	const query = {
		submissionUsers: 'current',
		submissionState: 'all',
	};
	return authenticatedFetchAPI(`/courses/${courseId}/exercise/${exerciseId}/submission`, query);
};
export const getExerciseSubmissionAPIWithoutLogin = (courseId, exerciseId) => {
	const query = {
		submissionUsers: 'all',
		submissionState: 'all',
	};

	return fetchApi(`/courses/${courseId}/exercise/${exerciseId}/submission`, query)
};
// Make enroll API call, and add that course to enrolledCourses

export const enrollCourseAPI = async (courseId, callBack) => {
		return authenticatedFetchAPI(`/courses/${courseId}/enroll`, {}, 'post')
			.then((response) => {
				console.log('response', response);
				if (response.enrolled) {
					console.log('response if');
					callBack(true);
					addEnrolledCourses(courseId);
				} else {
					throw new Error(response.message);
				}
			})
};


// Submit the feedback for student assignment
export const reviewerFeedbackSubmissionAPI = (notes, isApprove, submissionId) => localforage.getItem('authResponse')
	.then((value) => {
		const { jwt } = value;
		const payload = {
			notes,
			approved: isApprove,
		};
		return fetchApi(`/assignments/peerReview/${submissionId}`, payload, { Authorization: jwt }, 'put');
	});
