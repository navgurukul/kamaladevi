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


const styles = theme => {
	console.log(theme);
	return({
	root: {
		flexGrow: 1,
	},
	containerHeadingItem: {
		paddingBottom: theme.spacing.unit * 2,
	},
	avbCoursesContainer: {
			paddingTop: theme.spacing.unit * 5,
	},
	deleteArea:{
		padding: `15% 2%`,
		marginTop: '-80px',
		// border:'1px solid red',
		position:'fixed',
		[theme.breakpoints.down('sm')]: {
			padding:'18vh 6%'
		},
		[theme.breakpoints.down('xs')]: {
			padding:'18vh 2%'
		},
		[theme.breakpoints.up('xl')]: {
			padding:'50vh 3.2%'
		},
	},
	deleteButton:{
		marginTop: -theme.spacing.unit * 4.5,
		[theme.breakpoints.down('xs')]: {
			maxWidth:theme.spacing.unit * 15
		},
	},
	bgDelete:{
		background:'red',
	},
	cardSize:{
		width:'100%',
	},
	cardSizeOnDrag:{
		width:'100%'
	},
	cardMargin: {
		height: '100%',
		display: 'flex',
		minHeight: theme.spacing.unit * 17,
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor:'pointer',
		[theme.breakpoints.down('sm')]: {
			minHeight: theme.spacing.unit * 18,
			marginRight: 2.5,
			wordWrap: 'break-word',
		},
	},
	floatRight:{
		float:'right'
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
		zIndex:'100',
		position: 'fixed',
		[theme.breakpoints.down('sm')]: {
			minWidth : theme.spacing.unit * 10,
		},
	},
	saveButton:{
		float:'right',
		right: theme.spacing.unit * 2,
		bottom: theme.spacing.unit * 2,
		left: 'auto',
	}
})};

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
						showNotification:true,
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
						showNotification:true,
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
		let notifcationMessage;

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
									'Internet connected nhi hai!':
									'Ek error Ayi hue hai. Console check kare!';
					this.setState({
						showNotification:true,
						notifcationMessage,
					})
			});

	};

	cancelCourseDelete = () => {
		this.setState({
			deletableCourseIndex: null,
			showConfirmDeleteBox:false
		})
	}

	handleCloseSaveNotification = () => {
		this.setState({
			showNotification: false,
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

		if (result.destination.droppableId === 'delete'){
			this.setState({
				deletableCourseIndex: result.source.index,
				showConfirmDeleteBox:true
			})
			return;
		}

		if (result.source.index === result.destination.index){
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
				deleteButtonShow,
				deletableCourseIndex
			} = this.state;
			const courseGridSize = deleteButtonShow?9:12; //make space for delete button
			return (
			<div className={classes.root}>
				<Button
					variant="raised"
					color="primary"
					onClick={this.toggleCourseDeleteButton}
					className={`${classes.floatRight} ${classes.deleteButton}`}
					>
						{	!deleteButtonShow? 'Delete Courses': 'Stop Deleting Courses'}
				</Button>
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
						<Grid container>
							{
								deleteButtonShow?
								<Grid item xs={4} sm={3}>
									<div>
										<Droppable droppableId="delete">
											{(provided, snapshot) => {
												return (
													<div
														ref={provided.innerRef}
														{...provided.droppableProps}
														className={classes.deleteArea}
														>
														{snapshot.isDraggingOver?<DeleteForeverIcon />:<DeleteIcon />} <br />
														To Delete <br />
														Drag Here.
														{provided.placeholder}
													</div>
												)}}
											</Droppable>
									</div>
								</Grid>
									:null
							}
							<Grid item xs={courseGridSize-1} sm={courseGridSize}>
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
							</Grid>
						</Grid>
					</Grid>
					<Snackbar
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
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
