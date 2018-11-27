// This is main entry page for route '/home'
import React from 'react';

import withRoot from '../src/with-root';
import CourseList from '../src/components/courses-list';
import Header from '../src/components/header';

const Home = () => (
	<div>
		<Header />
		<CourseList />
	</div>
);

export default withRoot(Home);
