import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Link from '@material-ui/core/Link';
import { fetchApi,deleteCourseRelaionAPI,addCourseRelaionAPI } from "../../services/api";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AlertNotification from "../alert-notification";
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
    formControl: {
      margin: 5,
      minWidth: 200,
      height: 35
    },
    progress: {
      margin: theme.spacing.unit * 2
    },  
    avatar: {
      margin: 10,
    },
    approveButton:{
      marginTop: theme.spacing.unit * 1.5,
      marginBottom: 10,
      color:'white',
      height: 25,
      width: 25,
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
    hidden: {
          display:"none"
    },
    link:{
      margin: 7,
    },
    courseName:{
      fontWeight:"bold",
      marginRight: 10,
    },
    titles:{
      fontWeight:"bold",
    },icon: {
      marginRight: theme.spacing.unit / 2,
      width: 15,
      height: 15,
    },addIcon:{
      width: 15,
      height: 15,
    },
    select:{
      minWidth: 200,
      height: 35,
    },
    selectEmpty: {
      marginTop: 0,
    },
    inputLabel:{
      paddingBottom: 45,
    },root: {
      display: 'flex',
      flexWrap: 'wrap',
    },hidden: {
      display:"none"
    }
  });
  
class CreateCourse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isDataFetched: false,
            allCourses:[],
            allCourseRelations:[],
            error: false,
            labelWidth: 50,
            showSameParentNotification: false,
            sameAsParentMessage: "",
            showCourseRelationAlreadyExists: "",
            courseRelationAlreadyExistsMessage: 'The selected already exists, Please select a differnet course',
            alertType: "error",
            showAddCourseRelationError: false,
            AddCourseRelationErrorMessage: "",
            pageLoadError: false
        }
    }

    componentDidMount(){
      this.getDataToRenderPage(); 
    }

    getDataToRenderPage=()=>{
      let allCourses, allCourseRelations;
      let that = this;
      fetchApi("/courses/all", {})
         .then((response) => {
          allCourses = response;
          fetchApi("/courseRelation", {})
          .then((response)=>{
              allCourseRelations = response['data'];
              this.setState({
                  error: false,
                  isDataFetched: true
              })
              that.makeDataDisplayReady(allCourses, allCourseRelations);
          }).catch((error)=>{
              this.setState({
                  error:true,
                  isDataFetched: false,
                  pageLoadError: true,
                  pageLoadErrorMessage: error['message']
              })
          })
         })

  }

    makeDataDisplayReady=(allCourses, allCourseRelations)=>{
      this.addCourseNameToCourseRelation(allCourses, allCourseRelations);
      this.mergeArrays(allCourses, allCourseRelations);
      this.setState({allCourses:allCourses, allCourseRelations:allCourseRelations});
    }

    addCourseNameToCourseRelation=(allCourses, allCourseRelations)=> {
      let courseDetail;
      allCourseRelations.map((course)=>{
        courseDetail = _.where(allCourses, {id: course.reliesOn});
        course['relatedCourseName'] = courseDetail[0]['name']; 
      });
    }

    mergeArrays=(allCourses, allCourseRelations)=>{
      allCourses.map((course)=>{
        course['reliesOn']=[];
        course['displayAddButton'] = true;
        course['displayCourseDepenedencySelect']=false;

    });

    allCourses.map((course)=>{
        allCourseRelations.map((courseRelation)=>{
              course.id === courseRelation.courseId ? (course.reliesOn.push({courseId: courseRelation['reliesOn'], courseName: courseRelation['relatedCourseName']})) : '';
          })
          return course;  
      })
    }

    deleteCourseRelation=(e,course,relatedCourse)=>{
      let parentCourseId = course['id'];
      let reliesOn = relatedCourse['courseId'];
      deleteCourseRelaionAPI(parentCourseId,reliesOn).then((response)=>{
          if(response && response.deleted) {
            this.getDataToRenderPage();
          } else {
            this.displayAddCourseRelationErrorMessage(response);
          }
      }).catch((error)=>{
        this.displayAddCourseRelationErrorMessage(error);
      })
    }

    displayAddDependencySelect=(course)=>{
      let courseId = course.id;
      this.setState(function(state, props) {
        let updateCourses = state.allCourses.map((courseState)=>{
            courseState.id === courseId ?  course['displayCourseDepenedencySelect']=true:"";
            courseState.id === courseId ?  course['displayAddButton']=false:"";
            return courseState;
        })
        return {
          allCourses: updateCourses
        };
      });
    }

    displayAddDependencySelect=(course)=>{
      let courseId = course.id;
      this.setState(function(state, props) {
        let updateCourses = state.allCourses.map((courseState)=>{
            courseState.id === courseId ?  course['displayCourseDepenedencySelect']=true:"";
            courseState.id === courseId ?  course['displayAddButton']=false:"";
            return courseState;
        })
        return {
          allCourses: updateCourses
        };
      });
    }

    addDependencyCourse=(course, event)=>{
      let selectedCourse=event.target.value;
      let parentCourseId= course['id'];
      let isSelectedCourseValid = this.checkIsSelectedCourseValid(course, selectedCourse);
      if(isSelectedCourseValid) {
        addCourseRelaionAPI(parentCourseId,selectedCourse).then((response)=>{
          if(response && response.Added){
            this.getDataToRenderPage();
          } else {
            this.displayAddCourseRelationErrorMessage(response);
          }
          
        }).catch((error)=>{
          this.displayAddCourseRelationErrorMessage(error);
        })
      }
    }

    displayAddCourseRelationErrorMessage(response) {
      let message = response.message ? response.message : 'Course relation could not be added due to an error';
      this.showAddCourseRelationError(message);
    };

    showAddCourseRelationError=(message)=>{
      this.setState({
        showAddCourseRelationError: true,
        AddCourseRelationErrorMessage: message
      })
    }

    checkIsSelectedCourseValid=(course, selectedCourseId)=>{
      let isSelectedCourseValid = true;
      let parentCourseId = course['id'];
      let dependencyCourseIds = _.pluck(course['reliesOn'], 'courseId');
      if(parseInt(parentCourseId) === parseInt(selectedCourseId) ){
        isSelectedCourseValid = false;
        this.handleShowSameParentNotification();
      } else if (dependencyCourseIds && _.contains(dependencyCourseIds, selectedCourseId)) {
        this.showCourseRelationAlreadyExistsNotification();
        isSelectedCourseValid = false;
      }
      return isSelectedCourseValid;
    }

    handleShowSameParentNotification=()=>{
      this.setState({
        sameAsParentMessage: 'Selected course is same as parent course',
        showSameParentNotification:true,
      });
    }

    handleHideSameParentNotification = () => {
      this.setState({
         showSameParentNotification: false,
         sameAsParentMessage: "",
       })
    }

    handleAddCourseRelationErrorClose=()=>{
        this.setState({
          showAddCourseRelationError: false,
          AddCourseRelationErrorMessage: ""
        })
    }

    render(){
        const {classes} = this.props;
        const {allCourses,allCourseRelations,isDataFetched,showSameParentNotification,sameAsParentMessage,showCourseRelationAlreadyExists,courseRelationAlreadyExistsMessage,alertType,showAddCourseRelationError,AddCourseRelationErrorMessage,pageLoadError,pageLoadErrorMessage} = this.state;
        console.log('stateee');
        console.log(this.state);
        let options = allCourses.map((course)=>{
          return <option value={course.id}>{course.name}</option>;  
        })
        if(!isDataFetched && pageLoadError) {
          return(
            <div>{pageLoadErrorMessage}</div>
          )
        }
        else if(!isDataFetched){
          return(
            <div className={classes.rootLoader}>
            <CircularProgress className={classes.progress} size={50} />
           </div>
        )
        } 
        else {
          return(
            <div>
           <h3> Course dependeny </h3>
          <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
            <TableCell component="th" scope="row">
                  <h3>Course</h3>
                </TableCell>
            </TableHead>
            <TableBody>
              {allCourses.map(course => (
                <TableRow key={course.id}>
                  <TableCell scope="row">
                    <span className={classes.courseName}> {course.name}</span> 
                    {
                  course.reliesOn.map(relatedCourse =>
                    <Link color="textPrimary" className={classes.link} onClick={(e)=>this.deleteCourseRelation(e,course,relatedCourse)}>
                           <DeleteForever className={classes.icon} />
                           {relatedCourse.courseName}
                    </Link>
                    )
                  } 
                  <span>
                  <Button
                    variant="fab"
                    color="secondary"
                    className={course['displayAddButton'] ? classes.approveButton : classes.hidden } onClick={()=>this.displayAddDependencySelect(course)}
                    //onClick = {()=>this.submitAssignment(true)}
                    >
                   <AddIcon/>
                  </Button>
                  </span>
                  <FormControl variant="outlined" className={ course['displayCourseDepenedencySelect'] ? classes.formControl : classes.hidden }>
          <InputLabel className={classes.inputLabel}
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
          >
            Course
          </InputLabel>
          <Select className={ classes.select }
            native
            onChange={(e)=>this.addDependencyCourse(course,e)}   
            input={
              <OutlinedInput
                name="selectedCourse"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          > 
        {options}
          </Select>
        </FormControl>
                  </TableCell>
                </TableRow>
              ))} 
            </TableBody>
          </Table>
          <AlertNotification
              open={showSameParentNotification}
              message={sameAsParentMessage}
              variant={"error"}
              autoHideDuration={6000}
              onClose={this.handleHideSameParentNotification}
            />
            <AlertNotification
              open={showAddCourseRelationError}
              message={AddCourseRelationErrorMessage}
              variant={alertType}
              autoHideDuration={6000}
              onClose={this.handleAddCourseRelationErrorClose}
            />
        </Paper>
     
        </div>
          )
        }
        
    }


}

export default withStyles(styles)(CreateCourse);