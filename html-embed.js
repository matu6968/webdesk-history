/*!
 * @widgetbot/html-embed v1.3.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["widgetbot"] = factory();
	else
		root["widgetbot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var API = /** @class */ (function () {
    function API() {
        this.listeners = {};
    }
    API.prototype.socketEvent = function (raw) {
        try {
            var message = JSON.parse(raw);
        }
        catch (e) {
            return;
        }
        if (message instanceof Object &&
            message.widgetbot === true &&
            message.id === this.id) {
            var event_1 = message.event, data_1 = message.data;
            var listeners = this.listeners[event_1];
            if (listeners) {
                listeners.forEach(function (listener) { return listener(data_1); });
            }
        }
    };
    /**
     * Listens to events from the client
     * @param event Event name
     * @param data Event data
     */
    API.prototype.on = function (event, callback) {
        if (!this.listeners[event])
            this.listeners[event] = [];
        var listeners = this.listeners[event];
        listeners.push(callback);
        console.debug("[embed-api] on '" + event + "'", callback);
    };
    return API;
}());
exports.default = API;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(3);
var widgetbot = new _1.default();
exports.default = widgetbot;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var embed_1 = __webpack_require__(4);

var _require = __webpack_require__(9),
    version = _require.version;

var WidgetBot = function () {
    function WidgetBot() {
        _classCallCheck(this, WidgetBot);

        this.version = version;
        this.embeds = [];
        this.register();
        document.addEventListener('DOMContentLoaded', this.register.bind(this));
    }

    _createClass(WidgetBot, [{
        key: "register",
        value: function register() {
            var widgetbots = document.getElementsByTagName('widgetbot');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = widgetbots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var embed = _step.value;

                    var _ref = new embed_1.default(embed),
                        root = _ref.root;

                    this.embeds.push(root);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return WidgetBot;
}();

exports.default = WidgetBot;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var embed_api_1 = __webpack_require__(5);
var util_1 = __webpack_require__(8);

var Embed = function () {
    function Embed(root) {
        _classCallCheck(this, Embed);

        this.root = root;
        this.id = util_1.generateUUID();
        this.iframe = document.createElement('iframe');
        var id = this.id,
            iframe = this.iframe;

        if (this.injected) return;
        iframe.setAttribute('title', 'WidgetBot Discord chat embed');
        var api = new embed_api_1.Client({ id: id, iframe: iframe });
        var shadow = util_1.Shadow(root);
        shadow.appendChild(iframe);
        var _a = this.parseAttributes(root),
            server = _a.server,
            channel = _a.channel,
            url = _a.url,
            styles = __rest(_a, ["server", "channel", "url"]);
        iframe.setAttribute('allow', 'clipboard-write; fullscreen');
        iframe.setAttribute('src', url);
        this.setAPI(root, {
            on: function on(e, c) {
                return api.on(e, c);
            },
            emit: function emit(e, d) {
                return api.emit(e, d);
            },
            contentWindow: iframe.contentWindow,
            contentDocument: iframe.contentDocument
        });
        util_1.applyStyles(root, Object.assign({ display: 'inline-block', overflow: 'hidden', backgroundColor: '#36393E', borderRadius: '7px', verticalAlign: 'top' }, styles));
        util_1.applyStyles(iframe, {
            border: 'none',
            width: '100%',
            height: '100%'
        });
    }

    _createClass(Embed, [{
        key: "parseAttributes",
        value: function parseAttributes(node) {
            var server = node.getAttribute('server') || '299881420891881473';
            var channel = node.getAttribute('channel');
            var shard = node.getAttribute('shard') || 'https://e.widgetbot.io';
            if (!shard.startsWith('http')) shard = "https://" + shard;
            if (shard.endsWith('/')) shard = shard.substring(0, shard.length - 1);
            var params = new URLSearchParams({ api: this.id });
            var _arr = ['username', 'avatar', 'token', 'notifications', 'notificationtimeout', 'thread'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var param = _arr[_i];
                if (node.hasAttribute(param)) params.append(param, node.getAttribute(param));
            }
            var url = shard + "/channels/" + server + (channel ? "/" + channel : '') + "?" + params;
            var width = node.getAttribute('width');
            var height = node.getAttribute('height');
            return Object.assign(Object.assign(Object.assign({}, width && { width: +width ? width + "px" : width }), height && { height: +height ? height + "px" : height }), { server: server,
                channel: channel,
                url: url });
        }
    }, {
        key: "setAPI",
        value: function setAPI(element, api) {
            Object.keys(api).forEach(function (key) {
                return element[key] = api[key];
            });
        }
    }, {
        key: "injected",
        get: function get() {
            return 'emit' in this.root && 'on' in this.root;
        }
    }]);

    return Embed;
}();

exports.default = Embed;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(0);
exports.API = api_1.default;
var client_1 = __webpack_require__(6);
exports.Client = client_1.default;
var server_1 = __webpack_require__(7);
exports.Server = server_1.default;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(0);
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(options) {
        var _this = _super.call(this) || this;
        _this.server = {
            emit: function (event, data) {
                var listeners = _this.listeners[event];
                if (listeners) {
                    listeners.forEach(function (listener) { return listener(data); });
                }
            }
        };
        Object.assign(_this, options);
        window.addEventListener('message', function (_a) {
            var data = _a.data;
            return _this.socketEvent(data);
        });
        return _this;
    }
    /**
     * Emits an event to the client
     * @param event Event name
     * @param data Event data
     */
    Client.prototype.emit = function (event, data) {
        if (!window.parent)
            return false;
        var parsed = JSON.stringify({
            widgetbot: true,
            id: this.id,
            event: event,
            data: data
        });
        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage(parsed, '*');
            return true;
        }
        return false;
    };
    return Client;
}(api_1.default));
exports.default = Client;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(0);
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(options) {
        var _this = _super.call(this) || this;
        _this.targetOrigin = '*';
        _this.client = {
            emit: function (event, data) {
                var listeners = _this.listeners[event];
                if (listeners) {
                    listeners.forEach(function (listener) { return listener(data); });
                }
            }
        };
        Object.assign(_this, options);
        window.addEventListener('message', function (_a) {
            var data = _a.data;
            return _this.socketEvent(data);
        });
        return _this;
    }
    /**
     * Emits an event to the client
     * @param event Event name
     * @param data Event data
     */
    Server.prototype.emit = function (event, data) {
        console.debug("[embed-api] emit '" + event + "'", data);
        if (!window.parent)
            return false;
        var parsed = JSON.stringify({
            widgetbot: true,
            id: this.id,
            event: event,
            data: data
        });
        window.parent.postMessage(parsed, this.targetOrigin);
        return true;
    };
    return Server;
}(api_1.default));
exports.default = Server;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = exports.applyStyles = exports.Shadow = void 0;
exports.Shadow = function (node) {
    try {
        if (node.attachShadow) {
            var shadow = node.attachShadow({ mode: 'open' });
            return shadow;
        }
    } catch (e) {}
    return node;
};
exports.applyStyles = function (node, styles) {
    return Object.keys(styles).forEach(function (key) {
        return node.style[key] = styles[key];
    });
};
function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
}
exports.generateUUID = generateUUID;

/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = {"name":"@widgetbot/html-embed","version":"1.3.0","description":"html-embed React component","main":"umd/html-embed.min.js","files":["css","es","lib","umd"],"scripts":{"build":"nwb build-react-component --no-demo","clean":"nwb clean-module && nwb clean-demo","start":"nwb serve-react-demo --port 3200","release":"yarn version && yarn build && yarn publish && yarn purge","purge":"tinyreq -u https://purge.jsdelivr.net/npm/@widgetbot/html-embed"},"dependencies":{},"devDependencies":{"@types/jest":"^23.3.1","@types/react":"^16.3.14","@types/react-dom":"^16.0.5","@types/webpack-env":"^1.13.6","@widgetbot/embed-api":"^1.1.3","all-contributors-cli":"^5.4.0","babel-core":"^6.26.3","babel-plugin-emotion":"^9.2.8","babel-plugin-graphql-tag":"^1.6.0","babel-plugin-macros":"^2.4.0","babel-plugin-preval":"^3.0.0","babel-plugin-ramda":"^2.0.0","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-preset-env":"^1.7.0","babel-preset-react":"^6.24.1","babel-preset-react-optimize":"^1.0.1","babel-preset-stage-0":"^6.24.1","husky":"^0.14.3","nwb":"0.23.0","prettier":"^1.14.2","pretty-quick":"^1.6.0","tinyreq-cli":"^1.1.1","ts-loader":"^8.0.14","typescript":"^3.0.1"},"license":"MIT","repository":"github:widgetbot-io/html-embed","keywords":["react-component"]};

/***/ })
/******/ ])["default"];
});