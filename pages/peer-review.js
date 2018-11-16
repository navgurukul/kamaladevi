
//Peer review system
import React from 'react';
import withRoot from '../src/with-root';
import Header from '../src/components/header';
import Peereview from '../src/components/peer-review/Peer-Review';


const PeerReview = () => (
	<div>
		<Header/>
    	<Peereview />
	</div>

);

export default withRoot(PeerReview);
