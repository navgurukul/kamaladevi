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

// submit student assignment
export const exerciseSubmission = async (courseId, exerciseId, notes) => {
	localforage.getItem('authResponse', (error, value)=>{
		const { jwt } =  value;

	  fetchApi(`/courses/${courseId}/exercise/${exerciseId}/submission`, {notes}, { Authorization: jwt }, 'post')
			.then((response) => {
					console.log(response);
			})
			.catch((error) => {
					console.log(error);
			});
	});
};

// Submit the feedback for student assignment
export const reviewerFeedbackSubmission = (notes,isApprove,submissionId)=>{
	return localforage.getItem('authResponse')
		.then(value => {
			const {jwt} =value;
			const payload = {
				notes:notes,
				approved:isApprove
			}
			return fetchApi(`/assignments/peerReview/${submissionId}`,payload,{Authorization:jwt},'put')
		})
	}


// save course new sequenceNum
export const saveCoursesSequence = (payload) => {
	return localforage.getItem('authResponse')
		.then(value => {
			const { jwt } =  value;
		  return fetchApi(`/courses/sequenceNum`, {"courses": payload}, { Authorization: jwt }, 'put')
		})
};

// delete a course
export const deleteCourseAPI = (courseId) => {
	return localforage.getItem('authResponse')
		.then(value => {
			const { jwt } =  value;
			return fetchApi(`/courses/${courseId}/delete`, {}, { Authorization: jwt }, 'delete')
		})
};

// get the student old exercise solution submision details
export const getExerciseSubmission = async (courseId, exerciseId) => {
	let responseData;
	const { jwt } = await localforage.getItem('authResponse');
	const query = {
			submissionUsers: 'current',
			submissionState: 'all',
	};

	await fetchApi(`/courses/${courseId}/exercise/${exerciseId}/submission`, query , { Authorization: jwt })
			.then( resp => {
					responseData = resp.data.data;
			})
	return responseData;
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

//gets gihtub Link for each exercise
	export const getExerciseDetailFromSlug = (slug, exercises) => {
	for (let exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
		if (exercises[exerciseId].slug === slug) {
			return exercises[exerciseId];
		}
		if (exercises[exerciseId].childExercises.length) {
			for (
				let childExerciseId = 0;
				childExerciseId < exercises[exerciseId].childExercises.length;
				childExerciseId += 1) {
				if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
					return exercises[exerciseId].childExercises[childExerciseId];
				}
			}
		}
	}
};

// Get location in exercises list for currently active exercise
export const getExerciseIdFromSlug = (slug, exercises) => {
	for (let exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
		if (exercises[exerciseId].slug === slug) {
			return {
				openExerciseId: exerciseId,
				selectedvalue: exercises[exerciseId].id,
				selectedchildExercise: null,
			};
		}
		if (exercises[exerciseId].childExercises.length) {
			for (
				let childExerciseId = 0;
				childExerciseId < exercises[exerciseId].childExercises.length;
				childExerciseId += 1) {
				if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
					return {
						openExerciseId: exerciseId,
						selectedvalue: exercises[exerciseId].id,
						selectedchildExercise: exercises[exerciseId].childExercises[childExerciseId].id,
					};
				}
			}
		}
	}
};

// get the Title out of slug for the page
export const getTitleFromSlug = (slug) => {
	if (slug){
		var title = slug.replace(/[-__/_]/g, ' ')
		title = title[0].toUpperCase() + title.slice(1, title.length);
		return title;
	}
};

const getNextExerciseSlug = (exercises, exerciseId) => {
	try {
		// Return if there is a next exercise
		return exercises[exerciseId + 1].slug;
	} catch (e) {
		// no-op
	}
};

const getNextChildSlug = (exercises, exerciseId, childExerciseId) => {
	try {
		// Return if there is next child
		return exercises[exerciseId].childExercises[childExerciseId + 1].slug;
	} catch (e) {
		try {
			// Return if there is a next exercise
			return exercises[exerciseId + 1].slug;
		} catch (e_) {
			// no-op
		}
	}
};

const getPreviousExerciseSlug = (exercises, exerciseId) => {
	try {
		const childExerciseListLength = exercises[exerciseId - 1].childExercises.length;
		if (childExerciseListLength) {
			return exercises[exerciseId - 1].childExercises[childExerciseListLength - 1].slug;
		} else {
			return exercises[exerciseId - 1].slug;
		}
	} catch (e) {
		// no-op
	}
};

const getPreviousChildSlug = (exercises, exerciseId, childExerciseId) => {
	if (childExerciseId === 0) {
		return exercises[exerciseId].slug;
	} else {
		return exercises[exerciseId].childExercises[childExerciseId - 1].slug;
	}
};

// Get slug of the next course to navigate using next button
export const getSlugOfNextCourse = (slug, exercises) => {
	for (let exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
		if (exercises[exerciseId].slug === slug) {
			// This is the slug for first level exercise
			if (exercises[exerciseId].childExercises.length) {
				// If it has child exercises, return the slug for next child exercise
				return exercises[exerciseId].childExercises[0].slug;
			} else {
				// Return the slug for the next exercise if it exist
				return getNextExerciseSlug(exercises, exerciseId);
			}
		} else if (exercises[exerciseId].childExercises.length) {
			for (
				let childExerciseId = 0;
				childExerciseId < exercises[exerciseId].childExercises.length;
				childExerciseId += 1) {
				if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
					return getNextChildSlug(exercises, exerciseId, childExerciseId);
				}
			}
		} else {
			// no-op
		}
	}
};

// sort the courses by sequenceNum
export const sortCoursesBySequenceNum = courses => {
	let sortedCourses = Array.from(courses);
	sortedCourses.sort((a,b)=>{
		return a.sequenceNum - b.sequenceNum;
	});
	return sortedCourses;
}
// Get slug of the previous course to navigate using next button
export const getSlugOfPreviousCourse = (slug, exercises) => {
	for (let exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
		if (exercises[exerciseId].slug === slug) {
			return getPreviousExerciseSlug(exercises, exerciseId);
		} else if (exercises[exerciseId].childExercises.length) {
			for (
				let childExerciseId = 0;
				childExerciseId < exercises[exerciseId].childExercises.length;
				childExerciseId += 1) {
				if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
					return getPreviousChildSlug(exercises, exerciseId, childExerciseId);
				}
			}
		}
	}
};

// filters the pending assignment from the list
export const filterPendingAssignment = (assignments) => {
	let pendingAssignmentList = [];
	for (let i = 0; i < assignments.length; i++) {
		let assignment = assignments[i];
		if(!assignment.completed && assignment.state === 'pending'){
			pendingAssignmentList.push(assignment)
		}
	}
	return pendingAssignmentList
}
