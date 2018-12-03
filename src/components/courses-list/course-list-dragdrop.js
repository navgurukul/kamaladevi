import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { withStyles } from '@material-ui/core/styles';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import CourseListCard from './course-list-card';
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
	cardMargin: {
		height: "100%",
		display: "flex",
		width:"100%",
		minHeight: theme.spacing.unit * 17,
		flexDirection: "column",
		justifyContent: "space-between",
		cursor:"pointer",
		[theme.breakpoints.down("sm")]: {
			minHeight: theme.spacing.unit * 18,
			marginRight: 2.5,
			wordWrap: "break-word",
		},
	},
	floatRight:{
		float:"right"
	},
	close: {
	 padding: theme.spacing.unit,
 	},
	cancelButton:{
		float:"left",
		right: "auto",
		bottom: theme.spacing.unit * 2,
		left: theme.spacing.unit * 2,
	},
	floatButton:{
		minWidth : theme.spacing.unit * 25,
		margin: "0",
		top: "auto",
		zIndex:"100",
		position: "fixed",
		[theme.breakpoints.down("sm")]: {
			minWidth : theme.spacing.unit * 10,
		},
	},
	saveButton:{
		float:"right",
		right: theme.spacing.unit * 2,
		bottom: theme.spacing.unit * 2,
		left: "auto",
	}
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
			deletableCourseIndex: null,
			showConfirmDeleteBox:false,
		}
	}

	extractSequenceNum = (courses) => {
		// extract sequenceNum and id"s
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
	cancelUpdate = () => {
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
					})
			});

	};

	// remove the selected id from deleting index
	cancelCourseDelete = () => {
		this.setState({
			deletableCourseIndex: null,
			showConfirmDeleteBox:false
		})
	}

	// closes the notifcationMessage
	handleCloseSaveNotification = () => {
		this.setState({
			showNotification: false,
			notifcationMessage: ""
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
				paddingTop
			} = this.props;

			const {
				currentCoursesSequence,
				showNotification,
				notifcationMessage,
				showConfirmDeleteBox,
				deletableCourseIndex
			} = this.state;

			//make space for delete button

			return (
			<div className={classes.root}>
				<DragDropContext
					onDragEnd={this.onDragEnd}
					>
					<Button
						variant="raised"
						color="primary"
						className={`${classes.cancelButton} ${classes.floatButton}`}
						onClick={() => this.cancelUpdate()}
						>
						Cancel
					</Button>
					<Button
						variant="raised"
						color="primary"
						className={`${classes.saveButton} ${classes.floatButton}`}
						onClick={() => this.saveUpdate()}
						>
						Save
					</Button>
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
																				gridSize={12}
																				cardClass={
																					classes.cardMargin
																				}
																				showProgress={showProgress}
																				displayDeleteNotification={this.displayDeleteNotification}
																				showDelete
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
					<Snackbar
						anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
						open={showNotification}
						message={notifcationMessage}
						autoHideDuration={6000}
						onClose={this.handleCloseSaveNotification}
						action={[
							<IconButton
								key="close"
								aria-label="Close"
								color="inherit"
								className={classes.close}
								onClick={this.handleCloseSaveNotification}
							>
							<CloseIcon />
							</IconButton>
						]}
					/>
				</DragDropContext>
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
