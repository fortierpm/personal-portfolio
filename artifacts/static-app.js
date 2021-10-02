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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/author.fb64dfe1.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/project-thumb.8f10ca46.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(11);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(35)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(10);

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

var _requireUniversalModule = __webpack_require__(34);

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

var _reportChunks = __webpack_require__(36);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(17);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(16);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(11);

var _helpers = __webpack_require__(37);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(24);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/fortierpm-logo.svg
var fortierpm_logo = __webpack_require__(25);
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
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-title"
  }, "Peter Fortier"), /*#__PURE__*/external_react_default.a.createElement("nav", {
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
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/idos.css
var idos = __webpack_require__(45);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/IDos.js



var IDos_idos = ["Web Design", "JavaScript", "React", "Software Development", "Python", "Graphics", "SVGs", "Prototyping"];
var idosLength = IDos_idos.length;
var index = 3;
var transIndex = 1; // value from 0-2 over var life

var IDos_IDos = function IDos() {
  var _useState = Object(external_react_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      animCatch = _useState2[0],
      setAnimCatch = _useState2[1];

  var _useState3 = Object(external_react_["useState"])("JavaScript"),
      _useState4 = slicedToArray_default()(_useState3, 2),
      iDo1 = _useState4[0],
      setIDo1 = _useState4[1]; // correspond with position 0


  var _useState5 = Object(external_react_["useState"])("Web Design"),
      _useState6 = slicedToArray_default()(_useState5, 2),
      iDo2 = _useState6[0],
      setIDo2 = _useState6[1]; // correspond with position 1


  var _useState7 = Object(external_react_["useState"])("React"),
      _useState8 = slicedToArray_default()(_useState7, 2),
      iDo3 = _useState8[0],
      setIDo3 = _useState8[1]; // correspond with last position


  var _useState9 = Object(external_react_["useState"])("down"),
      _useState10 = slicedToArray_default()(_useState9, 2),
      prepDir = _useState10[0],
      setPrepDir = _useState10[1];

  var _useState11 = Object(external_react_["useState"])("left"),
      _useState12 = slicedToArray_default()(_useState11, 2),
      activeDir = _useState12[0],
      setActiveDir = _useState12[1];

  var elemIDo1 = Object(external_react_["useRef"])(null);
  var elemIDo2 = Object(external_react_["useRef"])(null);
  var elemIDo3 = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function () {
    var repeat = setInterval(function () {
      setActiveDir(prepDir);
      setPrepDir(function () {
        var rand = Math.floor(Math.random() * 4 + 1);
        var result = "";

        switch (rand) {
          case 1:
            result = "down";
            break;

          case 2:
            result = "up";
            break;

          case 3:
            result = "right";
            break;

          default:
            result = "left";
            break;
        }

        return result;
      });

      if (index === idosLength) {
        index = 0;
      }

      switch (transIndex) {
        case 0:
          elemIDo1.current.style.animationName = "".concat(activeDir, "-1");
          elemIDo2.current.style.animationName = "".concat(activeDir, "-2");
          elemIDo3.current.style.animationName = "".concat(prepDir, "-prep");
          setIDo3(IDos_idos[index++]);
          transIndex++;
          break;

        case 1:
          elemIDo1.current.style.animationName = "".concat(activeDir, "-2");
          elemIDo2.current.style.animationName = "".concat(prepDir, "-prep");
          elemIDo3.current.style.animationName = "".concat(activeDir, "-1");
          setIDo2(IDos_idos[index++]);
          transIndex++;
          break;

        case 2:
          elemIDo1.current.style.animationName = "".concat(prepDir, "-prep");
          elemIDo2.current.style.animationName = "".concat(activeDir, "-1");
          elemIDo3.current.style.animationName = "".concat(activeDir, "-2");
          setIDo1(IDos_idos[index++]);
          transIndex = 0;
          break;
      }

      setAnimCatch(!animCatch);
    }, 3000);
    return function () {
      return clearInterval(repeat);
    };
  }, [animCatch]);
  return /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "subheader"
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "subheader-text"
  }, "I do "), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "subheader-text idobox"
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "screen-readable-label"
  }, IDos_idos.join(", ")), " ", /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "ido-placeholder",
    "aria-hidden": "true"
  }, "Web Design"), /*#__PURE__*/external_react_default.a.createElement("span", {
    ref: elemIDo1,
    className: "ido1 ido",
    "aria-hidden": "true"
  }, iDo1), /*#__PURE__*/external_react_default.a.createElement("span", {
    ref: elemIDo2,
    className: "ido2 ido",
    "aria-hidden": "true"
  }, iDo2), /*#__PURE__*/external_react_default.a.createElement("span", {
    ref: elemIDo3,
    className: "ido3 ido",
    "aria-hidden": "true"
  }, iDo3)));
};

/* harmony default export */ var components_IDos = (IDos_IDos);
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/triangle.svg
var triangle = __webpack_require__(26);
var triangle_default = /*#__PURE__*/__webpack_require__.n(triangle);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/CategorySelector.js




var CategorySelector_CategorySelector = function CategorySelector(_ref) {
  var projectGroupKeys = _ref.projectGroupKeys,
      setCategory = _ref.setCategory,
      category = _ref.category;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var handleCategoryDropdown = function handleCategoryDropdown(e) {
    setDropdownOpen(!dropdownOpen);
  };

  var handleCategoryChange = function handleCategoryChange(projectGroup) {
    setCategory("".concat(projectGroup));
    setDropdownOpen(false);
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-category-select"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "category-desc"
  }, "Category:"), /*#__PURE__*/external_react_default.a.createElement("div", {
    onClick: handleCategoryDropdown,
    className: "category-select"
  }, /*#__PURE__*/external_react_default.a.createElement("h3", {
    className: "active-category"
  }, category), /*#__PURE__*/external_react_default.a.createElement("img", {
    className: dropdownOpen ? "rotate-90" : "",
    src: triangle_default.a,
    alt: ""
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "category-dropdown ".concat(dropdownOpen ? "dropdown-open" : "")
  }, projectGroupKeys.map(function (projectGroup) {
    if (projectGroup === category) {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "category-option category-option-active",
        key: projectGroup
      }, projectGroup);
    }

    return /*#__PURE__*/external_react_default.a.createElement("div", {
      onClick: function onClick() {
        return handleCategoryChange(projectGroup);
      },
      className: "category-option",
      key: projectGroup
    }, projectGroup);
  }))));
};

/* harmony default export */ var components_CategorySelector = (CategorySelector_CategorySelector);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProjectCard.js


var ProjectCard_ProjectCard = function ProjectCard(_ref) {
  var project = _ref.project,
      year = _ref.year,
      month = _ref.month,
      day = _ref.day;
  var singleAuthor = project.authors.length === 1;
  return /*#__PURE__*/external_react_default.a.createElement("article", {
    className: "project-card"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "card-date"
  }, /*#__PURE__*/external_react_default.a.createElement("time", {
    dateTime: "".concat(year, "-").concat(month, "-").concat(day)
  }, project.date)), /*#__PURE__*/external_react_default.a.createElement("h3", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#"
  }, project.title))), /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "card-thumb",
    src: project.thumb,
    alt: "Project thumbnail"
  }), /*#__PURE__*/external_react_default.a.createElement("address", {
    className: "card-authorship ".concat(singleAuthor ? "single" : "")
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "author1-avatar",
    rel: "author",
    href: project.authors[0][2]
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "avatar-img",
    src: project.authors[0][1],
    alt: ""
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "author-list"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "author-prefix"
  }, singleAuthor ? "Designer" : "Designers"), project.authors.map(function (author) {
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProjectCardStack.js



var ProjectCardStack_ProjectCardStack = function ProjectCardStack(_ref) {
  var projects = _ref.projects,
      projectGroup = _ref.projectGroup;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "card-stack"
  }, projects[projectGroup].map(function (project) {
    var projectDate = new Date(project.date);
    var year = "".concat(projectDate.getFullYear());
    var month = "".concat(projectDate.getMonth() + 1 < 10 ? "0".concat(projectDate.getMonth() + 1) : projectDate.getMonth() + 1); // add one because .getMonth starts counting months at 0 for Jan

    var day = "".concat(projectDate.getDate() < 10 ? "0".concat(projectDate.getDate()) : projectDate.getDate());
    return /*#__PURE__*/external_react_default.a.createElement(components_ProjectCard, {
      project: project,
      year: year,
      month: month,
      day: day,
      key: project.title
    });
  }));
};

/* harmony default export */ var components_ProjectCardStack = (ProjectCardStack_ProjectCardStack);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProfBar.js


var ProfBar_ProfBar = function ProfBar(_ref) {
  var _ref$tier = _ref.tier,
      tier = _ref$tier === void 0 ? "primary" : _ref$tier,
      proficiency = _ref.proficiency;
  var level = "";

  if (proficiency === 1) {
    level = "Expert";
  } else if (proficiency >= 0.9) {
    level = "Near Expert";
  } else if (proficiency >= 0.7) {
    level = "Advanced";
  } else if (proficiency >= 0.5) {
    level = "Proficient";
  } else if (proficiency >= 0.4) {
    level = "Competent";
  } else if (proficiency >= 0.1) {
    level = "Beginner";
  } else if (proficiency >= 0) {
    level = "Unskilled";
  } else {
    level = "Not Specified";
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
      className: "subskill",
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
        setOpenState = _useState2[1]; // const handleFocus = (e) => {
    //   setOpenState(true);
    // }
    // const handleBlur = (e) => {
    //   setOpenState(false);
    // }


    var handleClick = function handleClick(e) {
      setOpenState(!openState);
    };

    var clickability = skill.subSkillList.length > 0;
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      onClick: handleClick,
      className: "skill ".concat(clickability ? "skill-clickable" : ""),
      key: skill.name
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "skill-main"
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/CertificateList.js


var CertificateList_CertificateList = function CertificateList(_ref) {
  var certificates = _ref.certificates;
  return /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "certificate-list"
  }, certificates.map(function (certificate) {
    var issuedDate = new Date(certificate.dateIssued);
    var issuedYear = "".concat(issuedDate.getFullYear());
    var issuedMonth = "".concat(issuedDate.getMonth() + 1 < 10 ? "0".concat(issuedDate.getMonth() + 1) : issuedDate.getMonth() + 1); // add one because .getMonth starts counting months at 0 for Jan

    var expiresDate, expiresYear, expiresMonth;

    if (certificate.expires) {
      expiresDate = new Date(certificate.expires);
      expiresYear = "".concat(expiresDate.getFullYear());
      expiresMonth = "".concat(expiresDate.getMonth() + 1 < 10 ? "0".concat(expiresDate.getMonth() + 1) : expiresDate.getMonth() + 1); // add one because .getMonth starts counting months at 0 for Jan
    }

    return /*#__PURE__*/external_react_default.a.createElement("article", {
      className: "certificate",
      key: certificate.title
    }, /*#__PURE__*/external_react_default.a.createElement("h3", {
      className: "certificate-title"
    }, certificate.title), /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "certificate-issuer"
    }, /*#__PURE__*/external_react_default.a.createElement("a", {
      href: certificate.orgLink,
      target: "_blank"
    }, certificate.issuingOrg)), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "certificate-dates"
    }, /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "certificate-dateissued"
    }, /*#__PURE__*/external_react_default.a.createElement("time", {
      dateTime: "".concat(issuedYear, "-").concat(issuedMonth)
    }, "Issued ", certificate.dateIssued)), /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "certificate-dateexpires"
    }, certificate.expires ? /*#__PURE__*/external_react_default.a.createElement("time", {
      dateTime: "".concat(issuedYear, "-").concat(issuedMonth)
    }, "Expires ", certificate.expires) : "No Expiration Date")), certificate.credentialID ? /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "certificate-id"
    }, "Credential ID: ", /*#__PURE__*/external_react_default.a.createElement("span", {
      "aria-label": "Case-sensitive certificate ID."
    }, certificate.credentialID)) : "", /*#__PURE__*/external_react_default.a.createElement("p", {
      className: "certificate-link"
    }, /*#__PURE__*/external_react_default.a.createElement("a", {
      href: certificate.credentialURL,
      target: "_blank"
    }, "See certificate")));
  }));
};

/* harmony default export */ var components_CertificateList = (CertificateList_CertificateList);
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/global.css
var global = __webpack_require__(46);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/app.css
var app = __webpack_require__(47);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(8);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(27);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/project-thumb.jpg
var project_thumb = __webpack_require__(4);
var project_thumb_default = /*#__PURE__*/__webpack_require__.n(project_thumb);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/author.jpg
var img_author = __webpack_require__(2);
var author_default = /*#__PURE__*/__webpack_require__.n(img_author);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/projects.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var projectsArrange = {
  "Featured": [],
  "React": [{
    title: "Project 1",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 2
  }, {
    title: "Project 2",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 1
  }],
  "Javascript": [{
    title: "Project 3",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 4
  }],
  "CSS": [{
    title: "Project 4",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 3
  }],
  "Python": [{
    title: "Project 5",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 5
  }],
  "Vector Graphics": [{
    title: "Project 6",
    date: "Sep 17, 2021",
    thumb: project_thumb_default.a,
    authors: [["Peter Fortier", author_default.a, "https://google.com"], ["Jacob Merrick", author_default.a, "https://google.com"]],
    tags: [["HTML", "#skills"], ["CSS", "#skills"], ["JavaScript", "#skills"]],
    featured: 6
  }]
}; //const projectGroupKeys = Object.keys(projectsArrange);

var handleProjects = function handleProjects(projectsObject) {
  var projectGroupKeys = Object.keys(projectsObject);

  for (var i = 0; i < projectGroupKeys.length; i++) {
    var projectGroup = projectGroupKeys[i];

    for (var j = 0; j < projectsObject[projectGroup].length; j++) {
      var project = projectsObject[projectGroup][j]; // console.log("project:", project);

      if (project.featured) {
        projectsObject["Featured"].splice(project.featured - 1, 0, _objectSpread({}, project));
      }
    }
  } // console.log("projects:", projectsObject);


  return projectsObject;
};

var projects_projects = handleProjects(projectsArrange);
/* harmony default export */ var constants_projects = (projects_projects);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/skills.js
var skills_skills = {
  "Frontend": [{
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
      name: "Regex",
      proficiency: 0.6
    }, {
      name: "TypeScript",
      proficiency: 0.7
    }, {
      name: "jQuery",
      proficiency: 0.5
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
    description: "JavaScript library for 3D visuals",
    proficiency: 0.6,
    subSkillList: []
  }, {
    name: "GSAP",
    description: "JavaScript library for animations",
    proficiency: 0.5,
    subSkillList: []
  }, {
    name: "D3.js",
    description: "JavaScript library for interative data graphics",
    proficiency: 0.4,
    subSkillList: []
  }],
  "Backend": [{
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
    description: "OOP language",
    proficiency: 0.6,
    subSkillList: []
  }, {
    name: "Firebase",
    description: "Google-backed application development software",
    proficiency: 0.3,
    subSkillList: []
  }],
  "Integrated Development Environments": [{
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
      name: "Extensions, .json's, customization",
      proficiency: 1
    }]
  }, {
    name: "Atom",
    description: "IDE",
    proficiency: 0.7,
    subSkillList: []
  }],
  "Version Control": [{
    name: "GitHub",
    description: "web-hosted Git repository manager",
    proficiency: 0.8,
    subSkillList: []
  }, {
    name: "GitLab",
    description: "web-hosted Git repository manager",
    proficiency: 0.3,
    subSkillList: []
  }, {
    name: "Git",
    description: "version control software",
    proficiency: 0.6,
    subSkillList: []
  }],
  "Web Hosting": [{
    name: "Github Pages",
    description: "static site hosting service for GitHub repos",
    proficiency: 0.8,
    subSkillList: []
  }, {
    name: "Netlify",
    description: "hosting and serverless backend services for web applications",
    proficiency: 0.8,
    subSkillList: []
  }],
  "Prototyping": [{
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
  "Image Editing": [{
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
  "Math Technologies": [{
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/certificates.js
var certificates_certificates = [{
  title: "Responsive Web Design",
  issuingOrg: "freeCodeCamp",
  orgLink: "https://freecodecamp.org",
  dateIssued: "November 2020",
  // all dates need to be interpretable by new Date()
  expires: false,
  // if certificate expires use date string here
  credentialID: "placeholder",
  credentialURL: "https://freecodecamp.org/certification/fortierpm/responsive-web-design"
}];
/* harmony default export */ var constants_certificates = (certificates_certificates);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/App.js


 // components






 // styles


 // icons



 // constants





var App_App = function App() {
  var projectGroupKeys = Object.keys(constants_projects);
  var skillGroupKeys = Object.keys(constants_skills);

  var _useState = Object(external_react_["useState"])("Featured"),
      _useState2 = slicedToArray_default()(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Peter Fortier - Web Portfolio"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Peter Fortier's personal portfolio webpage"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "Peter Fortier, portfolio, web designer"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "page-topic",
    content: "Peter Fortier"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "page-type",
    content: "Portfolio"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "audience",
    content: "Everyone"
  }), " ", /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "copyright",
    content: "Peter Fortier"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    href: "favicon.ico"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700&display=swap",
    rel: "stylesheet"
  })), /*#__PURE__*/external_react_default.a.createElement(TopNavbar, null), /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "hero"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "hero-header"
  }, "Hey!", /*#__PURE__*/external_react_default.a.createElement("br", null), "I'm Peter."), /*#__PURE__*/external_react_default.a.createElement(components_IDos, null)), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "projects",
    className: "main-section"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Projects"), /*#__PURE__*/external_react_default.a.createElement(components_CategorySelector, {
    projectGroupKeys: projectGroupKeys,
    setCategory: setCategory,
    category: category
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "project-stack-container"
  }, /*#__PURE__*/external_react_default.a.createElement(components_ProjectCardStack, {
    projects: constants_projects,
    projectGroup: category
  }))), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "skills",
    className: "main-section"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Skills"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "skills-container"
  }, skillGroupKeys.map(function (skillGroup) {
    return /*#__PURE__*/external_react_default.a.createElement("section", {
      className: "skill-group",
      key: skillGroup
    }, /*#__PURE__*/external_react_default.a.createElement("h3", null, skillGroup), /*#__PURE__*/external_react_default.a.createElement(components_SkillList, {
      skills: constants_skills,
      skillGroup: skillGroup
    }));
  }))), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "certificates",
    className: "main-section"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Certificates"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "certificates-container"
  }, /*#__PURE__*/external_react_default.a.createElement(components_CertificateList, {
    certificates: constants_certificates
  }))), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "contact",
    className: "main-section"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Contact"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "contact-container"
  }, /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "contact-info"
  }, /*#__PURE__*/external_react_default.a.createElement("h3", null, "Info"), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "info-list"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:fortierpm@gmail.com"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_solid_svg_icons_["faPaperPlane"]
  }), "fortierpm@gmail.com")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:fortie1@stolaf.edu"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_solid_svg_icons_["faUniversity"]
  }), "fortie1@stolaf.edu")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "sms:+16128038780&body=Hi%20I%27m%20Peter!%20Send%20me%20a%20message."
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_solid_svg_icons_["faSms"]
  }), "(612) 803-8780")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.linkedin.com/in/peter-fortier-71359221a/",
    rel: "external noopener"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_brands_svg_icons_["faLinkedin"]
  }), "LinkedIn")))), /*#__PURE__*/external_react_default.a.createElement("section", {
    className: "contact-socials"
  }, /*#__PURE__*/external_react_default.a.createElement("h3", null, "Socials"), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "socials-list"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "socials-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/petrfortier/",
    rel: "external noopener"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_brands_svg_icons_["faInstagram"]
  }), "Instagram")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "socials-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100010683600528",
    rel: "external noopener"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_brands_svg_icons_["faFacebook"]
  }), "Facebook")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "socials-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://twitter.com/fortier_pm",
    rel: "external noopener"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_brands_svg_icons_["faTwitter"]
  }), "Twitter"))))))), /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 2021 Peter Fortier. All Rights Reserved.")));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(10);

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

var _requireById = __webpack_require__(5);

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\artifacts\\__react_static_root__\\node_modules\\react-static\\lib\\browser\\components\\Default404");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMyAxMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGw6I2VlZWVlZjtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNzM1Ljg4NCwtMTMxMC42MSkiPgogICAgICAgIDxwYXRoIGlkPSJmb3J0aWVycG1Mb2dvIiBkPSJNNzYwLjYzMywxMzEwLjYxTDgzOC40MTQsMTM4OC4zOUw3NzguMzEsMTQ0OC40OUw3NzEuMjM5LDE0NDEuNDJMNzg3LjYzMSwxNDI1LjAzTDc4Ni4wNTQsMTQyNC45NEM3NzkuNjgxLDE0MjQuMzUgNzczLjg2LDE0MjEuNDEgNzY4LjU4OSwxNDE2LjE0Qzc2My4yODIsMTQxMC44NCA3NjAuMzEyLDE0MDUuMDUgNzU5LjY4LDEzOTguNzlMNzU5LjU1MiwxMzk2LjU0TDc0Mi45NTUsMTQxMy4xNEw3MzUuODg0LDE0MDYuMDdMNzc0Ljc3NSwxMzY3LjE3TDczOS40MTksMTMzMS44Mkw3NDYuNDksMTMyNC43NUw3ODEuODQ2LDEzNjAuMUw3ODguOTE3LDEzNTMuMDNMNzUzLjU2MiwxMzE3LjY4TDc2MC42MzMsMTMxMC42MVpNNzgxLjg0NiwxMzc0LjI1TDc3Ny45NjUsMTM3OC4xM0M3NzUuMDEsMTM4MS40NiA3NzMuMDEzLDEzODQuMzYgNzcxLjk1MSwxMzg2Ljc5Qzc3MC40MTQsMTM5MC4zMSA3NzAuMzM2LDEzOTMuODUgNzcwLjgwNCwxMzk3LjU2Qzc3MS4yNjIsMTQwMS4xOSA3NzIuNzg1LDE0MDQuNzkgNzc2LjM0LDE0MDguMzRDNzc5LjU3NywxNDExLjU3IDc4Mi45NDcsMTQxMy4wMSA3ODYuNzI4LDE0MTMuNjZDNzkwLjQxNSwxNDE0LjMgNzkzLjg2OSwxNDE0LjExIDc5Ny4xNzEsMTQxMi42OEM4MDAuNDYsMTQxMS4yNiA4MTAuMTMsMTQwMi41MyA4MTAuMTMsMTQwMi41M0w3ODEuODQ2LDEzNzQuMjVaTTc5NS45ODgsMTM2MC4xTDc4OC45MTcsMTM2Ny4xN0w4MTcuMjAxLDEzOTUuNDZMODI0LjI3MiwxMzg4LjM5QzgyNC4yNzIsMTM4OC4zOSA3OTUuOTg4LDEzNjAuMSA3OTUuOTg4LDEzNjAuMVoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9IiNlZWVlZWYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDEwMFYwSDEwMFYxNi42NjY3SDE2LjY2NjdWMTAwSDBaIiAvPgo8L3N2Zz4K"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(31);
module.exports = __webpack_require__(38);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(30)["default"];

var _require = __webpack_require__(14),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(14),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(32),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
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
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 20, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
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
/* 33 */
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
/* 34 */
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

var _utils = __webpack_require__(11);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 5,
	"./": 5,
	"./index": 5,
	"./index.js": 5
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
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(10);

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

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(16);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(17);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(18);

var _interopRequireWildcard = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(39);

var _Suspense = _interopRequireDefault(__webpack_require__(40));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(43)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(19);

var _interopRequireDefault = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(41));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(42));

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
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(44)(module)))

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ".ido1 {\n  -webkit-animation: down-1 3s ease-in-out 1 forwards;\n          animation: down-1 3s ease-in-out 1 forwards;\n}\n\n.ido2 {\n  -webkit-animation: down-2 3s ease-in-out 1 forwards;\n          animation: down-2 3s ease-in-out 1 forwards;\n}\n\n.ido3 {\n  -webkit-animation: 3s ease-in-out 1 forwards;\n          animation: 3s ease-in-out 1 forwards;\n}\n\n@-webkit-keyframes down-1 {\n  from {\n    opacity: 0;\n    transform: translate(0%, 100%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes down-1 {\n  from {\n    opacity: 0;\n    transform: translate(0%, 100%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes down-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(0%, -100%);\n  }\n}\n\n@keyframes down-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(0%, -100%);\n  }\n}\n\n@-webkit-keyframes down-prep {\n  to {\n    transform: translate(0%, 100%);\n  }\n}\n\n@keyframes down-prep {\n  to {\n    transform: translate(0%, 100%);\n  }\n}\n\n@-webkit-keyframes up-1 {\n  from {\n    opacity: 0;\n    transform: translate(0%, -100%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes up-1 {\n  from {\n    opacity: 0;\n    transform: translate(0%, -100%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes up-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(0%, 100%);\n  }\n}\n\n@keyframes up-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(0%, 100%);\n  }\n}\n\n@-webkit-keyframes up-prep {\n  to {\n    transform: translate(0%, -100%);\n  }\n}\n\n@keyframes up-prep {\n  to {\n    transform: translate(0%, -100%);\n  }\n}\n\n@-webkit-keyframes right-1 {\n  from {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes right-1 {\n  from {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes right-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n}\n\n@keyframes right-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n}\n\n@-webkit-keyframes right-prep {\n  to {\n    transform: translate(-100%, 0%);\n  }\n}\n\n@keyframes right-prep {\n  to {\n    transform: translate(-100%, 0%);\n  }\n}\n\n@-webkit-keyframes left-1 {\n  from {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes left-1 {\n  from {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes left-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n}\n\n@keyframes left-2 {\n  from {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  to {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n}\n\n@-webkit-keyframes left-prep {\n  to {\n    transform: translate(100%, 0%);\n  }\n}\n\n@keyframes left-prep {\n  to {\n    transform: translate(100%, 0%);\n  }\n}", ""]);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, "\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  width: 100%;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na, button, input[type=\"submit\"] {\n  cursor: pointer;\n}\n\na {\n  /* text-decoration: none; */\n  color: inherit;\n}\n\nli {\n  list-style-type: none;\n}\n\naddress {\n  font-style: normal;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\n", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// Module
exports.push([module.i, ":root {\n  --bg-prim: #17141d;\n  --col-text-titles: #eeeeef;\n  --col-text-gen: #eeeeee;\n  --col-text-sup: #7a7a8c;\n  --col-detail-light: #646374;\n  --col-detail-mid: #4d4b5b;\n  --col-detail-dark: #373442;\n  --col-detail-distant: #201c29;\n  --fontsize-normal: 1rem;\n  --fontsize-title: 3rem;\n  --fontsize-secondary: 1.5rem;\n  --fontsize-detail: 0.8rem;\n  --border-prim1: 0.05rem solid var(--col-text-sup);\n  --border-sec1: 0.1rem solid var(--col-detail-distant);\n  --border-sec2: 0.2rem solid var(--col-detail-distant);\n  --border-invis: 0.1rem solid #0000;\n  --shadow-nodir:\r\n    0px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    0px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    0px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    0px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    0px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    0px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-dir:\r\n    1.4px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    3.3px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    6.3px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    11.2px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    20.9px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    50px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-card:\r\n    -0.5px 0.8px 4.4px rgba(0, 0, 0, 0.129),\r\n    -1.1px 2px 10.6px rgba(0, 0, 0, 0.186),\r\n    -2.1px 3.8px 20px rgba(0, 0, 0, 0.23),\r\n    -3.8px 6.7px 35.7px rgba(0, 0, 0, 0.274),\r\n    -7.1px 12.5px 66.8px rgba(0, 0, 0, 0.331),\r\n    -17px 30px 160px rgba(0, 0, 0, 0.46);\n  --shadow-certificate:\r\n    0px 0px 2.8px rgba(0, 0, 0, 0.051),\r\n    0px 0px 6.7px rgba(0, 0, 0, 0.073),\r\n    0px 0px 12.5px rgba(0, 0, 0, 0.09),\r\n    0px 0px 22.3px rgba(0, 0, 0, 0.107),\r\n    0px 0px 41.8px rgba(0, 0, 0, 0.129),\r\n    0px 0px 100px rgba(0, 0, 0, 0.18);\n  --logo-width: 4rem;\n  --logo-pad-left: 3rem;\n  --logo-pad-right: 2rem;\n  --logo-pad-total: calc(var(--logo-pad-left) + var(--logo-pad-right));\n  --add-margin-left: 2rem;\n  --main-margin-left: calc(var(--logo-pad-total) + var(--logo-width) + var(--add-margin-left));\n  --main-margin-right: 5rem;\n}\n\nbody {\n  background-color: var(--bg-prim);\n  color: var(--col-text-gen);\n}\n\nh1, h2, h3, h4 {\n  color: var(--col-text-titles);\n}\n\n.App {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ------------ NAV STYLES ------------- */\nheader.top-navbar {\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--bg-prim);\n  box-shadow: var(--shadow-nodir);\n  z-index: 10;\n  /* should be highest element */\n}\n\n.header-logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem 2rem 1rem 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--bg-prim);\n  border-bottom-right-radius: 2rem;\n  box-shadow: var(--shadow-dir);\n}\n\n.logo-image {\n  width: var(--logo-width);\n  height: auto;\n}\n\n.header-title {\n  margin-left: var(--main-margin-left);\n  font-family: \"Roboto Mono\";\n  font-size: 2rem;\n  font-weight: 100;\n  color: var(--col-text-sup);\n}\n\n.navbar {\n  display: flex;\n  min-width: 14rem;\n  width: 40%;\n  margin: 1.5ch 0;\n  margin-right: 5%;\n  font-weight: 200;\n}\n\n.nav-list {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: var(--col-text-gen);\n  transition: all 0.1s ease;\n}\n\n.nav-link:hover {\n  color: var(--col-text-sup);\n}\n\n@media screen and (max-width: 600px) {\n  :root {\n    --logo-pad-left: 1.5rem;\n    --logo-pad-right: 1rem;\n    --logo-width: 3rem;\n    --add-margin-left: 0.5rem;\n  }\n  header.top-navbar {\n    flex-direction: column;\n  }\n  .header-logo {\n    padding-left: var(--logo-pad-left);\n    padding-right: var(--logo-pad-right);\n    border-bottom-right-radius: 1.5rem;\n  }\n  .logo-image {\n    width: var(--logo-width);\n  }\n  .header-title {\n    margin-left: calc(var(--logo-width) + var(--logo-pad-total));\n  }\n  .navbar {\n    margin-left: calc(var(--logo-width) + var(--logo-pad-total));\n  }\n}\n\n/* ------ GENERAL MAIN STYLES ------- */\nmain {\n  margin-left: var(--main-margin-left);\n  margin-right: var(--main-margin-right);\n  width: calc(100% - var(--main-margin-left) - var(--main-margin-right));\n}\n\n.main-section {\n  margin-bottom: 3rem;\n}\n\n.main-section h2 {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  display: block;\n  font-size: var(--fontsize-title);\n  margin-bottom: 0.5rem;\n}\n\n.main-section h2::before {\n  content: \"<\";\n  position: absolute;\n  top: 0;\n  left: -1em;\n  color: var(--col-detail-distant);\n}\n\n.main-section h2::after {\n  content: \" />\";\n  position: absolute;\n  top: 0;\n  right: -2em;\n  color: var(--col-detail-distant);\n}\n\n/* --------- HERO STYLES ---------- */\n#hero {\n  min-height: 90vh;\n}\n\n.subheader {\n  display: block;\n}\n\n.subheader-text {\n  display: block;\n}\n\n.idobox {\n  position: relative;\n  overflow: hidden;\n  display: block;\n}\n\n.screen-readable-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #0000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: block;\n  font-size: 1px;\n}\n\n.ido-placeholder {\n  color: #0000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: block;\n}\n\n.ido {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.ido::before {\n  content: \"/\";\n  color: var(--col-detail-mid);\n}\n\n.ido::after {\n  content: \"/\";\n  color: var(--col-detail-mid);\n}\n\n/* --------- PROJECTS STYLES --------- */\n#projects {\n  margin-bottom: 5rem;\n}\n\n.project-category-select {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.category-desc {\n  margin-right: 1rem;\n}\n\n.category-select {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border: var(--border-prim1);\n  border-radius: 0.75rem;\n  background: var(--bg-prim);\n  position: relative;\n}\n\n.category-select img {\n  margin: 0 0.8rem;\n  width: 0.6rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s ease;\n}\n\n.category-select img.rotate-90 {\n  transform: rotate(-90deg);\n}\n\n.active-category {\n  padding: 0.3rem 0.8rem;\n  position: relative;\n}\n\n.active-category::after {\n  content: \"\";\n  position: absolute;\n  top: -1%;\n  right: 0;\n  width: 0.05rem;\n  height: 102%;\n  transform: translateX(-50%);\n  background: var(--col-text-sup);\n}\n\n.category-dropdown {\n  position: absolute;\n  top: 110%;\n  left: 0;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  background: var(--bg-prim);\n  transition: all 0.2s ease;\n  z-index: 1;\n  border: var(--border-prim1);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n\n.category-dropdown.dropdown-open {\n  opacity: 1;\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.category-option {\n  padding: 0.3rem 0.8rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.category-option:hover {\n  background: var(--col-detail-mid);\n}\n\n.category-option-active {\n  color: var(--col-text-sup);\n  cursor: default;\n}\n\n.category-option-active:hover {\n  background: var(--bg-prim);\n}\n\n.project-stack-container {\n  margin-left: calc(0rem - var(--main-margin-left));\n  width: calc(100% + var(--main-margin-left) + var(--main-margin-right));\n}\n\n.card-stack {\n  display: flex;\n  align-items: center;\n  padding: 2rem var(--main-margin-right) 2rem var(--main-margin-left);\n  overflow-x: scroll;\n}\n\n.card-stack::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n\n.card-stack::-webkit-scrollbar-thumb {\n  background: var(--col-detail-distant);\n  border-radius: 0.625rem;\n}\n\n.card-stack::-webkit-scrollbar-track {\n  background: var(--bg-prim);\n}\n\n.project-card {\n  height: 22rem;\n  width: 25rem;\n  min-width: 16rem;\n  margin: 0;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  background: var(--bg-prim);\n  box-shadow: var(--shadow-card);\n  display: flex;\n  flex-direction: column;\n  transition: all .2s ease;\n  scroll-snap-align: start;\n  clear: both;\n  position: relative;\n}\n\n/* ~ is used to select all sibling .cards after the focused or hovered .card */\n.project-card:focus-within ~ .project-card, .project-card:hover ~ .project-card {\n  transform: translateX(4rem);\n}\n\n.project-card:hover {\n  transform: translateY(-1rem);\n}\n\n/* set stacked spacing style for all .cards (excluding the first .card) */\n.project-card:not(:first-child) {\n  margin-left: -4rem;\n}\n\n.card-title {\n  margin-bottom: 0.4rem;\n}\n\n.card-title h3 a {\n  text-decoration: none;\n}\n\n.card-date {\n  font-size: var(--fontsize-detail);\n  color: var(--col-text-sup);\n}\n\n.card-thumb {\n  width: 100%;\n  height: 3.125rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  flex-grow: 1;\n  border-radius: 0.2rem;\n}\n\n.card-authorship {\n  display: flex;\n  margin: 1rem 0;\n}\n\n.card-authorship.single {\n  align-items: center;\n}\n\n.author1-avatar {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 3.125rem;\n  width: 3.125rem;\n}\n\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.author-list {\n  margin-left: 1rem;\n}\n\n.author-prefix {\n  color: var(--col-text-sup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.author-link {\n  text-decoration: none;\n}\n\n.card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.tag-link {\n  font-size: var(--fontsize-detail);\n  text-decoration: none;\n  padding: 0.1rem 0.4rem;\n  margin-right: 0.4rem;\n  border-radius: 1rem;\n  border: var(--border-prim1);\n}\n\n/* -------- SKILLS STYLES --------- */\n.skills-container {\n  margin-top: 2rem;\n}\n\n.skill-group {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n}\n\n.skill-group h3 {\n  margin: 0.5rem 0;\n  font-size: var(--fontsize-secondary);\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.skill-group h3::before {\n  content: \"{\";\n  color: var(--col-detail-distant);\n  position: absolute;\n  right: calc(100% + 0.2rem);\n}\n\n.skill-group h3::after {\n  content: \".map}\";\n  color: var(--col-detail-distant);\n}\n\n.skill-list {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (20rem)[auto-fill];\n      grid-template-columns: repeat(auto-fill, 20rem);\n  grid-gap: 0 1rem;\n  justify-content: space-evenly;\n}\n\n.skill {\n  width: 20rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.skill-clickable {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: var(--border-invis);\n}\n\n.skill-clickable:hover {\n  border: var(--border-sec1);\n  background-color: var(--col-detail-distant);\n}\n\n.skill-clickable:focus {\n  pointer-events: none;\n}\n\n.skill-name {\n  font-weight: normal;\n}\n\n.skill-desc {\n  text-transform: uppercase;\n  font-size: var(--fontsize-detail);\n  color: var(--col-text-sup);\n}\n\n.subskill-list {\n  margin-top: 0.75rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subskill {\n  width: 60%;\n}\n\n.subskill-name {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n\n.prof-guage-prim {\n  width: 100%;\n}\n\n.prof-guage-sec {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n\n/* ------ CERTIFICATES STYLES ------ */\n.certificates-container {\n  margin-top: 2rem;\n}\n\n.certificate-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.certificate {\n  padding: 1rem 2rem 1.5rem 2rem;\n  border-radius: 1rem;\n  box-shadow: var(--shadow-certificate);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.certificate-title {\n  font-size: var(--fontsize-secondary);\n}\n\n.certificate-issuer {\n  color: var(--col-text-gen);\n  margin: 0.5rem 0;\n}\n\n.certificate-issuer a {\n  text-decoration: none;\n}\n\n.certificate-dates {\n  display: flex;\n  align-items: center;\n}\n\n.certificate-dateissued {\n  color: var(--col-text-sup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-dateissued::after {\n  content: \"\\00a0-\\00a0\";\n}\n\n.certificate-dateexpires {\n  color: var(--col-text-sup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-id {\n  color: var(--col-text-sup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-id span {\n  text-transform: none;\n}\n\n.certificate-link {\n  margin-top: 0.5rem;\n  font-size: var(--fontsize-detail);\n}\n\n/* ------ CONTACT STYLES -------- */\n.contact-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (15rem)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 15rem);\n  grid-gap: 0 1rem;\n  justify-content: space-around;\n  margin-top: 2rem;\n}\n\n.contact-container h3 {\n  font-size: var(--fontsize-secondary);\n  margin-bottom: 1rem;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.contact-container h3::before {\n  content: \"/*\";\n  position: absolute;\n  top: 0;\n  right: calc(100% + 0.5em);\n  color: var(--col-detail-distant);\n}\n\n.contact-container h3::after {\n  content: \"*/\";\n  position: absolute;\n  top: 0;\n  left: calc(100% + 0.5em);\n  color: var(--col-detail-distant);\n}\n\n.contact-container ul {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n}\n\n.contact-container li {\n  line-height: 1.8rem;\n  font-weight: 300;\n}\n\n.contact-container a {\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.contact-container a:hover {\n  color: var(--col-text-sup);\n}\n\n.contact-info {\n  margin-bottom: 2rem;\n}\n\n.contact-icon {\n  margin-right: 0.8rem;\n  font-size: 1.2rem;\n  width: 1rem;\n}\n\n.contact-socials {\n  margin-bottom: 2rem;\n}\n\n/* ------- FOOTER STYLES -------- */\nfooter {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--col-text-sup);\n}\n\n.copyright {\n  padding: 1rem 2rem;\n}", ""]);



/***/ })
/******/ ]);
});