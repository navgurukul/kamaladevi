// Submission Details of exercises solution
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	success: {
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	info: {
		backgroundColor: theme.palette.primary.dark,
	},
	warning: {
		backgroundColor: amber[700],
	},
	icon: {
		fontSize: 20,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing.unit,
	},
	message: {
		display: 'flex',
		alignItems: 'center',
	},
	close: {
		padding: theme.spacing.unit,
	},
});

const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon,
};

const AlertNotification = (props) => {
	const {
		classes,
		onClose,
		message,
		open,
		variant,
		...others
	} = props;
	const Icon = variant ? variantIcon[variant] : variantIcon.success;


	return (
		<Snackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={open}
			ContentProps={{
				className: classes[variant],
			}}
			message={(
				<span id="client-snackbar" className={classes.message}>
					<Icon className={`${classes.icon} ${classes.iconVariant}`} />
					{message}
				</span>
			)}
			onClose={onClose}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					className={classes.close}
					onClick={onClose}
				>
					<CloseIcon className={classes.icon} />
				</IconButton>,
			]}
			{...others}
		/>
	);
};


AlertNotification.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	message: PropTypes.string.isRequired,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	variant: PropTypes.oneOf(['success', 'warning', 'error', 'info', '']).isRequired,
};

export default withStyles(styles)(AlertNotification);
