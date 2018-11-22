import axios from 'axios';
import Router from 'next/router';
import localforage from 'localforage';

import { BACKEND_URL } from './config';
import { clearSession } from './session';

const fetchApi = (endpoint, payload, headers, method = 'get') => {
	const axiosConfig = {
		method: method.toLowerCase(),
		headers,
	};
	if (axiosConfig.method === 'get') {
		axiosConfig.params = payload;
	} else {
		axiosConfig.data = payload;
	}
	return axios(`${BACKEND_URL}${endpoint}`, axiosConfig)
		.catch((error) => {
			// TODO: More sane error handling. Currently, assuming that
			// the access token has expired, and hence sending to / to
			// ask user to log in again
			if (error.response && error.response.status === 401) {
				clearSession();
			}
			throw error;
		});
};
export fetchApi;

export const authenticatedFetchApi = (endpoint, payload, method = 'get') =>{
	return localforage.getItem('authResponse', (error, value)=>{
		if (!error) {
			if (value === null) {
				Router.replace('/');
			} else {
				const { jwt } = value;
				return fetchApi(endpoint, payload, { Authorization: jwt }, method)
					.catch((error) => {
							/* TODO: Handle network error cases */
							console.error(error);
					});
			}
		} else {
			// TODO: Handle error cases
		}
	});
}

// Make notes submission api call to submit notes for students
export const exerciseSubmissionAPI = async (courseId, exerciseId, notes) => {
	  return authenticatedFetchApi(`/courses/${courseId}/exercise/${exerciseId}/submission`, {notes}, 'post')
};

export const saveCoursesSequenceAPI = (payload) => {
	return authenticatedFetchApi(`/courses/sequenceNum`, {"courses": payload}, 'put')
};

export const deleteCourseAPI = (courseId) => {
	  return authenticatedFetchApi(`/courses/${courseId}/delete`, {}, 'delete')
};

// Make notes submission api call to get submitted notes
export const getExerciseSubmissionAPI = (courseId, exerciseId) => {
	const query = {
			submissionUsers: 'current',
			submissionState: 'all',
	};
	return authenticatedFetchApi(`/courses/${courseId}/exercise/${exerciseId}/submission`, query)
};

// Make enroll API call, and add that course to enrolledCourses
export const enrollCourseAPI = async (courseId, callBack) => {
		authenticatedFetchApi(`/courses/${courseId}/enroll`, {}, 'post')
			.then((response) => {
				if (response.data.enrolled) {
					callBack(true);
					addEnrolledCourses(courseId);
				}
			});
};
