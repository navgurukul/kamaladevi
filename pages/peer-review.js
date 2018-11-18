
//Peer review system
import React from 'react';
import withRoot from '../src/with-root';
import Header from '../src/components/header';
import PeerReview from '../src/components/peer-review/Peer-Review';


const PeerReviewPage = () => (
	<div>
		<Header/>
    	<PeerReview />
	</div>

);

export default withRoot(PeerReviewPage);
