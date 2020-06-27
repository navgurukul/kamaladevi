import React from 'react';
import Router, { withRouter } from 'next/router';
import {withGATag} from '../../src/with-ga-tag';
import withRoot from '../../src/with-root';
import Header from '../../src/components/header';
import ProgressPerCourseTable from '../../src/components/reports/course-progress/progress-per-course';

class ProgressPerCourse extends React.Component {
	constructor(props) {
		super(props);
		}
		
	render() {
		const courseId = this.props.router.query["courseId"];
		return(
			<div>
				<Header searchHidden={true}/>		
				<ProgressPerCourseTable courseId={courseId}/>
			</div>
		);
		
	}
}

export default withGATag(withRoot(withRouter(ProgressPerCourse)));