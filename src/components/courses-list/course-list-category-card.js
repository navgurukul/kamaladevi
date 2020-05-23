import React, { Fragment } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
	root: {
		marginBottom: 10,
		flexGrow: 1,
	},
	cardContent: {
		display: 'inline',
		width: '120%',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 1,
		},
	},
	image: {
		marginRight: 10,
		width: '100%',
		[theme.breakpoints.up('xl')]: {
			paddingTop: theme.spacing.unit,
		},
		[theme.breakpoints.down('sm')]: {
		},
	},
	enrolledProgress: {
		paddingTop: theme.spacing.unit,
	},
	deleteCourseButton: {
		cursor: 'pointer',
		float: 'right',
		cursor: 'unset',
	},
	deleteIcon: {
		fontSize: theme.spacing.unit * 2,
	},
	media: {
		height: 190,
	},
	cardMargin: {
		marginLeft: theme.spacing.unit * 1,
		marginRight: theme.spacing.unit * 2,
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing.unit * 1,
			marginRight: theme.spacing.unit * 1,
			// wordWrap: 'break-word',
		},
	},
	headline: {
		fontSize: theme.spacing.unit * 2,
		[theme.breakpoints.down('md')]: {
			fontSize: theme.spacing.unit * 1.8,
		},
	},
});

const CourseListCard = (props) => {
	const {
		classes,
		value,
		showProgress,
		index,
	} = props;


	return (
		<Fragment >
		<Grid item md={4} xs={6} className={classes.root}>
				<Card
					variant="contained"
					className={classes.cardMargin}
				>
				<img className={classes.image} src={`../../../static/coursesimages/${value}`} />
					<Grid container>
						<Grid item xs={9} sm={10} md={10}>
							<CardContent >
								<Typography variant="headline" className={classes.headline}>
									{value.name}
								</Typography>
								<Typography color="textSecondary">
									{value.shortDescription}
								</Typography>
								{
									showProgress ?
										<div className={classes.enrolledProgress}>
											<LinearProgress
												variant="determinate"
												value={(value.completedSubmissions * 100) / value.totalExercises}
											/>
										</div>
										: null
								}
								<Link
									href={{
										pathname: '/course',
										query: { id: value.id },
									}}
									
								>
								<Button style={{marginTop:"4px"}} variant="outlined" color="primary">
									learn 
								</Button>
								</Link>
							</CardContent>
						</Grid>
					</Grid>
				</Card>

		</Grid>
	</Fragment>
	);
};

CourseListCard.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.object.isRequired,
	showProgress: PropTypes.bool,
	index: PropTypes.number.isRequired,
};


CourseListCard.defaultProps = {
	showProgress: false,
};
export default withStyles(styles)(CourseListCard);
