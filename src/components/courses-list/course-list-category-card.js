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
		width: "50px",
		[theme.breakpoints.up('xl')]: {
      	width: "100px",
				paddingTop:theme.spacing.unit
    },
		[theme.breakpoints.down('sm')]: {
      	width: "100px",
    },
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
	},
	cardMargin: {
		marginRight:theme.spacing.unit*3,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor:'pointer',
		[theme.breakpoints.down('sm')]: {
			marginRight: 2.5,
			// wordWrap: 'break-word',
		},
	},
	headline:{
		fontSize:theme.spacing.unit * 2,
		[theme.breakpoints.down('md')]: {
			fontSize:theme.spacing.unit*1.8
		},
	}
});

const CourseListCard = (props) => {
	const {
				classes,
				value,
				showProgress,
				index,
			} = props;


	return (
		<Grid item md={4} xs={6} className={classes.root}>
			<Link
				href={{
					pathname: '/course',
					query: { id: value.id },
				}}
				>
				<Card
					variant="raised"
					className={classes.cardMargin}
					>
					<Grid container>
						<Grid	item xs={2} sm md>
							<img className={classes.image} src={value.logo} />
						</Grid>
						<Grid item xs={10} sm={12} md={10} container className={classes.cardContent}>
							<CardContent>
								<Typography variant="headline" className={classes.headline}>
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
};


CourseListCard.defaultProps = {
	showProgress: false,
}
export default withStyles(styles)(CourseListCard);
