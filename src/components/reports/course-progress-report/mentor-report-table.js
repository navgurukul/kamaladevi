import React from 'react';
import PropTypes from 'prop-types';
import { fetchApi } from "../../../services/api";
import { markCourseCompleteAPI } from "../../../services/api";
import { withStyles } from '@material-ui/core/styles';
import localforage from "localforage";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from 'next/link';
import AlertNotification from "../../alert-notification";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  satisfactoryProgress: {
    backgroundColor: 'yellow',
  },
  goodProgress: {
    backgroundColor: 'green',
  },
  muchToGo: {
    backgroundColor: 'coral',
  },
  root: {
    flexGrow: 1,
  },
});



class  MentorReportTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prefetchedData: false,
      dialogOpen: false,
      showNotification: false,
      notificationMessage: "",
      alertType: ""
    }
  }

  componentDidMount(){
    this.fetchCourses();
  }

  handleDailogOpen = (courseId, menteeId) => {
    this.setState({
      dialogOpen: true,
      courseSelected: courseId,
      selectedMenteeId: menteeId
    });
  }

  
  handleClose = (e) => {
    e.persist(); 
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation(); 
    this.setState({ dialogOpen: false });
  };

  markCourseAsComplete = (e) => {
    let menteeId = this.state.selectedMenteeId;
    let courseId= this.state.courseSelected;
    markCourseCompleteAPI(courseId, menteeId).then((response)=>{
      if(response && response.success) {
          this.fetchCourses();          
      } else {
        if(response.message) {
          this.handleShowNotification(response.message, 'error' );
        } else {
          this.handleShowNotification('the course could not be marked as complete due to a technical error', 'error' );
        }
      }
    }).catch((error)=>{
      this.handleShowNotification('the course could not be marked as complete due to a technical error', 'error' );
    })
    this.handleClose(e);
  }

   fetchCourses = () => {
    localforage.getItem("authResponse", (error, value) => {
      if (!error) {
    const { jwt, user } = value;
    fetchApi("/reports/courses", {}, { Authorization: jwt })
    .then(response => {
      this.setState({
        ...response
      });
    const {mentees,menteesCoursesReport } = this.state;
    this.addMissingMentees(mentees, menteesCoursesReport);
    this.sortMentees(menteesCoursesReport);
    this.calculatePercentages(menteesCoursesReport);
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

calculatePercentages=(menteesCoursesReport)=>{
  let totalExercisesInCourse;
  let percentageCompletion;
  menteesCoursesReport.map((course)=>{
    totalExercisesInCourse=course.totalExercises;
    course.studentEnrolled.map((student)=>{ 
      percentageCompletion = this.getPercentageCompletionInCourse(student,totalExercisesInCourse);
      student.percentageCompletion = percentageCompletion;
    })
  })
}

getPercentageCompletionInCourse=(student, totalExercisesInCourse)=>{
  let percentageCompletion;
  if (student.menteeCourseStatus==="notEnrolled") {
    percentageCompletion = 0;
  } else if (student.menteeCourseStatus==="completed") {
    percentageCompletion = 100;
  } else {
    percentageCompletion = totalExercisesInCourse ? parseFloat((student.completedSubmissions/totalExercisesInCourse) * 100).toFixed(2) : 100;
  }
  return percentageCompletion;
}

sortMentees=(menteesCoursesReport)=>{
  let arr = menteesCoursesReport.map((course)=>{
   let sortedArray=  _.sortBy(course.studentEnrolled, 'menteeId')
   course.studentEnrolled = sortedArray; 
  });
}

addMissingMentees=(mentees, menteesCoursesReport)=>{
  let allMenteeIds=_.pluck(mentees, 'id');
  let courseId;
  let menteeIdForEachCourse;
  menteesCoursesReport.map((course)=>{
    courseId = course.courseId;
    course.studentEnrolled.map((student)=>{
      student["courseId"]=courseId;
    })
    menteeIdForEachCourse = _.pluck(course.studentEnrolled,'menteeId');
    let missingMentees = _.difference(allMenteeIds, menteeIdForEachCourse);
    missingMentees.map((id)=>{
      course.studentEnrolled.push({
        menteeId: id,
        completedSubmissions: 0,
        menteeCourseStatus: 'notEnrolled',
        courseId: course.courseId
      })
    });
  })
}

getCellInfo(student){
  let msg;
  if(student.menteeCourseStatus === "notEnrolled"){
    msg="The student is not enrolled in this course"; 
  } else {
    msg=student.percentageCompletion+"%";
  }
  return msg;
 }

setIndicatorClass(student){
  let indicator = 'notEnrolled';
if(student.menteeCourseStatus === "notEnrolled") {
  return ''
} else if(student.percentageCompletion >= 70) {
  indicator = 'goodProgress';
} else if (student.percentageCompletion >= 30) {
  indicator = 'satisfactoryProgress';
} else {
  indicator ='muchToGo';
}
return indicator;
}

render() {
    const { classes } = this.props;
    const { prefetchedData,mentees,menteesCoursesReport,showNotification,notificationMessage,alertType} = this.state;
    let sortedMentees = _.sortBy(mentees, 'id');
    const defaultColumn = [{name:'', id: -1}];
    const columnData = defaultColumn.concat(sortedMentees);
    <div textAlign="center"><h1>Course Progress</h1></div>
    if (!prefetchedData) {
      return(
        <div className={classes.rootLoader}>
        <CircularProgress className={classes.progress} size={50} />
       </div>
      )
    } else {
      return (
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
              {menteesCoursesReport.map(row => (
                <TableRow key={row.courseId}>
                  <TableCell component="th" scope="row">
                  <Link
				            href={{
					          pathname: '/reports/progess-in-course',
					          query:{courseId: row.courseId},
				            }}
				            >
                    <a>{row.courseName}</a>
				          </Link>
                  </TableCell>
                  {
                  row.studentEnrolled.map((student, i, row) =>(
                  // <TableCell title={this.getCellInfo(student)} key={student.menteeId} align="left" className={classes[this.setIndicatorClass(student)]}>
                      
                  // </TableCell>
                  <TableCell  key={student.menteeId} onClick={()=>this.handleDailogOpen(student.courseId, student.menteeId)}>
                  
                  <LinearProgress title={this.getCellInfo(student)} variant="determinate" value={parseFloat(student.percentageCompletion)}/>
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
                  <DialogTitle id="form-dialog-title">Update course status</DialogTitle>
                  <DialogContent>
            <DialogContentText>
              Do you want to mark the course as complete? 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.markCourseAsComplete} color="primary">
              Yes
            </Button>
            <Button onClick={this.handleClose} color="primary">
              No
              </Button>
          </DialogActions>
          </Dialog>
          <AlertNotification
              open={showNotification}
              message={notificationMessage}
              variant={alertType}
              autoHideDuration={6000}
              onClose={this.handleHideNotification}
            /> 
        </Paper>
      );
    }
  }
}

MentorReportTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorReportTable);