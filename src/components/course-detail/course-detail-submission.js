// Submission Details of exercises solution
import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core/styles';

import AlertNotification from '../alert-notification';

import { submitExerciseAPI } from '../../services/api';
import { getExerciseDetailFromSlug } from '../../services/utils';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	cardContent: {
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 0,
		'&:last-child': {
			paddingTop: theme.spacing.unit,
			paddingBottom: theme.spacing.unit * 0.5,
		},
	},
	submitExercise: {
		marginTop: -theme.spacing.unit * 8,
		float: 'right',
		color: 'white',
		borderRadius: '8',
	},
	submissionField: {
		width: '90%',
		[theme.breakpoints.down('sm')]: {
			width: '90%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '80%',
		},
	},
	floatRight: {
		float: 'right',
	},
	typography: {
		display: 'inline',
	},
	reviewer: {
		fontWeight: '400',
	},
});
const getValidationMessage = (submissionType, notes) => {
	let message = '';

	if (submissionType === 'number') {
		message = 'App nich ek integer value hi dal sakte hai.';
	} else if (submissionType === 'text') {
		message = 'App niche 100 se jada character nhi dal sakte hai.';
	} else if (submissionType === 'text_large') {
		message = 'App niche 1500 se jada character nhi dal sakte hai.';
	} else if (submissionType === 'url') {
		message = (!notes.startsWith('http'))
			? 'Link ke aage http:// yea https:// hona chaiye.'
			: 'Apko niche ek url ka link dalna hai.';
	}
	return message;
};

const isSubmissionTypeValid = (submissionType, notes) => {
	if (submissionType === 'number') {
		return typeof notes === 'number';
	} else if (submissionType === 'text') {
		return notes.length <= 100;
	} else if (submissionType === 'text_large') {
		return notes.length <= 1500;
	} else if (submissionType === 'url') {
		if (!notes.startsWith('http')) {
			return false;
		} else {
			/* eslint-disable no-useless-escape */
			const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
			return notes.match(urlRegex) != null;
		}
	}
	return true;
};


class CourseDetailSubmission extends React.Component {
	constructor(props) {
		super(props);
		this.submitButton = React.createRef();

		this.state = {
			notes: '',
			showNotification: false,
			notifcationMessage: '',
			variant: 'error',
			disableSubmitButton: false,
		};
	}


	submitExercise = () => {
		const { notes } = this.state;
		const {
			courseId,
			exercises,
			slug,
			loadExercise,
			updateExercises,
		} = this.props;

		const exercise = getExerciseDetailFromSlug(slug, exercises);
		const { submissionType, id: exerciseId } = exercise;

		// here should be the validation
		if (!isSubmissionTypeValid(submissionType, notes)) {
			const message = getValidationMessage(submissionType, notes);
			this.showNotification(message, 'warning');
			return;
		}

		submitExerciseAPI(courseId, exerciseId, notes)
			.then((response) => {
				let message;

				// if the user is not enrolled in the course and tries to submit assignment
				const enrolledServerMessage = "User can't submit an assignment unless enrolled in course";
				if (response.statusCode === 417 && response.message === enrolledServerMessage) {
					// call a function to show popup
					message = 'Phele course me Enroll kare.';
					this.showNotification(message, 'error');
				} else {
					// when the assignment is submitted
					message = 'Aapki assignment submit ho chuka hai.';
					this.setState({ notes: '' });
					// update the submissionType
					exercise.submissionState = 'pending';
					updateExercises(exercises);
					this.showNotification(message);

					this.setState({
						disableSubmitButton: true,
					});
					loadExercise();
				}
			});
	}

	showNotification = (message, variant = 'success') => {
		this.setState({
			showNotification: true,
			notifcationMessage: message,
			variant,
		});
	}

	handleHideNotification = () => {
		this.setState({
			showNotification: false,
		});
	}

	// handle the text in the input
	handleChange = (event) => {
		const { name } = event.target;
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		const {
			classes,
			prevSolutionDetail,
		} = this.props;

		const {
			notes,
			showNotification,
			notifcationMessage,
			variant,
			disableSubmitButton,
		} = this.state;

		return (
			<Card>
				{/* previously submitted notes */}
				{ prevSolutionDetail ?
					(
						<CardContent className={classes.cardContent}>
							<Grid container>
								<Grid item xs={6} sm={6} md={6}>
									<Typography variant="body2" className={classes.typography}>
										Previous Solution:
									</Typography>
									<Typography variant="body1">
										{/* eslint-disable react/jsx-no-target-blank */}
										{
											prevSolutionDetail.submitterNotes.startsWith('http') ? (
												<a href={prevSolutionDetail.submitterNotes} target="_blank">
													Solution
												</a>
											) : prevSolutionDetail.submitterNotes
										}
									</Typography>
								</Grid>

								<Grid item xs={6} sm={6} md={6} className={classes.floatRight}>
									{
										prevSolutionDetail.reviewerName ? (
											<Typography variant="body2" className={classes.typography}>
												Reviewer Name:
												{' '}
												<span className={classes.reviewer}>{prevSolutionDetail.reviewerName}</span>
											</Typography>
										) : null
									}
									{
										prevSolutionDetail.state !== 'pending' ? (
											<React.Fragment>
												<Typography variant="body2">
													Reviewer Feedback:
												</Typography>
												<Typography variant="body1">
													{prevSolutionDetail.notesReviewer}
												</Typography>
											</React.Fragment>
										) : null
									}
								</Grid>
							</Grid>
						</CardContent>
					)
					: null
				}

				{/* submission form */}
				<CardContent className={classes.cardContent}>
					<form autoComplete="off">
						<TextField
							multiline
							fullWidth
							value={notes}
							label="Exercise Submission"
							onChange={this.handleChange}
							className={classes.submissionField}
							name="notes"
						/>
						<br />
						<br />
						<Button
							disabled={disableSubmitButton}
							variant="extendedFab"
							color="secondary"
							className={classes.submitExercise}
							onClick={this.submitExercise}
						>
							<img alt="submitIcon" src="/static/icons/icons8-upload-to-cloud-24.png" />
						</Button>
					</form>
				</CardContent>
				<AlertNotification
					open={showNotification}
					message={notifcationMessage}
					autoHideDuration={6000}
					variant={variant}
					onClose={this.handleHideNotification}
				/>
			</Card>
		);
	}
}

CourseDetailSubmission.propTypes = {
	classes: PropTypes.object.isRequired,
	slug: PropTypes.string.isRequired,
	exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
	courseId: PropTypes.string.isRequired,
	loadExercise: PropTypes.func.isRequired,
	updateExercises: PropTypes.func.isRequired,
	prevSolutionDetail: PropTypes.object,
};

CourseDetailSubmission.defaultProps = {
	prevSolutionDetail: undefined,
};

export default withStyles(styles)(CourseDetailSubmission);
