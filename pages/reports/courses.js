// This is main entry page for route '/course'
import React from 'react';
import localforage from 'localforage';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import { fetchApi } from '../../src/services/api';
import withRoot from '../../src/with-root';
import Header from '../../src/components/header';
import MenteeCoursesDetailReports from '../../src/components/reports/mentee-courses-report'

class MenteeCoursesReport extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount(){
		localforage.getItem('authResponse')
			.then(value => {
				const { jwt } =  value;
				// return fetchApi(`/courses/${courseId}/delete`, {}, { Authorization: jwt }, 'delete')
			})
  }

	render() {

		return (
			<div>
				<Header/ >
				<MenteeCoursesDetailReports />
			</div>
		);
	}
}

MenteeCoursesReport.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withRoot(withRouter(MenteeCoursesReport));
