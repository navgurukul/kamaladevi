// Course list
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';

import { fetchApi } from '../../services/api';
import { setEnrolledCourses } from '../../services/courses';

import CourseListCategory from './course-list-category';
import CourseListDragAndDrop from './course-list-dragdrop';

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
	courseEditButton:{
		display:'block',
		float:'right',
		width: theme.spacing.unit * 30,
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			fontSize: theme.spacing.unit * 2
		},
	},
	goBackButton:{
		float:'left',
		width: theme.spacing.unit * 15
	},
	courseSequenceEditRootContent:{
		width:'40%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
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
			editCourseSequence:false,
			availableCourses: [],
			// For future uses
			enrolledCourses: [],
			facilitatingCourses: [],
		};
	}

	stopCourseSequenceEditing = () => {
		this.setState({
			editCourseSequence: false,
		});
	}

	componentDidMount() {
		localforage.getItem('authResponse', (error, value) => {
			if (!error) {
				if (value === null) {
					Router.replace('/');
				} else {
					const { jwt } = value;
					console.log(value);
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
		const isAdmin = true;
		const {
			availableCourses, enrolledCourses, facilitatingCourses, prefetchedData, editCourseSequence
		} = this.state;
		if (!prefetchedData) {
			return (
				<div className={classes.rootLoader}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}

		if (editCourseSequence === false){
			return (
				<div className={classes.root}>
					<div className={`${classes.rootContent} ${classes.courseSequenceEditRootContent}`}>
						<Button
							variant="outlined"
							color="primary"
							className={classes.goBackButton}
							onClick={this.stopCourseSequenceEditing}
							>
							{'<< Go Back'}
						</Button>
						<CourseListDragAndDrop
							headline={'Aapke courses'}
							courses={[...availableCourses, ...enrolledCourses]}
							paddingTop
							/>
					</div>
				</div>
			);
		}
		// editCourseSequence false ho toh courselist display kardo
		// agar admin hai toh edit sequence button display kardo

		return (

			<div className={classes.root}>
				<div className={classes.rootContent}>
					{
						isAdmin?
						<div>
							<Button
								variant="outlined"
								color="primary"
								className={classes.courseEditButton}
								onClick={()=>{
									this.setState({editCourseSequence:true});
								}}
								>
								Edit Course Sequence
							</Button>
						</div>
						:null
					}
					{/* Enrolled courses list  */}
					{
						enrolledCourses.length?
						<CourseListCategory
							headline={'Courses jis mein aap enrolled hai'}
							courses={enrolledCourses}
							showProgress
							/>
						:''
					}

					<Grid container spacing={0} className={classes.dividerContainer}>
						<Grid item xs={6}>
							<Divider />
						</Grid>
					</Grid>

					{/* Available courses list */}
					{
						availableCourses.length?
						<CourseListCategory
						headline={'Aap yeh courses mein enroll kar skte hai'}
						courses={availableCourses}
						paddingTop
						/>
						:''
					}

					{/* Facilitating courses list */}
					{
						facilitatingCourses.length?
						<CourseListCategory
							headline={'Aap yeh courses ko facilitate kar rahe hai'}
							courses={facilitatingCourses}
							paddingTop
							/>
						:''
					}

				</div>
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
