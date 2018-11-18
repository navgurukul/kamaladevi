import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


import { withStyles } from '@material-ui/core/styles';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import CourseListCard from './course-list-card';
import CourseDeleteAlert from './course-delete-alert';
import { saveCoursesSequence } from '../../services/courses';


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
		margin: theme.spacing.unit * 3,
	},
	bgDelete:{
		background:'red',
	},
	cardSize:{
		width:'100%',
	},
	cardSizeOnDrag:{
		width:'40%'
	},
	cardMargin: {
		height: '100%',
		display: 'flex',
		minHeight: theme.spacing.unit * 17,
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor:'pointer',
		[theme.breakpoints.down('sm')]: {
			minHeight: theme.spacing.unit * 16,
			marginRight: 2.5,
			wordWrap: 'break-word',
		},
	},
	displayNone:{
		display:'none'
	},
	close: {
	 padding: theme.spacing.unit,
 	},
	cancelButton:{
		float:'left',
		right: 'auto',
		bottom: theme.spacing.unit * 2,
		left: theme.spacing.unit * 2,
	},
	floatButton:{
		minWidth : theme.spacing.unit * 25,
		margin: '0',
		top: 'auto',
		position: 'fixed',
		[theme.breakpoints.down('sm')]: {
			minWidth : theme.spacing.unit * 15,
		},
	},
	saveButton:{
		float:'right',
		right: theme.spacing.unit * 2,
		bottom: theme.spacing.unit * 2,
		left: 'auto',
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
			isSequenceUpdated:false,
			notifcationMessage:'',
			deletableCourseIndex: null,
			showConfirmDeleteBox:false,
			deleteButtonShow:false,
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
						isSequenceUpdated:true,
						notifcationMessage:'Sequence Saved Successfully',
					});
			})
			.catch((error) => {
					// got some error show it in sanackbar.
					console.log(error);
					const notifcationMessage = window.navigator.onLine?
									'Internet connected nhi hai!':
									'Ek error Ayi hue hai. Console check kare!';
					this.setState({
						isSequenceUpdated:true,
						notifcationMessage,
					});
			});
	}

	// delete a course here
	deleteCourse = () => {
		const { deletableCourseIndex, currentCoursesSequence } = this.state;
		const {
						newCourseSequence,
						removed,
					} = remove(currentCoursesSequence,deletableCourseIndex);
		// call the api with the id
		// call update the main course
		// update the state with new courses
		const notifcationMessage = `${removed.name} course deleted.`
		this.setState({
			currentCoursesSequence: newCourseSequence,
			deletableCourseIndex: null,
			showConfirmDeleteBox:false,
			isSequenceUpdated:true,
			notifcationMessage,
		})
	}

	cancelCourseDelete = () => {
		this.setState({
			deletableCourseIndex: null,
			showConfirmDeleteBox:false
		})
	}

	handleCloseSaveNotification = () => {
		this.setState({
			isSequenceUpdated: false,
			notifcationMessage: ''
		})
	}

	updateSequenceNumber = courses => {
		// update sequence
		const updatedCourse = Array.from(courses);
		for(let i = 0; i < updatedCourse.length; i++){
			updatedCourse[i].sequenceNum = i;
		}
		return updatedCourse;
	}


	toggleCourseDeleteButton = () => {
		this.setState((prevState) => {
			return {
				deleteButtonShow:!prevState.deleteButtonShow
			}
		});
	}

	onDragEnd = result => {
		if (!result.destination) {
      	return;
    	}

		if (result.source.index === result.destination.index){
			return;
		}
		if (result.destination.droppableId === 'delete'){
			this.setState({
				deletableCourseIndex: result.source.index,
				showConfirmDeleteBox:true
			})
			return;
		}

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

	render(){
			const {
				classes,
				headline,
				courses,
				showProgress,
				paddingTop
			} = this.props;

			const {
				currentCoursesSequence,
				isSequenceUpdated,
				notifcationMessage,
				showConfirmDeleteBox,
				deleteButtonShow,
				deletableCourseIndex
			} = this.state;

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
					<Grid className={ paddingTop?classes.avbCoursesContainer:'' }>
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
															let cardClass = `${classes.cardMargin} ${snapshot.isDragging?
																classes.cardSizeOnDrag:
																classes.cardSize} `
															cardClass += `${snapshot.draggingOver === 'delete'?
																						classes.bgDelete:''
																				} `;
															return (
						                    <div
																	ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}
																	>

																	<CourseListCard
																		key={value.id}
																		value={value}
																		index={key}
																		gridSize={12}
																		cardClass={
																			cardClass
																		}
																		showProgress={showProgress}
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
							<Droppable droppableId="delete">
								{(provided, snapshot) => {
									return (
										<div
											ref={provided.innerRef}
											{...provided.droppableProps}
											>
												<Button
													variant='fab'
													className={classes.deleteButton}
													>
													<DeleteIcon/>
												</Button>
											{provided.placeholder}
										</div>
									)}}
								</Droppable>
					</Grid>
					<Snackbar
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						open={isSequenceUpdated}
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
				// Modal here as hidden
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
