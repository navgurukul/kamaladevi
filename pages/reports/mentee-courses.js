// This is main entry page for route '/course'
import React from 'react';
import localforage from 'localforage';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { authenticatedFetchAPI } from '../../src/services/api';
import { getMenteeCoursesTable } from '../../src/services/utils';

import withRoot from '../../src/with-root';
import Header from '../../src/components/header';
import MenteeCoursesReports from '../../src/components/reports/mentee-courses-report'

class MenteeCoursesReport extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			coursesReports:[],
			userList:[]
		};
	}
	componentDidMount() {
	 	authenticatedFetchAPI(`/reports/mentors/getMenteesCourseReport`)
				.then((response) => {
						let {userList, data:coursesReports} = response;
						coursesReports = getMenteeCoursesTable(coursesReports, userList)
						// convert the data into a 2-D dictionary
						// console.log(userList)
						this.setState({
							coursesReports,
							userList
						});
				})
	}

	render() {
		const { userList, coursesReports } = this.state;

		return (
			<div>
				<Header />
				<MenteeCoursesReports
					mentees={userList}
					coursesReports={coursesReports}
					/>
			</div>
		);
	}
}

MenteeCoursesReport.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withRoot(withRouter(MenteeCoursesReport));
