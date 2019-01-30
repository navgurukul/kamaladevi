
// Peer review system
import React from 'react';
import Router, { withRouter } from 'next/router';
import localforage from 'localforage';
import withRoot from '../src/with-root';
import Header from '../src/components/header';
import { fetchApi } from '../src/services/api';
import { filterPendingAssignment } from '../src/services/utils';


import AssignmentsReview from '../src/components/assignment-review';
import AssignmentsReviewCompleted from '../src/components/assignment-review/assignment-review-completed';

class AssignmentReview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			assignments: [],
			showLoader: true
		};
	}
	componentDidMount() {
		this.loadAssignments();
	}

	async loadAssignments() {
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
			response = await fetchApi('/assignments/peerReview', {}, { Authorization: jwt });
		} catch (e) {
			// TODO: Handle network error cases
			return;
		}
		let assignmentsToReview = response.data;
		assignmentsToReview = filterPendingAssignment(assignmentsToReview);
		this.setState({
			assignments: assignmentsToReview,
			showLoader: false
		});
	}

	render() {
		const { assignments ,showLoader} = this.state;
		if (assignments.length === 0) {
			return (
				<div>
					<Header />
					<AssignmentsReviewCompleted showLoader={showLoader} />
				</div>
			);
		} else {

			return (
				<div>
					<Header />
					<AssignmentsReview showLoader={showLoader} assignments={assignments} />
				</div>
			);
		}
	}
}

export default withRoot(withRouter(AssignmentReview));
