import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 2,
		overflowX: 'auto',
		flexGrow: 1,
		margin: '0 auto',
		maxWidth: theme.spacing.unit * 140,
	},
	table: {

	},
});

const courseStatus = (isEnrolled, isCourseCompleted) => {
	if (isCourseCompleted) {
		return 'Complete';
	} else if (isEnrolled) {
		return 'Enrolled';
	} else {
		return 'Not-Enrolled';
	}
};

const MenteeCoursesReports = (props) => {
	const {
		classes,
		coursesReports,
		mentees,
	} = props;
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>

						<TableCell variant="head">Courses</TableCell>
						{
							mentees.map(mentee => <TableCell variant="head" key={mentee.id}>{mentee.name}</TableCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						coursesReports.map(courseReport => (
							<TableRow key={courseReport.courseId}>
								<TableCell variant="head">{courseReport.courseName}</TableCell>
								{
									courseReport.students.map(student => (
										<TableCell variant="body" key={student.id}>
											{courseStatus(student.isEnrolled, student.isCourseCompleted)}
										</TableCell>
									))
								}
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</Paper>
	);
};

MenteeCoursesReports.propTypes = {
	classes: PropTypes.object.isRequired,
	coursesReports: PropTypes.arrayOf(PropTypes.object).isRequired,
	mentees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(MenteeCoursesReports);
