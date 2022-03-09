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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/peterfortier-logo-draw-zoom.4c5cc9be.png";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(10);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(53)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(9);

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

var _requireUniversalModule = __webpack_require__(52);

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

var _reportChunks = __webpack_require__(54);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(15);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(10);

var _helpers = __webpack_require__(55);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)(module)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(23);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/fortierpm-logo.svg
var fortierpm_logo = __webpack_require__(24);
var fortierpm_logo_default = /*#__PURE__*/__webpack_require__.n(fortierpm_logo);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/TopNavbar.jsx


function TopNavbar() {
  return /*#__PURE__*/external_react_default.a.createElement("header", {
    className: "top-navbar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "top-nav-thick"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header-logo"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "logo-image",
    src: fortierpm_logo_default.a,
    alt: "Logo"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "top-nav-thin"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
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
  }, "Contact"))))));
}
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/idos.css
var idos = __webpack_require__(63);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/IDos.jsx



var IDos_idos = ["Web Design", "JavaScript", "React", "Software Development", "Python", "C/C++", "Graphics", "SVGs", "Prototyping"];
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/CategorySelector.jsx

 //import triangle from "../img/triangle.svg";

var CategorySelector_CategorySelector = function CategorySelector(_ref) {
  var projectGroupKeys = _ref.projectGroupKeys,
      setCategory = _ref.setCategory,
      category = _ref.category,
      lightMode = _ref.lightMode;

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
  }, category), /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "triangle ".concat(dropdownOpen ? "rotate-90" : ""),
    width: "100",
    height: "100",
    viewBox: "0 0 100 100",
    fill: lightMode ? "#386641" : "#eeeeef",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M0 100V0H100V16.6667H16.6667V100H0Z"
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProjectCard.jsx


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
  }, project.date)), /*#__PURE__*/external_react_default.a.createElement("h3", {
    className: "card-h3"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: project.titlelink
  }, project.title))), /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "card-thumb-a",
    href: project.thumblink
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "card-thumb",
    src: project.thumb,
    alt: "Project thumbnail"
  })), /*#__PURE__*/external_react_default.a.createElement("address", {
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
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProjectCardStack.jsx



var ProjectCardStack_ProjectCardStack = function ProjectCardStack(_ref) {
  var projects = _ref.projects,
      projectGroup = _ref.projectGroup;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "card-stack"
  }, projects[projectGroup].map(function (project, i) {
    var projectDate = new Date(project.date);
    var year = "".concat(projectDate.getFullYear());
    var month = "".concat(projectDate.getMonth() + 1 < 10 ? "0".concat(projectDate.getMonth() + 1) : projectDate.getMonth() + 1); // add one because .getMonth starts counting months at 0 for Jan

    var day = "".concat(projectDate.getDate() < 10 ? "0".concat(projectDate.getDate()) : projectDate.getDate());
    return /*#__PURE__*/external_react_default.a.createElement(components_ProjectCard, {
      project: project,
      year: year,
      month: month,
      day: day,
      key: i
    });
  }));
};

/* harmony default export */ var components_ProjectCardStack = (ProjectCardStack_ProjectCardStack);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/ProfBar.jsx


var ProfBar_ProfBar = function ProfBar(_ref) {
  var _ref$tier = _ref.tier,
      tier = _ref$tier === void 0 ? "primary" : _ref$tier,
      proficiency = _ref.proficiency,
      lightMode = _ref.lightMode;
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
    fill: lightMode ? "#F2E8CF" : "black"
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
    fill: "black"
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
    stopColor: lightMode ? "#6a994e" : "#7a7a8c"
  }), /*#__PURE__*/external_react_default.a.createElement("stop", {
    offset: "0.7",
    stopColor: lightMode ? "#386641" : "#dedede"
  }))));
};

/* harmony default export */ var components_ProfBar = (ProfBar_ProfBar);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/SubSkillList.jsx



var SubSkillList_SubSkillList = function SubSkillList(_ref) {
  var open = _ref.open,
      skill = _ref.skill,
      lightMode = _ref.lightMode;
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
      proficiency: subSkill.proficiency,
      lightMode: lightMode
    }));
  }) : "");
};

/* harmony default export */ var components_SubSkillList = (SubSkillList_SubSkillList);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/SkillList.jsx





var SkillList_SkillList = function SkillList(_ref) {
  var skills = _ref.skills,
      skillGroup = _ref.skillGroup,
      lightMode = _ref.lightMode;
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
      proficiency: skill.proficiency,
      lightMode: lightMode
    })), /*#__PURE__*/external_react_default.a.createElement(components_SubSkillList, {
      open: openState,
      skill: skill,
      lightMode: lightMode
    }));
  }));
};

/* harmony default export */ var components_SkillList = (SkillList_SkillList);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/components/CertificateList.jsx


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
      rel: "external noopener",
      target: "_blank"
    }, "See certificate")));
  }));
};

/* harmony default export */ var components_CertificateList = (CertificateList_CertificateList);
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/global.css
var global = __webpack_require__(64);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/styles/app.css
var app = __webpack_require__(65);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(25);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/project-thumb.jpg
var project_thumb = __webpack_require__(66);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/this-website-small.jpg
var this_website_small = __webpack_require__(26);
var this_website_small_default = /*#__PURE__*/__webpack_require__.n(this_website_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/fortierpmv3-react-small.jpg
var fortierpmv3_react_small = __webpack_require__(27);
var fortierpmv3_react_small_default = /*#__PURE__*/__webpack_require__.n(fortierpmv3_react_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/absorb-demo-small.jpg
var absorb_demo_small = __webpack_require__(28);
var absorb_demo_small_default = /*#__PURE__*/__webpack_require__.n(absorb_demo_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/slime-card-demo-small.jpg
var slime_card_demo_small = __webpack_require__(29);
var slime_card_demo_small_default = /*#__PURE__*/__webpack_require__.n(slime_card_demo_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/advanced-dropdown-small.jpg
var advanced_dropdown_small = __webpack_require__(30);
var advanced_dropdown_small_default = /*#__PURE__*/__webpack_require__.n(advanced_dropdown_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/fortierpmv3-small.jpg
var fortierpmv3_small = __webpack_require__(31);
var fortierpmv3_small_default = /*#__PURE__*/__webpack_require__.n(fortierpmv3_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/dice-tower-small.jpg
var dice_tower_small = __webpack_require__(32);
var dice_tower_small_default = /*#__PURE__*/__webpack_require__.n(dice_tower_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/animated-page-open-small.jpg
var animated_page_open_small = __webpack_require__(33);
var animated_page_open_small_default = /*#__PURE__*/__webpack_require__.n(animated_page_open_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/before-after-slider-small.jpg
var before_after_slider_small = __webpack_require__(34);
var before_after_slider_small_default = /*#__PURE__*/__webpack_require__.n(before_after_slider_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/text-particles-small.jpg
var text_particles_small = __webpack_require__(35);
var text_particles_small_default = /*#__PURE__*/__webpack_require__.n(text_particles_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/constellations-demo-small.jpg
var constellations_demo_small = __webpack_require__(36);
var constellations_demo_small_default = /*#__PURE__*/__webpack_require__.n(constellations_demo_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/mouse-particles-small.jpg
var mouse_particles_small = __webpack_require__(37);
var mouse_particles_small_default = /*#__PURE__*/__webpack_require__.n(mouse_particles_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/fluid-image-popups-small.jpg
var fluid_image_popups_small = __webpack_require__(38);
var fluid_image_popups_small_default = /*#__PURE__*/__webpack_require__.n(fluid_image_popups_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/card-tricks-small.jpg
var card_tricks_small = __webpack_require__(39);
var card_tricks_small_default = /*#__PURE__*/__webpack_require__.n(card_tricks_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/animated-grid-small.jpg
var animated_grid_small = __webpack_require__(40);
var animated_grid_small_default = /*#__PURE__*/__webpack_require__.n(animated_grid_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/animated-logo-small.jpg
var animated_logo_small = __webpack_require__(41);
var animated_logo_small_default = /*#__PURE__*/__webpack_require__.n(animated_logo_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/nojs-carousel-small.jpg
var nojs_carousel_small = __webpack_require__(42);
var nojs_carousel_small_default = /*#__PURE__*/__webpack_require__.n(nojs_carousel_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/cardthumb/london-interactive-guide-small.jpg
var london_interactive_guide_small = __webpack_require__(43);
var london_interactive_guide_small_default = /*#__PURE__*/__webpack_require__.n(london_interactive_guide_small);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/peterfortier-logo-draw-zoom.png
var peterfortier_logo_draw_zoom = __webpack_require__(3);
var peterfortier_logo_draw_zoom_default = /*#__PURE__*/__webpack_require__.n(peterfortier_logo_draw_zoom);

// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/fireship.png
var fireship = __webpack_require__(44);
var fireship_default = /*#__PURE__*/__webpack_require__.n(fireship);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/projects.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Default Thumb
 // React Thumbs





 // Javascript Thumbs








 // CSS Thumbs




 // Python Thumbs

 // Graphics Thumbs
// Art Thumbs
// Author Profile Images




 // AUTHORS

var authorPeter = ["Peter Fortier", peterfortier_logo_draw_zoom_default.a, "https://www.linkedin.com/in/peter-fortier-71359221a/"];
var authorJacob = ["Jacob Merrick", peterfortier_logo_draw_zoom_default.a, "#"];
var authorElle = ["Elle Miller", peterfortier_logo_draw_zoom_default.a, "#"];
var authorJeff = ["Jeff Delaney", fireship_default.a, "https://fireship.io/"]; // TAGS

var tagAffDesigner = ["Affinity Designer", "#skills"];
var tagAffPhoto = ["Affinity Photo", "#skills"];
var tagBlackPen = ["Black Pen", "#skills"];
var tagHTMLCanvas = ["Canvas", "#skills"];
var tagCSS = ["CSS", "#skills"];
var tagDiscordBot = ["Discord Bot", "#skills"];
var tagDrypoint = ["Drypoint", "#skills"];
var tagGSAP = ["GSAP", "#skills"];
var tagHTML = ["HTML", "#skills"];
var tagJS = ["Javascript", "#skills"];
var tagNext = ["Next.js", "#skills"];
var tagModPodge = ["Mod Podge", "#skills"];
var tagPaperCol = ["Paper", "#skills"];
var tagPillow = ["Pillow", "#skills"];
var tagPrintArt = ["Print", "#skills"];
var tagPython = ["Python", "#skills"];
var tagReact = ["React.js", "#skills"];
var tagReactStatic = ["React Static", "#skills"];
var tagReplit = ["Replit", "#skills"];
var tagSCSS = ["SCSS", "#skills"];
var tagSVG = ["SVG", "#skills"];
var tagTkinter = ["Tkinter", "#skills"];
var tagVector = ["Vector", "#skills"];
var tagWatercolor = ["Watercolor", "#skills"];
var featuredList = ["This Website!", "Personal Website v3 - React", "Slime Card Demo", "Absorb Demo", "Interactive London Guide", "Dice Tower - Discord Bot", "Personal Website v3 - Vanilla JS", "Constellations Demo"];
var projectsArrange = {
  "Featured": [],
  "React": [{
    title: "This Website!",
    titlelink: "https://github.com/fortierpm/personal-portfolio",
    date: "Feb 23, 2022",
    thumb: this_website_small_default.a,
    thumblink: "https://github.com/fortierpm/personal-portfolio",
    authors: [authorPeter],
    tags: [tagReact, tagReactStatic, tagSCSS]
  }, {
    title: "Personal Website v3 - React",
    titlelink: "https://github.com/fortierpm/fortierpmv3-react",
    date: "Apr 8, 2021",
    thumb: fortierpmv3_react_small_default.a,
    thumblink: "https://fortierpmv3-react.netlify.app/",
    authors: [authorPeter],
    tags: [tagReact, tagJS, tagSCSS]
  }, {
    title: "Slime Card Demo",
    titlelink: "https://github.com/fortierpm/slime-card-demo",
    date: "Sep 4, 2021",
    thumb: slime_card_demo_small_default.a,
    thumblink: "https://fortierpm-slime-card.netlify.app/",
    authors: [authorPeter],
    tags: [tagReact, tagSVG, tagCSS]
  }, {
    title: "Absorb Demo",
    titlelink: "https://github.com/fortierpm/absorb-demo",
    date: "Aug 12, 2021",
    thumb: absorb_demo_small_default.a,
    thumblink: "https://fortierpm-absorb-demo.netlify.app/",
    authors: [authorPeter],
    tags: [tagReact, tagSVG, tagCSS]
  }, {
    title: "Advanced Dropdown Menu",
    titlelink: "https://github.com/fortierpm/advanced-dropdown",
    date: "Sep 12, 2021",
    thumb: advanced_dropdown_small_default.a,
    thumblink: "https://fortierpm.github.io/advanced-dropdown/",
    authors: [authorPeter],
    tags: [tagReact, tagJS, tagCSS]
  }],
  "Javascript": [{
    title: "Personal Website v3 - Vanilla JS",
    titlelink: "https://github.com/fortierpm/fortierpmv3",
    date: "Mar 22, 2021",
    thumb: fortierpmv3_small_default.a,
    thumblink: "https://fortierpm.github.io/fortierpmv3/",
    authors: [authorPeter],
    tags: [tagJS, tagSCSS, tagHTML]
  }, {
    title: "Dice Tower - Discord Bot",
    titlelink: "https://github.com/fortierpm/dice-tower",
    date: "Feb 1, 2022",
    thumb: dice_tower_small_default.a,
    thumblink: "https://github.com/fortierpm/dice-tower",
    authors: [authorPeter],
    tags: [tagDiscordBot, tagJS, tagReplit]
  }, {
    title: "Animated Page Open",
    titlelink: "https://github.com/fortierpm/animated-open",
    date: "Jan 22, 2021",
    thumb: animated_page_open_small_default.a,
    thumblink: "https://fortierpm.github.io/animated-open/",
    authors: [authorPeter],
    tags: [tagJS, tagGSAP, tagCSS]
  }, {
    title: "Before-After Slider",
    titlelink: "https://github.com/fortierpm/before-after-slider",
    date: "Feb 27, 2021",
    thumb: before_after_slider_small_default.a,
    thumblink: "https://fortierpm.github.io/before-after-slider/",
    authors: [authorPeter],
    tags: [tagJS, tagCSS, tagHTML]
  }, {
    title: "Text Particles",
    titlelink: "https://github.com/fortierpm/text-particles",
    date: "Aug 23, 2021",
    thumb: text_particles_small_default.a,
    thumblink: "https://fortierpm.github.io/text-particles/",
    authors: [authorPeter],
    tags: [tagJS, tagCSS, tagHTMLCanvas]
  }, {
    title: "Constellations Demo",
    titlelink: "https://github.com/fortierpm/constellations-demo",
    date: "Aug 23, 2021",
    thumb: constellations_demo_small_default.a,
    thumblink: "https://fortierpm.github.io/constellations-demo/",
    authors: [authorPeter],
    tags: [tagJS, tagCSS, tagHTMLCanvas]
  }, {
    title: "Mouse Particles Animation",
    titlelink: "https://github.com/fortierpm/mouse-particles-animation",
    date: "Aug 23, 2021",
    thumb: mouse_particles_small_default.a,
    thumblink: "https://fortierpm.github.io/mouse-particles-animation/",
    authors: [authorPeter],
    tags: [tagJS, tagCSS, tagHTMLCanvas]
  }, {
    title: "Fluid Image Popups",
    titlelink: "https://github.com/fortierpm/fluid-popups",
    date: "Jan 22, 2021",
    thumb: fluid_image_popups_small_default.a,
    thumblink: "https://fortierpm.github.io/fluid-popups/",
    authors: [authorPeter],
    tags: [tagJS, tagCSS, tagHTML]
  }],
  "CSS": [{
    title: "Card Tricks (Fork)",
    titlelink: "https://github.com/fortierpm/card-tricks",
    date: "Sep 28, 2021",
    thumb: card_tricks_small_default.a,
    thumblink: "https://fortierpm.github.io/card-tricks/",
    authors: [authorJeff, authorPeter],
    tags: [tagCSS, tagHTML, tagSVG]
  }, {
    title: "Animated Grid",
    titlelink: "https://github.com/fortierpm/animated-grid",
    date: "Sep 12, 2021",
    thumb: animated_grid_small_default.a,
    thumblink: "https://fortierpm.github.io/animated-grid/",
    authors: [authorPeter],
    tags: [tagCSS, tagHTML]
  }, {
    title: "Animated Logo",
    titlelink: "https://github.com/fortierpm/animated-logo",
    date: "Jan 18, 2021",
    thumb: animated_logo_small_default.a,
    thumblink: "https://fortierpm.github.io/animated-logo/",
    authors: [authorPeter],
    tags: [tagCSS, tagSVG, tagHTML]
  }, {
    title: "No JS Carousel",
    titlelink: "https://github.com/fortierpm/nojs-carousel",
    date: "Jan 23, 2021",
    thumb: nojs_carousel_small_default.a,
    thumblink: "https://fortierpm.github.io/nojs-carousel/",
    authors: [authorPeter],
    tags: [tagCSS, tagHTML]
  }],
  "Python": [{
    title: "Interactive London Guide",
    titlelink: "https://github.com/fortierpm/london-interactive-guide",
    date: "May 25, 2021",
    thumb: london_interactive_guide_small_default.a,
    thumblink: "https://github.com/fortierpm/london-interactive-guide",
    authors: [authorPeter, authorJacob, authorElle],
    tags: [tagPython, tagTkinter, tagPillow]
  }],
  "Vector Graphics": [{
    title: "Cosmos Series",
    titlelink: "https://imgur.com/a/5lIXxfK",
    date: "Dec 4, 2020",
    thumb: "https://i.imgur.com/WN2d1i2.jpg",
    thumblink: "https://imgur.com/a/5lIXxfK",
    authors: [authorPeter],
    tags: [tagVector, tagSVG, tagAffDesigner]
  }, {
    title: "Quiet Series",
    titlelink: "https://imgur.com/a/iroiygc",
    date: "Apr 25, 2020",
    thumb: "https://i.imgur.com/pfQHelb.jpg",
    thumblink: "https://imgur.com/a/iroiygc",
    authors: [authorPeter],
    tags: [tagVector, tagSVG, tagAffDesigner]
  }, {
    title: "Other Isometric",
    titlelink: "https://imgur.com/a/5Vl0MnV",
    date: "Apr 25, 2020",
    thumb: "https://i.imgur.com/tbD6zss.jpg",
    thumblink: "https://imgur.com/a/5Vl0MnV",
    authors: [authorPeter],
    tags: [tagVector, tagSVG, tagAffDesigner]
  }],
  "Art": [{
    title: "Paper - HS",
    titlelink: "https://imgur.com/a/bdOHWG3",
    date: "May 1, 2020",
    thumb: "https://i.imgur.com/XcTFp4i.jpg",
    thumblink: "https://imgur.com/a/bdOHWG3",
    authors: [authorPeter],
    tags: [tagPaperCol, tagModPodge]
  }, {
    title: "Watercolor - HS",
    titlelink: "https://imgur.com/a/vCNmvhF",
    date: "May 1, 2020",
    thumb: "https://i.imgur.com/W8mzvlR.jpg",
    thumblink: "https://imgur.com/a/vCNmvhF",
    authors: [authorPeter],
    tags: [tagWatercolor, tagBlackPen]
  }, {
    title: "Print - HS",
    titlelink: "https://imgur.com/a/kfB4FT9",
    date: "May 1, 2020",
    thumb: "https://i.imgur.com/GUPgke8.jpg",
    thumblink: "https://imgur.com/a/kfB4FT9",
    authors: [authorPeter],
    tags: [tagPrintArt, tagDrypoint]
  }]
}; // TO BE DEPRECATED
// const handleProjects = (projectsObject) => {
//   const projectGroupKeys = Object.keys(projectsObject);
//   for (let i = 0; i < projectGroupKeys.length; i++) {
//     let projectGroup = projectGroupKeys[i];
//     for (let j = 0; j < projectsObject[projectGroup].length; j++) {
//       let project = projectsObject[projectGroup][j];
//       if (project.featured) {
//         projectsObject["Featured"].splice(project.featured - 1, 0, { ...project });
//       }
//     }
//   }
//   return projectsObject;
// }
// NEW FEATURED PROJECTS HANDLER

var handleFeatProjects = function handleFeatProjects(projectsObject) {
  /*  \/ TODO \/  : Remove necessity of this initialization for "Featured" */
  for (var k = 0; k < featuredList.length; k++) {
    projectsObject["Featured"].push(0);
  }
  /*  /\ TODO /\  */


  var projectGroupKeys = Object.keys(projectsObject);

  for (var i = 0; i < projectGroupKeys.length; i++) {
    var projectGroup = projectGroupKeys[i];

    for (var j = 0; j < projectsObject[projectGroup].length; j++) {
      var project = projectsObject[projectGroup][j];

      if (featuredList.includes(project.title)) {
        var featIdx = featuredList.indexOf(project.title); // console.log(project.title, featIdx);

        projectsObject["Featured"].splice(featIdx, 1, _objectSpread({}, project)); // console.log(projectsObject["Featured"]);
      }
    }
  }

  return projectsObject;
};

var projects_projects = handleFeatProjects(projectsArrange);
/* harmony default export */ var constants_projects = (projects_projects);
// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/constants/skills.js
var skills_skills = {
  "Frontend": [{
    name: "HTML",
    description: "markup language",
    proficiency: 1,
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
    proficiency: 1,
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
      proficiency: 0.5
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
    proficiency: 0.8,
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
    proficiency: 0.5,
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
    name: "C/C++",
    description: "OOP language",
    proficiency: 0.9,
    subSkillList: [{
      name: "Dynamic memory",
      proficiency: 0.9
    }, {
      name: "Pointers",
      proficiency: 1
    }, {
      name: "Structs and Classes",
      proficiency: 0.9
    }, {
      name: "File Reading/Writing",
      proficiency: 0.8
    }]
  }, {
    name: "Node.js",
    description: "JavaScript runtime environment",
    proficiency: 0.7,
    subSkillList: [{
      name: "npm package manager - npm and npx",
      proficiency: 0.7
    }]
  }, {
    name: "JSON",
    description: "Data storage file format",
    proficiency: 0.9,
    subSkillList: []
  }, {
    name: "Bash",
    description: "Linux shell and command language",
    proficiency: 0.7,
    subSkillList: [{
      name: "Git commands",
      proficiency: 0.9
    }, {
      name: "Bash with C/C++",
      proficiency: 0.8
    }, {
      name: "Directory/file creation & navigation",
      proficiency: 0.9
    }, {
      name: "Directory/file permission control",
      proficiency: 0.6
    }]
  }, {
    name: "Firebase",
    description: "Google-backed application development software",
    proficiency: 0.5,
    subSkillList: []
  }],
  "Integrated Development Environments": [{
    name: "Visual Studio Code",
    description: "IDE",
    proficiency: 0.9,
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
  }, {
    name: "Replit",
    description: "Online Collaborative IDE",
    proficiency: 0.8,
    subSkillList: [{
      name: "Repl Databases",
      proficiency: 0.7
    }, {
      name: "Secrets/Environment Variables",
      proficiency: 1
    }, {
      name: "Express Webservers",
      proficiency: 0.6
    }]
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
  "Math/Data Science Technologies": [{
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
  }, {
    name: "R",
    description: "language for statistical computing and graphics",
    proficiency: 0.6,
    subSkillList: [{
      name: "RStudio",
      proficiency: 0.8
    }, {
      name: "tidyverse",
      proficiency: 0.6
    }, {
      name: "deplyr",
      proficiency: 0.6
    }, {
      name: "ggplot2",
      proficiency: 0.8
    }]
  }, {
    name: "Microsoft Excel",
    description: "Spreadsheet and data handling software",
    proficiency: 0.8,
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
  credentialID: false,
  // string or false
  credentialURL: "https://freecodecamp.org/certification/fortierpm/responsive-web-design"
}];
/* harmony default export */ var constants_certificates = (certificates_certificates);
// EXTERNAL MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/img/peterfortier-medium.png
var peterfortier_medium = __webpack_require__(45);
var peterfortier_medium_default = /*#__PURE__*/__webpack_require__.n(peterfortier_medium);

// CONCATENATED MODULE: C:/Users/forti/LocalDirectories/JavaScript-React.js/_Personal Portfolio2/personal-portfolio/src/App.js


 // components






 // styles


 // icons



 // constants



 // photos

 // UNUSED(no delete):
// // detect SSR
// const useIsSsr = () => {
//   const [isSsr, setIsSsr] = useState(true); // start off in "SSR mode", to ensure our initial browser render matches the SSR render
//   useEffect(() => {
//     setIsSsr(false); // `useEffect` never runs on the server, so we must be on the client if we hit this block
//   }, []);
//   return isSsr;
// }

var App_App = function App() {
  // UNUSED(no delete): const isSSR = useIsSsr();
  var _useState = Object(external_react_["useState"])(true),
      _useState2 = slicedToArray_default()(_useState, 2),
      lightMode = _useState2[0],
      setLightMode = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    // Note that useEffect does not run for SSR
    setLightMode(JSON.parse(localStorage.getItem("theme")) !== null ? JSON.parse(localStorage.getItem("theme")) : true);
    var theme = JSON.parse(localStorage.getItem("theme")) ? "lightmode" : "darkmode";

    if (JSON.parse(localStorage.getItem("theme")) !== null) {
      document.body.classList.add(theme);
    } else {
      localStorage.setItem("theme", lightMode);
      document.body.classList.add("lightmode");
    }
  }, []);

  var handleLightMode = function handleLightMode(e) {
    setLightMode(!lightMode);

    if (!lightMode) {
      document.body.classList.replace("darkmode", "lightmode");
    } else {
      document.body.classList.replace("lightmode", "darkmode");
    }

    localStorage.setItem("theme", !lightMode);
  };

  var projectGroupKeys = Object.keys(constants_projects);
  var skillGroupKeys = Object.keys(constants_skills);

  var _useState3 = Object(external_react_["useState"])("Featured"),
      _useState4 = slicedToArray_default()(_useState3, 2),
      category = _useState4[0],
      setCategory = _useState4[1];

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App-full"
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
  })), /*#__PURE__*/external_react_default.a.createElement(TopNavbar, null), /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "hero"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-catch"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "hero-header"
  }, "Hey!", /*#__PURE__*/external_react_default.a.createElement("br", null), "I'm Peter."), /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    onClick: handleLightMode,
    className: "hero-icon",
    icon: lightMode ? free_solid_svg_icons_["faSun"] : free_solid_svg_icons_["faMoon"]
  }), /*#__PURE__*/external_react_default.a.createElement(components_IDos, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-background"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-face"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-face-img"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: peterfortier_medium_default.a,
    alt: "Peter Fortier's image."
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-face-decoration"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    width: "126",
    height: "126",
    viewBox: "0 0 126 126",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("circle", {
    className: "wide",
    cx: "63",
    cy: "63",
    r: "57",
    stroke: lightMode ? "#F2E8CF" : "#201c29",
    strokeWidth: "12",
    strokeLinejoin: "round",
    strokeDasharray: "40 40 120 80"
  }), /*#__PURE__*/external_react_default.a.createElement("circle", {
    className: "thin",
    cx: "63",
    cy: "63",
    r: "50",
    stroke: lightMode ? "#6A994E" : "#7a7a8c",
    strokeWidth: "5",
    strokeLinejoin: "round",
    strokeDasharray: "0 40 300 400 40 0 20 60"
  }), /*#__PURE__*/external_react_default.a.createElement("circle", {
    className: "thick",
    cx: "63",
    cy: "63",
    r: "50",
    stroke: lightMode ? "#386641" : "#373442",
    strokeWidth: "10",
    strokeLinejoin: "round",
    strokeDasharray: "120 170 120 20 420 170"
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mountains-background"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mountains-container"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "mountains",
    width: "1440",
    height: "1024",
    viewBox: "0 0 1440 1024",
    preserveAspectRatio: "xMinYMin slice",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1440 1024V509.821L1351.61 450L1238.46 526.58L1138.61 459L1098.63 486.059L962.613 394L786.599 513.127L641.613 415L414.071 569.001L279.613 478L229.178 512.135L88.613 417L0 476.974V1024H1440Z",
    fill: lightMode ? "#FBF7EF" : "#1C1823"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "water-container"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "water",
    width: "1440",
    height: "97",
    viewBox: "0 0 1440 97",
    preserveAspectRatio: "xMinYMin slice",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1440 97V63.0727C1424.22 62.7058 1407.26 62.5 1389 62.5C1296.01 62.5 1274.52 68.5474 1249.67 75.5414C1215.6 85.1309 1175.21 96.5 935.5 96.5C596.394 96.5 704.296 59.6687 798.963 42.5021C912.963 26.5021 994.463 -4.29793 408.463 0.502058C203.156 2.18376 75.3233 9.11082 0 18.3977V97H1440Z",
    fill: lightMode ? "#FFF" : "#17141d"
  })))))), /*#__PURE__*/external_react_default.a.createElement("main", null, /*#__PURE__*/external_react_default.a.createElement("section", {
    id: "projects",
    className: "main-section"
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Projects"), /*#__PURE__*/external_react_default.a.createElement(components_CategorySelector, {
    projectGroupKeys: projectGroupKeys,
    setCategory: setCategory,
    category: category,
    lightMode: lightMode
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
      skillGroup: skillGroup,
      lightMode: lightMode
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
  }), "LinkedIn")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://github.com/fortierpm",
    rel: "external noopener"
  }, /*#__PURE__*/external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    className: "contact-icon",
    icon: free_brands_svg_icons_["faGithub"]
  }), "Github")))), /*#__PURE__*/external_react_default.a.createElement("section", {
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
    className: "source-code"
  }, "Check out this site's development ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://github.com/fortierpm/personal-portfolio",
    rel: "external noopener",
    target: "_blank"
  }, "source code"), "."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 2021 Peter Fortier. All Rights Reserved."))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "App-mobile"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "I apologize but unfortunately this webpage is not yet optimized for mobile devices. Check my ", /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://github.com/fortierpm/personal-portfolio",
    rel: "external noopener"
  }, "Github repository"), " for this site's source code.")));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(9);

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

var _requireById = __webpack_require__(6);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\artifacts\\__react_static_root__\\node_modules\\react-static\\lib\\browser\\components\\Default404");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMyAxMzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGw6I2VlZWVlZjtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNzM1Ljg4NCwtMTMxMC42MSkiPgogICAgICAgIDxwYXRoIGlkPSJmb3J0aWVycG1Mb2dvIiBkPSJNNzYwLjYzMywxMzEwLjYxTDgzOC40MTQsMTM4OC4zOUw3NzguMzEsMTQ0OC40OUw3NzEuMjM5LDE0NDEuNDJMNzg3LjYzMSwxNDI1LjAzTDc4Ni4wNTQsMTQyNC45NEM3NzkuNjgxLDE0MjQuMzUgNzczLjg2LDE0MjEuNDEgNzY4LjU4OSwxNDE2LjE0Qzc2My4yODIsMTQxMC44NCA3NjAuMzEyLDE0MDUuMDUgNzU5LjY4LDEzOTguNzlMNzU5LjU1MiwxMzk2LjU0TDc0Mi45NTUsMTQxMy4xNEw3MzUuODg0LDE0MDYuMDdMNzc0Ljc3NSwxMzY3LjE3TDczOS40MTksMTMzMS44Mkw3NDYuNDksMTMyNC43NUw3ODEuODQ2LDEzNjAuMUw3ODguOTE3LDEzNTMuMDNMNzUzLjU2MiwxMzE3LjY4TDc2MC42MzMsMTMxMC42MVpNNzgxLjg0NiwxMzc0LjI1TDc3Ny45NjUsMTM3OC4xM0M3NzUuMDEsMTM4MS40NiA3NzMuMDEzLDEzODQuMzYgNzcxLjk1MSwxMzg2Ljc5Qzc3MC40MTQsMTM5MC4zMSA3NzAuMzM2LDEzOTMuODUgNzcwLjgwNCwxMzk3LjU2Qzc3MS4yNjIsMTQwMS4xOSA3NzIuNzg1LDE0MDQuNzkgNzc2LjM0LDE0MDguMzRDNzc5LjU3NywxNDExLjU3IDc4Mi45NDcsMTQxMy4wMSA3ODYuNzI4LDE0MTMuNjZDNzkwLjQxNSwxNDE0LjMgNzkzLjg2OSwxNDE0LjExIDc5Ny4xNzEsMTQxMi42OEM4MDAuNDYsMTQxMS4yNiA4MTAuMTMsMTQwMi41MyA4MTAuMTMsMTQwMi41M0w3ODEuODQ2LDEzNzQuMjVaTTc5NS45ODgsMTM2MC4xTDc4OC45MTcsMTM2Ny4xN0w4MTcuMjAxLDEzOTUuNDZMODI0LjI3MiwxMzg4LjM5QzgyNC4yNzIsMTM4OC4zOSA3OTUuOTg4LDEzNjAuMSA3OTUuOTg4LDEzNjAuMVoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/this-website-small.d8bf9016.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fortierpmv3-react-small.1de56529.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/absorb-demo-small.749e5b86.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/slime-card-demo-small.46b4fefe.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/advanced-dropdown-small.b930ee6c.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fortierpmv3-small.68f78b0b.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dice-tower-small.bee6391a.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/animated-page-open-small.78744719.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/before-after-slider-small.cef6bc24.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/text-particles-small.5b10731b.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/constellations-demo-small.1d543717.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mouse-particles-small.bcee2c12.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fluid-image-popups-small.bc3bff04.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/card-tricks-small.e88e46ee.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/animated-grid-small.c4f1caef.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/animated-logo-small.e0c6a5e8.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nojs-carousel-small.8e500f5a.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/london-interactive-guide-small.30ebcb9a.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEUfHx/3cFD4dE73ZVb4blH4ck/3a1T4eEv3aVX4bFP3Y1f5e0n3dkz2Ylj5fUn5gUX3X1r5gEf5hkP5h0EeIB8fHyH4gET3XVsdICEhHh8gHx0AGRweIBweHyP5h0IAFhv5iz4AGhkiHSIAFh0AGxkAFRYOGhv/bFf/Z1kAGx0UGh0NGB4AER0dHiZKLyf/ekp9RDH/ck4RHBrsX1f+X1snIh3ffz2LVDBKNyf/lz+xaTL/jz7PeDxBLyS7bjj2jkJWOyRxRiiRVy6jXTJgPCMoJh03JyHpgUAsIybWdD3Hbz2OTTWqXDa2ZDzpfEbVc0V0Py3AYT2HRzbrdEXYa0l3QDLNZUOfVDlaNiuxWUHrcU2pVj9DKifAW0QXIBfhZUuAQTS3VkZWLCw9JyaeTUDbZVBlNy+5U0GMQj2mS0XPWU/DUU1eLS/cXFN1ODfMUlNGKC6ZQkDjVFiL0kCRAAAQ2klEQVR4nO2d+1vayBrHw00ugiJOSi4TIwkkISBIwO2e09Oz3e1Zautpt9va1lo9Kl7qZaHb/v8/nAmXkIQEggYBn3z0kZhMZt7vvHPLZBIwzMPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDYxYgpm3AJCEJEmxtFQDgHqpMhsLZn9YfFykMo6Zty2TAKfnnf/zy5J88TjxQhRQpPH6yuv7kX4oMpm3LhCCLz5+sr68/+elpgaQepEiS/7eq8JcnvzwrENTGtM1xH0Cy/1IVriKRvxYpctr2uA/AUFOq+hAV1Ce/8Q+wmOKQV13Y8eKT5yzqPfBp2+QyoL6usbb+KsfAh9ZryP9Z1/OqIMNpm+QuTOE3Td2q+uenLXnaNrkLTv9zVc/akxe/KxzFTNsu92CKL9cNCldXf6pnqAdUF/G8QeDq+trq+oufCw+o1wAl1W06hetra6trPxembZd7CI+NPkTlFClce4Y6Rm7atrkD++/1lFniamp97Vlh44H0GuwLYyntFFX0g8bh07bNFYittZS5mK6mUmtrqdSzB1AXSYqQf9UV0hRCVx1LD6FFhcXXqx1VHb+hv+gTgT5XU3WZmffWhoD8i1RPoRF114vteR+jUgB/umqjUPVm6sXvcz5GBYD/bVCZXuNLgSDhHF/3kwz/cphC5NxXPJI4bTtvD6FsWZROI6+KYJ77RWFnbai85dXU6nN22lbeheLL5VE+TC3vFKdt5h2op0YqRAF+5SlyTmen6OdDlCF6Gp8WwJxe8xff2LtQU4g+X8znHUaIK89SqZVlB6z+waoTq3M2479BUsVXqAQ6Ubi0/F+eJOZtxh9QCrnsUGGq3drMW0EFGPspteJIIGJt+eeNebuUogj6hUN5bd7ksTnrMWDh8TgCl1Ov+WmbPCZM/o2jdrTPr3M2qyFvOuspeqDAc3SxCCh0cY9cuIJ4hKx/hP6o20ZNaO8j9Uh7Gx1P/UET83IhRWEU+y7VUbjSdk9XoaZn2bCx0g6ysvypCOakT8Qhx79Z6ip0iBp4+enczNtw7OOx5KmleQmd8bI4Nz7ElsYU2OU5j0FuDlTC4uvbCWyX03lYViSXbilwZeWPIiTmQCH7x+3kLT1aWXnMzvoaRg6CwubK8pIT2qpMu5bArK/wIyCztbKyaLbcRqLFrtezPvdGYfyfjtTZsVya8cEbR79dRr5x5kMLVpZ2c9PWYA8OcQZsOSyh9lzIG9isjm0oQLEfVxbvIm9xaeU9i83q7CJOYPzOytKdFC4thVd2CrO6JpyEG6Wl8KPw3Xz4aOk9PaMC1amLN4tj0FZksW9pc1Yv9zn2z3EE2it8z89oS8PuDFo8Lp2a+C4/bS2WCM/Kd9XX4/0MDmwoRq6/d03h4lsBn7XhKcTB+3D57qW0yy5PzFqXiPMfw4uLYbe8uFSSmRlzYvFzObwUDrvjw/Bi+XVulqYWcYphd8rILtU4hGZoF/P/emyPKbjhZhQgcRKf2tIbisl8KOssdUNheUcwyCEBJBicmdbdm0JpMRxfjFspuC2LuzmDD0mqJNNTu4sq1ONxJLFvncnYsZT1NsolYyKF3f0dKEyj9SEJIO+Gy3d02SDlT4ZeHxc+LIbfb9IyBu97xSZOsn+G3S2hKovxfcMNRYrKx8vl8scthbvnNhZC9hOSN1KhkzAmDBM2JGA/tePZy963D4ubZSdlNI4YRx4KbCimqP+nUCTheHkzc3/iSIYEQinsj49JT/GIULssNKwGYz+X/ag6lDdZ7L5m/imClLf3xxboSCFyYnybwPS9g/w0XI7H/ZXyJn9fqxpIkijsxv3jS3SSC/F4+UMBN0xn8LtIYNwfLr/l72lYDkDxv+W4gwJ3G/xh/+ccaVAobLaVI5Ul4X4UwsLbtv/8fr/h07xtMLyLXRjdvvBuxtgzENudOh/2728rFLiH6SrhqV+1qGNV71P/168RN332w2v74vp9nTiymHGUlvvY9qDfX/5I38urROT9cMg/QSolxaiwsFPuZc8Zy0x+jMof6r00AeLvZGObqZQq7QOhcNy/N+kxKsTodxOVp/IlYyiJFOD3tWO72Qm3p6RcmrjAymfjlBvA2F3tYPkLPVmFcn53iG0uKdzljXWNy3/RDob8B5O90ch/rkxcYXjf+B4NnBP6NSMe/zg5J+KQKnzw+7RmJtRF//9tFJnj8ftyhpYG4vIFytd4L9yFgE2oPaVIGe6H/b6JKwwBg0KAESVUOrVw+zQ1oWtFimAP/UEtoXFxfKLfv2XsLSgM+PXnbxYmNALH2beVUKhyW4XO8dcNPQIDsbw+e3z7k3jfDSBJQIF93+TlIQWVuqE/hDhHh3whLW1/5XgCI3CSxACL2tF7URjaMirEMLq9u3fcdzSBxeGo8ZL3Kj6XfGgfT/uADxpH1wzIGUP5L9zvEwEg+SN/yBWFPt8Qheoxn2JIG2egHArp064cun+jkcPonXbyowj6g06CDSPkY01tqbxdMQap1P/HudzaAAgcWYc6k7sK9IWOcsYeHTB7ZoVnPOnydSLOf3Zknf/8zgJ9oUPjshMcyscmhb4j11emEHWfk9IXOhJOzMaMTfCLcU0GCekzc8molGSXJbInlaCetiUmfMHK/hb7TssJq7C9bbsw7Ww6Nq41hRuZQ3NawS+0uyM3AiIXGhUOpKnSEOSL0KD1+lwI+nr7DGG60Xf8Y2xLIc7vD6R0xLs7+qZ3gkFrTXoqFxlMOK4ELfxrhWU5UMkY7wNTxEFlIJxp3HNn8kcOjK68K1JAOLa0fAyFwfOccT6NEd5ZJebiyA1Q8p4Tew8zAAdW1oxFKHiWMa4zhbmPFuEO3Ry5kbmTkfqClXNlg4OY8OGOCoOVhkIZenyuLlq0akeurinOOCl1ezJEee/E3cPwRY9oVDD1qdvk75Z7FZFSGtFRhkWDZzmMAzhOlO4mMBg8yRlvMcl1y/Qqe+6NvvHMWSWKaMes0U1J3VJ/zzPt1htwckg9poWIGs8wnq3+r4unvVFp6C0HgGOvUVeiP7976rsM5tZ8DeTPg2YL2yr6//uCp51eGhCZhaBOoU6gWaEWSssR9Sd4ZLjXSzKZ42B0wRRPO6ozFxXmfdHhBMUzHrTvs0OMPhwReDjipaEFgfJTpM+YU900v+ZcU4gfiBYp6NIKikcZANuVh8KLZ3cRuBA0th+4fIRKSMQq1XP3FMrH4nCrouKHXvdLQLkUtDLIKWe8NqImUbuVv0bRW3POujbjRo/wykLwSJuGJjGQPxJ9w7NkGBTT7+0hwx8G7QS6qvBkhEKxvwSGACR/FrXN9+HxLCxET2im70MicyhGbCuIiwpz9iWlTfA6279Wgxw8FW8lEOXUQpAi+m/IUjauxQX7FsBFhey5mr22RMQ9mTGGF4ee0KPrN93/4lmvuDOQEOrn4pCTF766NxuVG6owEjnPGceRcmOIZcMI9OszR9IXkeiweKJX7t2DGqFw4ThjfLscyH29lcCouKdd+grZM1RqA8EhgV2c+FYVRmwTikTNz/IAsGUXvJMlxk8N8WvPK0S+dI4ijixEOqEsoouIFy4qvI520kH0jOttR6LSibm0MIA/FgNqeL2strEGU43/RCMRBZAMCQHObp2JkQ76oBHdWYHogosX+bmvfYWaMk2hOPB4Kwdx/kTUgustNe7UxxWIiA2FgxB1EeDySLQ6z3D+QsTF60P6TAyYLetTHWjSIAUB25TsT7FgISKdZRmCkOn696o4LL0u0WsXb3bLl0NSDJxkzeFxCsMB2RRtz7G0OELLQoa8uImIbcGjEM9cvHVBXEj2KUo2t4HkLdRWjDZUJYBYEE/yjeMT5D6HOSI2XJwvpZTIEB9CyzskAEcSpUjMqcKIFKlGpHHcTrt4Z4YqIlstrFKRmqzlFQxB4rL8VexYr1eiO1e/HYug3g/tCugwp6XfL524epM0czKQSg9UHSxHh5T6Ig/2u+15A1YvBFBz6jh4ADW8bs55yxeSbUotwf4OCaD3mmJsHMMdEQlEpWrGzee+cTwb0SI3p9awX9HKYVQBO0GVEZXxnkw3xKI40KCUdPMOKZ69sU1NALYpoQspSNCtajQQc0GXDikgncpurouioHAhmnOxuxFhoe3gCV1xkAAWTq+lhYT16f3NyFg+jlznMODiEyaAJPPVQMTSEc3Rl6Fy9kpyp3hqAsWG22sxSOFSjCSsErum8ZGlhaNbMSnmosTY9QSe+c5XJUsfotHhSIUUoA+aomUG3QpRMt1CdQOQvbRO7ZoHI0dPgIMyuHGvtZGu2Qmsa6PoKmoR0Y8ONbEm7ez5B4K9khLIjbpzDXHp91kd08KgOBJ1YhJrE5ULCSUgmVOs5py9o4sgMpd6s2+rMJZISFeZSSyg5SB7IyViiYEUFWfZSUGK/qtqb7hTkAur2ETe7UYwcDuSTAwoDJwqjvolgJpcod7UysBgTO2diSFHu0gXAoFPZo2wcCElAl1DNAuklux8ukRRrhPSED8GYrVmIGklPKGlKd1M8ElLtbEwK0zcOF9+BeFGppmIdSQkdH81JVIT1fZI24cJ/f6eQvRbneQTJWT2WkqYiDWzzqs9RRDbqvE2BGLV7YNYMml3XEVquL3aywBBNc3mBZJjPODBYUAt6nYkE43Mqa3+jsDL7CQfI4WMUq8maoYkq9JVVl0D7jiO3GA56BBL1C5oqCSSATt5saR0NdmXEAEMV0qBmLEUJRP0WG8BzrasFQYS0vc8BXNV+0KalL5N+C1LHAe4/EFVSib7dQW1G8fjjPNxQjBa3SWWrN3QHORyzf4+M6jOT/hJZ+QriBdKVb1CtaDS2BgdMI6aUwuFyVpT7eZI+rq3a1BolbyPt7gCMrvdTKTb6XctrLUKziUSGH1jtjyh/lbxdlHIXtU0afocSCRqzW3lXl4iRWAKcVOLJZK1ft5uOBvXqCAv6TRo5qcTB504soNHez6uK9x9vGGJJDGGyX5P1qq6xK+cX5BSFFJotj4tJf4SOusRM1eW+pJSk1Rw5j7eF01QULWyVa3pKkqt4fiKFMdy3wYEJpOtLNmZHcxbK6zd5BkOALfX5w9B2LppWxbrllN1rOgodQ5kqwP2x1rafSR6UGE6ma6pk4f3/BYemW8hS2vpXhbTuLPvbqKI00EH9QUOtENp9TfRUh/AuOc3KTEwv31Tq2mZfMk6u9YHwqWhGqJuPN3qL4PCcj8GPCg1/86ixpq8Z4UUCZl841vb2jSSmG5kHSlkMiYn1aoNGvYv9/LVtKkEp79DgcLGGRm6BygoraaqTlVZPVUw4OBZJC7RyxOVZPLK8I3kxEGyozDdK//NBj3FbxOiCKTxR021FpmCK2D026oKl7V2nqTVTjCZvmnkDS2I0qr1FKpx1qqXwjTfZA4BCXEhi/yYRnbVfsCN0e1d/jrdtT6dbn7/m5ah4VtXc1e1nntVrrYzBJziqyJJjsBwAAXlr2+qOUjiyHt6xFYtXavV0tVvV62DDC0DgBv6uHxTr6/Oo0xkZuDlwkDO/v39BzK9iSQO14gq7s3VZetgO58XBqoXSeDbav1ru/jH99P87HydF0FiGblx86P2Y3tUr0Vl6UxWIFDTOJgXJJAvamphqP24+YvIz9A7MJFABqMUOnvauiRGKGQYQFCU9RutKBKNu2vp5lWLzCszUDb7MMhkiiAgxcjCqH6ZApy6INx6/QYa0n9v/S0UFFReMTBn31bmkExGmZ3K5+Hh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh8cD4P1UpKxFz9mQbAAAAAElFTkSuQmCC"

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/peterfortier-medium.dc060d95.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(49);
module.exports = __webpack_require__(56);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(48)["default"];

var _require = __webpack_require__(13),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(13),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(50),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
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
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 19, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
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
/* 51 */
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
/* 52 */
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

var _utils = __webpack_require__(10);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 6,
	"./": 6,
	"./index": 6,
	"./index.js": 6
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
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(9);

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

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(15);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(16);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(17);

var _interopRequireWildcard = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(57);

var _Suspense = _interopRequireDefault(__webpack_require__(58));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(61)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\forti\\LocalDirectories\\JavaScript-React.js\\_Personal Portfolio2\\personal-portfolio\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(18);

var _interopRequireDefault = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(59));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(60));

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
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);


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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ".ido1 {\n  -webkit-animation: down-1 3s ease-in-out 1 forwards;\n          animation: down-1 3s ease-in-out 1 forwards;\n}\n\n.ido2 {\n  -webkit-animation: down-2 3s ease-in-out 1 forwards;\n          animation: down-2 3s ease-in-out 1 forwards;\n}\n\n.ido3 {\n  -webkit-animation: 3s ease-in-out 1 forwards;\n          animation: 3s ease-in-out 1 forwards;\n}\n\n@-webkit-keyframes down-1 {\n  0% {\n    opacity: 0;\n    transform: translate(0%, 200%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes down-1 {\n  0% {\n    opacity: 0;\n    transform: translate(0%, 200%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes down-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(0%, -200%);\n  }\n}\n\n@keyframes down-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(0%, -200%);\n  }\n}\n\n@-webkit-keyframes down-prep {\n  to {\n    transform: translate(0%, 200%);\n  }\n}\n\n@keyframes down-prep {\n  to {\n    transform: translate(0%, 200%);\n  }\n}\n\n@-webkit-keyframes up-1 {\n  0% {\n    opacity: 0;\n    transform: translate(0%, -200%);\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes up-1 {\n  0% {\n    opacity: 0;\n    transform: translate(0%, -200%);\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes up-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(0%, 200%);\n  }\n}\n\n@keyframes up-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(0%, 200%);\n  }\n}\n\n@-webkit-keyframes up-prep {\n  to {\n    transform: translate(0%, -200%);\n  }\n}\n\n@keyframes up-prep {\n  to {\n    transform: translate(0%, -200%);\n  }\n}\n\n@-webkit-keyframes right-1 {\n  0% {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes right-1 {\n  0% {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes right-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n}\n\n@keyframes right-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n}\n\n@-webkit-keyframes right-prep {\n  to {\n    transform: translate(-100%, 0%);\n  }\n}\n\n@keyframes right-prep {\n  to {\n    transform: translate(-100%, 0%);\n  }\n}\n\n@-webkit-keyframes left-1 {\n  0% {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@keyframes left-1 {\n  0% {\n    opacity: 0;\n    transform: translate(100%, 0%);\n  }\n  20% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n}\n\n@-webkit-keyframes left-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n}\n\n@keyframes left-2 {\n  0% {\n    opacity: 1;\n    transform: translate(0%, 0%);\n  }\n  60% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-100%, 0%);\n  }\n}\n\n@-webkit-keyframes left-prep {\n  to {\n    transform: translate(100%, 0%);\n  }\n}\n\n@keyframes left-prep {\n  to {\n    transform: translate(100%, 0%);\n  }\n}", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, "\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nbody {\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n\n}\n\na, button, input[type=\"submit\"] {\n  cursor: pointer;\n}\n\na {\n  /* text-decoration: none; */\n  color: inherit;\n}\n\nli {\n  list-style-type: none;\n}\n\naddress {\n  font-style: normal;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// Module
exports.push([module.i, ":root {\n  --fontsize-normal: 1rem;\n  --fontsize-title: 3rem;\n  --fontsize-secondary: 1.5rem;\n  --fontsize-detail: 0.8rem;\n  --logo-width: 4rem;\n  --logo-pad-left: 3rem;\n  --logo-pad-right: 2rem;\n  --logo-pad-total: calc(var(--logo-pad-left) + var(--logo-pad-right));\n  --add-margin-left: 2rem;\n  --main-margin-left: calc(var(--logo-pad-total) + var(--logo-width) + var(--add-margin-left));\n  --main-margin-right: 5rem;\n  --card-standard: 1rem;\n}\n\n@media screen and (min-width: 1200px) {\n  :root {\n    --card-standard: min(3vh, 2rem);\n  }\n}\n\n.lightmode {\n  --bg-prim: #FFF;\n  --bg-nav: #386641;\n  --bg-navlogo: #518048;\n  --bg-footer: #386641;\n  --bg-card: linear-gradient(20deg, #386641, #6A994E);\n  --col-text-titles: #000000;\n  --col-text-gen: #000000;\n  --col-text-sup: #8CAD6F;\n  --col-detail-1: #6A994E;\n  --col-detail-2: #386641;\n  --col-detail-3: #F2E8CF;\n  --col-detail-4: orange;\n  --col-detail-5: #BC4749;\n  --col-detail-6: #FBF7EF;\n  --col-lightdark: #BC4749;\n  --col-lightdark-hover: #F2E8CF;\n  --col-hover-1: #518048;\n  --col-hover-2: ;\n  --grad-decor-1: #FBF7EF;\n  --grad-decor-2: #BC4749;\n  --col-navtext: #FFF;\n  --col-nav-hover: #AEC18F;\n  --col-navtitle: rgba(255, 255, 255, 0.8);\n  --col-card-title: #FFF;\n  --col-card-textprim: #FFF;\n  --col-card-textsup: #fff7;\n  --col-card-thinborder: #0000;\n  --col-card-tagbg: #386641;\n  --col-card-tagtext: #fffd;\n  --col-cardscroll: #6a994e;\n  --col-footertext: #FFF;\n  --color-choices:\r\n    #255809, // prim accent + grad long\r\n    #b4fa04, // second accent\r\n    #dfff2d, // highlight/select\r\n    #3b4925, // shadow\r\n    #549a01, // cta\r\n    #529600, // grad long\r\n    #337e0a, // grad both\r\n    #72af00, // grad both\r\n    #E85F9A;\n  --shadow-nodir:\r\n    0px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    0px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    0px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    0px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    0px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    0px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-dir: \r\n    1.4px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    3.3px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    6.3px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    11.2px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    20.9px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    50px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-card:\r\n    0px 0.8px 2.2px rgba(0, 0, 0, 0.112),\r\n    0px 2px 5.3px rgba(0, 0, 0, 0.162),\r\n    0px 3.8px 10px rgba(0, 0, 0, 0.2),\r\n    0px 6.7px 17.9px rgba(0, 0, 0, 0.238),\r\n    0px 12.5px 33.4px rgba(0, 0, 0, 0.288),\r\n    0px 30px 80px rgba(0, 0, 0, 0.4);\n  --shadow-certificate:\r\n    0px 0.6px 1px rgba(0, 0, 0, 0.056),\r\n    0px 1.3px 2.5px rgba(0, 0, 0, 0.081),\r\n    0px 2.5px 4.6px rgba(0, 0, 0, 0.1),\r\n    0px 4.5px 8.3px rgba(0, 0, 0, 0.119),\r\n    0px 8.4px 15.5px rgba(0, 0, 0, 0.144),\r\n    0px 20px 37px rgba(0, 0, 0, 0.2);\n  --avatar-shadow: 0 2px 10px rgba(0, 0, 0, 0.226);\n  --image-darken: brightness(100%);\n}\n\n.darkmode {\n  --bg-prim: #17141d;\n  --bg-nav: #17141d;\n  --bg-navlogo: #17141d;\n  --bg-card: #17141d;\n  --bg-footer: #17141d;\n  --col-text-titles: #eeeeef;\n  --col-text-gen: #eeeeee;\n  --col-text-sup: #7a7a8c;\n  --col-detail-1: #7a7a8c;\n  --col-detail-2: #646374;\n  --col-detail-3: #4d4b5b;\n  --col-detail-4: #373442;\n  --col-detail-5: #2c2836;\n  --col-detail-6: #201c29;\n  --col-lightdark: #373442;\n  --col-lightdark-hover: #eeeeee;\n  --col-hover-1: #7a7a8c;\n  --col-hover-2: ;\n  --grad-decor-1: var(--col-detail-6);\n  --grad-fallback-1: var(--col-detail-6);\n  --grad-decor-2: var(--col-detail-3);\n  --grad-fallback-2: var(--col-detail-3);\n  --col-navtext: #eeeeee;\n  --col-nav-hover: #7a7a8c;\n  --col-navtitle: #7a7a8c;\n  --col-card-title: #e1e1e3;\n  --col-card-textprim: #eeeeee;\n  --col-card-textsup: #7a7a8c;\n  --col-card-thinborder: #7a7a8c;\n  --col-card-tagbg: #0000;\n  --col-card-tagtext: #eeeeee;\n  --col-cardscroll: #201c29;\n  --col-footertext: #7a7a8c;\n  --col-evendarker: #1C1823;\n  --shadow-nodir:\r\n    0px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    0px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    0px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    0px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    0px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    0px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-dir:\r\n    1.4px 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n    3.3px 6.7px 5.3px rgba(0, 0, 0, 0.049),\r\n    6.3px 12.5px 10px rgba(0, 0, 0, 0.057),\r\n    11.2px 22.3px 17.9px rgba(0, 0, 0, 0.062),\r\n    20.9px 41.8px 33.4px rgba(0, 0, 0, 0.066),\r\n    50px 100px 80px rgba(0, 0, 0, 0.07);\n  --shadow-card:\r\n    -0.5px 0.8px 4.4px rgba(0, 0, 0, 0.129),\r\n    -1.1px 2px 10.6px rgba(0, 0, 0, 0.186),\r\n    -2.1px 3.8px 20px rgba(0, 0, 0, 0.23),\r\n    -3.8px 6.7px 35.7px rgba(0, 0, 0, 0.274),\r\n    -7.1px 12.5px 66.8px rgba(0, 0, 0, 0.331),\r\n    -17px 30px 160px rgba(0, 0, 0, 0.46);\n  --shadow-certificate:\r\n    0px 0px 2.8px rgba(0, 0, 0, 0.051),\r\n    0px 0px 6.7px rgba(0, 0, 0, 0.073),\r\n    0px 0px 12.5px rgba(0, 0, 0, 0.09),\r\n    0px 0px 22.3px rgba(0, 0, 0, 0.107),\r\n    0px 0px 41.8px rgba(0, 0, 0, 0.129),\r\n    0px 0px 100px rgba(0, 0, 0, 0.18);\n  --avatar-shadow: 0 2px 10px rgba(0, 0, 0, 0.384);\n  --image-darken: brightness(75%);\n}\n\nbody {\n  background-color: var(--bg-prim);\n  color: var(--col-text-gen);\n  width: 100%;\n  --border-prim1: 0.05rem solid var(--col-detail-1);\n  --border-sec1: 0.1rem solid var(--col-detail-6);\n  --border-sec2: 0.2rem solid var(--col-detail-6);\n  --border-carddetails: 0.05rem solid var(--col-card-thinborder);\n  --border-invis: 0.1rem solid #0000;\n}\n\nh1, h2, h3, h4 {\n  color: var(--col-text-titles);\n}\n\n.App-full {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-x: hidden;\n}\n\n.App-mobile {\n  height: 100vh;\n  display: none;\n}\n\n@media screen and (max-width: 500px) {\n  .App-mobile {\n    margin: 0 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .App-full {\n    display: none;\n  }\n}\n\n/* ------------ NAV STYLES ------------- */\n.top-navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  color: var(--col-navtext);\n  background: var(--bg-nav);\n  box-shadow: var(--shadow-nodir);\n  z-index: 10;\n  /* should be highest element */\n}\n\n.top-nav-thick {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem 2rem 1rem 3rem;\n  background: var(--bg-navlogo);\n  border-bottom-right-radius: 2rem;\n  box-shadow: var(--shadow-dir);\n}\n\n.header-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logo-image {\n  width: var(--logo-width);\n  height: auto;\n}\n\n.top-nav-thin {\n  margin-left: var(--main-margin-left);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header-title {\n  margin: 0.1ch 0;\n  margin-right: 2rem;\n  font-family: \"Roboto Mono\";\n  font-size: 2rem;\n  font-weight: 100;\n  color: var(--col-navtitle);\n}\n\n.navbar {\n  display: flex;\n  width: 40%;\n  min-width: 18rem;\n  margin: 1.5ch 0;\n  margin-right: 5%;\n  font-weight: 200;\n}\n\n.nav-list {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.nav-link {\n  text-decoration: none;\n  transition: all 0.1s ease;\n}\n\n.nav-link:hover {\n  color: var(--col-nav-hover);\n}\n\n@media screen and (max-width: 800px) {\n  .header-title {\n    display: none;\n  }\n  .top-nav-thin {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n  .navbar {\n    margin-right: 5%;\n    width: 70%;\n  }\n}\n\n@media screen and (max-width: 700px) {\n  :root {\n    --logo-pad-left: 1.5rem;\n    --logo-pad-right: 1rem;\n    --logo-pad-total: calc(var(--logo-pad-left) + var(--logo-pad-right));\n    --logo-width: 3rem;\n    --add-margin-left: 0.5rem;\n  }\n  .top-nav-thick {\n    padding-left: var(--logo-pad-left);\n    padding-right: var(--logo-pad-right);\n    border-bottom-right-radius: 1.5rem;\n  }\n  .logo-image {\n    width: var(--logo-width);\n  }\n  .top-nav-thin {\n    flex-direction: column;\n    align-items: center;\n  }\n  .navbar {\n    margin-right: 5%;\n    width: 70%;\n  }\n}\n\n/* --------- HERO STYLES ---------- */\n#hero {\n  min-height: 90vh;\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.hero-catch {\n  position: relative;\n  margin-left: var(--main-margin-left);\n  margin-top: -1rem;\n}\n\n.hero-header {\n  margin-bottom: 2rem;\n  font-size: 3rem;\n}\n\n@media screen and (max-width: 700px) {\n  .hero-catch {\n    width: 8rem;\n    margin-top: 1rem;\n  }\n  .hero-header {\n    font-size: 2rem;\n  }\n}\n\n.hero-icon {\n  position: absolute;\n  top: 2.5rem;\n  left: -3.5rem;\n  cursor: pointer;\n  transform: rotate(-10deg);\n  transform-origin: center;\n  font-size: 2rem;\n  color: var(--col-lightdark);\n  transition: all 0.2s ease;\n}\n\n.hero-icon:hover {\n  color: var(--col-lightdark-hover);\n  transform: scale(1.4);\n}\n\n.subheader {\n  display: block;\n  font-size: var(--fontsize-secondary);\n}\n\n.subheader-text {\n  display: block;\n}\n\n.idobox {\n  position: relative;\n  display: block;\n  width: 20rem;\n  margin: 3rem 2rem;\n}\n\n@media screen and (max-width: 700px) {\n  .idobox {\n    margin: 3rem 1rem;\n  }\n}\n\n.screen-readable-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #0000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: block;\n  font-size: 1px;\n}\n\n.ido-placeholder {\n  color: #0000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: block;\n}\n\n.ido {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  will-change: transform, opacity;\n}\n\n.ido::before {\n  content: \"/\";\n  color: var(--grad-decor-2);\n}\n\n.ido::after {\n  content: \"/\";\n  color: var(--grad-decor-2);\n}\n\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  overflow-x: clip;\n}\n\n.hero-face {\n  position: absolute;\n  top: 50%;\n  right: -1rem;\n  transform: translate(0, -50%);\n  width: 45%;\n  max-width: 90vh;\n}\n\n.hero-face-img img {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n}\n\n.hero-face-decoration {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 150%;\n  z-index: -1;\n}\n\n.hero-face-decoration svg {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.hero-face-decoration svg circle {\n  transform-origin: center;\n  will-change: transform;\n}\n\n.hero-face-decoration svg .wide {\n  -webkit-animation: rotate-wide 40s linear infinite forwards;\n          animation: rotate-wide 40s linear infinite forwards;\n}\n\n.hero-face-decoration svg .thin {\n  -webkit-animation: rotate-thin 50s linear infinite forwards;\n          animation: rotate-thin 50s linear infinite forwards;\n}\n\n.hero-face-decoration svg .thick {\n  -webkit-animation: rotate-thick 70s linear infinite forwards;\n          animation: rotate-thick 70s linear infinite forwards;\n}\n\n.mountains-background {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.mountains-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n}\n\n.mountains {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -45%);\n  min-height: 100%;\n  width: 100%;\n}\n\n.water-container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.water {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n@-webkit-keyframes rotate-wide {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate-wide {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes rotate-thin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n\n@keyframes rotate-thin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n\n@-webkit-keyframes rotate-thick {\n  from {\n    transform: rotate(45deg);\n  }\n  to {\n    transform: rotate(405deg);\n  }\n}\n\n@keyframes rotate-thick {\n  from {\n    transform: rotate(45deg);\n  }\n  to {\n    transform: rotate(405deg);\n  }\n}\n\n/* ------ GENERAL MAIN STYLES ------- */\nmain {\n  margin-left: var(--main-margin-left);\n  margin-right: var(--main-margin-right);\n  width: calc(100% - var(--main-margin-left) - var(--main-margin-right));\n}\n\n.main-section {\n  margin-bottom: 3rem;\n}\n\n.main-section h2 {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n  display: block;\n  font-size: var(--fontsize-title);\n  margin-bottom: 0.5rem;\n}\n\n.main-section h2::before {\n  content: \"<\";\n  position: absolute;\n  top: 0;\n  left: -1em;\n  color: var(--grad-decor-1);\n}\n\n.main-section h2::after {\n  content: \" />\";\n  position: absolute;\n  top: 0;\n  right: -2em;\n  color: var(--grad-decor-1);\n}\n\n/* --------- PROJECTS STYLES --------- */\n#projects {\n  margin-bottom: 5rem;\n}\n\n.project-category-select {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.category-desc {\n  margin-right: 1rem;\n}\n\n.category-select {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border: var(--border-prim1);\n  border-radius: 0.75rem;\n  background: var(--bg-prim);\n  position: relative;\n}\n\n.category-select .triangle {\n  margin: 0 0.8rem;\n  width: 0.6rem;\n  height: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s ease;\n}\n\n.category-select .triangle.rotate-90 {\n  transform: rotate(-90deg);\n}\n\n.active-category {\n  padding: 0.3rem 0.8rem;\n  position: relative;\n}\n\n.active-category::after {\n  content: \"\";\n  position: absolute;\n  top: -1%;\n  right: 0;\n  width: 0.05rem;\n  height: 102%;\n  transform: translateX(-50%);\n  background: var(--col-text-sup);\n}\n\n.category-dropdown {\n  position: absolute;\n  top: 110%;\n  left: 0;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  background: var(--bg-prim);\n  transition: all 0.2s ease;\n  z-index: 1;\n  border: var(--border-prim1);\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n\n.category-dropdown.dropdown-open {\n  opacity: 1;\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto;\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n.category-option {\n  padding: 0.3rem 0.8rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.category-option:hover {\n  background: var(--col-detail-3);\n}\n\n.category-option-active {\n  color: var(--col-text-sup);\n  cursor: default;\n}\n\n.category-option-active:hover {\n  background: var(--bg-prim);\n}\n\n.project-stack-container {\n  margin-left: calc(0rem - var(--main-margin-left));\n  width: calc(100% + var(--main-margin-left) + var(--main-margin-right));\n}\n\n.card-stack {\n  display: flex;\n  align-items: center;\n  padding: calc(var(--card-standard) * 2) var(--main-margin-right) 2rem var(--main-margin-left);\n  overflow-x: scroll;\n}\n\n.card-stack::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n\n.card-stack::-webkit-scrollbar-thumb {\n  background: var(--col-cardscroll);\n  border-radius: 0.625rem;\n}\n\n.card-stack::-webkit-scrollbar-track {\n  background: var(--bg-prim);\n}\n\n.project-card {\n  height: calc(var(--card-standard) * 22);\n  width: calc(var(--card-standard) * 20);\n  min-width: calc(var(--card-standard) * 16);\n  margin: 0;\n  padding: calc(var(--card-standard) * 1.5);\n  border-radius: calc(var(--card-standard) * 1);\n  background: var(--bg-card);\n  box-shadow: var(--shadow-card);\n  display: flex;\n  flex-direction: column;\n  transition: transform .2s ease;\n  scroll-snap-align: start;\n  clear: both;\n  position: relative;\n}\n\n/* ~ is used to select all sibling .cards after the focused or hovered .card */\n.project-card:focus-within ~ .project-card, .project-card:hover ~ .project-card {\n  transform: translateX(calc(var(--card-standard) * 4));\n}\n\n.project-card:hover {\n  transform: translateY(calc(var(--card-standard) * (-1)));\n}\n\n/* set stacked spacing style for all .cards (excluding the first .card) */\n.project-card:not(:first-child) {\n  margin-left: calc(var(--card-standard) * (-4));\n}\n\n.card-title {\n  margin-bottom: calc(var(--card-standard) * 0.4);\n}\n\n.card-h3 {\n  font-size: calc(var(--card-standard) * 1.17);\n  color: var(--col-card-title);\n}\n\n.card-h3 a {\n  text-decoration: none;\n}\n\n.card-date {\n  font-size: calc(var(--card-standard) * 0.8);\n  color: var(--col-card-textsup);\n}\n\n.card-thumb-a {\n  flex-grow: 1;\n  height: calc(var(--card-standard) * 3.125);\n  filter: var(--image-darken);\n}\n\n.card-thumb {\n  width: 100%;\n  max-height: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: calc(var(--card-standard) * 0.2);\n  box-shadow: 0px 0.6px 1.7px rgba(0, 0, 0, 0.037), 0px 1.3px 4.1px rgba(0, 0, 0, 0.053), 0px 2.5px 7.6px rgba(0, 0, 0, 0.065), 0px 4.5px 13.6px rgba(0, 0, 0, 0.077), 0px 8.4px 25.5px rgba(0, 0, 0, 0.093), 0px 20px 61px rgba(0, 0, 0, 0.13);\n}\n\n.card-authorship {\n  display: flex;\n  margin: calc(var(--card-standard)*1) 0 calc(var(--card-standard)*0.7);\n  color: var(--col-card-textprim);\n}\n\n.card-authorship.single {\n  align-items: center;\n}\n\n.author1-avatar {\n  border-radius: 50%;\n  overflow: hidden;\n  height: calc(var(--card-standard) * 3.125);\n  width: calc(var(--card-standard) * 3.125);\n  box-shadow: var(--avatar-shadow);\n}\n\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: var(--image-darken);\n}\n\n.author-list {\n  margin-left: calc(var(--card-standard) * 1);\n  color: var(--col-card-textprim);\n}\n\n.author-prefix {\n  color: var(--col-card-textsup);\n  font-size: calc(var(--card-standard) * 0.8);\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.author-link {\n  text-decoration: none;\n  font-size: calc(var(--card-standard) *1);\n}\n\n.card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  color: var(--col-card-tagtext);\n}\n\n.tag-link {\n  font-size: calc(var(--card-standard)* 0.8);\n  text-decoration: none;\n  padding: calc(var(--card-standard)*0.1) calc(var(--card-standard)*0.4);\n  margin-right: calc(var(--card-standard) * 0.4);\n  margin-top: calc(var(--card-standard) * 0.3);\n  border-radius: calc(var(--card-standard) * 1);\n  background: var(--col-card-tagbg);\n  border: var(--border-carddetails);\n}\n\n/* -------- SKILLS STYLES --------- */\n.skills-container {\n  margin-top: 2rem;\n}\n\n.skill-group {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n}\n\n.skill-group h3 {\n  margin: 0.5rem 0;\n  font-size: var(--fontsize-secondary);\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.skill-group h3::before {\n  content: \"{\";\n  position: absolute;\n  right: calc(100% + 0.2rem);\n  color: var(--grad-decor-1);\n}\n\n.skill-group h3::after {\n  content: \".map}\";\n  color: var(--grad-decor-1);\n}\n\n.skill-list {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (20rem)[auto-fill];\n      grid-template-columns: repeat(auto-fill, 20rem);\n  grid-gap: 0 1rem;\n  justify-content: space-evenly;\n}\n\n.skill {\n  width: 20rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.skill-clickable {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: var(--border-invis);\n}\n\n.skill-clickable:hover {\n  border: var(--border-sec1);\n  background-color: var(--col-detail-6);\n}\n\n.skill-clickable:focus {\n  pointer-events: none;\n}\n\n.skill-desc {\n  text-transform: uppercase;\n  font-size: var(--fontsize-detail);\n  color: var(--col-text-sup);\n}\n\n.subskill-list {\n  margin-top: 0.75rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.subskill {\n  width: 60%;\n}\n\n.subskill-name {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n\n.prof-guage-prim {\n  width: 100%;\n}\n\n.prof-guage-sec {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n\n/* ------ CERTIFICATES STYLES ------ */\n.certificates-container {\n  margin-top: 2rem;\n}\n\n.certificate-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.certificate {\n  padding: 1rem 2rem 1.5rem 2rem;\n  border-radius: 1rem;\n  color: var(--col-card-textprim);\n  background: var(--bg-card);\n  box-shadow: var(--shadow-certificate);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.certificate-title {\n  font-size: var(--fontsize-secondary);\n  color: var(--col-card-title);\n}\n\n.certificate-issuer {\n  color: var(--col-card-textprim);\n  margin: 0.5rem 0;\n}\n\n.certificate-issuer a {\n  text-decoration: none;\n}\n\n.certificate-dates {\n  display: flex;\n  align-items: center;\n}\n\n.certificate-dateissued {\n  color: var(--col-card-textsup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-dateissued::after {\n  content: \"\\00a0-\\00a0\";\n}\n\n.certificate-dateexpires {\n  color: var(--col-card-textsup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-id {\n  color: var(--col-card-textsup);\n  font-size: var(--fontsize-detail);\n  text-transform: uppercase;\n}\n\n.certificate-id span {\n  text-transform: none;\n}\n\n.certificate-link {\n  margin-top: 0.5rem;\n  font-size: var(--fontsize-detail);\n}\n\n/* ------ CONTACT STYLES -------- */\n.contact-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (15rem)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 15rem);\n  grid-gap: 0 1rem;\n  justify-content: space-around;\n  margin-top: 2rem;\n}\n\n.contact-container h3 {\n  font-size: var(--fontsize-secondary);\n  margin-bottom: 1rem;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.contact-container h3::before {\n  content: \"/*\";\n  position: absolute;\n  top: 0;\n  right: calc(100% + 0.5em);\n  color: var(--grad-decor-1);\n}\n\n.contact-container h3::after {\n  content: \"*/\";\n  position: absolute;\n  top: 0;\n  left: calc(100% + 0.5em);\n  color: var(--grad-decor-1);\n}\n\n.contact-container ul {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n}\n\n.contact-container li {\n  line-height: 1.8rem;\n  font-weight: 300;\n}\n\n.contact-container a {\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n\n.contact-container a:hover {\n  color: var(--col-hover-1);\n}\n\n.contact-info {\n  margin-bottom: 2rem;\n}\n\n.contact-icon {\n  margin-right: 0.8rem;\n  font-size: 1.2rem;\n  width: 1rem;\n}\n\n.contact-socials {\n  margin-bottom: 2rem;\n}\n\n/* ------- FOOTER STYLES -------- */\nfooter {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  color: var(--col-footertext);\n  font-weight: 300;\n  background: var(--bg-footer);\n}\n\n.source-code {\n  padding: 1rem 2rem 0;\n}\n\n.source-code a:hover {\n  color: var(--col-footertext);\n}\n\n.source-code a:visited {\n  color: var(--col-footertext);\n}\n\n.copyright {\n  padding: 1rem 2rem;\n}", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/project-thumb.8f10ca46.jpg";

/***/ })
/******/ ]);
});