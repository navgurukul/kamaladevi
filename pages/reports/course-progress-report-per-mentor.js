import React from 'react';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import withRoot from '../../src/with-root';
import Header from '../../src/components/header';
import CourseProgressReport from '../../src/components/reports/course-progress-report/mentor-course-report';
import {withGATag} from '../../src/with-ga-tag';

class CourseProgressReportPerMentor extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log('Mentee courses reported new component');
	}

	render() {
		// { userList, coursesReports } = this.state;
		return(
			<div>
				<Header searchHidden={true}/>
				<CourseProgressReport />
			</div>
		);
		
	}
}

CourseProgressReportPerMentor.propTypes = {
	router: PropTypes.object.isRequired,
};

export default withGATag(withRoot(withRouter(CourseProgressReportPerMentor)));
