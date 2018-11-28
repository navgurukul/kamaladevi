import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';


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
});

const CourseListCard = (props) => {
	const {
				classes,
				value,
				showProgress,
				index,
				cardClass,
				gridSize,
			} = props;
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

CourseListCard.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.object.isRequired,
	showProgress: PropTypes.bool,
	index: PropTypes.number.isRequired,
	cardClass: PropTypes.string.isRequired,
	gridSize: PropTypes.number
};


CourseListCard.defaultProps = {
	showProgress: false,
	gridSize: 6
}
export default withStyles(styles)(CourseListCard);
