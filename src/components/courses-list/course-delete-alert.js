import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const CourseDeleteAlert = (props) => {
    return (
      <div>
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          >
          <DialogTitle id="alert-dialog-slide-title">
            {"Course Delete?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Kya aap yeh course delete karna chate hai?
              <br/>
              Course Name: {props.course.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.cancelCourseDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={props.deleteCourse} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default CourseDeleteAlert;
