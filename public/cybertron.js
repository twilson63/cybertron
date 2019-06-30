
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */













    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var fulfil;
    var done = new Promise(function (f) {
        fulfil = f;
    });
    function start() {
        if (!running) {
            running = true;
            console.log('TAP version 13');
            Promise.resolve().then(function () {
                var hasOnly = tests.some(function (test) { return test.only; });
                tests.forEach(function (test) {
                    test.shouldRun = test.skip
                        ? false
                        : hasOnly ? test.only : true;
                });
                dequeue();
            });
        }
    }
    var test = Object.assign(function test(name, fn) {
        tests.push({ name: name, fn: fn, skip: false, only: false, shouldRun: false });
        start();
    }, {
        skip: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: true, only: false, shouldRun: null });
            start();
        },
        only: function (name, fn) {
            tests.push({ name: name, fn: fn, skip: false, only: true, shouldRun: null });
            start();
        }
    });
    var testIndex = 0;
    var assertIndex = 0;
    var running = false;
    var tests = [];
    var passed = 0;
    var failed = 0;
    var skipped = 0;
    var isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
    function logResult(ok, operator, msg, info) {
        if (info === void 0) { info = {}; }
        assertIndex += 1;
        if (ok) {
            console.log("ok " + assertIndex + " \u2014 " + msg);
            passed += 1;
        }
        else {
            console.log("not ok " + assertIndex + " \u2014 " + msg);
            failed += 1;
            console.log('  ---');
            console.log("  operator: " + operator);
            if (isNode) {
                var util = require('util');
                if ('expected' in info)
                    console.log("  expected:\n    " + util.format(info.expected).replace(/\n/gm, "\n    "));
                if ('actual' in info)
                    console.log("  actual:\n    " + util.format(info.actual).replace(/\n/gm, "\n    "));
            }
            else {
                if ('expected' in info)
                    console.log("  expected:", info.expected);
                if ('actual' in info)
                    console.log("  actual:", info.actual);
            }
            // find where the error occurred, and try to clean it up
            var lines = new Error().stack.split('\n').slice(3);
            var cwd_1 = '';
            if (isNode) {
                cwd_1 = process.cwd();
                if (/[\/\\]/.test(cwd_1[0]))
                    cwd_1 += cwd_1[0];
                var dirname = typeof __dirname === 'string' && __dirname.replace(/dist$/, '');
                for (var i = 0; i < lines.length; i += 1) {
                    if (~lines[i].indexOf(dirname)) {
                        lines = lines.slice(0, i);
                        break;
                    }
                }
            }
            var stack = lines
                .map(function (line) { return "    " + line.replace(cwd_1, '').trim(); })
                .join('\n');
            console.log("  stack:   \n" + stack);
            console.log("  ...");
        }
    }
    var assert = {
        fail: function (msg) { return logResult(false, 'fail', msg); },
        pass: function (msg) { return logResult(true, 'pass', msg); },
        ok: function (value, msg) {
            if (msg === void 0) { msg = 'should be truthy'; }
            return logResult(Boolean(value), 'ok', msg, {
                actual: value,
                expected: true
            });
        },
        equal: function (a, b, msg) {
            if (msg === void 0) { msg = 'should be equal'; }
            return logResult(a === b, 'equal', msg, {
                actual: a,
                expected: b
            });
        },
        throws: function (fn, expected, msg) {
            if (msg === void 0) { msg = 'should throw'; }
            try {
                fn();
                logResult(false, 'throws', msg, {
                    expected: expected
                });
            }
            catch (err) {
                if (expected instanceof Error) {
                    logResult(err.name === expected.name, 'throws', msg, {
                        actual: err.name,
                        expected: expected.name
                    });
                }
                else if (expected instanceof RegExp) {
                    logResult(expected.test(err.toString()), 'throws', msg, {
                        actual: err.toString(),
                        expected: expected
                    });
                }
                else if (typeof expected === 'function') {
                    logResult(expected(err), 'throws', msg, {
                        actual: err
                    });
                }
                else {
                    throw new Error("Second argument to t.throws must be an Error constructor, regex, or function");
                }
            }
        }
    };
    function dequeue() {
        return __awaiter(this, void 0, void 0, function () {
            var test, err_1, total;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        test = tests[testIndex++];
                        if (!test) return [3 /*break*/, 5];
                        if (!test.shouldRun) {
                            if (test.skip) {
                                console.log("# skip " + test.name);
                            }
                            skipped += 1;
                            dequeue();
                            return [2 /*return*/];
                        }
                        console.log("# " + test.name);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, test.fn(assert)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        failed += 1;
                        console.log("not ok " + assertIndex + " \u2014 " + err_1.message);
                        console.error("  " + err_1.stack.replace(/^\s+/gm, '    '));
                        return [3 /*break*/, 4];
                    case 4:
                        dequeue();
                        return [3 /*break*/, 6];
                    case 5:
                        total = passed + failed + skipped;
                        console.log("\n1.." + total);
                        console.log("# tests " + total);
                        if (passed)
                            console.log("# pass " + passed);
                        if (failed)
                            console.log("# fail " + failed);
                        if (skipped)
                            console.log("# skip " + skipped);
                        fulfil();
                        if (isNode)
                            process.exit(failed ? 1 : 0);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    //# sourceMappingURL=tape-modern.esm.js.map

    function _isPlaceholder(a) {
           return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
    }

    /**
     * Optimized internal one-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry1(fn) {
      return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
          return f1;
        } else {
          return fn.apply(this, arguments);
        }
      };
    }

    /**
     * Optimized internal two-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curry2(fn) {
      return function f2(a, b) {
        switch (arguments.length) {
          case 0:
            return f2;
          case 1:
            return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
              return fn(a, _b);
            });
          default:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b);
            }) : fn(a, b);
        }
      };
    }

    function _arity(n, fn) {
      /* eslint-disable no-unused-vars */
      switch (n) {
        case 0:
          return function () {
            return fn.apply(this, arguments);
          };
        case 1:
          return function (a0) {
            return fn.apply(this, arguments);
          };
        case 2:
          return function (a0, a1) {
            return fn.apply(this, arguments);
          };
        case 3:
          return function (a0, a1, a2) {
            return fn.apply(this, arguments);
          };
        case 4:
          return function (a0, a1, a2, a3) {
            return fn.apply(this, arguments);
          };
        case 5:
          return function (a0, a1, a2, a3, a4) {
            return fn.apply(this, arguments);
          };
        case 6:
          return function (a0, a1, a2, a3, a4, a5) {
            return fn.apply(this, arguments);
          };
        case 7:
          return function (a0, a1, a2, a3, a4, a5, a6) {
            return fn.apply(this, arguments);
          };
        case 8:
          return function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return fn.apply(this, arguments);
          };
        case 9:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return fn.apply(this, arguments);
          };
        case 10:
          return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return fn.apply(this, arguments);
          };
        default:
          throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
      }
    }

    /**
     * Internal curryN function.
     *
     * @private
     * @category Function
     * @param {Number} length The arity of the curried function.
     * @param {Array} received An array of arguments received thus far.
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */
    function _curryN(length, received, fn) {
      return function () {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while (combinedIdx < received.length || argsIdx < arguments.length) {
          var result;
          if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
            result = received[combinedIdx];
          } else {
            result = arguments[argsIdx];
            argsIdx += 1;
          }
          combined[combinedIdx] = result;
          if (!_isPlaceholder(result)) {
            left -= 1;
          }
          combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
      };
    }

    /**
     * Returns a curried equivalent of the provided function, with the specified
     * arity. The curried function has two unusual capabilities. First, its
     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.5.0
     * @category Function
     * @sig Number -> (* -> a) -> (* -> a)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curry
     * @example
     *
     *      const sumArgs = (...args) => R.sum(args);
     *
     *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
     *      const f = curriedAddFourNumbers(1, 2);
     *      const g = f(3);
     *      g(4); //=> 10
     */
    var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
      if (length === 1) {
        return _curry1(fn);
      }
      return _arity(length, _curryN(length, [], fn));
    });

    /**
     * Tests whether or not an object is an array.
     *
     * @private
     * @param {*} val The object to test.
     * @return {Boolean} `true` if `val` is an array, `false` otherwise.
     * @example
     *
     *      _isArray([]); //=> true
     *      _isArray(null); //=> false
     *      _isArray({}); //=> false
     */
    var _isArray = Array.isArray || function _isArray(val) {
      return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
    };

    function _isTransformer(obj) {
      return obj != null && typeof obj['@@transducer/step'] === 'function';
    }

    /**
     * Returns a function that dispatches with different strategies based on the
     * object in list position (last argument). If it is an array, executes [fn].
     * Otherwise, if it has a function with one of the given method names, it will
     * execute that function (functor case). Otherwise, if it is a transformer,
     * uses transducer [xf] to return a new transformer (transducer case).
     * Otherwise, it will default to executing [fn].
     *
     * @private
     * @param {Array} methodNames properties to check for a custom implementation
     * @param {Function} xf transducer to initialize if object is transformer
     * @param {Function} fn default ramda implementation
     * @return {Function} A function that dispatches on object in list position
     */
    function _dispatchable(methodNames, xf, fn) {
      return function () {
        if (arguments.length === 0) {
          return fn();
        }
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!_isArray(obj)) {
          var idx = 0;
          while (idx < methodNames.length) {
            if (typeof obj[methodNames[idx]] === 'function') {
              return obj[methodNames[idx]].apply(obj, args);
            }
            idx += 1;
          }
          if (_isTransformer(obj)) {
            var transducer = xf.apply(null, args);
            return transducer(obj);
          }
        }
        return fn.apply(this, arguments);
      };
    }

    var _xfBase = {
      init: function () {
        return this.xf['@@transducer/init']();
      },
      result: function (result) {
        return this.xf['@@transducer/result'](result);
      }
    };

    function _map(fn, functor) {
      var idx = 0;
      var len = functor.length;
      var result = Array(len);
      while (idx < len) {
        result[idx] = fn(functor[idx]);
        idx += 1;
      }
      return result;
    }

    function _isString(x) {
      return Object.prototype.toString.call(x) === '[object String]';
    }

    /**
     * Tests whether or not an object is similar to an array.
     *
     * @private
     * @category Type
     * @category List
     * @sig * -> Boolean
     * @param {*} x The object to test.
     * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
     * @example
     *
     *      _isArrayLike([]); //=> true
     *      _isArrayLike(true); //=> false
     *      _isArrayLike({}); //=> false
     *      _isArrayLike({length: 10}); //=> false
     *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
     */
    var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
      if (_isArray(x)) {
        return true;
      }
      if (!x) {
        return false;
      }
      if (typeof x !== 'object') {
        return false;
      }
      if (_isString(x)) {
        return false;
      }
      if (x.nodeType === 1) {
        return !!x.length;
      }
      if (x.length === 0) {
        return true;
      }
      if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
      }
      return false;
    });

    var XWrap = /*#__PURE__*/function () {
      function XWrap(fn) {
        this.f = fn;
      }
      XWrap.prototype['@@transducer/init'] = function () {
        throw new Error('init not implemented on XWrap');
      };
      XWrap.prototype['@@transducer/result'] = function (acc) {
        return acc;
      };
      XWrap.prototype['@@transducer/step'] = function (acc, x) {
        return this.f(acc, x);
      };

      return XWrap;
    }();

    function _xwrap(fn) {
      return new XWrap(fn);
    }

    /**
     * Creates a function that is bound to a context.
     * Note: `R.bind` does not provide the additional argument-binding capabilities of
     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Function
     * @category Object
     * @sig (* -> *) -> {*} -> (* -> *)
     * @param {Function} fn The function to bind to context
     * @param {Object} thisObj The context to bind `fn` to
     * @return {Function} A function that will execute in the context of `thisObj`.
     * @see R.partial
     * @example
     *
     *      const log = R.bind(console.log, console);
     *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
     *      // logs {a: 2}
     * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
     */
    var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
      return _arity(fn.length, function () {
        return fn.apply(thisObj, arguments);
      });
    });

    function _arrayReduce(xf, acc, list) {
      var idx = 0;
      var len = list.length;
      while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        idx += 1;
      }
      return xf['@@transducer/result'](acc);
    }

    function _iterableReduce(xf, acc, iter) {
      var step = iter.next();
      while (!step.done) {
        acc = xf['@@transducer/step'](acc, step.value);
        if (acc && acc['@@transducer/reduced']) {
          acc = acc['@@transducer/value'];
          break;
        }
        step = iter.next();
      }
      return xf['@@transducer/result'](acc);
    }

    function _methodReduce(xf, acc, obj, methodName) {
      return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
    }

    var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

    function _reduce(fn, acc, list) {
      if (typeof fn === 'function') {
        fn = _xwrap(fn);
      }
      if (_isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
      }
      if (typeof list['fantasy-land/reduce'] === 'function') {
        return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
      }
      if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
      }
      if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
      }
      if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list, 'reduce');
      }

      throw new TypeError('reduce: list must be array or iterable');
    }

    var XMap = /*#__PURE__*/function () {
      function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
      }
      XMap.prototype['@@transducer/init'] = _xfBase.init;
      XMap.prototype['@@transducer/result'] = _xfBase.result;
      XMap.prototype['@@transducer/step'] = function (result, input) {
        return this.xf['@@transducer/step'](result, this.f(input));
      };

      return XMap;
    }();

    var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
      return new XMap(f, xf);
    });

    function _has(prop, obj) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var toString = Object.prototype.toString;
    var _isArguments = /*#__PURE__*/function () {
      return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
        return toString.call(x) === '[object Arguments]';
      } : function _isArguments(x) {
        return _has('callee', x);
      };
    }();

    // cover IE < 9 keys issues
    var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
    var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    // Safari bug
    var hasArgsEnumBug = /*#__PURE__*/function () {

      return arguments.propertyIsEnumerable('length');
    }();

    var contains = function contains(list, item) {
      var idx = 0;
      while (idx < list.length) {
        if (list[idx] === item) {
          return true;
        }
        idx += 1;
      }
      return false;
    };

    /**
     * Returns a list containing the names of all the enumerable own properties of
     * the supplied object.
     * Note that the order of the output array is not guaranteed to be consistent
     * across different JS platforms.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {k: v} -> [k]
     * @param {Object} obj The object to extract properties from
     * @return {Array} An array of the object's own properties.
     * @see R.keysIn, R.values
     * @example
     *
     *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
     */
    var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) : /*#__PURE__*/_curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });

    /**
     * Takes a function and
     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
     * applies the function to each of the functor's values, and returns
     * a functor of the same shape.
     *
     * Ramda provides suitable `map` implementations for `Array` and `Object`,
     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
     *
     * Dispatches to the `map` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * Also treats functions as functors and will compose them together.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => (a -> b) -> f a -> f b
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {Array} list The list to be iterated over.
     * @return {Array} The new list.
     * @see R.transduce, R.addIndex
     * @example
     *
     *      const double = x => x * 2;
     *
     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
     *
     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
     * @symb R.map(f, [a, b]) = [f(a), f(b)]
     * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
     * @symb R.map(f, functor_o) = functor_o.map(f)
     */
    var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
      switch (Object.prototype.toString.call(functor)) {
        case '[object Function]':
          return curryN(functor.length, function () {
            return fn.call(this, functor.apply(this, arguments));
          });
        case '[object Object]':
          return _reduce(function (acc, key) {
            acc[key] = fn(functor[key]);
            return acc;
          }, {}, keys(functor));
        default:
          return _map(fn, functor);
      }
    }));

    /**
     * Retrieve the value at a given path.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> {a} -> a | Undefined
     * @param {Array} path The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @see R.prop
     * @example
     *
     *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
     *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
     */
    var path = /*#__PURE__*/_curry2(function path(paths, obj) {
      var val = obj;
      var idx = 0;
      while (idx < paths.length) {
        if (val == null) {
          return;
        }
        val = val[paths[idx]];
        idx += 1;
      }
      return val;
    });

    /**
     * Returns a function that when supplied an object returns the indicated
     * property of that object, if it exists.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig s -> {s: a} -> a | Undefined
     * @param {String} p The property name
     * @param {Object} obj The object to query
     * @return {*} The value at `obj.p`.
     * @see R.path
     * @example
     *
     *      R.prop('x', {x: 100}); //=> 100
     *      R.prop('x', {}); //=> undefined
     *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
     */

    var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
      return path([p], obj);
    });

    /**
     * Returns a new list by plucking the same named property off all objects in
     * the list supplied.
     *
     * `pluck` will work on
     * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
     * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => k -> f {k: v} -> f v
     * @param {Number|String} key The key name to pluck off of each object.
     * @param {Array} f The array or functor to consider.
     * @return {Array} The list of values for the given key.
     * @see R.props
     * @example
     *
     *      var getAges = R.pluck('age');
     *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
     *
     *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
     *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
     * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
     * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
     */
    var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
      return map(prop(p), list);
    });

    /**
     * Gives a single-word string description of the (native) type of a value,
     * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
     * attempt to distinguish user Object types any further, reporting them all as
     * 'Object'.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Type
     * @sig (* -> {*}) -> String
     * @param {*} val The value to test
     * @return {String}
     * @example
     *
     *      R.type({}); //=> "Object"
     *      R.type(1); //=> "Number"
     *      R.type(false); //=> "Boolean"
     *      R.type('s'); //=> "String"
     *      R.type(null); //=> "Null"
     *      R.type([]); //=> "Array"
     *      R.type(/[A-z]/); //=> "RegExp"
     *      R.type(() => {}); //=> "Function"
     *      R.type(undefined); //=> "Undefined"
     */
    var type = /*#__PURE__*/_curry1(function type(val) {
      return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
    });

    function _arrayFromIterator(iter) {
      var list = [];
      var next;
      while (!(next = iter.next()).done) {
        list.push(next.value);
      }
      return list;
    }

    function _includesWith(pred, x, list) {
      var idx = 0;
      var len = list.length;

      while (idx < len) {
        if (pred(x, list[idx])) {
          return true;
        }
        idx += 1;
      }
      return false;
    }

    function _functionName(f) {
      // String(x => x) evaluates to "x => x", so the pattern may not match.
      var match = String(f).match(/^function (\w*)/);
      return match == null ? '' : match[1];
    }

    // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    function _objectIs(a, b) {
      // SameValue algorithm
      if (a === b) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return a !== 0 || 1 / a === 1 / b;
      } else {
        // Step 6.a: NaN == NaN
        return a !== a && b !== b;
      }
    }

    var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

    /**
     * private _uniqContentEquals function.
     * That function is checking equality of 2 iterator contents with 2 assumptions
     * - iterators lengths are the same
     * - iterators values are unique
     *
     * false-positive result will be returned for comparision of, e.g.
     * - [1,2,3] and [1,2,3,4]
     * - [1,1,1] and [1,2,3]
     * */

    function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
      var a = _arrayFromIterator(aIterator);
      var b = _arrayFromIterator(bIterator);

      function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
      }

      // if *a* array contains any element that is not included in *b*
      return !_includesWith(function (b, aItem) {
        return !_includesWith(eq, aItem, b);
      }, b, a);
    }

    function _equals(a, b, stackA, stackB) {
      if (_objectIs$1(a, b)) {
        return true;
      }

      var typeA = type(a);

      if (typeA !== type(b)) {
        return false;
      }

      if (a == null || b == null) {
        return false;
      }

      if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
        return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
      }

      if (typeof a.equals === 'function' || typeof b.equals === 'function') {
        return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
      }

      switch (typeA) {
        case 'Arguments':
        case 'Array':
        case 'Object':
          if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
            return a === b;
          }
          break;
        case 'Boolean':
        case 'Number':
        case 'String':
          if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
            return false;
          }
          break;
        case 'Date':
          if (!_objectIs$1(a.valueOf(), b.valueOf())) {
            return false;
          }
          break;
        case 'Error':
          return a.name === b.name && a.message === b.message;
        case 'RegExp':
          if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
            return false;
          }
          break;
      }

      var idx = stackA.length - 1;
      while (idx >= 0) {
        if (stackA[idx] === a) {
          return stackB[idx] === b;
        }
        idx -= 1;
      }

      switch (typeA) {
        case 'Map':
          if (a.size !== b.size) {
            return false;
          }

          return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
        case 'Set':
          if (a.size !== b.size) {
            return false;
          }

          return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
        case 'Arguments':
        case 'Array':
        case 'Object':
        case 'Boolean':
        case 'Number':
        case 'String':
        case 'Date':
        case 'Error':
        case 'RegExp':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'ArrayBuffer':
          break;
        default:
          // Values of other types are only equal if identical.
          return false;
      }

      var keysA = keys(a);
      if (keysA.length !== keys(b).length) {
        return false;
      }

      var extendedStackA = stackA.concat([a]);
      var extendedStackB = stackB.concat([b]);

      idx = keysA.length - 1;
      while (idx >= 0) {
        var key = keysA[idx];
        if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
          return false;
        }
        idx -= 1;
      }
      return true;
    }

    /**
     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
     * cyclical data structures.
     *
     * Dispatches symmetrically to the `equals` methods of both arguments, if
     * present.
     *
     * @func
     * @memberOf R
     * @since v0.15.0
     * @category Relation
     * @sig a -> b -> Boolean
     * @param {*} a
     * @param {*} b
     * @return {Boolean}
     * @example
     *
     *      R.equals(1, 1); //=> true
     *      R.equals(1, '1'); //=> false
     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
     *
     *      const a = {}; a.v = a;
     *      const b = {}; b.v = b;
     *      R.equals(a, b); //=> true
     */
    var equals = /*#__PURE__*/_curry2(function equals(a, b) {
      return _equals(a, b, [], []);
    });

    function _indexOf(list, a, idx) {
      var inf, item;
      // Array.prototype.indexOf doesn't exist below IE9
      if (typeof list.indexOf === 'function') {
        switch (typeof a) {
          case 'number':
            if (a === 0) {
              // manually crawl the list to distinguish between +0 and -0
              inf = 1 / a;
              while (idx < list.length) {
                item = list[idx];
                if (item === 0 && 1 / item === inf) {
                  return idx;
                }
                idx += 1;
              }
              return -1;
            } else if (a !== a) {
              // NaN
              while (idx < list.length) {
                item = list[idx];
                if (typeof item === 'number' && item !== item) {
                  return idx;
                }
                idx += 1;
              }
              return -1;
            }
            // non-zero numbers can utilise Set
            return list.indexOf(a, idx);

          // all these types can utilise Set
          case 'string':
          case 'boolean':
          case 'function':
          case 'undefined':
            return list.indexOf(a, idx);

          case 'object':
            if (a === null) {
              // null can utilise Set
              return list.indexOf(a, idx);
            }
        }
      }
      // anything else not covered above, defer to R.equals
      while (idx < list.length) {
        if (equals(list[idx], a)) {
          return idx;
        }
        idx += 1;
      }
      return -1;
    }

    function _includes(a, list) {
      return _indexOf(list, a, 0) >= 0;
    }

    /**
     * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
     * terms, to at least one element of the given list; `false` otherwise.
     * Works also with strings.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig a -> [a] -> Boolean
     * @param {Object} a The item to compare against.
     * @param {Array} list The array to consider.
     * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
     * @see R.includes
     * @deprecated since v0.26.0
     * @example
     *
     *      R.contains(3, [1, 2, 3]); //=> true
     *      R.contains(4, [1, 2, 3]); //=> false
     *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
     *      R.contains([42], [[42]]); //=> true
     *      R.contains('ba', 'banana'); //=>true
     */
    var contains$1 = /*#__PURE__*/_curry2(_includes);

    /**
     * Returns `true` if one or both of its arguments are `true`. Returns `false`
     * if both arguments are `false`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Logic
     * @sig a -> b -> a | b
     * @param {Any} a
     * @param {Any} b
     * @return {Any} the first argument if truthy, otherwise the second argument.
     * @see R.either
     * @example
     *
     *      R.or(true, true); //=> true
     *      R.or(true, false); //=> true
     *      R.or(false, true); //=> true
     *      R.or(false, false); //=> false
     */
    var or = /*#__PURE__*/_curry2(function or(a, b) {
      return a || b;
    });

    /**
     * Returns `true` if the first argument is less than the second; `false`
     * otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Relation
     * @sig Ord a => a -> a -> Boolean
     * @param {*} a
     * @param {*} b
     * @return {Boolean}
     * @see R.gt
     * @example
     *
     *      R.lt(2, 1); //=> false
     *      R.lt(2, 2); //=> false
     *      R.lt(2, 3); //=> true
     *      R.lt('a', 'z'); //=> true
     *      R.lt('z', 'a'); //=> false
     */
    var lt = /*#__PURE__*/_curry2(function lt(a, b) {
      return a < b;
    });

    /**
     * Returns a copy of the list, sorted according to the comparator function,
     * which should accept two values at a time and return a negative number if the
     * first value is smaller, a positive number if it's larger, and zero if they
     * are equal. Please note that this is a **copy** of the list. It does not
     * modify the original.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, a) -> Number) -> [a] -> [a]
     * @param {Function} comparator A sorting function :: a -> b -> Int
     * @param {Array} list The list to sort
     * @return {Array} a new array with its elements sorted by the comparator function.
     * @example
     *
     *      const diff = function(a, b) { return a - b; };
     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
     */
    var sort = /*#__PURE__*/_curry2(function sort(comparator, list) {
      return Array.prototype.slice.call(list, 0).sort(comparator);
    });

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var tapBrowserColor = createCommonjsModule(function (module) {
    /**
     * Activate the runner by overriding `console.log` to intercept tap output.
     * Call the return value to undo the override.
     */

    module.exports = function() {
      var olog = console.log;
      var pre = document.body.appendChild(document.createElement('pre'));
      style(); // Apply initial pending style.
      console.log = function(line) {
        parse(line);
        style();
        olog.apply(console, arguments);
        pre.innerHTML += line + '\n';
      };

      return function undo() {
        console.log = olog;
      }
    };

    /**
     * These control what colors are used for the pending/failing/passing states.
     * Ensure that these are assigned by individual value, and that the entire
     * object is not assigned at once to ensure that references are intact.
     */

    var colors = module.exports.colors = {
        PENDING: '#FCD62A'
      , FAILING: '#F28E82'
      , PASSING: '#8ECA6C'
    };

    var failed = 0;
    var passed = 0;

    function parse(line) {
      if (typeof line !== 'string') line = line + '';
      if (line.indexOf('ok') === 0) {
        passed += 1;
        return;
      }

      if (line.indexOf('not ok') === 0) {
        failed += 1;
        return;
      }
    }

    function style() {
      var s = document.body.style;
      if (failed > 0) {
        s.backgroundColor = colors.FAILING;
      } else if (passed > 0 && failed === 0) {
        s.backgroundColor = colors.PASSING;
      } else {
        s.backgroundColor = colors.PENDING;
      }
    }
    });
    var tapBrowserColor_1 = tapBrowserColor.colors;

    /**
     * Level 6
     *
     * Ramda all the things
     */

    /**
     * Level 6 - Challenge 1
     *
     * find - applies a function to each element of an array and returns the first element for which the function returns a truthy value.
     *
     * you hae a deck of cards, the cards is a property on the deck object.
     * you can inpect the shape of the cards object by doing a console.log(JSON.stringify(___, null, 2))
     *
     * Challenge:
     *   Use the find function to find the Ace of Clubs and return that card to the
     *   caller.
     *
     *   HINT: a common mapper method is obj => obj.property = 'somevalue' -
     *   this function is used so often there is a function in ramda that makes this
     *   easier to implement called propEq
     *
     *   http://ramdajs.com/docs/#propEq
     *
     *   (See if you can use propEq in this challenge)
     */
    const challenge1 = deck => {
      // show card object
      // console.log(JSON.stringify(deck.cards[0], null, 2))
      return null
    };

    /** Level 6 = Challenge 2
     *
     * Challenge:
     *   Find all of the one eyed royals and suicide king
     *   then transfrom the obects to array of card images
     *   finally just a string of images.
     *
     *  HINT: break down everything into smaller pieces
     *
     * http://ramdajs.com/docs/#anypass
     * http://ramdajs.com/docs/#propEq
     * http://ramdajs.com/docs/#join
     * http://ramdajs.com/docs/#path
     *
     */
    const challenge2 = deck => {

      return null
    };

    /** level 6 - Challenge 3
     *
     * Challenge:

     * Build a Full House in one Reduce
     *
     * Using reduce iterate through the cards and
     *   create a full house, which means
     *   three of the cards have to be the same value
     *   and two of  the cards have be the same value
     *   for a total of 5 cards.
     *
     * You can pick your on fullhouse then call validate
     *
     *  const hand = ['3S', '3H', '3C', 'AH', 'AS']
     *  use reduce to create an array of cards
     *  then use validate to check your work
     *  validate(result, hand)
     *
     *  Check out contains, prop, append, always, ifElse from ramdajs
     */
    const challenge3 = (deck, validate) => {
      const correcthand = ['3S', '3H', '3C', 'AH', 'AS']; // create your own
      const myhand = []; // add your code here
      validate(myhand, correcthand);
    };

    /**
     * Level 6 - Challenge 4
     *
     * 52 Card Pickup
     *
     * Challenge, given a deck of card use the ramda sort and prop
     * functions to put the cards in order by the code prop.
     *
     */
    const challenge4 = deck => {
      return false 
    };

    var level6 = () => {
      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(results => {
          const deck = results;
          test('Level 6 - Challenge 1', t => {
            t.deepequals(challenge1(), {
              suit: 'CLUBS',
              value: 'ACE',
              images: {
                svg: 'http://deckofcardsapi.com/static/img/AC.svg',
                png: 'http://deckofcardsapi.com/static/img/AC.png'
              },
              image: 'http://deckofcardsapi.com/static/img/AC.png',
              code: 'AC'
            });
          });

          test('Level 6 - Challenge 2', t => {
            
            const results = challenge2();

            t.ok(contains$1('img/KH', or(results, '')));
            t.ok(contains$1(`img/KD`, or(results, '')));
            t.ok(contains$1(`img/JH`, or(results, '')));
            t.ok(contains$1(`img/JS`, or(results, '')));
          });

          test('Level 6 - Challenge 3', t => {
            const desc = (a, b) => (lt(a, b) ? -1 : 1);
            challenge3(deck, (actualHand, correctHand) => {
              t.deepequals(
                sort(desc, pluck('code', actualHand)),
                sort(desc, correctHand)
              );
            });
          });

          test('Level 6 - Challenge 4', t => {
            const actual = pluck('code', challenge4());
            t.deepequals(actual, [
              '0C',
              '0D',
              '0H',
              '0S',
              '2C',
              '2D',
              '2H',
              '2S',
              '3C',
              '3D',
              '3H',
              '3S',
              '4C',
              '4D',
              '4H',
              '4S',
              '5C',
              '5D',
              '5H',
              '5S',
              '6C',
              '6D',
              '6H',
              '6S',
              '7C',
              '7D',
              '7H',
              '7S',
              '8C',
              '8D',
              '8H',
              '8S',
              '9C',
              '9D',
              '9H',
              '9S',
              'AC',
              'AD',
              'AH',
              'AS',
              'JC',
              'JD',
              'JH',
              'JS',
              'KC',
              'KD',
              'KH',
              'KS',
              'QC',
              'QD',
              'QH',
              'QS'
            ]);
          });
        });
    };

    /*
    import level7 from './level7'
    import levelExtra from './levelExtra'
    */
    assert.deepequals = (a,b,msg) => {
      assert.ok(equals(a,b), msg);
    };
    // levelExtra()
    // level7()
    level6();
    // level5()
    // level4()
    //level3()
    //level2()
    //level1()

    window.test = test;
    tapBrowserColor();
    console.log('Welcome to Cybertron\n');

}());
