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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getExerciseDetailFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getExerciseIdFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTitleFromSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSlugOfNextCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sortCoursesBySequenceNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSlugOfPreviousCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterPendingAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMenteeCoursesTable; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// gets gihtub Link for each exercise
var getExerciseDetailFromSlug = function getExerciseDetailFromSlug(slug, exercises) {
  for (var exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
    if (exercises[exerciseId].slug === slug) {
      return exercises[exerciseId];
    }

    if (exercises[exerciseId].childExercises.length) {
      for (var childExerciseId = 0; childExerciseId < exercises[exerciseId].childExercises.length; childExerciseId += 1) {
        if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
          return exercises[exerciseId].childExercises[childExerciseId];
        }
      }
    }
  }
}; // Get location in exercises list for currently active exercise

var getExerciseIdFromSlug = function getExerciseIdFromSlug(slug, exercises) {
  for (var exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
    if (exercises[exerciseId].slug === slug) {
      return {
        openExerciseId: exerciseId,
        selectedvalue: exercises[exerciseId].id,
        selectedchildExercise: null
      };
    }

    if (exercises[exerciseId].childExercises.length) {
      for (var childExerciseId = 0; childExerciseId < exercises[exerciseId].childExercises.length; childExerciseId += 1) {
        if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
          return {
            openExerciseId: exerciseId,
            selectedvalue: exercises[exerciseId].id,
            selectedchildExercise: exercises[exerciseId].childExercises[childExerciseId].id
          };
        }
      }
    }
  }
}; // get the Title out of slug for the page

var getTitleFromSlug = function getTitleFromSlug(slug) {
  if (slug) {
    var title = slug.replace(/[-__/_]/g, ' ');
    title = title[0].toUpperCase() + title.slice(1, title.length);
    return title;
  }
};

var getNextExerciseSlug = function getNextExerciseSlug(exercises, exerciseId) {
  try {
    // Return if there is a next exercise
    return exercises[exerciseId + 1].slug;
  } catch (e) {// no-op
  }
};

var getPreviousChildSlug = function getPreviousChildSlug(exercises, exerciseId, childExerciseId) {
  if (childExerciseId === 0) {
    return exercises[exerciseId].slug;
  } else {
    return exercises[exerciseId].childExercises[childExerciseId - 1].slug;
  }
};

var getNextChildSlug = function getNextChildSlug(exercises, exerciseId, childExerciseId) {
  try {
    // Return if there is next child
    return exercises[exerciseId].childExercises[childExerciseId + 1].slug;
  } catch (e) {
    try {
      // Return if there is a next exercise
      return exercises[exerciseId + 1].slug;
    } catch (e_) {// no-op
    }
  }
};

var getPreviousExerciseSlug = function getPreviousExerciseSlug(exercises, exerciseId) {
  try {
    var childExerciseListLength = exercises[exerciseId - 1].childExercises.length;

    if (childExerciseListLength) {
      return exercises[exerciseId - 1].childExercises[childExerciseListLength - 1].slug;
    } else {
      return exercises[exerciseId - 1].slug;
    }
  } catch (e) {// no-op
  }
}; // Get slug of the next course to navigate using next button


var getSlugOfNextCourse = function getSlugOfNextCourse(slug, exercises) {
  for (var exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
    if (exercises[exerciseId].slug === slug) {
      // This is the slug for first level exercise
      if (exercises[exerciseId].childExercises.length) {
        // If it has child exercises, return the slug for next child exercise
        return exercises[exerciseId].childExercises[0].slug;
      } else {
        // Return the slug for the next exercise if it exist
        return getNextExerciseSlug(exercises, exerciseId);
      }
    } else if (exercises[exerciseId].childExercises.length) {
      for (var childExerciseId = 0; childExerciseId < exercises[exerciseId].childExercises.length; childExerciseId += 1) {
        if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
          return getNextChildSlug(exercises, exerciseId, childExerciseId);
        }
      }
    } else {// no-op
    }
  }
}; // sort the courses by sequenceNum

var sortCoursesBySequenceNum = function sortCoursesBySequenceNum(courses) {
  var sortedCourses = Array.from(courses);
  sortedCourses.sort(function (a, b) {
    return a.sequenceNum - b.sequenceNum;
  });
  return sortedCourses;
}; // Get slug of the previous course to navigate using next button

var getSlugOfPreviousCourse = function getSlugOfPreviousCourse(slug, exercises) {
  for (var exerciseId = 0; exerciseId < exercises.length; exerciseId += 1) {
    if (exercises[exerciseId].slug === slug) {
      return getPreviousExerciseSlug(exercises, exerciseId);
    } else if (exercises[exerciseId].childExercises.length) {
      for (var childExerciseId = 0; childExerciseId < exercises[exerciseId].childExercises.length; childExerciseId += 1) {
        if (exercises[exerciseId].childExercises[childExerciseId].slug === slug) {
          return getPreviousChildSlug(exercises, exerciseId, childExerciseId);
        }
      }
    }
  }
}; // filters the pending assignment from the list

var filterPendingAssignment = function filterPendingAssignment(assignments) {
  var pendingAssignmentList = [];

  for (var i = 0; i < assignments.length; i++) {
    var assignment = assignments[i];

    if (!assignment.completed && assignment.state === 'pending') {
      pendingAssignmentList.push(assignment);
    }
  }

  return pendingAssignmentList;
}; // //////////////////////////////////////////////////////////

var findObjectIndex = function findObjectIndex(array, key, value) {
  return array.findIndex(function (element) {
    return element[key] === value;
  });
}; // to create a mentee schema row for Dashboard


var _getMenteesReportSchema = function _getMenteesReportSchema(mentees, extraFields) {
  var menteesCourseReportSchema = [];

  for (var i = 0; i < mentees.length; i++) {
    var menteeCourseReportSchema = _objectSpread({
      id: mentees[i].id,
      name: mentees[i].name,
      email: mentees[i].email
    }, extraFields);

    menteesCourseReportSchema.push(menteeCourseReportSchema);
  }

  return menteesCourseReportSchema;
};

var getMenteeCoursesTable = function getMenteeCoursesTable(coursesReport, mentees) {
  var coursesReportTable = [];
  var extraFields = {
    isEnrolled: false,
    isCourseCompleted: false
  }; // get a schema of mentees courses reports to display in each courses

  var menteesCourseReportSchema = _getMenteesReportSchema(mentees, extraFields); // update each and every courses


  coursesReport.forEach(function (course) {
    var studentEnrolled = course.studentEnrolled,
        courseDetails = _objectWithoutProperties(course, ["studentEnrolled"]); // create a copy of schema for every courses


    var courseReport = _objectSpread({
      students: menteesCourseReportSchema.slice()
    }, courseDetails); // update each schema with the current detail of the student


    studentEnrolled.forEach(function (mentee) {
      var email = mentee.email;
      var menteeIndex = findObjectIndex(mentees, 'email', email);
      courseReport.students[menteeIndex] = _objectSpread({}, mentee);
    });
    coursesReportTable.push(courseReport);
  }); // console.log(coursesReportTable);

  return coursesReportTable;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Snackbar__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Snackbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Info__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Error__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Warning__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_CheckCircle__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_CheckCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_icons_CheckCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_colors_green__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_colors_green__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors_amber__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors_amber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors_amber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

// Submission Details of exercises solution













var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    success: {
      backgroundColor: __WEBPACK_IMPORTED_MODULE_9__material_ui_core_colors_green___default.a[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: __WEBPACK_IMPORTED_MODULE_10__material_ui_core_colors_amber___default.a[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    close: {
      padding: theme.spacing.unit
    }
  };
};

var variantIcon = {
  success: __WEBPACK_IMPORTED_MODULE_8__material_ui_icons_CheckCircle___default.a,
  warning: __WEBPACK_IMPORTED_MODULE_7__material_ui_icons_Warning___default.a,
  error: __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Error___default.a,
  info: __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Info___default.a
};

var AlertNotification = function AlertNotification(props) {
  var classes = props.classes,
      onClose = props.onClose,
      message = props.message,
      open = props.open,
      variant = props.variant,
      others = _objectWithoutProperties(props, ["classes", "onClose", "message", "open", "variant"]);

  var Icon = variant ? variantIcon[variant] : variantIcon.success;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Snackbar___default.a, _extends({
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: open,
    ContentProps: {
      className: classes[variant]
    },
    message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      id: "client-snackbar",
      className: classes.message
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
      className: "".concat(classes.icon, " ").concat(classes.iconVariant)
    }), message),
    onClose: onClose,
    action: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_IconButton___default.a, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.close,
      onClick: onClose
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_icons_Close___default.a, {
      className: classes.icon
    }))]
  }, others));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11__material_ui_core_styles__["withStyles"])(styles)(AlertNotification));

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircle");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withGATag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_ga__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_ga__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var withGATag = function withGATag(WrappedComponent) {
  var triggerGATag =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(triggerGATag, _React$Component);

    function triggerGATag() {
      _classCallCheck(this, triggerGATag);

      return _possibleConstructorReturn(this, (triggerGATag.__proto__ || Object.getPrototypeOf(triggerGATag)).apply(this, arguments));
    }

    _createClass(triggerGATag, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.log('GA component mounted');
        __WEBPACK_IMPORTED_MODULE_1_react_ga___default.a.initialize('UA-135762938-1');
        __WEBPACK_IMPORTED_MODULE_1_react_ga___default.a.pageview(window.location.pathname);
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, null);
      }
    }]);

    return triggerGATag;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  return triggerGATag;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/amber");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-ga"
var external__react_ga_ = __webpack_require__(32);
var external__react_ga__default = /*#__PURE__*/__webpack_require__.n(external__react_ga_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "localforage"
var external__localforage_ = __webpack_require__(3);
var external__localforage__default = /*#__PURE__*/__webpack_require__.n(external__localforage_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(28);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(17);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(53);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(33);
var CircularProgress__default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__(67);
var Edit__default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: ./src/services/session.js
var session = __webpack_require__(11);

// EXTERNAL MODULE: ./src/services/utils.js
var utils = __webpack_require__(31);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(30);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(43);
var CardContent__default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__(54);
var LinearProgress__default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(8);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/"
var _ = __webpack_require__(68);
var __default = /*#__PURE__*/__webpack_require__.n(_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(52);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// CONCATENATED MODULE: ./src/components/courses-list/course-list-category-card.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var styles = function styles(theme) {
  var _image, _cardFooter;

  return {
    root: {
      marginBottom: 20,
      flexGrow: 1 // height: 175,

    },
    cardContainer: {
      height: "100%"
    },
    cardContent: _defineProperty({
      minWidth: '100%',
      flex: 1,
      display: 'inline'
    }, theme.breakpoints.down('sm'), {
      marginLeft: 1
    }),
    imageContainer: {
      maxHeight: 155,
      minWidth: '100%',
      flex: 1,
      display: 'inline'
    },
    image: (_image = {
      width: '100%',
      overflow: 'hidden',
      objectFit: 'cover',
      maxHeight: 155
    }, _defineProperty(_image, theme.breakpoints.up('xl'), {
      paddingTop: theme.spacing.unit
    }), _defineProperty(_image, theme.breakpoints.down('sm'), {}), _image),
    enrolledProgress: {
      paddingTop: theme.spacing.unit
    },
    deleteCourseButton: _defineProperty({
      cursor: 'pointer',
      float: 'right'
    }, "cursor", 'unset'),
    deleteIcon: {
      fontSize: theme.spacing.unit * 2
    },
    cardMargin: _defineProperty({
      marginLeft: theme.spacing.unit * 1,
      marginRight: theme.spacing.unit * 2,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer'
    }, theme.breakpoints.down('sm'), {
      marginLeft: theme.spacing.unit * 1,
      marginRight: theme.spacing.unit * 1
    }),
    cardFooter: (_cardFooter = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'flex-end',
      flex: 1,
      marginTop: 45,
      fontSize: theme.spacing.unit * 2.5
    }, _defineProperty(_cardFooter, theme.breakpoints.down('md'), {
      fontSize: theme.spacing.unit * 2
    }), _defineProperty(_cardFooter, '& div', {
      display: 'flex'
    }), _defineProperty(_cardFooter, '& svg', {
      fontSize: 18
    }), _cardFooter),
    headline: _defineProperty({
      fontSize: theme.spacing.unit * 3
    }, theme.breakpoints.down('md'), {
      fontSize: theme.spacing.unit * 2.5
    }),
    cardInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    },
    subtitleStyle: {
      display: 'flex'
    }
  };
};

var course_list_category_card_CourseListCard = function CourseListCard(props) {
  var classes = props.classes,
      value = props.value,
      showProgress = props.showProgress,
      index = props.index;
  var classDifficulty = Math.floor(Math.random() * Math.floor(5));

  var renderDifficulty = function renderDifficulty(difficulty) {
    var DifficultyIcon;
    var text;

    switch (difficulty) {
      case 0:
        DifficultyIcon = _["SignalCellular0Bar"];
        text = "Very Easy";
        break;

      case 1:
        DifficultyIcon = _["SignalCellular1Bar"];
        text = "Easy";
        break;

      case 2:
        DifficultyIcon = _["SignalCellular2Bar"];
        text = "Medium";
        break;

      case 3:
        DifficultyIcon = _["SignalCellular3Bar"];
        text = "Hard";
        break;

      case 4:
        DifficultyIcon = _["SignalCellular4Bar"];
        text = "Very Hard";
        break;

      default:
        DifficultyIcon = _["SignalCellular0Bar"];
        text = "Unrated Difficulty";
    }

    return external__react__default.a.createElement("div", null, external__react__default.a.createElement(DifficultyIcon, null), text);
  };

  return external__react__default.a.createElement(Grid__default.a, {
    item: true,
    md: 4,
    xs: 6,
    className: classes.root
  }, external__react__default.a.createElement(link__default.a, {
    href: {
      pathname: '/course',
      query: {
        id: value.id
      }
    }
  }, external__react__default.a.createElement(Card__default.a, {
    variant: "contained",
    className: classes.cardMargin
  }, external__react__default.a.createElement(Grid__default.a, {
    container: true,
    direction: "column",
    className: classes.cardContainer
  }, external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 2,
    sm: true,
    md: true,
    className: classes.imageContainer
  }, external__react__default.a.createElement("img", {
    className: classes.image,
    src: value.logo
  })), external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 9,
    sm: 10,
    md: 10,
    container: true,
    className: classes.cardContent
  }, external__react__default.a.createElement(CardContent__default.a, {
    className: classes.cardInfoContainer
  }, external__react__default.a.createElement(Typography__default.a, {
    variant: "subtitle1",
    className: classes.subtitleStyle
  }, external__react__default.a.createElement(_["Class"], null), "Course Category"), external__react__default.a.createElement(Typography__default.a, {
    variant: "h6",
    className: classes.headline
  }, value.name), external__react__default.a.createElement(Typography__default.a, {
    color: "textSecondary"
  }, value.shortDescription), showProgress ? external__react__default.a.createElement("div", {
    className: classes.enrolledProgress
  }, external__react__default.a.createElement(LinearProgress__default.a, {
    variant: "determinate",
    value: value.completedSubmissions * 100 / value.totalExercises
  })) : null, external__react__default.a.createElement("div", {
    className: classes.cardFooter
  }, external__react__default.a.createElement("div", null, renderDifficulty(classDifficulty)), external__react__default.a.createElement("div", null, "Preview", external__react__default.a.createElement(_["ArrowForward"], null)))))))));
};

course_list_category_card_CourseListCard.defaultProps = {
  showProgress: false
};
/* harmony default export */ var course_list_category_card = (Object(styles_["withStyles"])(styles)(course_list_category_card_CourseListCard));
// CONCATENATED MODULE: ./src/components/courses-list/course-list-category-view.js
function course_list_category_view__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var course_list_category_view_styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    containerHeadingItem: {
      paddingBottom: theme.spacing.unit * 2
    },
    avbCoursesContainer: {
      paddingTop: theme.spacing.unit * 5
    },
    cardMargin: course_list_category_view__defineProperty({
      marginRight: 25,
      minHeight: theme.spacing.unit * 16,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer'
    }, theme.breakpoints.down('sm'), {
      marginRight: 2.5,
      wordWrap: 'break-word'
    })
  };
};

var course_list_category_view_CourseListCategoryView = function CourseListCategoryView(props) {
  var classes = props.classes,
      headline = props.headline,
      courses = props.courses,
      showProgress = props.showProgress,
      paddingTop = props.paddingTop;
  return external__react__default.a.createElement("div", {
    className: classes.root
  }, external__react__default.a.createElement(Grid__default.a, {
    container: true,
    spacing: 0,
    className: paddingTop ? classes.avbCoursesContainer : ''
  }, external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 12,
    className: classes.containerHeadingItem
  }, external__react__default.a.createElement(Typography__default.a, {
    variant: "headline",
    component: "h2",
    align: "center",
    gutterBottom: true
  }, headline)), courses.map(function (value, key) {
    return external__react__default.a.createElement(course_list_category_card, {
      key: value.id,
      value: value,
      index: key,
      showProgress: showProgress
    });
  })));
};

course_list_category_view_CourseListCategoryView.defaultProps = {
  showProgress: false,
  paddingTop: false
};
/* harmony default export */ var course_list_category_view = (Object(styles_["withStyles"])(course_list_category_view_styles)(course_list_category_view_CourseListCategoryView));
// EXTERNAL MODULE: external "react-beautiful-dnd"
var external__react_beautiful_dnd_ = __webpack_require__(69);
var external__react_beautiful_dnd__default = /*#__PURE__*/__webpack_require__.n(external__react_beautiful_dnd_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__(55);
var Slide__default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__(70);
var Switch__default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(48);
var Check__default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__(71);
var Delete__default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@material-ui/icons/Restore"
var Restore_ = __webpack_require__(72);
var Restore__default = /*#__PURE__*/__webpack_require__.n(Restore_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowBack"
var ArrowBack_ = __webpack_require__(73);
var ArrowBack__default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);

// EXTERNAL MODULE: external "@material-ui/icons/DeleteForever"
var DeleteForever_ = __webpack_require__(74);
var DeleteForever__default = /*#__PURE__*/__webpack_require__.n(DeleteForever_);

// EXTERNAL MODULE: ./src/components/alert-notification.js
var alert_notification = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/courses-list/course-list-dragdrop-card.js
function course_list_dragdrop_card__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var course_list_dragdrop_card_styles = function styles(theme) {
  var _deleteCourseButton;

  return {
    root: {
      marginBottom: 10,
      flexGrow: 1
    },
    cardContent: course_list_dragdrop_card__defineProperty({
      display: 'inline',
      width: '120%'
    }, theme.breakpoints.down('sm'), {
      marginLeft: 1
    }),
    image: {
      paddingTop: theme.spacing.unit * 1,
      marginLeft: 25,
      width: 50
    },
    deleteCourseButton: (_deleteCourseButton = {
      cursor: 'pointer',
      float: 'right'
    }, course_list_dragdrop_card__defineProperty(_deleteCourseButton, "cursor", 'unset'), course_list_dragdrop_card__defineProperty(_deleteCourseButton, '&:hover', {
      backgroundColor: theme.palette.error.main
    }), course_list_dragdrop_card__defineProperty(_deleteCourseButton, '&:select', {
      backgroundColor: theme.palette.error.dark
    }), _deleteCourseButton),
    cardMargin: course_list_dragdrop_card__defineProperty({
      height: '100%',
      display: 'flex',
      width: '100%',
      minHeight: theme.spacing.unit * 17,
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer'
    }, theme.breakpoints.down('sm'), {
      minHeight: theme.spacing.unit * 18,
      marginRight: 2.5,
      wordWrap: 'break-word'
    }),
    deleteIcon: {
      fontSize: theme.spacing.unit * 2
    },
    headline: course_list_dragdrop_card__defineProperty({
      fontSize: theme.spacing.unit * 2.2
    }, theme.breakpoints.down('md'), {
      fontSize: theme.spacing.unit * 2
    })
  };
};

var course_list_dragdrop_card_CourseListCard = function CourseListCard(props) {
  var classes = props.classes,
      value = props.value,
      index = props.index,
      displayDeleteNotification = props.displayDeleteNotification;
  return external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 12,
    className: classes.root
  }, external__react__default.a.createElement(Card__default.a, {
    variant: "contained",
    className: "".concat(classes.cardMargin, " ").concat(classes.deleteCourse)
  }, external__react__default.a.createElement(Grid__default.a, null, external__react__default.a.createElement(IconButton__default.a, {
    onClick: function onClick() {
      return displayDeleteNotification(index);
    },
    title: "Delete This Course?",
    className: classes.deleteCourseButton
  }, external__react__default.a.createElement(Close__default.a, {
    className: classes.deleteIcon
  }))), external__react__default.a.createElement(Grid__default.a, {
    container: true,
    spacing: 16
  }, external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 2,
    sm: true,
    md: 2
  }, external__react__default.a.createElement("img", {
    className: classes.image,
    src: value.logo
  })), external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 10,
    sm: 12,
    md: 10,
    container: true,
    className: classes.cardContent
  }, external__react__default.a.createElement(CardContent__default.a, null, external__react__default.a.createElement(Typography__default.a, {
    variant: "headline",
    className: classes.headline
  }, value.name), external__react__default.a.createElement(Typography__default.a, {
    color: "textSecondary"
  }, value.shortDescription))))));
};

course_list_dragdrop_card_CourseListCard.defaultProps = {
  displayDeleteNotification: null
};
/* harmony default export */ var course_list_dragdrop_card = (Object(styles_["withStyles"])(course_list_dragdrop_card_styles)(course_list_dragdrop_card_CourseListCard));
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__(44);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__(45);
var DialogActions__default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__(49);
var DialogContent__default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__(50);
var DialogContentText__default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__(46);
var DialogTitle__default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// CONCATENATED MODULE: ./src/components/courses-list/course-delete-alert.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function Transition(props) {
  return external__react__default.a.createElement(Slide__default.a, _extends({
    direction: "down"
  }, props));
}

var course_delete_alert_CourseDeleteAlert = function CourseDeleteAlert(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Dialog__default.a, {
    open: props.open,
    TransitionComponent: Transition,
    keepMounted: true,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, external__react__default.a.createElement(DialogTitle__default.a, {
    id: "alert-dialog-slide-title"
  }, 'Course Delete?'), external__react__default.a.createElement(DialogContent__default.a, null, external__react__default.a.createElement(DialogContentText__default.a, {
    id: "alert-dialog-slide-description"
  }, "Kya aap yeh course delete karna chate hai?", external__react__default.a.createElement("br", null), "Course Name: ", props.course.name)), external__react__default.a.createElement(DialogActions__default.a, null, external__react__default.a.createElement(Button__default.a, {
    onClick: props.cancelCourseDelete,
    color: "primary"
  }, "Cancel"), external__react__default.a.createElement(Button__default.a, {
    onClick: props.deleteCourse,
    color: "primary"
  }, "Delete"))));
};

/* harmony default export */ var course_delete_alert = (course_delete_alert_CourseDeleteAlert);
// CONCATENATED MODULE: ./src/components/courses-list/course-list-dragdrop-view.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function course_list_dragdrop_view__extends() { course_list_dragdrop_view__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return course_list_dragdrop_view__extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function course_list_dragdrop_view__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























var course_list_dragdrop_view_styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    containerHeadingItem: {
      paddingBottom: theme.spacing.unit * 2
    },
    avbCoursesContainer: {
      paddingTop: theme.spacing.unit * 5
    },
    deleteButton: course_list_dragdrop_view__defineProperty({
      marginTop: -theme.spacing.unit * 4.5
    }, theme.breakpoints.down('xs'), {
      maxWidth: theme.spacing.unit * 15
    }),
    floatRight: {
      float: 'right'
    },
    close: {
      padding: theme.spacing.unit
    },
    restoreButton: {
      float: 'right',
      left: 'auto',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 10
    },
    saveButton: {
      float: 'right',
      left: 'auto',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
      color: 'white'
    },
    goBackButton: {
      float: 'right',
      left: 'auto',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 18,
      background: theme.palette.warning.main,
      '&:hover': {
        backgroundColor: theme.palette.warning.dark
      }
    },
    floatButton: {
      margin: '0',
      top: 'auto',
      zIndex: '100',
      position: 'fixed'
    }
  };
};

var reorder = function reorder(courses, startIndex, endIndex) {
  var newCourseSequence = Array.from(courses);

  var _newCourseSequence$sp = newCourseSequence.splice(startIndex, 1),
      _newCourseSequence$sp2 = _slicedToArray(_newCourseSequence$sp, 1),
      removed = _newCourseSequence$sp2[0];

  newCourseSequence.splice(endIndex, 0, removed);
  return newCourseSequence;
};

var remove = function remove(courses, index) {
  var newCourseSequence = Array.from(courses);

  var _newCourseSequence$sp3 = newCourseSequence.splice(index, 1),
      _newCourseSequence$sp4 = _slicedToArray(_newCourseSequence$sp3, 1),
      removed = _newCourseSequence$sp4[0];

  return {
    newCourseSequence: newCourseSequence,
    removed: removed
  };
};

var course_list_dragdrop_view_CourseListDragAndDropView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CourseListDragAndDropView, _React$Component);

  function CourseListDragAndDropView(props) {
    var _this;

    _classCallCheck(this, CourseListDragAndDropView);

    _this = _possibleConstructorReturn(this, (CourseListDragAndDropView.__proto__ || Object.getPrototypeOf(CourseListDragAndDropView)).call(this, props));

    course_list_dragdrop_view__initialiseProps.call(_assertThisInitialized(_this));

    var courses = _this.props.courses;
    _this.state = {
      originalCoursesSequence: courses,
      currentCoursesSequence: courses,
      showNotification: false,
      notifcationMessage: '',
      alertType: '',
      deletableCourseIndex: null,
      showConfirmDeleteBox: false
    };
    return _this;
  }

  _createClass(CourseListDragAndDropView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          headline = _props.headline,
          courses = _props.courses,
          showProgress = _props.showProgress,
          paddingTop = _props.paddingTop,
          stopCourseSequenceEditing = _props.stopCourseSequenceEditing;
      var _state = this.state,
          currentCoursesSequence = _state.currentCoursesSequence,
          showNotification = _state.showNotification,
          notifcationMessage = _state.notifcationMessage,
          showConfirmDeleteBox = _state.showConfirmDeleteBox,
          deletableCourseIndex = _state.deletableCourseIndex,
          alertType = _state.alertType; // make space for delete button

      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(external__react_beautiful_dnd_["DragDropContext"], {
        onDragEnd: this.onDragEnd
      }, external__react__default.a.createElement(Grid__default.a, {
        className: paddingTop ? classes.avbCoursesContainer : ''
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 12,
        className: classes.containerHeadingItem
      }, external__react__default.a.createElement(Typography__default.a, {
        variant: "headline",
        component: "h2",
        align: "center",
        gutterBottom: true
      }, headline)), external__react__default.a.createElement(Grid__default.a, {
        container: true
      }, external__react__default.a.createElement(external__react_beautiful_dnd_["Droppable"], {
        droppableId: "courses"
      }, function (provided) {
        return external__react__default.a.createElement("div", course_list_dragdrop_view__extends({
          ref: provided.innerRef
        }, provided.droppableProps), currentCoursesSequence.map(function (value, key) {
          return external__react__default.a.createElement(external__react_beautiful_dnd_["Draggable"], {
            key: value.id,
            draggableId: value.id,
            index: key
          }, function (provided, snapshot) {
            return external__react__default.a.createElement("div", course_list_dragdrop_view__extends({
              ref: provided.innerRef
            }, provided.draggableProps, provided.dragHandleProps), external__react__default.a.createElement(course_list_dragdrop_card, {
              value: value,
              index: key,
              displayDeleteNotification: _this2.displayDeleteNotification
            }));
          });
        }), provided.placeholder);
      })))), external__react__default.a.createElement(alert_notification["a" /* default */], {
        open: showNotification,
        message: notifcationMessage,
        autoHideDuration: 6000,
        variant: alertType,
        onClose: this.handleHideNotification
      }), external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        color: "primary",
        title: "Back to home",
        className: "".concat(classes.floatButton, " ").concat(classes.goBackButton),
        onClick: stopCourseSequenceEditing
      }, external__react__default.a.createElement(ArrowBack__default.a, null)), external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        color: "primary",
        title: "Restore the sequence",
        className: "".concat(classes.restoreButton, " ").concat(classes.floatButton),
        onClick: function onClick() {
          return _this2.restoreSequence();
        }
      }, external__react__default.a.createElement(Restore__default.a, null)), external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        color: "secondary",
        title: "Update the sequence",
        className: "".concat(classes.saveButton, " ").concat(classes.floatButton),
        onClick: function onClick() {
          return _this2.saveUpdate();
        }
      }, external__react__default.a.createElement(Check__default.a, null)), showConfirmDeleteBox ? external__react__default.a.createElement(course_delete_alert, {
        open: showConfirmDeleteBox,
        cancelCourseDelete: this.cancelCourseDelete,
        deleteCourse: this.deleteCourse,
        course: currentCoursesSequence[deletableCourseIndex]
      }) : null);
    }
  }]);

  return CourseListDragAndDropView;
}(external__react__default.a.Component);

var course_list_dragdrop_view__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "extractSequenceNum", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(courses) {
      // extract sequenceNum and id's
      var payload = [];

      for (var i = 0; i < courses.length; i++) {
        var _courses$i = courses[i],
            id = _courses$i.id,
            sequenceNum = _courses$i.sequenceNum;
        payload.push({
          id: id,
          sequenceNum: sequenceNum
        });
      }

      return payload;
    }
  });
  Object.defineProperty(this, "restoreSequence", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var originalCoursesSequence = _this3.state.originalCoursesSequence;

      _this3.setState({
        currentCoursesSequence: originalCoursesSequence
      });
    }
  });
  Object.defineProperty(this, "saveUpdate", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var currentCoursesSequence = _this3.state.currentCoursesSequence;

      var payload = _this3.extractSequenceNum(currentCoursesSequence); // call the api and update the course sequence


      Object(api["h" /* saveCoursesSequenceAPI */])(payload).then(function (response) {
        // show data saved in backend.
        _this3.setState({
          showNotification: true,
          notifcationMessage: 'Sequence Saved Successfully',
          alertType: 'success'
        });
      }).catch(function (error) {
        // got some error show it in sanackbar.
        console.log(error);
        var notifcationMessage = window.navigator.onLine ? 'Internet connected nhi hai!' : 'Ek error Ayi hue hai. Console check kare!';

        _this3.setState({
          showNotification: true,
          notifcationMessage: notifcationMessage,
          alertType: 'error'
        });
      });
    }
  });
  Object.defineProperty(this, "displayDeleteNotification", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(index) {
      // Display the confirmation notification for deleting selected course.
      _this3.setState({
        deletableCourseIndex: index,
        showConfirmDeleteBox: true
      });
    }
  });
  Object.defineProperty(this, "deleteCourse", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this3$state = _this3.state,
          deletableCourseIndex = _this3$state.deletableCourseIndex,
          currentCoursesSequence = _this3$state.currentCoursesSequence;

      var _remove = remove(currentCoursesSequence, deletableCourseIndex),
          newCourseSequence = _remove.newCourseSequence,
          removed = _remove.removed;

      var notifcationMessage; // API call for the course and show alert for type of response

      Object(api["b" /* deleteCourseAPI */])(removed.id).then(function (response) {
        notifcationMessage = "".concat(removed.name, " course deleted.");

        _this3.setState({
          currentCoursesSequence: newCourseSequence,
          deletableCourseIndex: null,
          showConfirmDeleteBox: false,
          showNotification: true,
          notifcationMessage: notifcationMessage,
          alertType: 'success'
        });
      }).catch(function (error) {
        // show error if no internet connection or something else happened.
        console.log(error);
        notifcationMessage = window.navigator.onLine ? 'Internet connected nhi hai!' : 'Ek error Ayi hue hai. Console check kare!';

        _this3.setState({
          showNotification: true,
          notifcationMessage: notifcationMessage,
          alertType: 'error'
        });
      });
    }
  });
  Object.defineProperty(this, "cancelCourseDelete", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        deletableCourseIndex: null,
        showConfirmDeleteBox: false
      });
    }
  });
  Object.defineProperty(this, "handleHideNotification", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this3.setState({
        showNotification: false
      });
    }
  });
  Object.defineProperty(this, "updateSequenceNumber", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(courses) {
      // update sequence
      var updatedCourse = Array.from(courses);

      for (var i = 0; i < updatedCourse.length; i++) {
        updatedCourse[i].sequenceNum = i;
      }

      return updatedCourse;
    }
  });
  Object.defineProperty(this, "onDragEnd", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(result) {
      // when the course is  picked but hasn"t been moved out
      // to destination
      if (!result.destination) {
        return;
      } // when course is put back from where it was drag


      if (result.source.index === result.destination.index) {
        return;
      } // reorder with new course sequenceNum


      var newCourseSequence = reorder(_this3.state.currentCoursesSequence, result.source.index, result.destination.index);
      newCourseSequence = _this3.updateSequenceNumber(newCourseSequence);

      _this3.setState({
        currentCoursesSequence: newCourseSequence
      });
    }
  });
};

course_list_dragdrop_view_CourseListDragAndDropView.defaultProps = {
  showProgress: false,
  paddingTop: false
};
/* harmony default export */ var course_list_dragdrop_view = (Object(styles_["withStyles"])(course_list_dragdrop_view_styles)(course_list_dragdrop_view_CourseListDragAndDropView));
// CONCATENATED MODULE: ./src/components/courses-list/index.js
function courses_list__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { courses_list__typeof = function _typeof(obj) { return typeof obj; }; } else { courses_list__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return courses_list__typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { courses_list__defineProperty(target, key, source[key]); }); } return target; }

function courses_list__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function courses_list__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function courses_list__createClass(Constructor, protoProps, staticProps) { if (protoProps) courses_list__defineProperties(Constructor.prototype, protoProps); if (staticProps) courses_list__defineProperties(Constructor, staticProps); return Constructor; }

function courses_list__possibleConstructorReturn(self, call) { if (call && (courses_list__typeof(call) === "object" || typeof call === "function")) { return call; } return courses_list__assertThisInitialized(self); }

function courses_list__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function courses_list__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function courses_list__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Course list


















var courses_list_styles = function styles(theme) {
  var _courseEditButton;

  return {
    rootLoader: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      marginTop: '46vh'
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: 50
    },
    rootContent: courses_list__defineProperty({
      paddingTop: theme.spacing.unit * 5,
      display: 'flex',
      flexDirection: 'column',
      width: '80%'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10
    }),
    courseEditButton: (_courseEditButton = {
      display: 'block',
      float: 'right',
      margin: '0',
      top: 'auto'
    }, courses_list__defineProperty(_courseEditButton, "float", 'right'), courses_list__defineProperty(_courseEditButton, "right", theme.spacing.unit * 4), courses_list__defineProperty(_courseEditButton, "bottom", theme.spacing.unit * 4), courses_list__defineProperty(_courseEditButton, "left", 'auto'), courses_list__defineProperty(_courseEditButton, "zIndex", '100'), courses_list__defineProperty(_courseEditButton, "position", 'fixed'), courses_list__defineProperty(_courseEditButton, theme.breakpoints.down('xs'), {
      fontSize: theme.spacing.unit * 2
    }), _courseEditButton),
    courseSequenceEditRootContent: courses_list__defineProperty({
      width: '40%'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    // dividerContainer: {
    // 	paddingTop: theme.spacing.unit * 2,
    // 	justifyContent: 'center',
    // },
    progress: {
      margin: theme.spacing.unit * 1
    }
  };
};

var courses_list_navigateToEditMode = function navigateToEditMode() {
  router__default.a.push({
    pathname: '/home',
    query: {
      edit: true
    }
  });
};

var courses_list_navigateToHome = function navigateToHome() {
  router__default.a.push({
    pathname: '/home'
  });
};

var courses_list_CourseList =
/*#__PURE__*/
function (_React$Component) {
  courses_list__inherits(CourseList, _React$Component);

  function CourseList(props) {
    var _this;

    courses_list__classCallCheck(this, CourseList);

    _this = courses_list__possibleConstructorReturn(this, (CourseList.__proto__ || Object.getPrototypeOf(CourseList)).call(this, props));
    Object.defineProperty(courses_list__assertThisInitialized(_this), "checkIsAuthenticated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__localforage__default.a.getItem("authResponse", function (error, value) {
          if (error) {
            if (!window.navigator.onLine) {
              alert("Aap internet se connected nhi ho.");
            }

            console.log(e);
          } else {
            if (!value) {} else {
              _this.setState({
                isAuthenticated: true
              });
            }
          }
        });
      }
    });
    Object.defineProperty(courses_list__assertThisInitialized(_this), "getCoursesUpdated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__localforage__default.a.getItem("authResponse", function (error, value) {
          if (!error) {
            if (value === null) {
              Object(api["d" /* fetchApi */])("/courses", {}).then(function (response) {
                console.log(response);

                _this.setState(_objectSpread({
                  prefetchedData: true,
                  isAdmin: false,
                  initialAvailableCourses: response.availableCourses,
                  initialEnrolledCourses: []
                }, response));
              }).catch(function () {}); //Router.replace("/");
            } else {
              var jwt = value.jwt,
                  user = value.user;
              Object(api["d" /* fetchApi */])("/courses", {}, {
                Authorization: jwt
              }).then(function (response) {
                // console.log(response);
                Object(session["d" /* setEnrolledCourses */])(response);

                _this.setState(_objectSpread({
                  prefetchedData: true,
                  isAdmin: user.isAdmin,
                  initialAvailableCourses: response.availableCourses,
                  initialEnrolledCourses: response.enrolledCourses
                }, response));
              }).catch(function (error) {
                throw error;
                /* TODO: Handle network error cases */
              });
            }
          } else {// TODO: Handle error cases
          }
        });
      }
    });
    Object.defineProperty(courses_list__assertThisInitialized(_this), "stopCourseSequenceEditing", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.getCoursesUpdated();

        _this.setState({
          editCourseSequence: false
        });
      }
    });
    _this.state = {
      prefetchedData: false,
      editCourseSequence: false,
      availableCourses: [],
      // For future uses
      enrolledCourses: [],
      facilitatingCourses: [],
      isAdmin: false
    };
    return _this;
  }

  courses_list__createClass(CourseList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      external__react_ga__default.a.initialize('UA-135762938-1');
      external__react_ga__default.a.pageview(window.location.pathname);

      if (typeof this.props.bus !== "undefined") {
        this.props.bus.on("search", function (searchString) {
          var updatedList = _this2.state.initialAvailableCourses;
          var updatedEnrolledCourses = _this2.state.initialEnrolledCourses;
          updatedList = updatedList.filter(function (course) {
            return course.name.toLowerCase().search(searchString.toLowerCase()) !== -1;
          });
          updatedEnrolledCourses = updatedEnrolledCourses.filter(function (course) {
            return course.name.toLowerCase().search(searchString.toLowerCase()) !== -1;
          });

          _this2.setState({
            availableCourses: updatedList
          });

          _this2.setState({
            enrolledCourses: updatedEnrolledCourses
          });
        });
      }

      this.getCoursesUpdated();
      this.checkIsAuthenticated();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = this.props.classes;
      var _state = this.state,
          availableCourses = _state.availableCourses,
          enrolledCourses = _state.enrolledCourses,
          facilitatingCourses = _state.facilitatingCourses,
          prefetchedData = _state.prefetchedData,
          editCourseSequence = _state.editCourseSequence,
          isAdmin = _state.isAdmin,
          isAuthenticated = _state.isAuthenticated;

      if (!prefetchedData) {
        return external__react__default.a.createElement("div", {
          className: classes.rootLoader
        }, external__react__default.a.createElement(CircularProgress__default.a, {
          className: classes.progress,
          size: 50
        }));
      }

      if (editCourseSequence === true) {
        return external__react__default.a.createElement("div", {
          className: classes.root
        }, external__react__default.a.createElement("div", {
          className: "".concat(classes.rootContent, " ").concat(classes.courseSequenceEditRootContent)
        }, external__react__default.a.createElement(course_list_dragdrop_view, {
          headline: "Aapke courses",
          courses: Object(utils["h" /* sortCoursesBySequenceNum */])(_toConsumableArray(availableCourses).concat(_toConsumableArray(enrolledCourses))),
          stopCourseSequenceEditing: function stopCourseSequenceEditing() {
            _this3.stopCourseSequenceEditing();

            courses_list_navigateToHome();
          },
          paddingTop: true
        })));
      } // editCourseSequence false ho toh courselist display kardo
      // agar admin hai toh edit sequence button display kardo


      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.rootContent
      }, isAdmin ? external__react__default.a.createElement("div", null, external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        color: "primary",
        title: "Edit Course Sequence",
        className: classes.courseEditButton,
        onClick: function onClick() {
          _this3.setState({
            editCourseSequence: true
          });

          courses_list_navigateToEditMode();
        }
      }, external__react__default.a.createElement(Edit__default.a, null))) : null, enrolledCourses.length ? external__react__default.a.createElement(course_list_category_view, {
        headline: "Courses jis mein aap enrolled hai",
        courses: Object(utils["h" /* sortCoursesBySequenceNum */])(enrolledCourses),
        showProgress: true
      }) : isAuthenticated ? external__react__default.a.createElement(course_list_category_view, {
        headline: "No enrolled courses found",
        courses: Object(utils["h" /* sortCoursesBySequenceNum */])(enrolledCourses),
        showProgress: true
      }) : "", external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 0,
        className: classes.dividerContainer
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 6
      }, external__react__default.a.createElement(Divider__default.a, null))), availableCourses.length ? external__react__default.a.createElement(course_list_category_view, {
        headline: "Aap yeh courses mein enroll kar skte hai",
        courses: Object(utils["h" /* sortCoursesBySequenceNum */])(availableCourses),
        paddingTop: true
      }) : external__react__default.a.createElement(course_list_category_view, {
        headline: "No courses Found",
        courses: Object(utils["h" /* sortCoursesBySequenceNum */])([]),
        paddingTop: true
      })));
    }
  }]);

  return CourseList;
}(external__react__default.a.Component);

/* harmony default export */ var courses_list = __webpack_exports__["a"] = (Object(styles_["withStyles"])(courses_list_styles)(courses_list_CourseList));

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Restore");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteForever");

/***/ }),
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sentry_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sentry_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sentry_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_with_root__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_localforage__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_courses_list__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_header__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_with_ga_tag__ = __webpack_require__(37);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// This is main entry page for route '/home'








var bus = new __WEBPACK_IMPORTED_MODULE_3_events__["EventEmitter"]();

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "configSentryOnMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var userId;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_5_localforage___default.a.getItem('authResponse').then(function (value) {
                    var id = value ? value.user.id : 'non logged in user';
                    return id;
                  });

                case 2:
                  userId = _context.sent;
                  __WEBPACK_IMPORTED_MODULE_2__sentry_browser__["configureScope"](function (scope) {
                    scope.setExtra('userId', userId);
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "triggerSentry", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(error, errorInfo) {
          var userId;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return __WEBPACK_IMPORTED_MODULE_5_localforage___default.a.getItem('authResponse').then(function (value) {
                    var id = value ? value.user.id : 'non logged in user';
                    return id;
                  });

                case 2:
                  userId = _context2.sent;
                  __WEBPACK_IMPORTED_MODULE_2__sentry_browser__["configureScope"](function (scope) {
                    scope.setExtra('userId', userId);
                  });

                  _this.setState({
                    error: error
                  });

                  __WEBPACK_IMPORTED_MODULE_2__sentry_browser__["withScope"](function (scope) {
                    Object.keys(errorInfo).forEach(function (key) {
                      scope.setExtra(errorInfo, errorInfo[key]);
                    });
                    __WEBPACK_IMPORTED_MODULE_2__sentry_browser__["captureException"](error);
                  });

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x, _x2) {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_2__sentry_browser__["init"]({
        dsn: 'https://dac738139bd14514bbec319da7c8b28c@sentry.io/1417825'
      });
      this.configSentryOnMount();
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.triggerSentry(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_header__["a" /* default */], {
        bus: bus,
        searchHidden: false
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_courses_list__["a" /* default */], {
        bus: bus
      }));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__src_with_root__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__src_with_ga_tag__["a" /* withGATag */])(Home)));

/***/ })
/******/ ]);