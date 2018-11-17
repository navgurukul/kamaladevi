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

import { withStyles } from '@material-ui/core/styles';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import CourseListCard from './course-list-card';
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
	cardMargin: {
		width:'100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		cursor:'pointer',
		[theme.breakpoints.down('sm')]: {
			minHeight: theme.spacing.unit * 16,
			marginRight: 2.5,
			wordWrap: 'break-word',
		},
	},
	close: {
	 padding: theme.spacing.unit,
 	},
	cancelButton:{
		float:'left',
		minWidth : theme.spacing.unit * 25,
		margin: '0',
		top: 'auto',
		right: 'auto',
		bottom: theme.spacing.unit * 2,
		left: theme.spacing.unit * 2,
		position: 'fixed',
		[theme.breakpoints.down('sm')]: {
			minWidth : theme.spacing.unit * 15,
		},
	},
	saveButton:{
		float:'right',
		minWidth : theme.spacing.unit * 25,
		margin: '0',
		top: 'auto',
		right: theme.spacing.unit * 2,
		bottom: theme.spacing.unit * 2,
		left: 'auto',
		position: 'fixed',
		[theme.breakpoints.down('sm')]: {
			minWidth : theme.spacing.unit * 15,
		},
	}
});

const reorder = (courses, startIndex, endIndex) => {
  const newCourseSequence = Array.from(courses);
  const [removed] = newCourseSequence.splice(startIndex, 1);
  newCourseSequence.splice(endIndex, 0, removed);
  return newCourseSequence;
};


class CourseListDragAndDrop extends React.Component {
	constructor(props){
		super(props);
		const { courses } = this.props;
		this.state = {
			originalCoursesSequence : courses,
			currentCoursesSequence : courses,
			isSequenceUpdated:false,
			notifcationMessage:'',
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
		console.log(payload);
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
									'Internet connected nhi hai!':'Ek error Ayi hue hai. Console check kare!';
					this.setState({
						isSequenceUpdated:false,
						notifcationMessage,
					});
			});
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

	onDragEnd = result => {
			if (!result.destination) {
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
				notifcationMessage
			} = this.state;

			return (
				<div className={classes.root}>
					<Button
						variant="raised"
						color="primary"
						className={classes.cancelButton}
						onClick={() => this.cancelUpdate()}
						>
						Cancel
					</Button>
					<Button
						variant="raised"
						color="primary"
						className={classes.saveButton}
						onClick={() => this.saveUpdate()}
						>
						Save
					</Button>
					<DragDropContext onDragEnd={this.onDragEnd}>
								{/*Heading of the course*/}
								<Grid className={ paddingTop?classes.avbCoursesContainer:'' }>
									<Grid item xs={12} className={classes.containerHeadingItem}>
										<Typography variant="headline" component="h2" align="center" gutterBottom>
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
																<Draggable key={value.id} draggableId={value.id} index={key}>
								                  {(provided) => (
								                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
																			<CourseListCard
																				key={value.id}
																				value={value}
																				index={key}
																				gridSize={12}
																				cardClass={classes.cardMargin}
																				showProgress={showProgress}
																				/>
								                    </div>
								                  )}
								                </Draggable>
															))
														}
												</div>
											)}
									</Droppable>
								</Grid>
					</DragDropContext>
					<Snackbar
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						open={isSequenceUpdated}
						message={notifcationMessage}
						autoHideDuration={6000}
						onClose={this.handleCloseSnackBar}
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
