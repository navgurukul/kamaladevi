// This is main entry page for route '/'
import React from 'react';

import withRoot from '../src/with-root';
import CreateCourse from '../src/components/course-dependency-system/create-course-dependency';
import Header from '../src/components/header';

const CourseDependencySystem = () => (
	<div>
		<Header searchHidden={true}/>
		<CreateCourse />
	</div>

);

export default withRoot(CourseDependencySystem);
