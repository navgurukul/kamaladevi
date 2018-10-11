// Course list
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { fetchApi } from '../services/api';
import { setEnrolledCourses } from '../services/courses';

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
	cardMarginRightBot: {
		marginRight: 25,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor:'pointer',
		[theme.breakpoints.down('sm')]: {
			marginRight: 2.5,
		},
	},
	cardMarginLeftBot: {
		marginLeft: 25,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			marginRight: 2.5,
		},
		cursor:'pointer'
	},
	cardGrid: {
		marginBottom: 10,
	},
	avbCoursesContainer: {
		paddingTop: theme.spacing.unit * 5,
	},
	containerHeadingItem: {
		paddingBottom: theme.spacing.unit * 2,
	},
	enrolledProgress: {
		paddingTop: theme.spacing.unit,
	},
	dividerContainer: {
		paddingTop: theme.spacing.unit * 2,
		justifyContent: 'center',
	},
	progress: {
		margin: theme.spacing.unit * 2,
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
					<Grid container spacing={0}>
						<Grid item xs={12} className={classes.containerHeadingItem}>
							{enrolledCourses.length ? (
								<Typography variant="headline" component="h2" align="center" gutterBottom>
								Courses jis mein aap enrolled hai
								</Typography>
							) : ''}
						</Grid>
						{/* Enrolled courses list  */}
						{enrolledCourses.map((value, key) => (
							<Grid item xs={6} key={value.id} className={classes.cardGrid}>
								<Link
									href={{
										pathname: '/course',
										query: { id: value.id },
									}}
									>
								<Card
									variant="raised"
									className={
										(key % 2 === 0)
											? classes.cardMarginRightBot
											: classes.cardMarginLeftBot}
								>
									<CardContent>
										<Typography variant="headline" component="h2">
											{value.name}
										</Typography>
										<Typography color="textSecondary">
											{value.shortDescription}
										</Typography>
										<div className={classes.enrolledProgress}>
											<LinearProgress variant="determinate" value={(value.completedSubmissions * 100) / value.totalExercises} />
										</div>
									</CardContent>
								</Card>
							</Link>
							</Grid>
						))}
					</Grid>

					<Grid container spacing={0} className={classes.dividerContainer}>
						<Grid item xs={6}>
							<Divider />
						</Grid>
					</Grid>

					{/* Available courses list */}
					<Grid container spacing={0} className={classes.avbCoursesContainer}>
						<Grid item xs={12} className={classes.containerHeadingItem}>
							{availableCourses.length ? (
								<Typography variant="headline" component="h2" align="center" gutterBottom>
								Aap yeh courses mein enroll kar skte hai
								</Typography>
							) : ''}
						</Grid>
						{availableCourses.map((value, key) => (
							<Grid item xs={6} key={value.id} className={classes.cardGrid}>
								<Link
									href={{
										pathname: '/course',
										query: { id: value.id },
									}}
									>
									<Card
										variant="raised"
										className={
											(key % 2 === 0)
											? classes.cardMarginRightBot
											: classes.cardMarginLeftBot}
											>
											<CardContent>
												<Typography variant="headline" component="h2">
													{value.name}
												</Typography>
												<Typography color="textSecondary">
													{value.shortDescription}
												</Typography>
											</CardContent>

										</Card>
								</Link>
							</Grid>
						))}
					</Grid>

					{/* Facilitating courses list */}
					<Grid container spacing={0} className={classes.avbCoursesContainer}>
						<Grid item xs={12} className={classes.containerHeadingItem}>
							{facilitatingCourses.length ? (
								<Typography variant="headline" component="h2" align="center" gutterBottom>
								Aap yeh courses ko facilitate kar rahe hai
								</Typography>
							) : ''}
						</Grid>
						{facilitatingCourses.map((value, key) => (
							<Grid item xs={6} key={value.id} className={classes.cardGrid}>
								<Card
									variant="raised"
									className={
										(key % 2 === 0)
											? classes.cardMarginRightBot
											: classes.cardMarginLeftBot}
								>
									<CardContent>
										<Typography variant="headline" component="h2">
											{value.name}
										</Typography>
										<Typography color="textSecondary">
											{value.shortDescription}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
