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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
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
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-block-embed");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-highlightjs");

/***/ }),
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "localforage"
var external__localforage_ = __webpack_require__(3);
var external__localforage__default = /*#__PURE__*/__webpack_require__.n(external__localforage_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-document-title"
var external__react_document_title_ = __webpack_require__(87);
var external__react_document_title__default = /*#__PURE__*/__webpack_require__.n(external__react_document_title_);

// EXTERNAL MODULE: external "@sentry/browser"
var browser_ = __webpack_require__(10);
var browser__default = /*#__PURE__*/__webpack_require__.n(browser_);

// EXTERNAL MODULE: ./src/with-root.js
var with_root = __webpack_require__(18);

// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: ./src/services/utils.js
var utils = __webpack_require__(31);

// EXTERNAL MODULE: ./src/with-ga-tag.js
var with_ga_tag = __webpack_require__(37);

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__(23);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(30);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(28);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(17);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__(33);
var CircularProgress__default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__(44);
var Dialog__default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__(45);
var DialogActions__default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__(46);
var DialogTitle__default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/icons/NavigateNext"
var NavigateNext_ = __webpack_require__(88);
var NavigateNext__default = /*#__PURE__*/__webpack_require__.n(NavigateNext_);

// EXTERNAL MODULE: external "@material-ui/icons/NavigateBefore"
var NavigateBefore_ = __webpack_require__(89);
var NavigateBefore__default = /*#__PURE__*/__webpack_require__.n(NavigateBefore_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(29);
var Close__default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/Inbox"
var Inbox_ = __webpack_require__(90);
var Inbox__default = /*#__PURE__*/__webpack_require__.n(Inbox_);

// EXTERNAL MODULE: external "@material-ui/icons/Drafts"
var Drafts_ = __webpack_require__(91);
var Drafts__default = /*#__PURE__*/__webpack_require__.n(Drafts_);

// EXTERNAL MODULE: external "@material-ui/icons/Cancel"
var Cancel_ = __webpack_require__(61);
var Cancel__default = /*#__PURE__*/__webpack_require__.n(Cancel_);

// EXTERNAL MODULE: external "@material-ui/icons/Schedule"
var Schedule_ = __webpack_require__(92);
var Schedule__default = /*#__PURE__*/__webpack_require__.n(Schedule_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(93);
var ExpandMore__default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckCircle"
var CheckCircle_ = __webpack_require__(35);
var CheckCircle__default = /*#__PURE__*/__webpack_require__.n(CheckCircle_);

// EXTERNAL MODULE: external "@material-ui/icons/CreateNewFolder"
var CreateNewFolder_ = __webpack_require__(94);
var CreateNewFolder__default = /*#__PURE__*/__webpack_require__.n(CreateNewFolder_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(53);
var Divider__default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(6);
var Typography__default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(8);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(20);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(95);
var ListItem__default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(96);
var ListItemIcon__default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(97);
var ListItemText__default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanel"
var ExpansionPanel_ = __webpack_require__(98);
var ExpansionPanel__default = /*#__PURE__*/__webpack_require__.n(ExpansionPanel_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelSummary"
var ExpansionPanelSummary_ = __webpack_require__(99);
var ExpansionPanelSummary__default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelSummary_);

// EXTERNAL MODULE: external "@material-ui/core/ExpansionPanelDetails"
var ExpansionPanelDetails_ = __webpack_require__(100);
var ExpansionPanelDetails__default = /*#__PURE__*/__webpack_require__.n(ExpansionPanelDetails_);

// EXTERNAL MODULE: ./src/components/alert-notification.js
var alert_notification = __webpack_require__(34);

// EXTERNAL MODULE: ./src/services/session.js
var session = __webpack_require__(11);

// EXTERNAL MODULE: external "react-google-login"
var external__react_google_login_ = __webpack_require__(62);
var external__react_google_login__default = /*#__PURE__*/__webpack_require__.n(external__react_google_login_);

// CONCATENATED MODULE: ./src/components/course-detail/course-detail-sidenav.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// Course list































var styles = function styles(theme) {
  return (// console.log(theme);
    {
      root: {
        textAlign: 'center'
      },
      extPnlSmryRoot: {
        padding: 0
      },
      expPnlSmryContent: {
        margin: 0
      },
      expPnlSmryExpanded: {
        margin: '0px !important'
      },
      expPnlDetails: {
        flexDirection: 'column'
      },
      flex1: {
        flex: 1
      },
      enrollButton: {
        padding: 20,
        width: '100%'
      },
      unEnrollButton: {
        padding: 20,
        width: '100%'
      },
      close: {
        padding: '10px'
      },
      Approved: {
        color: theme.palette.secondary.main
      },
      Pending_Review: {
        color: theme.palette.warning.main
      },
      Rejected: {
        color: theme.palette.error.main
      },
      Open: {
        color: theme.palette.info.main
      },
      typography: {
        display: 'inline-block'
      }
    }
  );
};

var exerciseSubmissionClass = function exerciseSubmissionClass(status) {
  switch (status) {
    case 'completed':
      return 'Approved';

    case 'pending':
      return 'Pending_Review';

    case 'rejected':
      return 'Rejected';

    default:
      return 'Open';
  }
};

var course_detail_sidenav_exerciseSubmissionStatus = function exerciseSubmissionStatus(status) {
  switch (status) {
    case 'completed':
      return external__react__default.a.createElement(CheckCircle__default.a, null);

    case 'pending':
      return external__react__default.a.createElement(Schedule__default.a, null);

    case 'rejected':
      return external__react__default.a.createElement(Cancel__default.a, null);

    default:
      return external__react__default.a.createElement(CreateNewFolder__default.a, null);
  }
}; // Change this property to let multiple panels to be open simultaneously


var onlyonePanelOpen = true;

var authSuccess =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(response) {
    var tokenId;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //var that=this;
            tokenId = response.tokenId;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              Object(api["d" /* fetchApi */])('/users/auth/google', {
                idToken: tokenId
              }, {
                'Content-Type': 'application/json'
              }, 'post').then(function (authResponse) {
                console.log('authResponse', authResponse);
                console.log('1st then');
                Object(session["e" /* setSession */])(authResponse);
                resolve();
              }).catch(function () {
                reject();
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function authSuccess(_x) {
    return _ref.apply(this, arguments);
  };
}();

var authFailure = function authFailure(response) {
  console.log(response);
};

var course_detail_sidenav_CourseDetailSideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CourseDetailSideNav, _React$Component);

  function CourseDetailSideNav(props) {
    var _this;

    _classCallCheck(this, CourseDetailSideNav);

    _this = _possibleConstructorReturn(this, (CourseDetailSideNav.__proto__ || Object.getPrototypeOf(CourseDetailSideNav)).call(this, props));

    course_detail_sidenav__initialiseProps.call(_assertThisInitialized(_this));

    var exercises = props.exercises,
        slug = props.slug;
    var openExercises = new Array(exercises.length);

    for (var i = 0; i < openExercises.length; i += 1) {
      openExercises[i] = false;
    }

    var _getExerciseIdFromSlu = Object(utils["c" /* getExerciseIdFromSlug */])(slug, exercises),
        openExerciseId = _getExerciseIdFromSlu.openExerciseId,
        selectedvalue = _getExerciseIdFromSlu.selectedvalue,
        selectedchildExercise = _getExerciseIdFromSlu.selectedchildExercise;

    openExercises[openExerciseId] = true;
    _this.state = {
      openExercises: openExercises,
      selectedvalue: selectedvalue,
      selectedchildExercise: selectedchildExercise,
      // setting enrolled to true to prevent the flicker,
      // when the button disappers after appearing
      enrolled: true,
      showEnrolledNotification: false,
      isAuthenticated: false,
      verient: "success",
      notifcationCustomeMessage: null
    };
    return _this;
  }

  _createClass(CourseDetailSideNav, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      // Check whether course is enrolled
      var id = router__default.a.query.id;
      Object(session["c" /* isEnrolled */])(id, function (success) {
        return _this2.setState({
          enrolled: success
        });
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var slug = nextProps.slug,
          exercises = nextProps.exercises;

      if (slug !== this.props.slug) {
        var _getExerciseIdFromSlu2 = Object(utils["c" /* getExerciseIdFromSlug */])(slug, exercises),
            openExerciseId = _getExerciseIdFromSlu2.openExerciseId,
            selectedvalue = _getExerciseIdFromSlu2.selectedvalue,
            selectedchildExercise = _getExerciseIdFromSlu2.selectedchildExercise;

        this.switchPanel(openExerciseId);
        this.highLightSelectedList(selectedvalue, selectedchildExercise);
      }

      return true;
    }
  }, {
    key: "highLightSelectedList",
    value: function highLightSelectedList(valueID, childID) {
      this.setState({
        selectedvalue: valueID,
        selectedchildExercise: childID
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkIsAuthenticated();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          openExercises = _state.openExercises,
          selectedvalue = _state.selectedvalue,
          selectedchildExercise = _state.selectedchildExercise,
          enrolled = _state.enrolled,
          showEnrolledNotification = _state.showEnrolledNotification,
          isAuthenticated = _state.isAuthenticated,
          verient = _state.verient,
          notifcationCustomeMessage = _state.notifcationCustomeMessage;
      var _props = this.props,
          classes = _props.classes,
          loadExercise = _props.loadExercise,
          selectedExercise = _props.selectedExercise; //  getting exercises as an object because react/forbid-prop-types array in .eslintrc

      var exercises = this.props.exercises;
      var notifcationMessage = notifcationCustomeMessage ? notifcationCustomeMessage : enrolled && showEnrolledNotification ? "You have enrolled in the course" : "Kuch Error Ayi ha Enrolled nhi kar paye";
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(alert_notification["a" /* default */], {
        open: showEnrolledNotification,
        message: notifcationMessage,
        autoHideDuration: 6000,
        onClose: this.handleHideNotification,
        variant: verient
      }), !enrolled ? external__react__default.a.createElement(ExpansionPanel__default.a, {
        expanded: true
      }, isAuthenticated ? external__react__default.a.createElement(Button__default.a, {
        variant: "contained",
        color: "primary",
        className: classes.enrollButton,
        onClick: function onClick() {
          var id = router__default.a.query.id;
          Object(api["c" /* enrollCourseAPI */])(id, function (success) {
            _this3.setState({
              enrolled: success,
              showEnrolledNotification: true
            });
          }).catch(function (error) {
            _this3.setState({
              notifcationCustomeMessage: error.message,
              verient: 'error',
              showEnrolledNotification: true
            });
          });
        }
      }, "Enroll In Course") : external__react__default.a.createElement(Button__default.a, {
        color: "primary",
        variant: "contained",
        component: external__react_google_login__default.a,
        clientId: "34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com",
        cookiePolicy: "single_host_origin",
        scope: "profile email",
        onSuccess: function onSuccess(response) {
          _this3.setState({
            loading: true
          });

          authSuccess(response).then(function () {
            console.log('2nd then');
            var id = router__default.a.query.id;
            Object(api["c" /* enrollCourseAPI */])(id, function (success) {
              _this3.setState({
                enrolled: success,
                showEnrolledNotification: true
              });

              router__default.a.replace('/home');
            }).catch(function (error) {
              console.log('<-------------------error enrol course------------------------>', error);
              console.log(_typeof(error));

              _this3.setState({
                notifcationCustomeMessage: error.message,
                verient: 'error',
                showEnrolledNotification: true
              });
            });
          });
        },
        className: classes.enrollButton,
        onFailure: authFailure
      }, "Enroll In Course")) : selectedExercise.usersCompletedExercise !== undefined && selectedExercise.usersCompletedExercise.length !== 0 ? external__react__default.a.createElement(ExpansionPanel__default.a, {
        expanded: true
      }, external__react__default.a.createElement(ExpansionPanelSummary__default.a, null, external__react__default.a.createElement("span", null, // Name of the students who have completed the exercise.
      selectedExercise.usersCompletedExercise.slice(0, 3).map(function (user, index) {
        if (index === selectedExercise.usersCompletedExercise.slice(0, 3).length - 1) {
          return "".concat(user.name, " ");
        }

        return "".concat(user.name, ", ");
      }), selectedExercise.usersCompletedExercise.slice(3).length !== 0 ? external__react__default.a.createElement("span", null, "and ", selectedExercise.usersCompletedExercise.slice(5).length, " more have completed this exersise.") : null))) : null, exercises.map(function (value, index) {
        return external__react__default.a.createElement(ExpansionPanel__default.a, {
          expanded: value.childExercises.length !== 0 ? openExercises[index] : false,
          key: value.id,
          classes: classes.disable
        }, external__react__default.a.createElement(ExpansionPanelSummary__default.a, {
          expandIcon: value.childExercises.length !== 0 ? external__react__default.a.createElement(ExpandMore__default.a, null) : null,
          classes: {
            root: classes.extPnlSmryRoot,
            content: classes.expPnlSmryContent,
            expanded: classes.expPnlSmryExpanded
          }
        }, external__react__default.a.createElement(List__default.a, {
          component: "nav",
          className: classes.flex1
        }, external__react__default.a.createElement(ListItem__default.a, {
          onClick: function onClick() {
            //	isAuthenticated?
            loadExercise(value.slug); //	:
            // this.setState({
            // 	showEnrolledNotification: true,
            // 	verient:'error',
            // 	notifcationCustomeMessage:"Please payhle login karo"
          }
        }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(Inbox__default.a, {
          color: selectedvalue === value.id ? 'primary' : 'inherit'
        })), external__react__default.a.createElement(ListItemText__default.a, {
          disableTypography: true,
          primary: external__react__default.a.createElement(Grid__default.a, {
            container: true
          }, external__react__default.a.createElement(Grid__default.a, {
            item: true,
            md: 10,
            sm: 10
          }, external__react__default.a.createElement(Typography__default.a, {
            className: classes.typography,
            variant: "subheading",
            color: selectedvalue === value.id ? 'primary' : 'inherit'
          }, value.name)), external__react__default.a.createElement(Grid__default.a, {
            item: true,
            md: 2,
            sm: 2
          }, external__react__default.a.createElement("span", {
            className: classes[exerciseSubmissionClass(value.submissionState)]
          }, value.submissionType ? course_detail_sidenav_exerciseSubmissionStatus(value.submissionState) : null)))
        })))), value.childExercises.length !== 0 ? external__react__default.a.createElement(ExpansionPanelDetails__default.a, {
          className: classes.expPnlDetails
        }, value.childExercises.map(function (child) {
          return external__react__default.a.createElement(ListItem__default.a, {
            button: true,
            onClick: function onClick() {
              loadExercise(child.slug);
            },
            key: child.id
          }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(Drafts__default.a, {
            color: selectedvalue === value.id && selectedchildExercise === child.id ? 'primary' : 'inherit'
          })), external__react__default.a.createElement(ListItemText__default.a, {
            disableTypography: true,
            primary: external__react__default.a.createElement(Grid__default.a, {
              container: true
            }, external__react__default.a.createElement(Grid__default.a, {
              item: true,
              md: 10,
              sm: 10
            }, external__react__default.a.createElement(Typography__default.a, {
              className: classes.typography,
              variant: "subheading",
              color: selectedvalue === value.id && selectedchildExercise === child.id ? 'primary' : 'inherit'
            }, child.name)), external__react__default.a.createElement(Grid__default.a, {
              item: true,
              md: 2,
              sm: 2
            }, external__react__default.a.createElement("span", {
              className: classes[exerciseSubmissionClass(child.submissionState)]
            }, child.submissionType ? course_detail_sidenav_exerciseSubmissionStatus(child.submissionState) : null)))
          }));
        })) : null, external__react__default.a.createElement(Divider__default.a, null));
      }), enrolled ? external__react__default.a.createElement(ExpansionPanel__default.a, {
        expanded: true
      }, external__react__default.a.createElement(Button__default.a, {
        variant: "contained",
        color: "primary",
        className: classes.unEnrollButton
      }, "UnEnroll From Course")) : null);
    }
  }]);

  return CourseDetailSideNav;
}(external__react__default.a.Component);

var course_detail_sidenav__initialiseProps = function _initialiseProps() {
  var _this4 = this;

  Object.defineProperty(this, "switchPanel", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(index) {
      var openExercises = _this4.state.openExercises; // If open only one panel at a time, close all the active panels

      if (onlyonePanelOpen) {
        for (var i = 0; i < openExercises.length; i += 1) {
          openExercises[i] = false;
        }
      }

      openExercises[index] = true;

      _this4.setState({
        openExercises: openExercises
      });
    }
  });
  Object.defineProperty(this, "handleHideNotification", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this4.setState({
        showEnrolledNotification: false,
        notifcationCustomeMessage: null
      });
    }
  });
  Object.defineProperty(this, "checkIsAuthenticated", {
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
            _this4.setState({
              isAuthenticated: true
            });
          }
        }
      });
    }
  });
};

/* harmony default export */ var course_detail_sidenav = (Object(styles_["withStyles"])(styles)(course_detail_sidenav_CourseDetailSideNav));
// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(51);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(43);
var CardContent__default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// CONCATENATED MODULE: ./src/components/course-detail/course-detail-submission.js
function course_detail_submission__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { course_detail_submission__typeof = function _typeof(obj) { return typeof obj; }; } else { course_detail_submission__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return course_detail_submission__typeof(obj); }

function course_detail_submission__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function course_detail_submission__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function course_detail_submission__createClass(Constructor, protoProps, staticProps) { if (protoProps) course_detail_submission__defineProperties(Constructor.prototype, protoProps); if (staticProps) course_detail_submission__defineProperties(Constructor, staticProps); return Constructor; }

function course_detail_submission__possibleConstructorReturn(self, call) { if (call && (course_detail_submission__typeof(call) === "object" || typeof call === "function")) { return call; } return course_detail_submission__assertThisInitialized(self); }

function course_detail_submission__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function course_detail_submission__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Submission Details of exercises solution














var course_detail_submission_styles = function styles(theme) {
  var _submissionField;

  return {
    root: {
      flexGrow: 1
    },
    cardContent: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 0,
      '&:last-child': {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 0.5
      }
    },
    submitExercise: {
      marginTop: -theme.spacing.unit * 8,
      float: 'right',
      color: 'white',
      borderRadius: '8'
    },
    submissionField: (_submissionField = {
      width: '90%'
    }, _defineProperty(_submissionField, theme.breakpoints.down('sm'), {
      width: '90%'
    }), _defineProperty(_submissionField, theme.breakpoints.down('xs'), {
      width: '80%'
    }), _submissionField),
    floatRight: {
      float: 'right'
    },
    typography: {
      display: 'inline'
    },
    reviewer: {
      fontWeight: '400'
    }
  };
};

var getValidationMessage = function getValidationMessage(submissionType, notes) {
  var message = '';

  if (submissionType == 'number') {
    message = 'App nich ek integer value hi dal sakte hai.';
  } else if (submissionType == 'text') {
    message = 'App niche 100 se jada character nhi dal sakte hai.';
  } else if (submissionType == 'text_large') {
    message = 'App niche 1500 se jada character nhi dal sakte hai.';
  } else if (submissionType == 'url') {
    message = !notes.startsWith('http') ? 'Link ke aage http:// yea https:// hona chaiye.' : 'Apko niche ek url ka link dalna hai.';
  }

  return message;
};

var isSubmissionTypeValid = function isSubmissionTypeValid(submissionType, notes) {
  if (submissionType == 'number') {
    return !isNaN(notes);
  } else if (submissionType == 'text') {
    return notes.length <= 100;
  } else if (submissionType == 'text_large') {
    return notes.length <= 1500;
  } else if (submissionType == 'url') {
    if (!notes.startsWith('http')) {
      return false;
    } else {
      var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
      return notes.match(urlRegex) != null;
    }
  }

  return true;
};

var course_detail_submission_CourseDetailSubmission =
/*#__PURE__*/
function (_React$Component) {
  course_detail_submission__inherits(CourseDetailSubmission, _React$Component);

  function CourseDetailSubmission(props) {
    var _this;

    course_detail_submission__classCallCheck(this, CourseDetailSubmission);

    _this = course_detail_submission__possibleConstructorReturn(this, (CourseDetailSubmission.__proto__ || Object.getPrototypeOf(CourseDetailSubmission)).call(this, props));
    Object.defineProperty(course_detail_submission__assertThisInitialized(_this), "submitExercise", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var notes = _this.state.notes;
        var _this$props = _this.props,
            courseId = _this$props.courseId,
            exercises = _this$props.exercises,
            slug = _this$props.slug,
            loadExercise = _this$props.loadExercise,
            updateExercises = _this$props.updateExercises;
        var exercise = Object(utils["b" /* getExerciseDetailFromSlug */])(slug, exercises);
        var submissionType = exercise.submissionType,
            exerciseId = exercise.id; // here should be the validation

        if (!isSubmissionTypeValid(submissionType, notes)) {
          var message = getValidationMessage(submissionType, notes);

          _this.showNotification(message, 'warning');

          return;
        }

        Object(api["i" /* submitExerciseAPI */])(courseId, exerciseId, notes).then(function (response) {
          var message; // if the user is not enrolled in the course and tries to submit assignment

          var enrolledServerMessage = "User can't submit an assignment unless enrolled in course";

          if (response.statusCode === 417 && response.message === enrolledServerMessage) {
            // call a function to show popup
            message = 'Phele course me Enroll kare.';

            _this.showNotification(message, 'error');
          } else {
            // when the assignment is submitted
            message = 'Aapki assignment submit ho chuka hai.';

            _this.setState({
              notes: ''
            }); // update the submissionType


            exercise['submissionState'] = 'pending';
            updateExercises(exercises);

            _this.showNotification(message);

            _this.setState({
              disableSubmitButton: true
            });

            loadExercise();
          }
        });
      }
    });
    Object.defineProperty(course_detail_submission__assertThisInitialized(_this), "showNotification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(message) {
        var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

        _this.setState({
          showNotification: true,
          notifcationMessage: message,
          variant: variant
        });
      }
    });
    Object.defineProperty(course_detail_submission__assertThisInitialized(_this), "handleHideNotification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          showNotification: false
        });
      }
    });
    Object.defineProperty(course_detail_submission__assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var name = event.target.name;

        _this.setState(_defineProperty({}, name, event.target.value));
      }
    });
    Object.defineProperty(course_detail_submission__assertThisInitialized(_this), "checkIsAuthenticated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        external__localforage__default.a.getItem('authResponse', function (error, value) {
          if (error) {
            if (!window.navigator.onLine) {
              alert('Aap internet se connected nhi ho.');
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
    _this.submitButton = external__react__default.a.createRef();
    _this.state = {
      notes: '',
      showNotification: false,
      notifcationMessage: '',
      variant: 'error',
      disableSubmitButton: false,
      isAuthenticated: false
    };
    return _this;
  }

  course_detail_submission__createClass(CourseDetailSubmission, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkIsAuthenticated();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          prevSolutionDetail = _props.prevSolutionDetail,
          slug = _props.slug,
          exercises = _props.exercises;
      var _state = this.state,
          notes = _state.notes,
          showNotification = _state.showNotification,
          notifcationMessage = _state.notifcationMessage,
          variant = _state.variant,
          disableSubmitButton = _state.disableSubmitButton,
          isAuthenticated = _state.isAuthenticated;

      var _getExerciseDetailFro = Object(utils["b" /* getExerciseDetailFromSlug */])(slug, exercises),
          submissionType = _getExerciseDetailFro.submissionType,
          submissionState = _getExerciseDetailFro.submissionState;

      return isAuthenticated ? external__react__default.a.createElement(Card__default.a, null, prevSolutionDetail ? external__react__default.a.createElement(CardContent__default.a, {
        className: classes.cardContent
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 6,
        sm: 6,
        md: 6
      }, external__react__default.a.createElement(Typography__default.a, {
        variant: "body2",
        className: classes.typography
      }, "Previous Solution:"), external__react__default.a.createElement(Typography__default.a, {
        variant: "body1"
      }, prevSolutionDetail.submitterNotes.startsWith('http') ? external__react__default.a.createElement("a", {
        href: prevSolutionDetail.submitterNotes,
        target: "_blank"
      }, "Solution") : prevSolutionDetail.submitterNotes)), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: 6,
        sm: 6,
        md: 6,
        className: classes.floatRight
      }, prevSolutionDetail.reviewerName ? external__react__default.a.createElement(Typography__default.a, {
        variant: "body2",
        className: classes.typography
      }, "Reviewer Name:", ' ', external__react__default.a.createElement("span", {
        className: classes.reviewer
      }, prevSolutionDetail.reviewerName)) : null, prevSolutionDetail.state !== 'pending' ? external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(Typography__default.a, {
        variant: "body2"
      }, "Reviewer Feedback:"), external__react__default.a.createElement(Typography__default.a, {
        variant: "body1"
      }, prevSolutionDetail.notesReviewer)) : null))) : null, external__react__default.a.createElement(CardContent__default.a, {
        className: classes.cardContent
      }, external__react__default.a.createElement("form", {
        autoComplete: "off"
      }, external__react__default.a.createElement(TextField__default.a, {
        multiline: true,
        fullWidth: true,
        value: notes,
        label: 'Exercise Submission',
        onChange: this.handleChange,
        className: classes.submissionField,
        name: "notes"
      }), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), external__react__default.a.createElement(Button__default.a, {
        disabled: disableSubmitButton,
        variant: "extendedFab",
        color: "secondary",
        className: classes.submitExercise,
        onClick: this.submitExercise
      }, external__react__default.a.createElement("img", {
        src: "/static/icons/icons8-upload-to-cloud-24.png"
      })))), external__react__default.a.createElement(alert_notification["a" /* default */], {
        open: showNotification,
        message: notifcationMessage,
        autoHideDuration: 6000,
        variant: variant,
        onClose: this.handleHideNotification
      })) : null;
    }
  }]);

  return CourseDetailSubmission;
}(external__react__default.a.Component);

/* harmony default export */ var course_detail_submission = (Object(styles_["withStyles"])(course_detail_submission_styles)(course_detail_submission_CourseDetailSubmission));
// EXTERNAL MODULE: ./src/services/config.js
var config = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/course-detail/utterances.js






var utterances_styles = function styles() {
  return {
    utterances: {
      border: 'none',
      height: '100%'
    }
  };
};

var utterances_Utterances = function Utterances(props) {
  var classes = props.classes;
  var utterancesScript = 'https://utteranc.es/client.js';
  var utterancesUrl = "https://utteranc.es/utterances.html?src=".concat(utterancesScript, "&async=");
  var _props$router = props.router,
      asPath = _props$router.asPath,
      pathname = _props$router.pathname;
  var _document = document,
      title = _document.title;
  var repo = 'navgurukul/newton';
  var currentUrl = "".concat(config["a" /* BACKEND_URL */]).concat(asPath);
  var pageDetail = "url=".concat(currentUrl, "&origin=").concat(config["a" /* BACKEND_URL */], "&pathname=").concat(pathname, "&title=").concat(title);
  var utterancesSettings = 'crossorigin=anonymous&issue-term=title&description=&og:title=';
  var url = "".concat(utterancesUrl, "&repo=").concat(repo, "&").concat(pageDetail, "&").concat(utterancesSettings);
  return external__react__default.a.createElement("iframe", {
    title: title,
    className: classes.utterances,
    src: url
  });
};

/* harmony default export */ var utterances = (Object(styles_["withStyles"])(utterances_styles)(Object(router_["withRouter"])(utterances_Utterances)));
// CONCATENATED MODULE: ./src/components/course-detail/index.js


function course_detail__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { course_detail__typeof = function _typeof(obj) { return typeof obj; }; } else { course_detail__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return course_detail__typeof(obj); }

function course_detail__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function course_detail__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function course_detail__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function course_detail__createClass(Constructor, protoProps, staticProps) { if (protoProps) course_detail__defineProperties(Constructor.prototype, protoProps); if (staticProps) course_detail__defineProperties(Constructor, staticProps); return Constructor; }

function course_detail__possibleConstructorReturn(self, call) { if (call && (course_detail__typeof(call) === "object" || typeof call === "function")) { return call; } return course_detail__assertThisInitialized(self); }

function course_detail__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function course_detail__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function course_detail__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Course list





















var blockEmbedPlugin = __webpack_require__(63); // Parse markdown content


var md = __webpack_require__(64)({
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
}).enable(['link']).enable('image').use(__webpack_require__(65));

md.use(blockEmbedPlugin, {
  containerClassName: 'video-embed'
});

var course_detail_styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: '10%',
      paddingRight: '10%'
    }, course_detail__defineProperty(_root, theme.breakpoints.between('sm', 'md'), {
      paddingLeft: '5%',
      paddingRight: '5%'
    }), course_detail__defineProperty(_root, theme.breakpoints.down('sm'), {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    }), course_detail__defineProperty(_root, '& img', {
      maxWidth: '100%',
      display: 'block' // margin: "0 auto"

    }), course_detail__defineProperty(_root, '& iframe', {
      width: '100%'
    }), _root),
    utterances: {
      width: '100%'
    },
    floatButtonRight: {
      marginLeft: 'auto'
    },
    submitExercise: {
      float: 'right',
      color: 'white'
    },
    sidebar: course_detail__defineProperty({
      paddingLeft: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 1
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    mainItem: {
      paddingRight: theme.spacing.unit
    },
    content: {
      padding: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 3,
      fontFamily: 'Ubuntu'
    },
    progress: {
      margin: theme.spacing.unit * 2
    },
    loaderRoot: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    },
    editLink: {
      float: 'right',
      clear: 'right',
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    navigationBtnDiv: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingTop: theme.spacing.unit * 1,
      marginBottom: '10%'
    },
    solution: {
      display: 'flex'
    },
    solutionIcon: {
      marginLeft: 'auto !important',
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5
    },
    solutionButtonYes: {
      textDecoration: 'none '
    }
  };
};

var course_detail_navigateToExercise = function navigateToExercise(id) {
  return function (slug) {
    router__default.a.push({
      pathname: '/course',
      query: {
        id: id,
        slug: slug
      }
    });
  };
}; // console.log(navigateToExercise)


var course_detail_CourseDetail =
/*#__PURE__*/
function (_React$Component) {
  course_detail__inherits(CourseDetail, _React$Component);

  function CourseDetail(props) {
    var _this;

    course_detail__classCallCheck(this, CourseDetail);

    _this = course_detail__possibleConstructorReturn(this, (CourseDetail.__proto__ || Object.getPrototypeOf(CourseDetail)).call(this, props));
    Object.defineProperty(course_detail__assertThisInitialized(_this), "updateLinks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(htmlFromServer) {
        var courseDetail = new DOMParser().parseFromString(htmlFromServer, 'text/html');
        var anchorList = courseDetail.querySelectorAll('a'); // setting links inside courseDetail to be open in new tab

        anchorList.forEach(function (anchor) {
          if (anchor.innerText === 'Saral') {
            return false;
          } else {
            anchor.setAttribute('target', '_blank');
          }
        });
        return courseDetail.body.innerHTML;
      }
    });
    Object.defineProperty(course_detail__assertThisInitialized(_this), "handleClickOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    });
    Object.defineProperty(course_detail__assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });
      }
    });
    _this.state = {
      prefetchedData: false,
      content: '',
      prevSolutionDetail: '',
      selectedExercise: {},
      open: false,
      ifSolution: false,
      exerciseId: 0
    };
    _this.courseDetail = external__react__default.a.createRef();
    _this.loadExercise = _this.loadExercise.bind(course_detail__assertThisInitialized(_this));
    return _this;
  }

  course_detail__createClass(CourseDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadExercise();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.slug !== this.props.slug) {
        this.loadExercise(nextProps.slug);
      }

      return true;
    }
  }, {
    key: "loadExercise",
    value: function () {
      var _loadExercise = course_detail__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(nextSlug) {
        var value, response, _props, courseId, slug, exercises, payload, _value, jwt, _getExerciseDetailFro, exerciseId, prevSolutionDetail, content;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // get the exerciseId for the exercise
                _props = this.props, courseId = _props.id, slug = _props.slug, exercises = _props.exercises;
                _context.prev = 1;
                _context.next = 4;
                return external__localforage__default.a.getItem('authResponse');

              case 4:
                value = _context.sent;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                // throw error;
                console.error(_context.t0); // TODO: Handle localforage error cases

                return _context.abrupt("return");

              case 11:
                payload = !nextSlug ? {
                  slug: slug
                } : {
                  slug: nextSlug
                };
                _context.prev = 12;

                if (value) {
                  _context.next = 19;
                  break;
                }

                _context.next = 16;
                return Object(api["d" /* fetchApi */])("/courses/".concat(courseId, "/exercise/getBySlug"), payload, {});

              case 16:
                response = _context.sent;
                _context.next = 23;
                break;

              case 19:
                _value = value, jwt = _value.jwt;
                _context.next = 22;
                return Object(api["d" /* fetchApi */])("/courses/".concat(courseId, "/exercise/getBySlug"), payload, {
                  Authorization: jwt
                });

              case 22:
                response = _context.sent;

              case 23:
                _context.next = 28;
                break;

              case 25:
                _context.prev = 25;
                _context.t1 = _context["catch"](12);
                return _context.abrupt("return");

              case 28:
                _getExerciseDetailFro = Object(utils["b" /* getExerciseDetailFromSlug */])(slug, exercises), exerciseId = _getExerciseDetailFro.id; // console.log('courseId, exerciseId :', courseId, exerciseId);

                prevSolutionDetail = {
                  data: null
                };

                if (!value) {
                  _context.next = 36;
                  break;
                }

                _context.next = 33;
                return Object(api["e" /* getExerciseSubmissionAPI */])(courseId, exerciseId);

              case 33:
                prevSolutionDetail = _context.sent;
                _context.next = 36;
                break;

              case 36:
                content = response.content.replace(/```ngMeta[\s\S]*?```/, ''); // console.log(content);

                this.setState(function (prevState) {
                  return {
                    content: content,
                    prefetchedData: true,
                    notes: '',
                    prevSolutionDetail: prevSolutionDetail.data,
                    selectedExercise: response
                  };
                });

              case 38:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7], [12, 25]]);
      }));

      return function loadExercise(_x) {
        return _loadExercise.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          exercises = _props2.exercises,
          id = _props2.id,
          slug = _props2.slug,
          updateExercises = _props2.updateExercises,
          fullScreen = _props2.fullScreen;

      var _getExerciseDetailFro2 = Object(utils["b" /* getExerciseDetailFromSlug */])(slug, exercises),
          reviewType = _getExerciseDetailFro2.reviewType,
          submissionType = _getExerciseDetailFro2.submissionType,
          githubLink = _getExerciseDetailFro2.githubLink;

      var reviewrs = ['peer', 'facilitator', 'automatic'];
      var _state = this.state,
          prefetchedData = _state.prefetchedData,
          content = _state.content,
          prevSolutionDetail = _state.prevSolutionDetail,
          selectedExercise = _state.selectedExercise,
          ifSolution = _state.ifSolution,
          exerciseId = _state.exerciseId;

      if (!prefetchedData) {
        return external__react__default.a.createElement("div", {
          className: classes.loaderRoot
        }, external__react__default.a.createElement(CircularProgress__default.a, {
          className: classes.progress,
          size: 50
        }));
      }

      var previousSlug = Object(utils["f" /* getSlugOfPreviousCourse */])(slug, exercises);
      var nextSlug = Object(utils["e" /* getSlugOfNextCourse */])(slug, exercises); // console.log(exerciseId)

      if (ifSolution === true) {
        return external__react__default.a.createElement(Grid__default.a, {
          container: true,
          spacing: 0,
          className: classes.root
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 8,
          className: classes.content
        }, external__react__default.a.createElement(Card__default.a, {
          className: classes.content
        }, external__react__default.a.createElement("div", {
          id: "course",
          dangerouslySetInnerHTML: {
            __html: this.updateLinks(md.render(content))
          }
        }), external__react__default.a.createElement("div", {
          className: classes.solution
        }, external__react__default.a.createElement("img", {
          src: "static/icons/solution-icon.png",
          className: classes.solutionIcon
        }), external__react__default.a.createElement(Button__default.a // className={classes.solutionButton}
        , {
          onClick: this.handleClickOpen,
          variant: "contained",
          color: "primary"
        }, "solution"), external__react__default.a.createElement(Dialog__default.a, {
          fullScreen: fullScreen,
          open: this.state.open,
          onClose: this.handleClose,
          "aria-labelledby": "responsive-dialog-title"
        }, external__react__default.a.createElement(DialogTitle__default.a, {
          id: "responsive-dialog-title"
        }, " Agar aap solution dekhna chahte ho to 'Yes' button par click kare warna 'No' button pr click kare "), external__react__default.a.createElement(DialogActions__default.a, null, external__react__default.a.createElement(Button__default.a, {
          onClick: this.handleClose,
          color: "primary"
        }, "NO"), external__react__default.a.createElement("a", {
          href: "/solution?id=".concat(exerciseId),
          target: "_blank",
          className: classes.solutionButtonYes
        }, external__react__default.a.createElement(Button__default.a, {
          color: "primary",
          onClick: this.handleClose,
          autoFocus: true
        }, "Yes")))))), external__react__default.a.createElement("br", null), reviewrs.includes(reviewType) && submissionType != null ? external__react__default.a.createElement(course_detail_submission, {
          prevSolutionDetail: prevSolutionDetail ? prevSolutionDetail[0] : '',
          exercises: exercises,
          courseId: id,
          slug: slug,
          loadExercise: this.loadExercise,
          updateExercises: updateExercises
        }) : null, external__react__default.a.createElement("div", {
          className: classes.editLink
        }, external__react__default.a.createElement("a", {
          href: githubLink,
          target: "_blank"
        }, "Edit"), ' ', "on GitHub"), external__react__default.a.createElement("div", {
          className: classes.navigationBtnDiv
        }, previousSlug ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "primary",
          onClick: function onClick() {
            course_detail_navigateToExercise(id)(previousSlug);
          }
        }, external__react__default.a.createElement(NavigateBefore__default.a, null)) : null, nextSlug ? external__react__default.a.createElement(Button__default.a, {
          className: classes.floatButtonRight,
          variant: "fab",
          color: "primary",
          onClick: function onClick() {
            course_detail_navigateToExercise(id)(nextSlug);
          }
        }, external__react__default.a.createElement(NavigateNext__default.a, null)) : null), external__react__default.a.createElement(utterances, {
          slug: slug
        })), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 4,
          className: classes.sidebar
        }, external__react__default.a.createElement(course_detail_sidenav, {
          exercises: exercises,
          loadExercise: course_detail_navigateToExercise(id),
          slug: slug,
          selectedExercise: selectedExercise
        })));
      } else {
        return external__react__default.a.createElement(Grid__default.a, {
          container: true,
          spacing: 0,
          className: classes.root
        }, external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 12,
          md: 8,
          className: classes.content
        }, external__react__default.a.createElement(Card__default.a, {
          className: classes.content
        }, external__react__default.a.createElement("div", {
          id: "course",
          dangerouslySetInnerHTML: {
            __html: this.updateLinks(md.render(content))
          }
        })), external__react__default.a.createElement("br", null), reviewrs.includes(reviewType) && submissionType != null ? external__react__default.a.createElement(course_detail_submission, {
          prevSolutionDetail: prevSolutionDetail ? prevSolutionDetail[0] : '',
          exercises: exercises,
          courseId: id,
          slug: slug,
          loadExercise: this.loadExercise,
          updateExercises: updateExercises
        }) : null, external__react__default.a.createElement("div", {
          className: classes.editLink
        }, external__react__default.a.createElement("a", {
          href: githubLink,
          target: "_blank"
        }, "Edit"), ' ', "on GitHub"), external__react__default.a.createElement("div", {
          className: classes.navigationBtnDiv
        }, previousSlug ? external__react__default.a.createElement(Button__default.a, {
          variant: "fab",
          color: "primary",
          onClick: function onClick() {
            course_detail_navigateToExercise(id)(previousSlug);
          }
        }, external__react__default.a.createElement(NavigateBefore__default.a, null)) : null, nextSlug ? external__react__default.a.createElement(Button__default.a, {
          className: classes.floatButtonRight,
          variant: "fab",
          color: "primary",
          onClick: function onClick() {
            course_detail_navigateToExercise(id)(nextSlug);
          }
        }, external__react__default.a.createElement(NavigateNext__default.a, null)) : null), external__react__default.a.createElement(utterances, {
          slug: slug
        })), external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: 4,
          className: classes.sidebar
        }, external__react__default.a.createElement(course_detail_sidenav, {
          exercises: exercises,
          loadExercise: course_detail_navigateToExercise(id),
          slug: slug,
          selectedExercise: selectedExercise
        })));
      }
    }
  }]);

  return CourseDetail;
}(external__react__default.a.Component);

/* harmony default export */ var course_detail = (Object(styles_["withStyles"])(course_detail_styles)(course_detail_CourseDetail));
// CONCATENATED MODULE: ./pages/course.js


function course__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { course__typeof = function _typeof(obj) { return typeof obj; }; } else { course__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return course__typeof(obj); }

function course__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function course__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function course__createClass(Constructor, protoProps, staticProps) { if (protoProps) course__defineProperties(Constructor.prototype, protoProps); if (staticProps) course__defineProperties(Constructor, staticProps); return Constructor; }

function course__possibleConstructorReturn(self, call) { if (call && (course__typeof(call) === "object" || typeof call === "function")) { return call; } return course__assertThisInitialized(self); }

function course__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function course__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function course__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// This is main entry page for route '/course'













var sendToCourse =
/*#__PURE__*/
function () {
  var _ref = course__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(courseId, slug, setExerciseCallback) {
    var value, response, _value, jwt, exercises, firstExerciseSlug;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return external__localforage__default.a.getItem('authResponse');

          case 3:
            value = _context.sent;

            if (value) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return Object(api["d" /* fetchApi */])("/courses/".concat(courseId, "/exercises"), {}, {});

          case 7:
            response = _context.sent;

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return");

          case 13:
            _context.prev = 13;

            if (!(value != null)) {
              _context.next = 19;
              break;
            }

            _value = value, jwt = _value.jwt;
            _context.next = 18;
            return Object(api["d" /* fetchApi */])("/courses/".concat(courseId, "/exercises"), {}, {
              Authorization: jwt
            });

          case 18:
            response = _context.sent;

          case 19:
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t1 = _context["catch"](13);
            return _context.abrupt("return");

          case 24:
            exercises = response.data;
            setExerciseCallback(exercises); // If there is a slug in the URL, use that slug, else get the
            // slug of the first exercise

            if (!slug) {
              firstExerciseSlug = exercises[0].slug; // Calling replace instead of slug, since we don't want the back
              // button to take to ?id=courseId page.

              router__default.a.replace({
                pathname: '/course',
                query: {
                  id: courseId,
                  slug: firstExerciseSlug
                }
              });
            }

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10], [13, 21]]);
  }));

  return function sendToCourse(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var course_Course =
/*#__PURE__*/
function (_React$Component) {
  course__inherits(Course, _React$Component);

  function Course(props) {
    var _this;

    course__classCallCheck(this, Course);

    _this = course__possibleConstructorReturn(this, (Course.__proto__ || Object.getPrototypeOf(Course)).call(this, props));
    Object.defineProperty(course__assertThisInitialized(_this), "configSentryOnMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = course__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee2() {
          var userId;
          return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return external__localforage__default.a.getItem('authResponse').then(function (value) {
                    var id = value ? value.user.id : 'non logged in user';
                    return id;
                  });

                case 2:
                  userId = _context2.sent;
                  browser_["configureScope"](function (scope) {
                    scope.setExtra("userId", userId);
                  });

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(course__assertThisInitialized(_this), "triggerSentry", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = course__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee3(error, errorInfo) {
          var userId;
          return regenerator__default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return external__localforage__default.a.getItem('authResponse').then(function (value) {
                    var id = value ? value.user.id : 'non logged in user';
                    return id;
                  });

                case 2:
                  userId = _context3.sent;
                  browser_["configureScope"](function (scope) {
                    scope.setExtra("userId", userId);
                  });

                  _this.setState({
                    error: error
                  });

                  browser_["withScope"](function (scope) {
                    Object.keys(errorInfo).forEach(function (key) {
                      scope.setExtra(errorInfo, errorInfo[key]);
                    });
                    browser_["captureException"](error);
                  });

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value(_x4, _x5) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      exercises: []
    };
    return _this;
  }

  course__createClass(Course, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      browser_["init"]({
        dsn: 'https://dac738139bd14514bbec319da7c8b28c@sentry.io/1417825'
      });
      this.configSentryOnMount();
    }
  }, {
    key: "componentDidCatch",
    value: function () {
      var _componentDidCatch = course__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(error, errorInfo) {
        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.triggerSentry(error, errorInfo);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function componentDidCatch(_x6, _x7) {
        return _componentDidCatch.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props$router$query = this.props.router.query,
          id = _props$router$query.id,
          slug = _props$router$query.slug;
      var title = Object(utils["g" /* getTitleFromSlug */])(slug); // If exercises.length is 0, it means the exercises are not loaded yet

      if (!this.state.exercises.length) {
        // TODO: Only run this code on server side
        sendToCourse(id, slug, function (exercises) {
          return _this2.setState({
            exercises: exercises
          });
        });
        return null;
      } // Router prop might get updated in the next render cycle


      if (!slug) {
        return null;
      }

      return external__react__default.a.createElement(external__react_document_title__default.a, {
        title: title
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement(header["a" /* default */], {
        searchHidden: true
      }), external__react__default.a.createElement(course_detail, {
        id: id,
        slug: slug,
        exercises: this.state.exercises,
        updateExercises: function updateExercises(exercises) {
          return _this2.setState({
            exercises: exercises
          });
        }
      })));
    }
  }]);

  return Course;
}(external__react__default.a.Component);

/* harmony default export */ var course = __webpack_exports__["default"] = (Object(with_ga_tag["a" /* withGATag */])(Object(with_root["a" /* default */])(Object(router_["withRouter"])(course_Course))));

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("react-document-title");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateNext");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NavigateBefore");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Inbox");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Drafts");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Schedule");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CreateNewFolder");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ })
/******/ ]);