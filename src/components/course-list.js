// Course list
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { fetchApi } from '../services/api';

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
	button: {
	},
	card: {
		backgroundColor: 'white',
	},
});


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
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.root}>
				{enrolledCourses != [] ? (
					<h2>Aapke Courses</h2>
				) : ''}
				{enrolledCourses.map(value => (
					<div key={value.id}>
						<Card variant="raised" className={classes.card}>
							<CardContent>
								<Typography variant="headline" component="h2">
									{value.name}
								</Typography>
								<Typography color="textSecondary">
									{value.shortDescription}
								</Typography>
								<Typography component="p">
									<LinearProgress variant="determinate" value={value.daysSinceEnrolled * 100 / value.daysToComplete} />
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
					</div>
				))}

				{availableCourses != [] ? (
					<h2>Aap yeh courses mein enroll kar skte hai</h2>
				) : ''}
				{availableCourses.map(value => (
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
					</div>
				))}

				{facilitatingCourses == [] ? (
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
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
