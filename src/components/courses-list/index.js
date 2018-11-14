// Course list
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchApi } from '../../services/api';
import { withStyles } from '@material-ui/core/styles';
import { setEnrolledCourses } from '../../services/courses';

import CourseListCategory from './course-list-category';

const styles = theme => ({
	rootLoader: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 50,
	},
	rootContent: {
		paddingTop: theme.spacing.unit * 5,
		display: 'flex',
		flexDirection: 'column',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			paddingLeft: 10,
			paddingRight: 10,
		},
	},
	dividerContainer: {
		paddingTop: theme.spacing.unit * 2,
		justifyContent: 'center',
	},
	progress: {
		margin: theme.spacing.unit * 1,
	},
});
// change rootContent, cardMarginRightBot, cardMarginLeftBot, cardGrid different spacing

class CourseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prefetchedData: false,
			availableCourses: [],
			// For future uses
			enrolledCourses: [],
			facilitatingCourses: [],
		};
	}

	componentDidMount() {
		localforage.getItem('authResponse', (error, value) => {
			if (!error) {
				if (value === null) {
					Router.replace('/');
				} else {
					const { jwt } = value;
					fetchApi('/courses', {}, { Authorization: jwt })
						.then((response) => {
							setEnrolledCourses(response.data);
							this.setState({
								prefetchedData: true,
								...response.data,
							});
						})
						.catch(() => { /* TODO: Handle network error cases */ });
				}
			} else {
				// TODO: Handle error cases
			}
		});
	}

	render() {
		const { classes } = this.props;
		const {
			availableCourses, enrolledCourses, facilitatingCourses, prefetchedData,
		} = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.rootLoader}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.root}>
				<div className={classes.rootContent}>

					{/* Enrolled courses list  */}
					<CourseListCategory
						headline={'Courses jis mein aap enrolled hai'}
						courses={enrolledCourses}
						showProgress
						/>

					<Grid container spacing={0} className={classes.dividerContainer}>
						<Grid item xs={6}>
							<Divider />
						</Grid>
					</Grid>

					{/* Available courses list */}
					<CourseListCategory
						headline={'Aap yeh courses mein enroll kar skte hai'}
						courses={availableCourses}
						paddingTop
						/>

					{/* Facilitating courses list */}
					<CourseListCategory
						headline={'Aap yeh courses ko facilitate kar rahe hai'}
						courses={facilitatingCourses}
						paddingTop
						/>
				</div>
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
