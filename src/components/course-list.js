// Course list
import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		textAlign: 'center',
		paddingTop: theme.spacing.unit * 20,
	},
});


class CourseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: null,
		};
	}

	componentDidMount() {
		// We will be actually making a network request here,
		// on http://saral.navgurukul.org/api/courses to get the courses
		setTimeout(() => {
			this.setState({
				courses: {
					availableCourses: [
						{
							id: 12,
							name: 'Basics of Programming Language',
						},
						{
							id: 13,
							name: 'Introduction to HTML',
						},
						{
							id: 14,
							name: 'Introduction to CSS',
						},
						{
							id: 15,
							name: 'Introduction to Javascript',
						},
						{
							id: 16,
							name: 'NavGurukul Learning Framework',
						},
						{
							id: 17,
							name: 'Introduction to Angular',
						},
					],
				},
			});
		}, 1500);
	}

	render() {
		const { classes } = this.props;
		const { courses } = this.state;
		if (!courses) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress} size={50} />
				</div>);
		}
		return (
			<div className={classes.root}>
				{courses.availableCourses.map(value => (
					<Typography key={value.id}>
						{value.name}
					</Typography>
				))}
			</div>
		);
	}
}

CourseList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
