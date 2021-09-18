(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/author.fb64dfe1.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(6);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(30)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(29);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(31);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(6);

var _helpers = __webpack_require__(32);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/fortierpm-logo.svg
var fortierpm_logo = __webpack_require__(21);
var fortierpm_logo_default = /*#__PURE__*/__webpack_require__.n(fortierpm_logo);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/TopNavbar.js


function TopNavbar() {
  return /*#__PURE__*/external_react_default.a.createElement("header", {
    className: "top-navbar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "logo-image",
    src: fortierpm_logo_default.a,
    alt: "Logo"
  })), /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "nav-list"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#hero",
    className: "nav-link"
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#projects",
    className: "nav-link"
  }, "Projects")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#skills",
    className: "nav-link"
  }, "Skills")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#contact",
    className: "nav-link"
  }, "Contact")))));
}
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProjectCard.js


var ProjectCard_ProjectCard = function ProjectCard(_ref) {
  var project = _ref.project,
      year = _ref.year,
      month = _ref.month,
      day = _ref.day;
  return /*#__PURE__*/external_react_default.a.createElement("article", {
    className: "project-card"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "card-date"
  }, /*#__PURE__*/external_react_default.a.createElement("time", {
    dateTime: "".concat(year, "/").concat(month, "/").concat(day)
  }, project.date)), /*#__PURE__*/external_react_default.a.createElement("h3", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#"
  }, project.title))), /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "card-thumb",
    src: project.thumb,
    alt: "Project thumbnail",
    width: 50,
    height: 50
  }), /*#__PURE__*/external_react_default.a.createElement("address", {
    className: "card-authorship"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "author1-avatar",
    rel: "author",
    href: project.authors[0][2]
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "avatar-img",
    src: project.authors[0][1],
    alt: "",
    width: 50,
    height: 50
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "author-list"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "author-prefix"
  }, project.authors.length < 2 ? "Author" : "Authors"), project.authors.map(function (author) {
    return /*#__PURE__*/external_react_default.a.createElement("a", {
      className: "author-link",
      rel: "author",
      href: author[2],
      key: author[0]
    }, author[0], /*#__PURE__*/external_react_default.a.createElement("br", null));
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "card-tags"
  }, project.tags.map(function (tag) {
    return /*#__PURE__*/external_react_default.a.createElement("a", {
      className: "tag-link",
      href: tag[1],
      key: tag[0]
    }, tag[0]);
  })));
};

/* harmony default export */ var components_ProjectCard = (ProjectCard_ProjectCard);
// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(22);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProfBar.js


var ProfBar_ProfBar = function ProfBar(_ref) {
  var _ref$tier = _ref.tier,
      tier = _ref$tier === void 0 ? "primary" : _ref$tier,
      proficiency = _ref.proficiency;
  var level = "";

  switch (proficiency) {
    case 1:
      level = "Expert";
      break;

    case 0.9:
      level = "Near Expert";
      break;

    case 0.8:
      level = "Advanced";
      break;

    case 0.7:
      level = "Advanced";
      break;

    case 0.6:
      level = "Proficient";
      break;

    case 0.5:
      level = "Proficient";
      break;

    case 0.4:
      level = "Developing";
      break;

    case 0.3:
      level = "Beginner";
      break;

    default:
      level = "Not specified";
  }

  return /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "prof-guage ".concat(tier === "secondary" ? "prof-guage-sec" : "prof-guage-prim"),
    viewBox: "0 0 1000 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Skill Level: ".concat(level)
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    width: "1000",
    height: "20",
    rx: "10",
    fill: "black"
  }), /*#__PURE__*/external_react_default.a.createElement("mask", {
    id: proficiency
    /* required for creating unique stop ids */
    ,
    style: {
      maskType: "alpha"
    },
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "1000",
    height: "20"
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    width: 1000 * proficiency,
    height: "20",
    fill: "#C994C4"
  })), /*#__PURE__*/external_react_default.a.createElement("g", {
    mask: "url(#".concat(proficiency, ")")
  }, /*#__PURE__*/external_react_default.a.createElement("rect", {
    width: "1000",
    height: "20",
    rx: "10",
    fill: "url(#paint0_linear)"
  })), /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "0",
    y1: "0",
    x2: "1000",
    y2: "0",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/external_react_default.a.createElement("stop", {
    stopColor: "#FF1F1F"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "1",
    stopColor: "#760AFF"
  }))));
};

/* harmony default export */ var components_ProfBar = (ProfBar_ProfBar);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/SubSkillList.js



var SubSkillList_SubSkillList = function SubSkillList(_ref) {
  var open = _ref.open,
      skill = _ref.skill;
  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "subskill-list"
  }, open ? skill.subSkillList.map(function (subSkill) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "subskill-body",
      key: subSkill.name
    }, /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "subskill-name"
    }, subSkill.name), /*#__PURE__*/external_react_default.a.createElement(components_ProfBar, {
      tier: "secondary",
      proficiency: subSkill.proficiency
    }));
  }) : "");
};

/* harmony default export */ var components_SubSkillList = (SubSkillList_SubSkillList);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/SkillList.js





var SkillList_SkillList = function SkillList(_ref) {
  var skills = _ref.skills,
      skillGroup = _ref.skillGroup;
  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "skill-list"
  }, skills[skillGroup].map(function (skill) {
    var _useState = Object(external_react_["useState"])(false),
        _useState2 = slicedToArray_default()(_useState, 2),
        openState = _useState2[0],
        setOpenState = _useState2[1];

    var handleClick = function handleClick(e) {
      setOpenState(!openState);
    };

    return /*#__PURE__*/external_react_default.a.createElement("div", {
      onClick: handleClick,
      className: "skill ".concat(skill.subSkillList.length > 0 ? "skill-clickable" : ""),
      key: skill.name
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "skill-body"
    }, /*#__PURE__*/external_react_default.a.createElement("h4", {
      className: "skill-name"
    }, skill.name), /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "skill-desc"
    }, skill.description), /*#__PURE__*/external_react_default.a.createElement(components_ProfBar, {
      proficiency: skill.proficiency
    })), /*#__PURE__*/external_react_default.a.createElement(components_SubSkillList, {
      open: openState,
      skill: skill
    }));
  }));
};

/* harmony default export */ var components_SkillList = (SkillList_SkillList);
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/global.css
var global = __webpack_require__(40);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/app.css
var app = __webpack_require__(41);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/project-thumb.jpg
var project_thumb = __webpack_require__(8);
var project_thumb_default = /*#__PURE__*/__webpack_require__.n(project_thumb);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/author.jpg
var img_author = __webpack_require__(1);
var author_default = /*#__PURE__*/__webpack_require__.n(img_author);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/projects.js



var projects = [{
  title: "Project 1",
  date: "Sep 17, 2021",
  thumb: project_thumb_default.a,
  authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
  tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]]
}, {
  title: "Project 2",
  date: "Sep 17, 2021",
  thumb: project_thumb_default.a,
  authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
  tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]]
}];
/* harmony default export */ var constants_projects = (projects);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/skills.js
var skills_skills = {
  frontend: [{
    name: "HTML",
    description: "markup language",
    proficiency: 0.9,
    // scale of (0-10) / 10
    subSkillList: [{
      name: "Semantic HTML",
      proficiency: 0.9 // scale of (0-10) / 10

    }, {
      name: "Accessible HTML",
      proficiency: 0.9
    }, {
      name: "XHTML",
      proficiency: 0.8
    }, {
      name: "SVG",
      proficiency: 1
    }]
  }, {
    name: "CSS",
    description: "style sheet language",
    proficiency: 0.9,
    subSkillList: [{
      name: "Sass",
      proficiency: 0.9
    }, {
      name: "Bootstrap",
      proficiency: 0.7
    }, {
      name: "PostCSS",
      proficiency: 0.5
    }]
  }, {
    name: "JavaScript",
    description: "OOP language",
    proficiency: 0.9,
    subSkillList: [{
      name: "ES6",
      proficiency: 0.9
    }, {
      name: "DOM",
      proficiency: 0.9
    }, {
      name: "TypeScript",
      proficiency: 0.7
    }]
  }, {
    name: "React.js",
    description: "JavaScript library",
    proficiency: 0.8,
    subSkillList: [{
      name: "State",
      proficiency: 0.8
    }, {
      name: "Functional Components and Props",
      proficiency: 0.8
    }, {
      name: "Hooks",
      proficiency: 0.8
    }]
  }, {
    name: "react-static",
    description: "React.js static site generator",
    proficiency: 0.7,
    subSkillList: [{
      name: "react-static <Head>",
      proficiency: 0.9
    }]
  }, {
    name: "Next.js",
    description: "React.js development framework",
    proficiency: 0.6,
    subSkillList: [{
      name: "CSS Modules",
      proficiency: 0.9
    }, {
      name: "'next/head' <Head>",
      proficiency: 0.9
    }, {
      name: "SSG",
      proficiency: 0.6
    }]
  }, {
    name: "Three.js",
    description: "JavaScript library",
    proficiency: 0.6,
    subSkillList: []
  }, {
    name: "GSAP",
    description: "JavaScript library",
    proficiency: 0.6,
    subSkillList: []
  }],
  backend: [{
    name: "Python",
    description: "OOP language",
    proficiency: 0.9,
    subSkillList: [{
      name: "Tkinter",
      proficiency: 0.8
    }, {
      name: "Pillow",
      proficiency: 0.8
    }]
  }, {
    name: "Node.js",
    description: "JavaScript runtime environment",
    proficiency: 0.7,
    subSkillList: [{
      name: "npm - Node package manager",
      proficiency: 0.7
    }, {
      name: "npx - npm package runner",
      proficiency: 0.7
    }]
  }, {
    name: "C++",
    description: "JavaScript runtime environment",
    proficiency: 0.6,
    subSkillList: []
  }],
  integratedDevelopmentEnvironments: [{
    name: "Visual Studio Code",
    description: "IDE",
    proficiency: 0.8,
    subSkillList: [{
      name: "Localhost",
      proficiency: 1
    }, {
      name: "Snippets",
      proficiency: 1
    }, {
      name: "Shortcuts",
      proficiency: 0.8
    }, {
      name: "Source control with Git",
      proficiency: 0.8
    }, {
      name: "Extensions, config.json's, and customization",
      proficiency: 1
    }]
  }, {
    name: "Atom",
    description: "IDE",
    proficiency: 0.7,
    subSkillList: []
  }],
  versionControl: [{
    name: "Github",
    description: "internet hosted version control using Git",
    proficiency: 0.8,
    subSkillList: []
  }, {
    name: "Git",
    description: "version control software",
    proficiency: 0.6,
    subSkillList: []
  }],
  webHosting: [{
    name: "Github Pages",
    description: "version control software",
    proficiency: 0.9,
    subSkillList: []
  }, {
    name: "Netlify",
    description: "version control software",
    proficiency: 0.9,
    subSkillList: []
  }],
  prototyping: [{
    name: "Figma",
    description: "layout prototyping tool",
    proficiency: 0.8,
    subSkillList: [{
      name: "Prototype smart animations",
      proficiency: 0.9
    }, {
      name: "Smart selection",
      proficiency: 0.9
    }, {
      name: "SVG Export",
      proficiency: 1
    }]
  }, {
    name: "Affinity Designer",
    description: "vector graphics editor",
    proficiency: 0.9,
    subSkillList: [{
      name: "Masks",
      proficiency: 1
    }, {
      name: "Filters",
      proficiency: 0.9
    }, {
      name: "SVG Export",
      proficiency: 1
    }]
  }, {
    name: "InDesign",
    description: "vector graphics editor",
    proficiency: 0.5,
    subSkillList: []
  }],
  imageEditing: [{
    name: "Affinity Photo",
    description: "raster graphics editor",
    proficiency: 0.9,
    subSkillList: [{
      name: "Masks",
      proficiency: 1
    }, {
      name: "Post-processing",
      proficiency: 0.9
    }, {
      name: "Perspective manipulation",
      proficiency: 0.9
    }]
  }, {
    name: "Photoshop",
    description: "raster graphics editor",
    proficiency: 0.5,
    subSkillList: []
  }],
  mathTechnologies: [{
    name: "Mathematica",
    description: "mathematical computation program",
    proficiency: 0.8,
    subSkillList: [{
      name: "Graphics and Plots",
      proficiency: 0.8
    }, {
      name: "Loops",
      proficiency: 1
    }]
  }, {
    name: "LaTeX",
    description: "document preparation system",
    proficiency: 0.4,
    subSkillList: []
  }]
};
/* harmony default export */ var constants_skills = (skills_skills);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/App.js

 // components



 // styles


 // constants




var App_App = function App() {
  var skillKeys = Object.keys(constants_skills);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Peter Fortier"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Peter Fortier's personal portfolio webpage"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    href: "./favicon.ico"
  })), /*#__PURE__*/external_react_default.a.createElement(TopNavbar, null), /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "hero"
  }), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Projects"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-cards-container"
  }, constants_projects.map(function (project) {
    var projectDate = new Date(project.date);
    var year = projectDate.getFullYear();
    var month = "".concat(projectDate.getMonth() + 1 < 10 ? "0".concat(projectDate.getMonth() + 1) : projectDate.getMonth() + 1); // add one because .getMonth starts counting months at 0 for Jan

    var day = "".concat(projectDate.getDate() < 10 ? "0".concat(projectDate.getDate()) : projectDate.getDate());
    return /*#__PURE__*/external_react_default.a.createElement(components_ProjectCard, {
      project: project,
      year: year,
      month: month,
      day: day,
      key: project.title
    });
  }))), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "skills"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Skills"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "skills-container"
  }, skillKeys.map(function (skillGroup) {
    var resultPt1 = skillGroup.replace(/([A-Z])/g, " $1");
    var resultPt2 = resultPt1.charAt(0).toUpperCase() + resultPt1.slice(1);
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "skill-group",
      key: skillGroup
    }, /*#__PURE__*/external_react_default.a.createElement("h3", null, resultPt2), /*#__PURE__*/external_react_default.a.createElement(components_SkillList, {
      skills: constants_skills,
      skillGroup: skillGroup
    }));
  }))), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "certificates"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Certificates")), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Contact"))), /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "copywrite"
  }, "\xA92021 All Rights Reserved")));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(2);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/project-thumb.8f10ca46.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\artifacts\\__react_static_root__\\node_modules\\react-static\\lib\\browser\\components\\Default404");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMyAxMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC03MzUuODg0LC0xMzEwLjYxKSI+CiAgICAgICAgPHBhdGggaWQ9ImZvcnRpZXJwbUxvZ28iIGQ9Ik03NjAuNjMzLDEzMTAuNjFMODM4LjQxNCwxMzg4LjM5TDc3OC4zMSwxNDQ4LjQ5TDc3MS4yMzksMTQ0MS40Mkw3ODcuNjMxLDE0MjUuMDNMNzg2LjA1NCwxNDI0Ljk0Qzc3OS42ODEsMTQyNC4zNSA3NzMuODYsMTQyMS40MSA3NjguNTg5LDE0MTYuMTRDNzYzLjI4MiwxNDEwLjg0IDc2MC4zMTIsMTQwNS4wNSA3NTkuNjgsMTM5OC43OUw3NTkuNTUyLDEzOTYuNTRMNzQyLjk1NSwxNDEzLjE0TDczNS44ODQsMTQwNi4wN0w3NzQuNzc1LDEzNjcuMTdMNzM5LjQxOSwxMzMxLjgyTDc0Ni40OSwxMzI0Ljc1TDc4MS44NDYsMTM2MC4xTDc4OC45MTcsMTM1My4wM0w3NTMuNTYyLDEzMTcuNjhMNzYwLjYzMywxMzEwLjYxWk03ODEuODQ2LDEzNzQuMjVMNzc3Ljk2NSwxMzc4LjEzQzc3NS4wMSwxMzgxLjQ2IDc3My4wMTMsMTM4NC4zNiA3NzEuOTUxLDEzODYuNzlDNzcwLjQxNCwxMzkwLjMxIDc3MC4zMzYsMTM5My44NSA3NzAuODA0LDEzOTcuNTZDNzcxLjI2MiwxNDAxLjE5IDc3Mi43ODUsMTQwNC43OSA3NzYuMzQsMTQwOC4zNEM3NzkuNTc3LDE0MTEuNTcgNzgyLjk0NywxNDEzLjAxIDc4Ni43MjgsMTQxMy42NkM3OTAuNDE1LDE0MTQuMyA3OTMuODY5LDE0MTQuMTEgNzk3LjE3MSwxNDEyLjY4QzgwMC40NiwxNDExLjI2IDgxMC4xMywxNDAyLjUzIDgxMC4xMywxNDAyLjUzTDc4MS44NDYsMTM3NC4yNVpNNzk1Ljk4OCwxMzYwLjFMNzg4LjkxNywxMzY3LjE3TDgxNy4yMDEsMTM5NS40Nkw4MjQuMjcyLDEzODguMzlDODI0LjI3MiwxMzg4LjM5IDc5NS45ODgsMTM2MC4xIDc5NS45ODgsMTM2MC4xWiIvPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(26);
module.exports = __webpack_require__(33);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(25)["default"];

var _require = __webpack_require__(9),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(9),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(27),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 16, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 2,
	"./": 2,
	"./index": 2,
	"./index.js": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 30;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(5);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(13);

var _interopRequireWildcard = __webpack_require__(14);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(34);

var _Suspense = _interopRequireDefault(__webpack_require__(35));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(38)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(14);

var _interopRequireDefault = __webpack_require__(13);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(36));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(37));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);

// Module
exports.push([module.i, "*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  width: 100%;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na, button, input[type=\"submit\"] {\n  cursor: pointer;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style-type: none;\n}\n\naddress {\n  font-style: normal;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\n", ""]);



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// Module
exports.push([module.i, ".App {\r\n  min-height: 100vh;\r\n  padding: 0 0.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.skill-clickable {\r\n  cursor: pointer;\r\n}\r\n.skill-desc, .subskill-name {\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n}\r\n.prof-guage-prim {\r\n  width: 16rem;\r\n}\r\n.prof-guage-sec {\r\n  width: 12rem;\r\n}", ""]);



/***/ })
/******/ ]);
});