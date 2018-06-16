import localforage from 'localforage';
import Router from 'next/router';

import { resetEnrolledCourses } from './courses';

export const clearSession = () => {
	localforage.removeItem('authResponse', () => {
		Router.replace('/');
	});
	resetEnrolledCourses();
};

export const setSession = (authResponse) => {
	localforage.setItem('authResponse', authResponse.data, (error) => {
		if (!error) {
			Router.replace('/home');
		} else {
			// TODO: Handle error case
		}
	})
		.catch(() => { /* TODO: Handle network error cases */ });
};
