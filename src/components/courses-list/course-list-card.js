import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
		marginBottom: 10,
		flexGrow: 1,
	},
	cardContent:{
		display: 'inline',
		width: '120%',
		[theme.breakpoints.down('sm')]: {
      marginLeft:1
    },
	},
	image:{
		paddingTop:theme.spacing.unit * 3,
		marginLeft: 25,
		width: 50,
	},
	enrolledProgress: {
		paddingTop: theme.spacing.unit,
	},
	deleteCourseButton:{
		cursor:"pointer",
		float:"right",
		cursor:"unset",
	},
	deleteIcon:{
		fontSize:theme.spacing.unit*2
	}
});

const CourseListCard = (props) => {
	const {
				classes,
				value,
				showProgress,
				index,
				cardClass,
				gridSize,
				showDelete,
				displayDeleteNotification,
			} = props;
	if (showDelete){
		return (
			<Grid item xs={gridSize} className={classes.root}>
        <Card
          variant="raised"
					className={`${cardClass} ${classes.deleteCourse}`}
        	>
					<Grid>
						<IconButton
							color="primary"
							onClick={() => displayDeleteNotification(index)}
							title="Delete This Course?"
							className={classes.deleteCourseButton}
							>
							<CloseIcon className={classes.deleteIcon} />
						</IconButton>
					</Grid>
					<Grid container spacing={16}>
							<Grid	item xs={2} sm md={2}>
									<img className={classes.image} src={value.logo} />
							</Grid>
							<Grid item xs={10} sm={12} md={10} container className={classes.cardContent}>
									<CardContent>
											<Typography variant="headline" component="h2">
												{value.name}
											</Typography>
											<Typography color="textSecondary">
												{value.shortDescription}
											</Typography>
											{
												showProgress?
												<div className={classes.enrolledProgress}>
													<LinearProgress
														variant="determinate"
														value={(value.completedSubmissions * 100) / value.totalExercises}
														/>
												</div>
												:null
											}
									</CardContent>
							</Grid>
					</Grid>
        </Card>
      </Grid>
		);
	} else {
			return (
				<Grid item xs={gridSize} className={classes.root}>
					<Link
						href={{
							pathname: '/course',
							query: { id: value.id },
						}}
						>
						<Card
							variant="raised"
							className={cardClass}
							>
							<Grid container spacing={16}>
								<Grid	item xs={2} sm md={2}>
									<img className={classes.image} src={value.logo} />
								</Grid>
								<Grid item xs={10} sm={12} md={10} container className={classes.cardContent}>
									<CardContent>
										<Typography variant="headline" component="h2">
											{value.name}
										</Typography>
										<Typography color="textSecondary">
											{value.shortDescription}
										</Typography>
										{
											showProgress?
											<div className={classes.enrolledProgress}>
												<LinearProgress
													variant="determinate"
													value={(value.completedSubmissions * 100) / value.totalExercises}
													/>
											</div>
											:null
										}
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Link>
				</Grid>
			);
		}
}

CourseListCard.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.object.isRequired,
	showProgress: PropTypes.bool,
	index: PropTypes.number.isRequired,
	cardClass: PropTypes.string.isRequired,

	// drag and drop
	gridSize: PropTypes.number,
	showDelete: PropTypes.bool,
	displayDeleteNotification: PropTypes.func
};


CourseListCard.defaultProps = {
	showProgress: false,
	gridSize: 6,
	showDelete:false,
	displayDeleteNotification:null
}
export default withStyles(styles)(CourseListCard);
