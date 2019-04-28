// This is main entry page for route '/'
import React from 'react';

import withRoot from '../src/with-root';
import LandingPage from '../src/components/landing-page';
import Header from '../src/components/header';

const Index = () => (
	<div>
		<Header searchHidden={true}/>
		<LandingPage />
	</div>

);

export default withRoot(Index);
