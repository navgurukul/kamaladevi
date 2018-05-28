// This is main entry page for route '/course'
import React from 'react';

import withRoot from '../src/with-root';
import CourseDetail from '../src/components/course-detail';
import Header from '../src/components/header';

const Home = () => (
	<div>
		<Header />
		<CourseDetail />
	</div>
);

export default withRoot(Home);
