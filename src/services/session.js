import localforage from 'localforage';
import Router from 'next/router';

export const resetEnrolledCourses = () => {
	localforage.removeItem('enrolledCourses');
};

export const setEnrolledCourses = (data) => {
	const { enrolledCourses } = data;
	const enrolledCoursesId = enrolledCourses.map(value => value.id);
	localforage.setItem('enrolledCourses', enrolledCoursesId);
};

// Add a course to enrolledCourses
export const addEnrolledCourses = (courseId) => {
	localforage.getItem('enrolledCourses', (error, value) => {
		if (value) {
			value.push(parseInt(courseId, 10));
			localforage.setItem('enrolledCourses', value);
		} else {
			localforage.setItem('enrolledCourses', [courseId]);
		}
	});
};

// Checks whether a course is enrolled
export const isEnrolled = (courseId, callBack) => {
	localforage.getItem('enrolledCourses', (error, value) => {
		if (value && value.indexOf(parseInt(courseId, 10)) !== -1) {
			callBack(true);
		} else {
			callBack(false);
		}
	});
};

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
