module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticatedFetchAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return markCourseCompleteAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return submitExerciseAPI; });
/* unused harmony export getExerciseFromSlugAPI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return saveCoursesSequenceAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteCourseAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getExerciseSubmissionAPI; });
/* unused harmony export getExerciseSubmissionAPIWithoutLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return enrollCourseAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return reviewerFeedbackSubmissionAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session__ = __webpack_require__(11);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





 // export const fetchApi = (endpoint, payload, headers, method = 'get') => {
// 	const axiosConfig = {
// 		method: method.toLowerCase(),
// 		headers,
// 	};
// 	if (axiosConfig.method === 'get') {
// 		axiosConfig.params = payload;
// 	} else {
// 		axiosConfig.data = payload;
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, axiosConfig)
// 		.catch((error) => {
// 			// TODO: More sane error handling. Currently, 
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, assuming that
// 			// the access token has expired, and hence sending to / to
// 			// ask user to log in again
// 			if (error.response && error.response.status === 401) {
// 				clearSession();
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, 
// 			}
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, // 			throw error;
// 		});
// 	}
// 	return axios(`${BACKEND_URL}${endpoint}`, 
// };

var fetchApi = function fetchApi(endpoint, payload, headers) {
  var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
  var options = {
    method: method.toUpperCase(),
    headers: headers
  };
  var url = new URL("".concat(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* BACKEND_URL */]).concat(endpoint));

  if (options.method === 'GET') {
    Object.keys(payload).forEach(function (key) {
      return url.searchParams.append(key, payload[key]);
    });
  } else {
    options.body = JSON.stringify(payload);
  }

  return fetch(url, options).then(function (response) {
    // 	}
    // 	return axios(`${BACKEND_URL}${endpoint}`, 
    // 	}
    // 	return axios(`${BACKEND_URL}${endpoint}`, 
    if (!response.ok) {
      console.error(response); // TODO: More sane error handling. Currently, assuming that
      // the access token has expired, and hence sending to / to
      // ask user to log in 
      // 	}
      // 	return axios(`${BACKEND_URL}${endpoint}`,  		
      // 	}
      // 	return axios(`${BACKEND_URL}${endpoint}`, 
      // 	}
      // 	return axios(`${BACKEND_URL}${endpoint}`, 

      if (response.status === 401) {
        Object(__WEBPACK_IMPORTED_MODULE_5__session__["b" /* clearSession */])(); // throw response.statusText;
      }
    }

    return response.json();
  }).catch(function (error) {
    console.log('errr fetchApi');
    console.error(error);
    throw error;
  });
};
var authenticatedFetchAPI = function authenticatedFetchAPI(endpoint) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  return __WEBPACK_IMPORTED_MODULE_3_localforage___default.a.getItem('authResponse').then(function (value) {
    if (value === null) {
      __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.replace('/home');
    } else {
      var jwt = value.jwt;
      return fetchApi(endpoint, payload, {
        Authorization: jwt
      }, method);
    }
  });
};
var markCourseCompleteAPI = function markCourseCompleteAPI(courseId, menteeId) {
  return authenticatedFetchAPI("/courses/".concat(courseId, "/complete"), {
    "menteeId": menteeId
  }, 'post');
}; // Make notes submission api call to submit notes for students

var submitExerciseAPI = function submitExerciseAPI(courseId, exerciseId, notes) {
  return authenticatedFetchAPI("/courses/".concat(courseId, "/exercise/").concat(exerciseId, "/submission"), {
    notes: notes
  }, 'post');
};
var getExerciseFromSlugAPI = function getExerciseFromSlugAPI(courseId, slug) {
  return authenticatedFetchAPI("/courses/".concat(courseId, "/exercise/getBySlug"), {
    slug: slug
  });
};
var saveCoursesSequenceAPI = function saveCoursesSequenceAPI(payload) {
  return authenticatedFetchAPI('/courses/sequenceNum', {
    courses: payload
  }, 'put');
};
var deleteCourseAPI = function deleteCourseAPI(courseId) {
  return authenticatedFetchAPI("/courses/".concat(courseId, "/delete"), {}, 'delete');
}; // Make notes submission api call to get submitted notes

var getExerciseSubmissionAPI = function getExerciseSubmissionAPI(courseId, exerciseId) {
  var query = {
    submissionUsers: 'current',
    submissionState: 'all'
  };
  return authenticatedFetchAPI("/courses/".concat(courseId, "/exercise/").concat(exerciseId, "/submission"), query);
};
var getExerciseSubmissionAPIWithoutLogin = function getExerciseSubmissionAPIWithoutLogin(courseId, exerciseId) {
  var query = {
    submissionUsers: 'all',
    submissionState: 'all'
  };
  return fetchApi("/courses/".concat(courseId, "/exercise/").concat(exerciseId, "/submission"), query);
}; // Make enroll API call, and add that course to enrolledCourses

var enrollCourseAPI =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(courseId, callBack) {
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", authenticatedFetchAPI("/courses/".concat(courseId, "/enroll"), {}, 'post').then(function (response) {
              console.log('response', response);

              if (response.enrolled) {
                console.log('response if');
                callBack(true);
                Object(__WEBPACK_IMPORTED_MODULE_5__session__["a" /* addEnrolledCourses */])(courseId);
              } else {
                throw new Error(response.message);
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function enrollCourseAPI(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Submit the feedback for student assignment

var reviewerFeedbackSubmissionAPI = function reviewerFeedbackSubmissionAPI(notes, isApprove, submissionId) {
  return __WEBPACK_IMPORTED_MODULE_3_localforage___default.a.getItem('authResponse').then(function (value) {
    var jwt = value.jwt;
    var payload = {
      notes: notes,
      approved: isApprove
    };
    return fetchApi("/assignments/peerReview/".concat(submissionId), payload, {
      Authorization: jwt
    }, 'put');
  });
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resetEnrolledCourses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setEnrolledCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEnrolledCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEnrolled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);


var resetEnrolledCourses = function resetEnrolledCourses() {
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.removeItem('enrolledCourses');
};
var setEnrolledCourses = function setEnrolledCourses(data) {
  var enrolledCourses = data.enrolledCourses;
  var enrolledCoursesId = enrolledCourses.map(function (value) {
    return value.id;
  });
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.setItem('enrolledCourses', enrolledCoursesId);
}; // Add a course to enrolledCourses

var addEnrolledCourses = function addEnrolledCourses(courseId) {
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.getItem('enrolledCourses', function (error, value) {
    if (value) {
      value.push(parseInt(courseId, 10));
      __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.setItem('enrolledCourses', value);
    } else {
      __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.setItem('enrolledCourses', [courseId]);
    }
  });
}; // Checks whether a course is enrolled

var isEnrolled = function isEnrolled(courseId, callBack) {
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.getItem('enrolledCourses', function (error, value) {
    if (value && value.indexOf(parseInt(courseId, 10)) !== -1) {
      callBack(true);
    } else {
      callBack(false);
    }
  });
};
var clearSession = function clearSession() {
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.removeItem('authResponse', function () {
    __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.replace('/home');
  });
  resetEnrolledCourses();
};
var setSession = function setSession(authResponse) {
  __WEBPACK_IMPORTED_MODULE_0_localforage___default.a.setItem('authResponse', authResponse, function (error) {
    if (!error) {
      __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.replace('/home');
    } else {// TODO: Handle error case
    }
  }).catch(function () {
    /* TODO: Handle network error cases */
  });
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles_createBreakpoints__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles_createBreakpoints___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles_createBreakpoints__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */



 // Generate breakpoints so we can use them in the theme definition

var breakpoints = __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles_createBreakpoints___default()({}); // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["orange"][200],
      main: '#f05f40',
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["orange"][800]
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["green"][300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["green"][500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["green"][700]
    },
    warning: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["amber"][300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["amber"][500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["amber"][700]
    },
    info: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["blue"][300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["blue"][500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors__["blue"][700]
    }
  },
  typography: {
    headline: _defineProperty({}, breakpoints.down('md'), {
      fontSize: 16
    }),
    textSecondary: _defineProperty({}, breakpoints.down('md'), {
      fontSize: 10
    })
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get_page_context__ = __webpack_require__(12);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props, context) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props, context));
      Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: null
      });
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__get_page_context__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",

      /* eslint-disable */
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default.a, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, this.props));
      }
      /* eslint-enable */

    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.defaultProps = {
    pageContext: null
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL; });
var BACKEND_URL = 'http://saral.navgurukul.org/api';

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sentry_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sentry_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__sentry_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_events__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_SwipeableDrawer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_SwipeableDrawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_SwipeableDrawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_List__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_IconButton__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_styles__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var drawerWidth = 240;

var styles = function styles(theme) {
  var _ref;

  return _ref = {
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing.unit * 10
    },
    flex: {
      flex: 1
    },
    drawerPaper: _objectSpread({
      width: drawerWidth,
      zIndex: theme.zIndex.appBar - 1
    }, theme.mixins.toolbar, {
      backgroundColor: theme.palette.grey[50]
    }),
    link: {
      textDecoration: 'inherit',
      color: 'inherit'
    },
    drawerContent: {
      marginTop: theme.spacing.unit * 10
    },
    sideNavList: {
      listStyleType: 'none'
    },
    sideNavItem: {
      cursor: 'pointer',
      padding: theme.spacing.unit,
      borderRadius: '3px',
      fontFamily: theme.typography.fontFamily,
      '&:hover': {
        backgroundColor: theme.palette.grey[300],
        transition: theme.transitions.easing.easyInOut
      }
    }
  }, _defineProperty(_ref, "sideNavItem", {
    cursor: 'pointer',
    padding: theme.spacing.unit,
    borderRadius: '3px',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      transition: theme.transitions.easing.easyInOut
    }
  }), _defineProperty(_ref, "hidden", {
    display: 'none'
  }), _ref;
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            open: !prevState.open
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(open) {
        _this.setState({
          open: open
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(open) {
        _this.setState({
          open: open
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkIsAuthenticated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_3_localforage___default.a.getItem('authResponse', function (error, value) {
          if (error) {
            // Do not remove this catch block, as the server side rendering
            // is taken care by this catch block. Couldn't figure out a way to stop
            // fetching of data on server side, hence, leaving it like this
            // TODO: Handle localforage error cases
            if (!window.navigator.onLine) {
              alert('Aap internet se connected nhi ho.');
            }

            console.log(e);
          } else if (!value) {// No access tokens saved
            // Do nothing
          } else {
            // Access token is already saved
            _this.setState({
              isAuthenticated: true
            });
          }
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.props.bus.emit('search', e.target.value);
      }
    });
    _this.state = {
      isAuthenticated: false,
      open: false,
      email: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var value;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.checkIsAuthenticated();
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3_localforage___default.a.getItem('authResponse');

              case 3:
                value = _context.sent;

                if (value) {
                  this.setState({
                    email: value.user.email
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var hidden = this.props.classes.hidden;
      var _state = this.state,
          isAuthenticated = _state.isAuthenticated,
          open = _state.open,
          email = _state.email;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.root
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_AppBar___default.a, {
        position: "fixed"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Toolbar___default.a, null, isAuthenticated ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__material_ui_core_IconButton___default.a, {
        color: "inherit",
        "aria-label": "Menu",
        onClick: this.toggleMenu
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Menu___default.a, null)) : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__material_ui_core_Typography___default.a, {
        variant: "title",
        color: "inherit",
        className: classes.flex
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "/home",
        className: classes.link
      }, "Saral")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        ref: "filterInput",
        className: this.props.searchHidden ? hidden : '',
        onChange: this.changeHandler,
        placeholder: "Search"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_SwipeableDrawer___default.a, {
        variant: "persistent",
        open: open,
        onOpen: function onOpen() {
          return _this2.openMenu(true);
        },
        onClose: function onClose() {
          return _this2.closeMenu(false);
        },
        classes: {
          paper: classes.drawerPaper
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.drawerContent
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_List___default.a, {
        className: classes.sideNavList
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/home"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.sideNavItem
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/assignment-review"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.sideNavItem
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "PeerReview"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/reports/course-progress-report-per-mentor"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.sideNavItem
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "Mentee courses"))), email.includes('@navgurukul') ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/githubAccess"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: classes.sideNavItem
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, "Get Github Student Pack"))) : null))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_14__material_ui_core_styles__["withStyles"])(styles)(Header));

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/with-root.js
var with_root = __webpack_require__(18);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "localforage"
var external__localforage_ = __webpack_require__(3);
var external__localforage__default = /*#__PURE__*/__webpack_require__.n(external__localforage_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(17);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(47);
var Paper__default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(33);
var CircularProgress__default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "react-google-login"
var external__react_google_login_ = __webpack_require__(62);
var external__react_google_login__default = /*#__PURE__*/__webpack_require__.n(external__react_google_login_);

// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: ./src/services/session.js
var session = __webpack_require__(11);

// EXTERNAL MODULE: external "query-string"
var external__query_string_ = __webpack_require__(109);
var external__query_string__default = /*#__PURE__*/__webpack_require__.n(external__query_string_);

// CONCATENATED MODULE: ./src/components/landing-page.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    },
    paper: {
      width: '25%',
      minWidth: '200px',
      margin: 'auto',
      padding: theme.spacing.unit * 2.5
    },
    progress: {
      margin: theme.spacing.unit * 2
    }
  };
};

var landing_page_authSuccess = function authSuccess(response) {
  var tokenId = response.tokenId;
  Object(api["d" /* fetchApi */])('/users/auth/google', {
    idToken: tokenId
  }, {
    'Content-Type': 'application/json'
  }, 'post').then(function (authResponse) {
    console.log('authResponse', authResponse);
    Object(session["e" /* setSession */])(authResponse);
  });
};

var authFailure = function authFailure(response) {
  console.log('authFailure', response); // TODO: Send analytics or do something meaningful here
};

var landing_page_LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage(props) {
    var _this;

    _classCallCheck(this, LandingPage);

    _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));
    _this.state = {
      loading: false,
      queryParams: {
        "params": null
      }
    };
    return _this;
  }

  _createClass(LandingPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var values = external__query_string__default.a.parse(location.search);
      this.setState({
        queryParams: {
          params: values.params
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          loading = _state.loading,
          queryParams = _state.queryParams;
      external__localforage__default.a.getItem('authResponse', function (error, value) {
        if (!error) {
          //user is authenticated
          if (value !== null) {
            router__default.a.replace('/home');
            return external__react__default.a.createElement(CircularProgress__default.a, {
              className: classes.progress,
              size: 50
            });
          } else {// if (queryParams != undefined && queryParams.params == "signin") {
            // 	// Router.replace('/');
            // } else {
            // 	Router.replace('/home');
            // }
          }
        } else {// TODO: Handle error cases
          }
      }).catch(function () {// This catch block is for SSR. Since, on serverside, no storage service will
        // be found, and this will be safety cushion for that exception
      }); // Show loader if auth is success, and waiting for Router to take to home
      // if (this.state.loading) {
      // 	return (
      // 		<div className={classes.root}>
      // 			<CircularProgress className={classes.progress} size={50} />
      // 		</div>
      // 	);
      // }
      // if (queryParams.params == "signin") {

      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Paper__default.a, {
        className: classes.paper
      }, external__react__default.a.createElement(Typography__default.a, {
        variant: "headline",
        gutterBottom: true
      }, "SARAL ", external__react__default.a.createElement("br", null)), external__react__default.a.createElement(Typography__default.a, {
        variant: "caption",
        gutterBottom: true
      }, "NavGurukul eLearning Platform"), external__react__default.a.createElement("br", null), external__react__default.a.createElement(Button__default.a, {
        color: "primary",
        variant: "contained",
        component: external__react_google_login__default.a,
        clientId: "34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com",
        cookiePolicy: "single_host_origin",
        scope: "profile email",
        onSuccess: function onSuccess(response) {
          _this2.setState({
            loading: true
          });

          landing_page_authSuccess(response);
        },
        onFailure: authFailure
      }, "Sign In"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), external__react__default.a.createElement(Typography__default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."), external__react__default.a.createElement(Typography__default.a, {
        variant: "body1",
        gutterBottom: true,
        style: {
          textAlign: 'right'
        }
      }, "~ Margaret Mead"))); // } else {
      // 	return null;
      // }
    }
  }]);

  return LandingPage;
}(external__react__default.a.Component);

/* harmony default export */ var landing_page = (Object(with_root["a" /* default */])(Object(styles_["withStyles"])(styles)(landing_page_LandingPage)));
// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__(23);

// CONCATENATED MODULE: ./pages/login.js
// This is main entry page for route '/'





var login_Index = function Index() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(header["a" /* default */], {
    searchHidden: true
  }), external__react__default.a.createElement(landing_page, null));
};

/* harmony default export */ var login = __webpack_exports__["default"] = (Object(with_root["a" /* default */])(login_Index));

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ })
/******/ ]);