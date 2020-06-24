import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';

import {
	ArrowForward as ArrowForwardIcon,
	Class as ClassIcon,
	SignalCellular0Bar,
	SignalCellular1Bar,
	SignalCellular2Bar,
	SignalCellular3Bar,
	SignalCellular4Bar,
	BorderAll,
} from '@material-ui/icons/';

import { withStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';


const styles = theme => ({
	root: {
		marginBottom: 20,
		flexGrow: 1,
		// height: 175,
	},
	cardContainer: {
		height: "100%",
	},
	cardContent: {
		minWidth: '100%',
		flex: 1,
		display: 'inline',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 1,
		},
	},
	image: {
		width: '100%',
		overflow: 'hidden',
		objectFit: 'cover',
		height: 155,
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
		},
	},
	cardFooter: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'flex-end',
		flex: 1,
		marginTop: 45,
		fontSize: theme.spacing.unit * 2.5,
		[theme.breakpoints.down('md')]: {
			fontSize: theme.spacing.unit * 2,
		},
		'& div': {
			display: 'flex',
		},
		'& svg': {
			fontSize: 18
		},
	},
	headline: {
		fontSize: theme.spacing.unit * 3,
		[theme.breakpoints.down('md')]: {
			fontSize: theme.spacing.unit * 2.5,
		},
	},
	cardInfoContainer: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%',
	},
	subtitleStyle: {
		display: 'flex',
	}
});

const CourseListCard = (props) => {
	const {
		classes,
		value,
		showProgress,
		index,
	} = props;
	const classDifficulty = Math.floor(Math.random() * Math.floor(5));

	const renderDifficulty = difficulty => {
		var DifficultyIcon;
		var text;
		switch (difficulty) {
			case 0:
				DifficultyIcon = SignalCellular0Bar;
				text = "Very Easy";
				break;
			case 1:
				DifficultyIcon = SignalCellular1Bar;
				text = "Easy";
				break;
			case 2:
				DifficultyIcon = SignalCellular2Bar;
				text = "Medium";
				break;
			case 3:
				DifficultyIcon = SignalCellular3Bar;
				text = "Hard";
				break;
			case 4:
				DifficultyIcon = SignalCellular4Bar;
				text = "Very Hard";
				break;
			default:
				DifficultyIcon = SignalCellular0Bar;
				text = "Unrated Difficulty";
		}
		return (
			<div>
				<DifficultyIcon />
				{text}
			</div>
		);
	}

	return (
		<Grid item md={4} xs={6} className={classes.root}>
			<Link
				href={{
					pathname: '/course',
					query: { id: value.id },
				}}
			>
				<Card
					variant="contained"
					className={classes.cardMargin}
				>
					<Grid container direction="column" className={classes.cardContainer}>
						<Grid item xs={2} sm md className={classes.cardContent}>
							<img className={classes.image} src={value.logo} />
						</Grid>
						<Grid item xs={9} sm={10} md={10} container className={classes.cardContent}>
							<CardContent className={classes.cardInfoContainer}>
								<Typography variant="subtitle1" className={classes.subtitleStyle}>
									<ClassIcon />
									Course Category
								</Typography>
								<Typography variant="h6" className={classes.headline}>
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
								<div className={classes.cardFooter}>
									<div>
										{/* Source actual difficulty below */}
										{renderDifficulty(classDifficulty)}
									</div>
									<div>
										Preview
										<ArrowForwardIcon />
									</div>
								</div>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Link>
		</Grid>
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
