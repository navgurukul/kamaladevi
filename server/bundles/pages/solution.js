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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ 11:
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

/***/ 12:
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 123:
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

// EXTERNAL MODULE: ./src/with-root.js
var with_root = __webpack_require__(18);

// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: external "localforage"
var external__localforage_ = __webpack_require__(3);
var external__localforage__default = /*#__PURE__*/__webpack_require__.n(external__localforage_);

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__(23);

// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(30);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// CONCATENATED MODULE: ./src/components/exercise-solution/solution-detail.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






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

var styles = function styles(theme) {
  return {
    solutionContent: _defineProperty({
      padding: theme.spacing.unit * 2.5,
      paddingTop: theme.spacing.unit * 3,
      fontFamily: 'Ubuntu',
      maxWidth: theme.spacing.unit * 120,
      margin: 'auto',
      marginTop: '20vh'
    }, theme.breakpoints.down('xs'), {
      marginTop: '10vh',
      maxWidth: theme.spacing.unit * 42
    })
  };
};

var solution_detail_SolutionDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SolutionDetail, _React$Component);

  function SolutionDetail() {
    _classCallCheck(this, SolutionDetail);

    return _possibleConstructorReturn(this, (SolutionDetail.__proto__ || Object.getPrototypeOf(SolutionDetail)).apply(this, arguments));
  }

  _createClass(SolutionDetail, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          solution = _props.solution;
      return external__react__default.a.createElement(Card__default.a, {
        className: classes.solutionContent
      }, external__react__default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: md.render(solution)
        }
      }));
    }
  }]);

  return SolutionDetail;
}(external__react__default.a.Component);

/* harmony default export */ var solution_detail = (Object(styles_["withStyles"])(styles)(solution_detail_SolutionDetail));
// CONCATENATED MODULE: ./pages/solution.js


function solution__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { solution__typeof = function _typeof(obj) { return typeof obj; }; } else { solution__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return solution__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function solution__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function solution__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function solution__createClass(Constructor, protoProps, staticProps) { if (protoProps) solution__defineProperties(Constructor.prototype, protoProps); if (staticProps) solution__defineProperties(Constructor, staticProps); return Constructor; }

function solution__possibleConstructorReturn(self, call) { if (call && (solution__typeof(call) === "object" || typeof call === "function")) { return call; } return solution__assertThisInitialized(self); }

function solution__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function solution__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";







var solution_Solution =
/*#__PURE__*/
function (_React$Component) {
  solution__inherits(Solution, _React$Component);

  function Solution() {
    var _this;

    solution__classCallCheck(this, Solution);

    _this = solution__possibleConstructorReturn(this, (Solution.__proto__ || Object.getPrototypeOf(Solution)).call(this));
    _this.state = {
      solution: ""
    };
    _this.loadSolution = _this.loadSolution.bind(solution__assertThisInitialized(_this));
    return _this;
  }

  solution__createClass(Solution, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadSolution();
    }
  }, {
    key: "loadSolution",
    value: function () {
      var _loadSolution = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var id, exerciseId, value, response, _value, jwt, exerciseSolution;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.router.query.id;
                exerciseId = id;
                _context.prev = 2;
                _context.next = 5;
                return external__localforage__default.a.getItem("authResponse");

              case 5:
                value = _context.sent;

                if (value) {
                  _context.next = 9;
                  break;
                }

                // No access tokens saved
                router__default.a.replace("/");
                return _context.abrupt("return", null);

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return");

              case 14:
                _value = value, jwt = _value.jwt;
                _context.prev = 15;
                _context.next = 18;
                return Object(api["d" /* fetchApi */])("/courses/".concat(exerciseId, "/solution"), {}, {
                  Authorization: jwt
                });

              case 18:
                response = _context.sent;
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t1 = _context["catch"](15);
                return _context.abrupt("return");

              case 24:
                exerciseSolution = response[0].solution.replace(/```ngMeta[\s\S]*?```/, "");
                this.setState({
                  solution: exerciseSolution
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11], [15, 21]]);
      }));

      return function loadSolution() {
        return _loadSolution.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var solution = this.state.solution;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(header["a" /* default */], null), external__react__default.a.createElement(solution_detail, {
        solution: solution
      }));
    }
  }]);

  return Solution;
}(external__react__default.a.Component);

/* harmony default export */ var pages_solution = __webpack_exports__["default"] = (Object(with_root["a" /* default */])(Object(router_["withRouter"])(solution_Solution)));

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ 18:
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

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL; });
var BACKEND_URL = 'http://saral.navgurukul.org/api';

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ 23:
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

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("markdown-it-block-embed");

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = require("markdown-it-highlightjs");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 9:
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

/***/ })

/******/ });