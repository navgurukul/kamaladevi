
//Peer review system
import React from 'react';
import withRoot from '../src/with-root';
import Header from '../src/components/header';
import PeerReviewSidenav from '../src/components/peer-review-sidenav';

const PeerReview = () => (
	<div>
		<Header />
    <PeerReviewSidenav />
	</div>

);

export default withRoot(PeerReview);
