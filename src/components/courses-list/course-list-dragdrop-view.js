import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { withStyles } from '@material-ui/core/styles';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import AlertNotification from '../alert-notification';
import CourseListCard from './course-list-dragdrop-card';
import CourseDeleteAlert from './course-delete-alert';
import { saveCoursesSequence, deleteCourseAPI } from '../../services/courses';


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	containerHeadingItem: {
		paddingBottom: theme.spacing.unit * 2,
	},
	avbCoursesContainer: {
			paddingTop: theme.spacing.unit * 5,
	},
	deleteButton:{
		marginTop: -theme.spacing.unit * 4.5,
		[theme.breakpoints.down("xs")]: {
			maxWidth:theme.spacing.unit * 15
		},
	},
	floatRight:{
		float:"right"
	},
	close: {
	 padding: theme.spacing.unit,
 	},
	restoreButton:{
		float:"right",
		left: "auto",
		bottom: theme.spacing.unit * 2,
		right:theme.spacing.unit * 10,
	},
	saveButton:{
		float:"right",
		left: "auto",
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2,
	},
	goBackButton:{
		float:"right",
		left: "auto",
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 18,
		background:theme.palette.warning.main,
		"&:hover":{
			backgroundColor:theme.palette.warning.dark,
		},

	},
	floatButton:{
		margin: "0",
		top: "auto",
		zIndex:"100",
		position: "fixed",
	},
});

const reorder = (courses, startIndex, endIndex) => {
  const newCourseSequence = Array.from(courses);
  const [removed] = newCourseSequence.splice(startIndex, 1);
  newCourseSequence.splice(endIndex, 0, removed);
  return newCourseSequence;
};

const remove = (courses, index) => {
	const newCourseSequence =  Array.from(courses);
	const [removed] = newCourseSequence.splice(index, 1);

	return {
		newCourseSequence,
		removed
	};
}


class CourseListDragAndDrop extends React.Component {
	constructor(props){
		super(props);
		const { courses } = this.props;
		this.state = {
			originalCoursesSequence : courses,
			currentCoursesSequence : courses,
			showNotification:false,
			notifcationMessage:"",
			alertType:"",
			deletableCourseIndex: null,
			showConfirmDeleteBox:false,
		}
	}

	extractSequenceNum = (courses) => {
		// extract sequenceNum and id's
		let payload = []
		for(let i = 0; i < courses.length; i++){
			const {id, sequenceNum} = courses[i];
			payload.push({
				id,
				sequenceNum
			});
		}
		return payload
	}


	//Resets the sequence
	restoreSequence = () => {
		const {originalCoursesSequence} = this.state;
		this.setState({
			currentCoursesSequence: originalCoursesSequence
		})
	}

	// Saves the current sequence
	saveUpdate = () => {
		const { currentCoursesSequence } = this.state;

		let payload = this.extractSequenceNum(currentCoursesSequence)
		// call the api and update the course sequence
		saveCoursesSequence(payload)
			.then((response) => {
					// show data saved in backend.
					this.setState({
						showNotification:true,
						notifcationMessage:"Sequence Saved Successfully",
						alertType:"success"
					});
			})
			.catch((error) => {
					// got some error show it in sanackbar.
					console.log(error);
					const notifcationMessage = window.navigator.onLine?
									"Internet connected nhi hai!":
									"Ek error Ayi hue hai. Console check kare!";
					this.setState({
						showNotification:true,
						notifcationMessage,
						alertType:"error"
					});
			});
	}

	displayDeleteNotification = (index) => {
		// Display the confirmation notification for deleting selected course.
			this.setState({
				deletableCourseIndex: index,
				showConfirmDeleteBox:true
			})
	}
	// delete a course here
	deleteCourse = () => {
		const { deletableCourseIndex, currentCoursesSequence } = this.state;
		const {
						newCourseSequence,
						removed,
					} = remove(currentCoursesSequence,deletableCourseIndex);
		let notifcationMessage;

		//API call for the course and show alert for type of response
		deleteCourseAPI(removed.id)
			.then((response) => {
					notifcationMessage = `${removed.name} course deleted.`
					this.setState({
						currentCoursesSequence: newCourseSequence,
						deletableCourseIndex: null,
						showConfirmDeleteBox:false,
						showNotification:true,
						notifcationMessage,
						alertType:"success"
					});
			})
			.catch((error) => {
					// show error if no internet connection or something else happened.
					console.log(error);
					notifcationMessage = window.navigator.onLine?
									"Internet connected nhi hai!":
									"Ek error Ayi hue hai. Console check kare!";
					this.setState({
						showNotification:true,
						notifcationMessage,
						alertType:"error"
					})
			});

	};

	// remove the selected id from deleting index
	cancelCourseDelete = () => {
		this.setState({
			deletableCourseIndex: null,
			showConfirmDeleteBox:false,
		})
	}

	// closes the notifcationMessage
	handleHideNotification = () => {
		this.setState({
			showNotification: false,
			notifcationMessage: "",
		})
	}

	// update the sequenceNum of each course
	// when user clicks save
	updateSequenceNumber = courses => {
		// update sequence
		const updatedCourse = Array.from(courses);
		for(let i = 0; i < updatedCourse.length; i++){
			updatedCourse[i].sequenceNum = i;
		}
		return updatedCourse;
	}



	// What should happen on dropping courses after we drag them
	onDragEnd = result => {
		// when the course is  picked but hasn"t been moved out
		// to destination
		if (!result.destination) {
      	return;
    	}

		// when course is put back from where it was drag
		if (result.source.index === result.destination.index){
			return;
		}

		// reorder with new course sequenceNum
    let newCourseSequence = reorder(
      this.state.currentCoursesSequence,
      result.source.index,
      result.destination.index
    );

		newCourseSequence = this.updateSequenceNumber(newCourseSequence);

		this.setState({
      currentCoursesSequence: newCourseSequence,
    });
	}

	render() {
			const {
				classes,
				headline,
				courses,
				showProgress,
				paddingTop,
				stopCourseSequenceEditing
			} = this.props;

			const {
				currentCoursesSequence,
				showNotification,
				notifcationMessage,
				showConfirmDeleteBox,
				deletableCourseIndex,
				alertType
			} = this.state;

			//make space for delete button

			return (
			<div className={classes.root}>
				<DragDropContext
					onDragEnd={this.onDragEnd}
					>
					{/*Heading of the course*/}
					<Grid className={ paddingTop?classes.avbCoursesContainer:"" }>
						<Grid item xs={12} className={classes.containerHeadingItem}>
							<Typography
								variant="headline"
								component="h2"
								align="center"
								gutterBottom
							>
								{headline}
							</Typography>
						</Grid>
						<Grid container>
								{/*Courses List and the box till where courses can  be drop*/}
								<Droppable droppableId="courses">
									{(provided) => (
											<div ref={provided.innerRef} {...provided.droppableProps}	>
												{/*Each courses that can be dragged*/}
													{
														currentCoursesSequence.map((value, key) => (
															<Draggable
																key={value.id}
																draggableId={value.id}
																index={key}
																>
																{(provided, snapshot) => {
																	return (
																		<div
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																			>

																			<CourseListCard
																				value={value}
																				index={key}
																				displayDeleteNotification={this.displayDeleteNotification}
																				/>
																		</div>
																)}
															}
															</Draggable>
														))
													}
													{provided.placeholder}
											</div>
										)}
								</Droppable>
							</Grid>
					</Grid>
				</DragDropContext>
				<AlertNotification
					open={showNotification}
					message={notifcationMessage}
					autoHideDuration={6000}
					variant={alertType}
					onClose={this.handleHideNotification}
					/>
				<Button
					variant="fab"
					color="primary"
					className={`${classes.floatButton} ${classes.goBackButton}`}
					onClick={stopCourseSequenceEditing}
					>
					<ArrowBackIcon />
				</Button>
				<Button
					variant="fab"
					color="primary"
					className={`${classes.restoreButton} ${classes.floatButton}`}
					onClick={() => this.restoreSequence()}
					>
					<RestoreIcon />
				</Button>
				<Button
					variant="fab"
					color="secondary"
					className={`${classes.saveButton} ${classes.floatButton}`}
					onClick={() => this.saveUpdate()}
					>
					<CheckIcon />
				</Button>
				{
					showConfirmDeleteBox?
					<CourseDeleteAlert
						open={showConfirmDeleteBox}
						cancelCourseDelete={this.cancelCourseDelete}
						deleteCourse={this.deleteCourse}
						course={currentCoursesSequence[deletableCourseIndex]}
						/>
					:null
				}
			</div>
		);
	}
}

CourseListDragAndDrop.propTypes = {
	classes: PropTypes.object.isRequired,
	headline: PropTypes.string.isRequired,
	courses: PropTypes.arrayOf(PropTypes.object).isRequired,
	showProgress: PropTypes.bool,
	paddingTop: PropTypes.bool,
};

CourseListDragAndDrop.defaultProps = {
	showProgress: false,
	paddingTop: false
}
export default withStyles(styles)(CourseListDragAndDrop);
