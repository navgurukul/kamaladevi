import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import CourseListCard from './course-list-category-card';


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	containerHeadingItem: {
		paddingBottom: theme.spacing.unit * 2,
	},
	avbCoursesContainer: {
		paddingTop: theme.spacing.unit * 5,
	},
	cardMargin: {
		marginRight: 25,
		minHeight: theme.spacing.unit * 16,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			marginRight: 2.5,
			wordWrap: 'break-word',
		},
	},
});

const CourseListCategoryView = (props) => {
	const {
		classes,
	 	headline,
		courses,
		showProgress,
		paddingTop,
	} = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={paddingTop ? classes.avbCoursesContainer : ''}>
				<Grid item xs={12} className={classes.containerHeadingItem}>
					<Typography variant="headline" component="h2" align="center" gutterBottom>
						{headline}
					</Typography>
				</Grid>
				{courses.map((value, key) => (
					<CourseListCard
						key={value.id}
						value={value}
						index={key}
						showProgress={showProgress}
					/>
				))}
			</Grid>
		</div>
	);
};

CourseListCategoryView.propTypes = {
	classes: PropTypes.object.isRequired,
	headline: PropTypes.string.isRequired,
	courses: PropTypes.arrayOf(PropTypes.object).isRequired,
	showProgress: PropTypes.bool,
	paddingTop: PropTypes.bool,
};

CourseListCategoryView.defaultProps = {
	showProgress: false,
	paddingTop: false,
};
export default withStyles(styles)(CourseListCategoryView);
