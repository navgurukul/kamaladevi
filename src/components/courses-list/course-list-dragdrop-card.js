import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import { withStyles } from '@material-ui/core/styles';


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
		paddingTop: theme.spacing.unit * 1,
		marginLeft: 25,
		width: 50,
	},
	deleteCourseButton: {
		cursor: 'pointer',
		float: 'right',
		'&:hover': {
			backgroundColor: theme.palette.error.main,
		},
		'&:select': {
			backgroundColor: theme.palette.error.dark,
		},
	},
	cardMargin: {
		height: '100%',
		display: 'flex',
		width: '100%',
		minHeight: theme.spacing.unit * 17,
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			minHeight: theme.spacing.unit * 18,
			marginRight: 2.5,
			wordWrap: 'break-word',
		},
	},
	deleteIcon: {
		fontSize: theme.spacing.unit * 2,
	},
	headline: {
		fontSize: theme.spacing.unit * 2.2,
		[theme.breakpoints.down('md')]: {
			fontSize: theme.spacing.unit * 2,
		},
	},
});

const CourseListCard = (props) => {
	const {
		classes,
		value,
		index,
		displayDeleteNotification,
	} = props;

	return (
		<Grid item xs={12} className={classes.root}>
			<Card
				variant="raised"
				className={`${classes.cardMargin} ${classes.deleteCourse}`}
			>
				<Grid>
					<IconButton
						onClick={() => displayDeleteNotification(index)}
						title="Delete This Course?"
						className={classes.deleteCourseButton}
					>
						<CloseIcon className={classes.deleteIcon} />
					</IconButton>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={2} sm md={2}>
						<img alt={value.name} className={classes.image} src={value.logo} />
					</Grid>
					<Grid item xs={10} sm={12} md={10} container className={classes.cardContent}>
						<CardContent>
							<Typography variant="headline" className={classes.headline}>
								{value.name}
							</Typography>
							<Typography color="textSecondary">
								{value.shortDescription}
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
};

CourseListCard.propTypes = {
	classes: PropTypes.object.isRequired,
	value: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	displayDeleteNotification: PropTypes.func,
};


CourseListCard.defaultProps = {
	displayDeleteNotification: null,
};
export default withStyles(styles)(CourseListCard);
