import React, {Component} from 'react';
import MentorReportTable from './mentor-report-table';



class CourseProgressReport extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <h1>Course Progress</h1>
            <MentorReportTable/>
          </div>
        )
    }
}

export default CourseProgressReport;