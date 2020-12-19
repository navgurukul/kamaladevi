import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './get-page-context';
import ReduxToastr from "react-redux-toastr";
import { Provider } from 'react-redux'
import configureStore from './store/index';
const store = configureStore();

function withRoot(Component) {
	class WithRoot extends React.Component {
		constructor(props, context) {
			super(props, context);

			this.pageContext = this.props.pageContext || getPageContext();
		}

		componentDidMount() {
			// Remove the server-side injected CSS.
			const jssStyles = document.querySelector('#jss-server-side');
			if (jssStyles && jssStyles.parentNode) {
				jssStyles.parentNode.removeChild(jssStyles);
			}
		}

		pageContext = null;


		/* eslint-disable */
		render() {
			// MuiThemeProvider makes the theme available down the React tree thanks to React context.
			return (
				<Provider store={store}>
					<MuiThemeProvider
						theme={this.pageContext.theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						<ReduxToastr
							timeOut={4000}
							newestOnTop={false}
							preventDuplicates
							position="top-right"
							getState={(state) => state.toastr} // This is the default
							transitionOut="fadeOut"
							progressBar
							closeOnToastrClick
						/>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Component {...this.props} />
					</MuiThemeProvider>
				</Provider>
			);
		}
		/* eslint-enable */
	}

	WithRoot.propTypes = {
		pageContext: PropTypes.object,
	};

	WithRoot.defaultProps = {
		pageContext: null,
	};

	WithRoot.getInitialProps = (ctx) => {
		if (Component.getInitialProps) {
			return Component.getInitialProps(ctx);
		}

		return {};
	};

	return WithRoot;
}

export default withRoot;
