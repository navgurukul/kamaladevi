import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import CourseListCard from './course-list-card';



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
});

const CourseListCategory = (props) => {
	const {
		classes,
	 	headline,
		courses,
		showProgress,
		paddingTop
	} = props;
	return (
		<div className={classes.root}>
			<Grid container spacing={0} className={ paddingTop?classes.avbCoursesContainer:'' }>
				<Grid item xs={12} className={classes.containerHeadingItem}>
					{courses.length ? (
						<Typography variant="headline" component="h2" align="center" gutterBottom>
							{headline}
						</Typography>
					) : ''}
				</Grid>
				{courses.map((value, key) => (
					<CourseListCard key={value.id} value={value} index={key} showProgress={showProgress} />
				))}
			</Grid>
		</div>
	);
}

CourseListCategory.propTypes = {
	classes: PropTypes.object.isRequired,
	headline: PropTypes.string.isRequired,
	courses: PropTypes.arrayOf(PropTypes.object).isRequired,
	showProgress: PropTypes.bool,
	paddingTop: PropTypes.bool
};

CourseListCategory.defaultProps = {
	showProgress: false,
	paddingTop: false
}
export default withStyles(styles)(CourseListCategory);
