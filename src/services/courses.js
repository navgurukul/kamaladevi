import localforage from 'localforage';
import { fetchApi } from '../services/api';

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

// Make enroll API call, and add that course to enrolledCourses
export const enrollCourse = async (courseId, callBack) => {
	localforage.getItem('authResponse', (error, value) => {
		const { jwt } = value;
		fetchApi(`/courses/${courseId}/enroll`, {}, { Authorization: jwt }, 'post')
			.then((response) => {
				if (response.data.enrolled) {
					callBack(true);
					addEnrolledCourses(courseId);
				}
			});
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
