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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
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
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@sentry/browser"
var browser_ = __webpack_require__(10);
var browser__default = /*#__PURE__*/__webpack_require__.n(browser_);

// EXTERNAL MODULE: external "localforage"
var external__localforage_ = __webpack_require__(3);
var external__localforage__default = /*#__PURE__*/__webpack_require__.n(external__localforage_);

// EXTERNAL MODULE: ./src/with-root.js
var with_root = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__(23);

// EXTERNAL MODULE: ./src/services/utils.js
var utils = __webpack_require__(31);

// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: ./src/with-ga-tag.js
var with_ga_tag = __webpack_require__(37);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(83);
var Drawer__default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__(84);
var Hidden__default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(8);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(19);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: ./src/components/alert-notification.js
var alert_notification = __webpack_require__(34);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(30);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(28);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(43);
var CardContent__default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./src/components/assignment-review/assignment-review-sidenav.js
// To show the side nav bar for assignments









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    assignmentLogo: {
      height: theme.spacing.unit * 5,
      marginTop: theme.spacing.unit * 2.5,
      left: '50%',
      right: '50%'
    },
    studentName: {
      marginBottom: theme.spacing.unit * 2
    },
    assignmentsCards: {
      background: theme.palette.grey['50'],
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit * 2.5,
      marginBottom: theme.spacing.unit * 2.5,
      width: '100%',
      maxWidth: theme.spacing.unit * 33,
      minHeight: theme.spacing.unit * 15,
      boxShadow: theme.shadows[4],
      '&:hover': {
        cursor: 'pointer',
        background: theme.palette.grey['200']
      }
    },
    selectedAssignment: {
      background: theme.palette.grey['300']
    }
  };
};

var assignment_review_sidenav_AssignmentsReviewSidenav = function AssignmentsReviewSidenav(props) {
  var classes = props.classes,
      assignments = props.assignments,
      showSelectedAssignment = props.showSelectedAssignment,
      selectedAssignment = props.selectedAssignment;
  return external__react__default.a.createElement("div", {
    className: classes.root
  }, // displays the assignment in details
  assignments.map(function (assignment) {
    var submittedAt = new Date(assignment.submittedAt).toDateString();
    return external__react__default.a.createElement(Card__default.a, {
      className: assignment === selectedAssignment ? "".concat(classes.assignmentsCards, " ").concat(classes.selectedAssignment) : classes.assignmentsCards,
      onClick: function onClick() {
        showSelectedAssignment(assignment);
        router__default.a.push({
          pathname: '/assignment-review',
          query: {
            submissionId: assignment.id
          }
        });
      },
      key: assignment.id
    }, external__react__default.a.createElement(CardContent__default.a, null, external__react__default.a.createElement(Grid__default.a, {
      container: true
    }, external__react__default.a.createElement(Grid__default.a, {
      item: true,
      sm: 3,
      md: 3,
      xs: 3
    }, external__react__default.a.createElement("img", {
      className: classes.assignmentLogo,
      src: "/static/icons/assignment-logo.png",
      height: "40"
    })), external__react__default.a.createElement(Grid__default.a, {
      item: true,
      sm: 9,
      md: 9,
      xs: 9
    }, external__react__default.a.createElement(Typography__default.a, {
      className: classes.studentName
    }, assignment.submitterName), external__react__default.a.createElement(Typography__default.a, null, "Exercise: ", assignment.exerciseName), external__react__default.a.createElement(Typography__default.a, null, submittedAt)))));
  }));
};

/* harmony default export */ var assignment_review_sidenav = (Object(styles_["withStyles"])(styles)(assignment_review_sidenav_AssignmentsReviewSidenav));
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(17);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(51);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(48);
var Check__default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// CONCATENATED MODULE: ./src/components/assignment-review/assignment-review-details.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var assignment_review_details_styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      flexGrow: 1,
      marginLeft: theme.spacing.unit,
      height: '100%',
      overFlow: 'scroll',
      marginBottom: theme.spacing.unit * 3,
      width: '75vw'
    }, _defineProperty(_root, theme.breakpoints.down('md'), {
      width: '65vw'
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      width: '90vw'
    }), _defineProperty(_root, theme.breakpoints.down('xs'), {
      width: '80vw'
    }), _root),
    submissionContent: {
      background: theme.palette.grey['100'],
      boxShadow: theme.shadows[2],
      marginBottom: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit * 2
    },
    pendingReviewHeading: {
      fontWeight: '400',
      fontSize: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 1.5
    },
    approveButton: {
      marginTop: theme.spacing.unit * 1.5,
      float: 'right',
      color: 'white'
    },
    rejectButton: {
      marginTop: theme.spacing.unit * 1.5,
      marginRight: theme.spacing.unit,
      float: 'right',
      background: theme.palette.error.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      },
      '&:select': {
        backgroundColor: theme.palette.error.dark
      }
    },
    titles: {
      fontWeight: 'bold'
    },
    typography: {
      display: 'block',
      marginBottom: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit
    },
    profilePicture: {
      display: 'inline-block'
    }
  };
};

var assignment_review_details_AssignmentsReviewDetails =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AssignmentsReviewDetails, _React$Component);

  function AssignmentsReviewDetails(props) {
    var _this;

    _classCallCheck(this, AssignmentsReviewDetails);

    _this = _possibleConstructorReturn(this, (AssignmentsReviewDetails.__proto__ || Object.getPrototypeOf(AssignmentsReviewDetails)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "inputHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          notes: e.target.value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "hasReviewerGivenFeedback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.notes === '') {
          return false;
        } else {
          return true;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "submitAssignment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(isApprove) {
        var _this$props = _this.props,
            selectedAssignment = _this$props.selectedAssignment,
            removeCompletedAssignment = _this$props.removeCompletedAssignment,
            showNotification = _this$props.showNotification;
        var message; // check if user has given any feedback or not

        if (!_this.hasReviewerGivenFeedback()) {
          message = 'Phele aap apna reason dijiye.';
          showNotification(message, 'warning');
          return;
        }

        var notes = _this.state.notes; // send the feedback to api

        Object(api["g" /* reviewerFeedbackSubmissionAPI */])(notes, isApprove, selectedAssignment.id).then(function (response) {
          // empty the textfield after it has been submitted
          _this.setState({
            notes: ''
          });

          message = 'Feedback dene ke liye sukhriya.';
          showNotification(message, 'success'); // remove the assignment from pending list

          removeCompletedAssignment();
        }).catch(function (error) {
          console.error(error); // check if the user is connected to internet

          if (!window.navigator.onLine) {
            message = 'Aap Internet se connect nhi ho.';
          } else {
            message = 'Kuch problem ke karan apka data save nhi hua.';
          }

          showNotification(message, 'error');
          console.log(error);
        });
      }
    });
    _this.state = {
      notes: ''
    };
    return _this;
  } // helps to get the notes from the form to state


  _createClass(AssignmentsReviewDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          selectedAssignment = _props.selectedAssignment;
      var notes = this.state.notes;
      var courseId = selectedAssignment.courseId,
          exerciseSlug = selectedAssignment.exerciseSlug; // Need to improve the UI

      var submittedAt = new Date(selectedAssignment.submittedAt);
      var submitterNotes = selectedAssignment.submitterNotes;
      return external__react__default.a.createElement(Card__default.a, {
        className: classes.root
      }, external__react__default.a.createElement(CardContent__default.a, null, external__react__default.a.createElement(Grid__default.a, {
        container: true
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 3,
        sm: 2,
        md: 1
      }, external__react__default.a.createElement("img", {
        src: "".concat(selectedAssignment.submitterProfilePicture),
        height: "50",
        className: classes.profilePicture
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 9,
        sm: 10,
        md: 11
      }, external__react__default.a.createElement("span", {
        className: classes.titles
      }, "Submitted by:"), " ".concat(selectedAssignment.submitterName), external__react__default.a.createElement("br", null), external__react__default.a.createElement("span", {
        className: classes.titles
      }, "Submitted At:"), " ".concat(submittedAt.toDateString()))), external__react__default.a.createElement(Typography__default.a, {
        className: classes.typography
      }, external__react__default.a.createElement("span", {
        className: classes.titles
      }, "Exercise Name:"), " ".concat(selectedAssignment.exerciseName, " "), external__react__default.a.createElement("a", {
        href: "/course?id=".concat(courseId, "&slug=").concat(exerciseSlug),
        target: "_blank"
      }, "(Link)"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("span", {
        className: classes.titles
      }, "Student ka solution:")), external__react__default.a.createElement(CardContent__default.a, {
        className: classes.submissionContent
      }, submitterNotes.startsWith('http') ? external__react__default.a.createElement("a", {
        href: submitterNotes
      }, submitterNotes) : submitterNotes), external__react__default.a.createElement(Typography__default.a, null, external__react__default.a.createElement("span", {
        className: classes.titles
      }, "Apna accept ya reject karne ka reason neeche diye gaye text box mein likhe:")), external__react__default.a.createElement(TextField__default.a, {
        multiline: true,
        fullWidth: true,
        label: "Apka reason yahan likhe:",
        rowsMax: "10",
        margin: "normal",
        variant: "outlined",
        value: notes,
        onChange: this.inputHandler
      }), external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        color: "secondary",
        className: classes.approveButton,
        onClick: function onClick() {
          return _this2.submitAssignment(true);
        }
      }, external__react__default.a.createElement(Check__default.a, null)), external__react__default.a.createElement(Button__default.a, {
        variant: "fab",
        className: classes.rejectButton,
        onClick: function onClick() {
          return _this2.submitAssignment(false);
        }
      }, external__react__default.a.createElement(Close__default.a, null))));
    }
  }]);

  return AssignmentsReviewDetails;
}(external__react__default.a.Component);

/* harmony default export */ var assignment_review_details = (Object(styles_["withStyles"])(assignment_review_details_styles)(assignment_review_details_AssignmentsReviewDetails));
// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(33);
var CircularProgress__default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(52);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// CONCATENATED MODULE: ./src/components/assignment-review/assignment-review-completed.js
function assignment_review_completed__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var assignment_review_completed_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexGrow: 1,
      marginTop: '40vh',
      height: '100%'
    },
    cardGrid: assignment_review_completed__defineProperty({
      width: theme.spacing.unit * 44,
      margin: '0 auto'
    }, theme.breakpoints.down('xs'), {
      width: theme.spacing.unit * 24
    }),
    image: assignment_review_completed__defineProperty({
      display: 'inline',
      float: 'left',
      height: theme.spacing.unit * 14,
      paddingRight: theme.spacing.unit * 4
    }, theme.breakpoints.down('xs'), {
      paddingRight: theme.spacing.unit * 2,
      height: theme.spacing.unit * 12,
      float: 'none',
      marginLeft: theme.spacing.unit * 6
    }),
    content: assignment_review_completed__defineProperty({
      fontSize: theme.spacing.unit * 3,
      fontWeight: '400',
      paddingTop: theme.spacing.unit
    }, theme.breakpoints.down('xs'), {
      fontSize: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 2
    }),
    boldContent: {
      fontWeight: 'bold'
    },
    showLoader: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      marginTop: '46vh'
    },
    progress: {
      margin: theme.spacing.unit * 1
    }
  };
}; // TODO:  Need to edit this page


var assignment_review_completed_AssignmentsReviewCompleted = function AssignmentsReviewCompleted(props) {
  var classes = props.classes,
      showLoader = props.showLoader;

  if (showLoader === true) {
    return external__react__default.a.createElement("div", {
      className: classes.showLoader
    }, external__react__default.a.createElement(CircularProgress__default.a, {
      className: classes.progress,
      size: 50
    }));
  }

  return external__react__default.a.createElement("div", {
    className: classes.root
  }, external__react__default.a.createElement(Grid__default.a, {
    className: classes.cardGrid
  }, external__react__default.a.createElement("img", {
    src: "static/icons/peer-review.png",
    className: classes.image
  }), external__react__default.a.createElement(core_["Typography"], {
    className: classes.content
  }, external__react__default.a.createElement("span", {
    className: classes.boldContent
  }, "No"), external__react__default.a.createElement("br", null), "peer review requests ", external__react__default.a.createElement("br", null), " right now.")));
};

/* harmony default export */ var assignment_review_completed = (Object(styles_["withStyles"])(assignment_review_completed_styles)(assignment_review_completed_AssignmentsReviewCompleted));
// CONCATENATED MODULE: ./src/components/assignment-review/index.js
function assignment_review__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { assignment_review__typeof = function _typeof(obj) { return typeof obj; }; } else { assignment_review__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return assignment_review__typeof(obj); }

function assignment_review__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function assignment_review__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function assignment_review__createClass(Constructor, protoProps, staticProps) { if (protoProps) assignment_review__defineProperties(Constructor.prototype, protoProps); if (staticProps) assignment_review__defineProperties(Constructor, staticProps); return Constructor; }

function assignment_review__possibleConstructorReturn(self, call) { if (call && (assignment_review__typeof(call) === "object" || typeof call === "function")) { return call; } return assignment_review__assertThisInitialized(self); }

function assignment_review__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function assignment_review__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function assignment_review__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var drawerWidth = 300;

var assignment_review_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexGrow: 1
    },
    navIconHide: assignment_review__defineProperty({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    drawerPaper: assignment_review__defineProperty({
      minWidth: drawerWidth,
      overFlow: 'scroll',
      height: '92vh',
      zIndex: theme.zIndex.appBar - 100,
      marginTop: theme.spacing.unit * 7
    }, theme.breakpoints.up('md'), {
      position: 'relative',
      marginTop: '0px'
    })
  };
};

var assignment_review_navigateToAssignment = function navigateToAssignment(submissionId) {
  router__default.a.push({
    pathname: '/assignment-review',
    query: {
      submissionId: submissionId
    }
  });
};

var assignment_review_AssignmentsReview =
/*#__PURE__*/
function (_React$Component) {
  assignment_review__inherits(AssignmentsReview, _React$Component);

  function AssignmentsReview(props) {
    var _this;

    assignment_review__classCallCheck(this, AssignmentsReview);

    _this = assignment_review__possibleConstructorReturn(this, (AssignmentsReview.__proto__ || Object.getPrototypeOf(AssignmentsReview)).call(this, props));

    _initialiseProps.call(assignment_review__assertThisInitialized(_this));

    var assignments = _this.props.assignments;
    var submissionId = router__default.a.query.submissionId;
    _this.state = {
      assignments: assignments,
      mobileOpen: false,
      selectedAssignment: _this.getAssignment(submissionId),
      showNotification: false,
      notifcationMessage: '',
      alertType: ''
    };
    return _this;
  }

  assignment_review__createClass(AssignmentsReview, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          assignments = _state.assignments,
          selectedAssignment = _state.selectedAssignment,
          mobileOpen = _state.mobileOpen,
          showNotification = _state.showNotification,
          notifcationMessage = _state.notifcationMessage,
          alertType = _state.alertType;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, assignments.length ? external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(IconButton__default.a, {
        color: "inherit",
        onClick: this.handleDrawerToggle,
        className: classes.navIconHide
      }, external__react__default.a.createElement(Menu__default.a, null)), external__react__default.a.createElement(Hidden__default.a, {
        mdUp: true
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "persistent",
        open: mobileOpen,
        onClose: this.handleDrawerToggle,
        classes: {
          paper: classes.drawerPaper
        }
      }, external__react__default.a.createElement(assignment_review_sidenav, {
        assignments: assignments,
        selectedAssignment: selectedAssignment,
        showSelectedAssignment: this.showSelectedAssignment
      }))), external__react__default.a.createElement(Hidden__default.a, {
        smDown: true
      }, external__react__default.a.createElement(Drawer__default.a, {
        variant: "persistent",
        open: true,
        classes: {
          paper: classes.drawerPaper
        }
      }, external__react__default.a.createElement(assignment_review_sidenav, {
        assignments: assignments,
        selectedAssignment: selectedAssignment,
        showSelectedAssignment: this.showSelectedAssignment
      }))), external__react__default.a.createElement("main", null, external__react__default.a.createElement(assignment_review_details, {
        selectedAssignment: selectedAssignment,
        removeCompletedAssignment: this.removeCompletedAssignment,
        showNotification: this.handleShowNotification
      })), external__react__default.a.createElement(alert_notification["a" /* default */], {
        open: showNotification,
        message: notifcationMessage,
        variant: alertType,
        autoHideDuration: 6000,
        onClose: this.handleHideNotification
      })) : external__react__default.a.createElement(assignment_review_completed, null));
    }
  }]);

  return AssignmentsReview;
}(external__react__default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "getAssignment", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(id) {
      var assignments = _this2.props.assignments; // if there is no assignment

      if (assignments.length === 0) {
        return {};
      } // find the assignment when link is opened using id


      if (id) {
        for (var i = 0; i < assignments.length; i++) {
          if (id == assignments[i].id) {
            return assignments[i];
          }
        }
      } // if there is no id provided in url or
      // no assignment found for given id


      assignment_review_navigateToAssignment(assignments[0].id);
      return assignments[0];
    }
  });
  Object.defineProperty(this, "showSelectedAssignment", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(assignment) {
      _this2.setState({
        selectedAssignment: assignment,
        mobileOpen: false
      });
    }
  });
  Object.defineProperty(this, "handleHideNotification", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this2.setState({
        showNotification: false
      });
    }
  });
  Object.defineProperty(this, "handleShowNotification", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(message, alertType) {
      _this2.setState({
        showNotification: true,
        notifcationMessage: message,
        alertType: alertType
      });
    }
  });
  Object.defineProperty(this, "handleDrawerToggle", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this2.setState(function (state) {
        return {
          mobileOpen: !state.mobileOpen
        };
      });
    }
  });
  Object.defineProperty(this, "getNextAssignmentIndex", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(updateAssignmentList, removedAssignmentIndex) {
      // if there is no assignment left
      if (updateAssignmentList.length === 0) {
        return null;
      } // if there is only 1 assignment just show it
      else if (updateAssignmentList.length === 1) {
          return 0;
        } // if the approve assignment is the last one then
        // then get the previous one
        else if (updateAssignmentList.length == removedAssignmentIndex) {
            return updateAssignmentList.length - 1;
          } else {
            return removedAssignmentIndex;
          }
    }
  });
  Object.defineProperty(this, "removeCompletedAssignment", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this2$state = _this2.state,
          assignments = _this2$state.assignments,
          selectedAssignment = _this2$state.selectedAssignment;
      var updateAssignmentList = [],
          removedAssignmentIndex,
          nextAssignmentIndex; // The assignment which is approve or rejected
      // shall no longer be in pending list remove it.

      for (var i = 0; i < assignments.length; i++) {
        if (assignments[i] === selectedAssignment) {
          removedAssignmentIndex = i;
          continue;
        }

        updateAssignmentList.push(assignments[i]);
      } // which assignment to be shown after removing the
      // completed one in the main box


      nextAssignmentIndex = _this2.getNextAssignmentIndex(updateAssignmentList, removedAssignmentIndex);
      var nextAssignment = nextAssignmentIndex === null ? {} : updateAssignmentList[nextAssignmentIndex];

      _this2.setState({
        assignments: updateAssignmentList,
        // what if there is no assignment left?
        selectedAssignment: nextAssignment
      });

      if (nextAssignmentIndex !== null) {
        assignment_review_navigateToAssignment(nextAssignment.id);
      }
    }
  });
};

/* harmony default export */ var assignment_review = (Object(styles_["withStyles"])(assignment_review_styles)(assignment_review_AssignmentsReview));
// CONCATENATED MODULE: ./pages/assignment-review.js


function pages_assignment_review__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_assignment_review__typeof = function _typeof(obj) { return typeof obj; }; } else { pages_assignment_review__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_assignment_review__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages_assignment_review__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_assignment_review__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_assignment_review__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_assignment_review__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_assignment_review__defineProperties(Constructor, staticProps); return Constructor; }

function pages_assignment_review__possibleConstructorReturn(self, call) { if (call && (pages_assignment_review__typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assignment_review__assertThisInitialized(self); }

function pages_assignment_review__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages_assignment_review__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// Peer review system












var assignment_review_AssignmentReview =
/*#__PURE__*/
function (_React$Component) {
  pages_assignment_review__inherits(AssignmentReview, _React$Component);

  function AssignmentReview(props) {
    var _this;

    pages_assignment_review__classCallCheck(this, AssignmentReview);

    _this = pages_assignment_review__possibleConstructorReturn(this, (AssignmentReview.__proto__ || Object.getPrototypeOf(AssignmentReview)).call(this, props));
    Object.defineProperty(pages_assignment_review__assertThisInitialized(_this), "configSentryOnMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          var userId;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return external__localforage__default.a.getItem('authResponse').then(function (value) {
                    var id = value ? value.user.id : 'non logged in user';
                    return id;
                  });

                case 2:
                  userId = _context.sent;
                  browser_["configureScope"](function (scope) {
                    scope.setExtra("userId", userId);
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
    });
    Object.defineProperty(pages_assignment_review__assertThisInitialized(_this), "triggerSentry", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee2(error, errorInfo) {
          return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this.setState({
                    error: error
                  });

                  browser_["withScope"](function (scope) {
                    Object.keys(errorInfo).forEach(function (key) {
                      scope.setExtra(errorInfo, errorInfo[key]);
                    });
                    browser_["captureException"](error);
                  });

                case 2:
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
    });
    _this.state = {
      assignments: [],
      showLoader: true
    };
    return _this;
  }

  pages_assignment_review__createClass(AssignmentReview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      browser_["init"]({
        dsn: 'https://dac738139bd14514bbec319da7c8b28c@sentry.io/1417825'
      });
      this.configSentryOnMount();
      this.loadAssignments();
    }
  }, {
    key: "componentDidCatch",
    value: function () {
      var _componentDidCatch = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(error, errorInfo) {
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.triggerSentry(error, errorInfo);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidCatch(_x3, _x4) {
        return _componentDidCatch.apply(this, arguments);
      };
    }()
  }, {
    key: "loadAssignments",
    value: function () {
      var _loadAssignments = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4() {
        var value, response, _value3, jwt, assignmentsToReview;

        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return external__localforage__default.a.getItem('authResponse');

              case 3:
                value = _context4.sent;

                if (value) {
                  _context4.next = 7;
                  break;
                }

                // No access tokens saved
                router__default.a.replace('/?params=signin');
                return _context4.abrupt("return", null);

              case 7:
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return");

              case 12:
                console.log("2");
                _value3 = value, jwt = _value3.jwt;
                _context4.prev = 14;
                _context4.next = 17;
                return Object(api["d" /* fetchApi */])('/assignments/peerReview', {}, {
                  Authorization: jwt
                });

              case 17:
                response = _context4.sent;
                console.log(response);
                assignmentsToReview = response.data;
                assignmentsToReview = Object(utils["a" /* filterPendingAssignment */])(assignmentsToReview);
                this.setState({
                  assignments: assignmentsToReview,
                  showLoader: false
                });
                _context4.next = 29;
                break;

              case 24:
                _context4.prev = 24;
                _context4.t1 = _context4["catch"](14);
                console.error(_context4.t1);
                this.setState({
                  assignments: [],
                  showLoader: true
                }); // TODO: Handle network error cases

                return _context4.abrupt("return");

              case 29:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9], [14, 24]]);
      }));

      return function loadAssignments() {
        return _loadAssignments.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          assignments = _state.assignments,
          showLoader = _state.showLoader;

      if (assignments.length === 0) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement(header["a" /* default */], {
          searchHidden: true
        }), external__react__default.a.createElement(assignment_review_completed, {
          showLoader: showLoader
        }));
      } else {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement(header["a" /* default */], {
          searchHidden: true
        }), external__react__default.a.createElement(assignment_review, {
          showLoader: showLoader,
          assignments: assignments
        }));
      }
    }
  }]);

  return AssignmentReview;
}(external__react__default.a.Component);

/* harmony default export */ var pages_assignment_review = __webpack_exports__["default"] = (Object(with_ga_tag["a" /* withGATag */])(Object(with_root["a" /* default */])(Object(router_["withRouter"])(assignment_review_AssignmentReview))));

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ })
/******/ ]);