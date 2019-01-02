import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';

import { BACKEND_URL } from '../../services/config';

const styles = () => ({
	utterances: {
		border: 'none',
		height: '100%',
	},
});

const Utterances = (props) => {
	const { classes } = props;
	const utterancesScript = 'https://utteranc.es/client.js';
	const utterancesUrl = `https://utteranc.es/utterances.html?src=${utterancesScript}&async=`;
	const { asPath, pathname } = props.router;
	const { title } = document;
	const repo = 'navgurukul/newton';
	const currentUrl = `${BACKEND_URL}${asPath}`;
	const pageDetail = `url=${currentUrl}&origin=${BACKEND_URL}&pathname=${pathname}&title=${title}`;

	const url = `${utterancesUrl}&repo=${repo}&crossorigin=anonymous&issue-term=title&${pageDetail}&description=&og:title=`;

	return <iframe title={title} className={classes.utterances} src={url} />;
};

Utterances.propTypes = {
	classes: PropTypes.object.isRequired,
	router: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Utterances));
