/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import {
	createMuiTheme,
	createGenerateClassName,
} from '@material-ui/core/styles';

import * as colors from '@material-ui/core/colors';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: colors.orange[200],
			main: '#f05f40',
			dark: colors.orange[800],
		},
		secondary: {
			light: colors.green[300],
			main: colors.green[500],
			dark: colors.green[700],
		},
		warning: {
			light: colors.amber[300],
			main: colors.amber[500],
			dark: colors.amber[700],
		},
		info: {
			light: colors.blue[300],
			main: colors.blue[500],
			dark: colors.blue[700],
		},
	},
	typography: {
		headline: {
		    [breakpoints.down('md')]: {
		      fontSize: 16,
		    },
		},
		textSecondary: {
		  [breakpoints.down('md')]: {
		    fontSize: 10,
		  },
		},
	},
});

function createPageContext() {
	return {
		theme,
		// This is needed in order to deduplicate the injection of CSS in the page.
		sheetsManager: new Map(),
		// This is needed in order to inject the critical CSS.
		sheetsRegistry: new SheetsRegistry(),
		// The standard class name generator.
		generateClassName: createGenerateClassName(),
	};
}

export default function getPageContext() {
	// Make sure to create a new context for every server-side request so that data
	// isn't shared between connections (which would be bad).
	if (!process.browser) {
		return createPageContext();
	}

	// Reuse context on the client-side.
	if (!global.__INIT_MATERIAL_UI__) {
		global.__INIT_MATERIAL_UI__ = createPageContext();
	}

	return global.__INIT_MATERIAL_UI__;
}
