import React, {Component} from 'react';
import localforage from "localforage";
import {fetchApi} from '../../../services/api';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Done from '@material-ui/icons/Done';
import Cancel from '@material-ui/icons/Cancel';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import AlertNotification from "../../alert-notification";
import {reviewerFeedbackSubmissionAPI} from '../../../services/api';
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
var _ = require("underscore");

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  loaderRoot: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  },    
  progress: {
    margin: theme.spacing.unit * 2
  },  
  avatar: {
    margin: 10,
  },
  approveButton:{
    marginTop: theme.spacing.unit * 1.5,
    float:"right",
    color:'white'
  },
  rejectButton:{
    marginTop: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit,
    float:"right",
    background:theme.palette.error.main,
    color:'white',
    "&:hover":{
      backgroundColor:theme.palette.error.dark,
    },
    "&:select":{
      backgroundColor:theme.palette.error.dark,
    }
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  redAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: red[500],
  },
  blueAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
  },
  greyAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: grey[500],
  },hidden: {
		display:"none"
  },
  typography:{
    display:"block",
    marginBottom:theme.spacing.unit * 3,
    marginTop:theme.spacing.unit,
  },
  titles:{
    fontWeight:"bold",
  }
});

class ProgressPerCourseTable extends Component {
    constructor(props){
        super(props);
        this.state={
          prefetchedData: false,
          dialogOpen: false,
          notes: "",
          showNotification: false,
          notificationMessage: "",
          alertType: ""
        }
    }

    componentDidMount(){
        const courseId = this.props["courseId"];
        this.getCourseExerciseDetails(courseId);        
    }

    getCourseExerciseDetails=(courseId)=>{
      localforage.getItem("authResponse", (error, value) => {
          if (!error) {
              const { jwt, user } = value;
              fetchApi(`/reports/course/${courseId}`, {}, { Authorization: jwt })
                .then(response => {
                  this.setState({
                    ...response
                  });
                  const {mentees, menteesExercisesReport} = this.state;
                  this.addMissingMenteesToSubmissions(mentees, menteesExercisesReport);
                  this.sortMentees(menteesExercisesReport);
                  this.setState({
                    prefetchedData: true
                  })
                  
                })
                .catch((error) => {
                  throw(error);
                  /* TODO: Handle network error cases */
                });
            
          } else {
            // TODO: Handle error cases
          }
        });        
    }

   /****** this section handles the course completion dialog***********/
   handleDailogOpen = (selectedSubmission, selectedExerciseDetails) => {
      this.setState({
        dialogOpen: true,
        selectedSubmissionDetails: selectedSubmission,
        selectedExerciseDetails: selectedExerciseDetails
      });
    }
  
    
    handleClose = () => { 
      this.setState({ dialogOpen: false });
    };

    /**This section handles the input box for reasons **/
    inputHandler = (e) => {
      this.setState({ notes : e.target.value })
    }

    /** this function checks whether a mentor has put in the reason **/
    hasReviewerGivenFeedback = () => {
      if (this.state.notes === "") {
        return false
      } else {
        return true
      }
    }

    submitAssignment = (isApprove) => {
      let {notes, selectedSubmissionDetails} = this.state;
      let submissionId =selectedSubmissionDetails ? selectedSubmissionDetails.submissionId : "";
      let message;
      /** check if user has given any feedback**/
      if(!this.hasReviewerGivenFeedback()){
        message = "Phele aap apna reason dijiye.";
        this.handleShowNotification(message, "warning");
        return;
      }
  
      /** send the feedback to api**/
      reviewerFeedbackSubmissionAPI(notes, isApprove, submissionId)
        .then(response => {
          /**  empty the textfield after it has been submitted**/
          if(response && response.success){
            this.setState({notes:""});
            message = "Feedback dene ke liye shukriya.";
            this.handleShowNotification(message, "success");
            let courseId = this.props.courseId;
            this.getCourseExerciseDetails(courseId);
            this.handleClose(); 
          } else {
            this.handleShowNotification("Kuch problem ke karan apka data save nhi hua.", "error");
          }
          
        })
        .catch(error => {
          /**check if the user is connected to internet**/
          if(!window.navigator.onLine){
            message = "Aap Internet se connect nhi ho.";
          } else {
            message = "Kuch problem ke karan apka data save nhi hua.";
          }
          this.handleShowNotification(message, "error");
          console.log(error)
        })
        
    }


 /** this section handles success and failure notification **/
    handleShowNotification = (message, alertType) => {
      this.setState({
      showNotification: true,
      notificationMessage: message,
      alertType: alertType,
     })
    }

    handleHideNotification = () => {
      this.setState({
        showNotification: false,
      })
    }


 /** this section handles the display of exercises table **/
    sortMentees=(menteesExercisesReport)=>{
      menteesExercisesReport.map((exercise)=>{
       let sortedArray=  _.sortBy(exercise.submissions, 'menteeId')
       exercise.submissions = sortedArray; 
      });
    }

    addMissingMenteesToSubmissions=(mentees, menteesExercisesReport)=>{
      let allMenteeIds=_.pluck(mentees, 'id');
      let menteeIdsForEachCourse;
      menteesExercisesReport.map((exercise)=>{
        menteeIdsForEachCourse = _.pluck(exercise["submissions"],'menteeId');
        let missingMentees = _.difference(allMenteeIds, menteeIdsForEachCourse);
        missingMentees.map((id)=>{
          exercise.submissions.push({
            menteeId: id,
            completedSubmissions: 0,
            submissionState: "not submitted",
            submissionCompleted:"false"
          })
        });
      })
    }

    render(){
        const {classes, courseId} = this.props;
        const {prefetchedData,mentees, menteesExercisesReport,courseName,selectedSubmissionDetails,selectedExerciseDetails,notes,showNotification,notificationMessage,alertType} = this.state;
        let defaultColumn = [{name: '',id: -1}];
        let sortedMentees = _.sortBy(mentees, 'id');
        let columnData = defaultColumn.concat(sortedMentees);
        if(!prefetchedData){
          return(
            <div className={classes.rootLoader}>
            <CircularProgress className={classes.progress} size={50} />
           </div>
        )
        } else {
          return(
            <div>
            <h3> Progress in {courseName}</h3>
          <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
               {columnData.map((mentee,id)=>(
                  <TableCell key={mentee.id}>{mentee.name}</TableCell>
                ), this,)}
              </TableRow>
            </TableHead>
            <TableBody>
              {menteesExercisesReport.map(row => (
                <TableRow key={row.exerciseId}>
                  <TableCell component="th" scope="row">
                  
                    <a>{row.exerciseName}</a>
				          
                  </TableCell>
                  {
                  row.submissions.map(submission =>(
                  <TableCell key={submission.submissionId}>
                    <Avatar className={submission.submissionState === 'completed' ? classes.greenAvatar : classes.hidden } title="Assignment completed">
                        <Done />
                </Avatar>
                <Avatar className={submission.submissionState === 'rejected' ? classes.redAvatar: classes.hidden} title="Submission rejected">
                        <Cancel />
                </Avatar>
                <Avatar className={submission.submissionState === 'pending' ? classes.blueAvatar: classes.hidden} title="Assignment review pending" onClick={() => this.handleDailogOpen(submission, row)}>
                        <IndeterminateCheckBox />
                </Avatar>
                <Avatar className={submission.submissionState === 'not submitted' ? classes.greyAvatar: classes.hidden} title="Assigment not submitted">
                        
                </Avatar>
                  </TableCell>
                    ))
                  }
                </TableRow>
              ))} 
            </TableBody>
          </Table>
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Update exercise status</DialogTitle>
            <DialogContent>
            <DialogContentText>
              Do you want to mark the exercise as complete?
              <p>Submitted by: {selectedSubmissionDetails ? selectedSubmissionDetails.menteeName : ''}</p> 
              <Typography className={classes.typography}>
                    <span className={classes.titles}>
                      Exercise Name:
                    </span>
                    {` ${selectedExerciseDetails ? selectedExerciseDetails.exerciseName : ""} `}
                    <a href={selectedExerciseDetails ? `/course?id=${courseId}&slug=${selectedExerciseDetails.exerciseSlug}` : ''} target="_blank">
                      (Link)
                    </a>
                    <br />
                    <span className={classes.titles}>
                      Student ka solution :
                    </span>
                    <span className={classes.submissionContent}>

                    {
                      selectedSubmissionDetails ? (selectedSubmissionDetails.submitterNotes.startsWith("http") ?
                      <a href={selectedSubmissionDetails.submitterNotes}>{selectedSubmissionDetails.submitterNotes}</a>
                      :selectedSubmissionDetails.submitterNotes) : ''
                    }
                  </span>
                  <Typography>
                    <span className={classes.titles}>
                      Apna accept ya reject karne ka reason neeche diye gaye text box
                      mein likhe:
                    </span>
                  </Typography>
                  <TextField
                    multiline
                    fullWidth
                    label="Apka reason yahan likhe:"
                    rowsMax="10"
                    margin="normal"
                    variant="outlined"
                    value={notes}
                    onChange={this.inputHandler}
                  />
                  </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button
                    variant="fab"
                    color="secondary"
                    className={classes.approveButton}
                    onClick = {()=>this.submitAssignment(true)}
                    >
                    <CheckIcon />
                  </Button>
                  <Button
                    variant="fab"
                    className={classes.rejectButton}
                    onClick = {()=>this.submitAssignment(false)}
                    >
                    <CloseIcon />
                  </Button>
          </DialogActions>
          
                  </Dialog>
        </Paper>
         <AlertNotification
              open={showNotification}
              message={notificationMessage}
              variant={alertType}
              autoHideDuration={6000}
              onClose={this.handleHideNotification}
            /> 
        </div>
          )
        }
        
    }
}
export default withStyles(styles)(ProgressPerCourseTable);
