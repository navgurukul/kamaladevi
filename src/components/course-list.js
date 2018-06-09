// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { fetchApi } from '../services/api';

const styles = theme => ({
	rootLoader: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
	},
	cardGrid: {
		marginBottom: 10,
	},
	cardAction: {
		justifyContent: 'flex-end',
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
			enrolledCourses: [], // eslint-disable-line react/no-unused-state
			facilitatingCourses: [], // eslint-disable-line react/no-unused-state
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
						<Grid	item xs={12} >
							{enrolledCourses !== [] ? (
								<Typography variant="headline" component="h2" align="center" gutterBottom>
								Aapke Courses
								</Typography>
							) : ''}
						</Grid>
						{/* Enrolled courses list  */}
						{enrolledCourses.map(value => (
							<Grid	item xs={6} key={value.id}>
								<Card variant="raised" className={classes.card}>
									<CardContent>
										<Typography variant="headline" component="h2">
											{value.name}
										</Typography>
										<Typography color="textSecondary">
											{value.shortDescription}
										</Typography>
										<Typography component="p">
											<LinearProgress variant="determinate" value={(value.completedSubmissions * 100) / value.totalExercises} />
										</Typography>
									</CardContent>
									<CardActions aligh="end">
										<Button
											size="small"
											variant="raised"
											color="primary"
											className={classes.button}
											onClick={() => Router.push({
												pathname: '/course',
												query: { id: value.id },
											})}
										>
                  Preview
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
					{/* Available courses list */}
					<Grid container spacing={0}>
						<Grid	item xs={12} >
							{availableCourses !== [] ? (
								<Typography variant="headline" component="h2" align="left" gutterBottom>
								Aap yeh courses mein enroll kar skte hai
								</Typography>
							) : ''}
						</Grid>
						{availableCourses.map((value, key) => (
							<Grid	item xs={6} key={value.id} className={classes.cardGrid}>
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
									<CardActions aligh="end" className={classes.cardAction}>
										<Button
											size="small"
											variant="raised"
											color="primary"
											onClick={() => Router.push({
												pathname: '/course',
												query: { id: value.id },
											})}
										>
                  Preview
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
						{/* Facilitating courses list */}
						{facilitatingCourses === [] ? (
							<h2>Aap inn courses ko facilitate kar rahe hain</h2>
						) : facilitatingCourses.size}
						{facilitatingCourses.map(value => (
							<div key={value.id} >
								<Card variant="raised" className={classes.card}>
									<CardContent>
										<Typography variant="headline" component="h2">
											{value.name}
										</Typography>
										<Typography color="textSecondary">
											{value.shortDescription}
										</Typography>
									</CardContent>
									{/* <CardActions aligh="end"> */}
									{/* <Button */}
									{/* size="small" */}
									{/* variant="raised" */}
									{/* color="primary" */}
									{/* className={classes.button} */}
									{/* onClick={() => Router.push({ */}
									{/* pathname: '/course', */}
									{/* query: { id: value.id }, */}
									{/* })} */}
									{/* > */}
									{/* Preview */}
									{/* </Button> */}
									{/* </CardActions> */}
								</Card>
							</div>
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
