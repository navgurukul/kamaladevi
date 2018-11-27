
// Peer review system
import React from 'react';
import Router, { withRouter } from 'next/router';
import localforage from 'localforage';
import withRoot from '../src/with-root';
import Header from '../src/components/header';
import { fetchApi } from '../src/services/api';
import { filterPendingAssignment } from '../src/services/courses';


import AssignmentsReview from '../src/components/assignment-review';


const loadAssignments = async (setAssignmentCallBack) => {
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
		response = await fetchApi(`/assignments/peerReview`, {}, { Authorization: jwt });
	} catch (e) {
		// TODO: Handle network error cases
		return;
	}
	let assignmentsToReview = response.data.data;
	assignmentsToReview = filterPendingAssignment(assignmentsToReview);
	setAssignmentCallBack(assignmentsToReview);
}

class AssignmentReview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			assignments:[]
		}
	}
	componentDidMount() {
		loadAssignments(assignments => this.setState({assignments}));
	}

	render() {
		const { assignments } = this.state;
		console.log(assignments);
		return (
			<div>
				<Header/>
		   	<AssignmentsReview assignments={assignments} />
			</div>

		);
	}
}

export default withRoot(withRouter(AssignmentReview));
