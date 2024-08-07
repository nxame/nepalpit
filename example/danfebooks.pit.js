(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("danfebooks", [], factory);
	else if(typeof exports === 'object')
		exports["danfebooks"] = factory();
	else
		root["danfebooks"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ }),

/***/ "./src/breakdown.ts":
/*!**************************!*\
  !*** ./src/breakdown.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.breakdown = void 0;
const data_1 = __importDefault(__webpack_require__(/*! ./data */ "./src/data.ts"));
const lodash_clonedeep_1 = __importDefault(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js"));
const breakdown = (year) => {
    const brackets = (0, lodash_clonedeep_1.default)(data_1.default[year]);
    return brackets;
};
exports.breakdown = breakdown;


/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAmountRounded = exports.getTotalTaxableAmount = void 0;
exports.getTotalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets;
/**
 * Returns the total taxable amount based on the provided parameters.
 *
 * @param {Object} params - Parameters for calculating taxable amount.
 * @param {number} params.totalIncome - Total income before deductions.
 * @param {number} params.epf - Employees' Provident Fund.
 * @param {number} params.cit - Contribution to the Citizen Investment Trust.
 * @param {number} params.ssf - Social Security Fund.
 * @param {number} params.insurance - Insurance amount.
 * @param {Object} params.taxSettings - Settings for tax calculation.
 * @param {number} params.taxSettings.maxDeductionRate - Maximum deduction rate.
 * @param {number} params.taxSettings.maxDeductionLimit - Maximum deduction limit.
 * @param {number} params.taxSettings.maxDeductionLimitWithSSF - Maximum deduction limit considering Social Security Fund.
 * @param {number} params.taxSettings.maxInsuranceDeductionLimit - Maximum insurance deduction limit.
 * @returns {Object} TotalTaxableAmountResult - Object containing taxable income and deductions.
 * @returns {number} TotalTaxableAmountResult.taxableIncome - Total taxable income.
 * @returns {number} TotalTaxableAmountResult.sumOfSsfEpfAndCit - Sum of Employees' Provident Fund, Citizen Investment Trust, and Social Security Fund.
 * @returns {number} TotalTaxableAmountResult.finalInsurance - Final insurance amount considered for tax calculation.
 */
const getTotalTaxableAmount = ({ totalIncome, epf, cit, ssf, insurance, taxSettings, }) => {
    const { maxDeductionRate, maxDeductionLimit, maxDeductionLimitWithSSF, maxInsuranceDeductionLimit, } = taxSettings;
    const totalDeduction = epf + cit + ssf;
    const maxDeductableAmount = totalIncome * maxDeductionRate;
    let actualDeduction = 0;
    let deductionThreshold = 0;
    // if totalDeduction consists of SSF
    if (maxDeductionLimitWithSSF && ssf > 0) {
        // defining deductionThreshold comparing maxDeductionLimitWithSSF (5 lakhs) and maxDeductableAmount (33%) whichever is lower
        deductionThreshold =
            maxDeductionLimitWithSSF < maxDeductableAmount
                ? maxDeductionLimitWithSSF
                : maxDeductableAmount;
    }
    else {
        // defining deductionThreshold comparing maxDeductionLimit (3 lakhs) and maxDeductableAmount (33%) whichever is lower
        deductionThreshold =
            maxDeductionLimit < maxDeductableAmount
                ? maxDeductionLimit
                : maxDeductableAmount;
    }
    if (totalDeduction > deductionThreshold) {
        actualDeduction = deductionThreshold;
    }
    else {
        actualDeduction = totalDeduction;
    }
    // if insurance is greater than 40,000
    let actualInsurance = insurance;
    if (maxInsuranceDeductionLimit && insurance > maxInsuranceDeductionLimit) {
        actualInsurance = maxInsuranceDeductionLimit;
    }
    return {
        taxableIncome: totalIncome - actualDeduction - actualInsurance,
        sumOfSsfEpfAndCit: actualDeduction,
        finalInsurance: actualInsurance,
    };
};
exports.getTotalTaxableAmount = getTotalTaxableAmount;
/**
 * Returns the total tax with tax brackets
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from the last bracket)
 */
const getTotalTaxForRateWithIncome = (taxRate, totalTaxableIncome) => {
    const incomeTaxRateDifference = taxRate.end - taxRate.start;
    const totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference;
    const carry = totalMinusDifference > 0 ? totalMinusDifference : 0;
    if (totalTaxableIncome > 0) {
        if (totalTaxableIncome >= incomeTaxRateDifference) {
            return {
                taxLiability: incomeTaxRateDifference * taxRate.rate,
                taxRate: taxRate.rate,
                assessibleIncome: incomeTaxRateDifference,
                carry,
            };
        }
        return {
            taxLiability: totalTaxableIncome * taxRate.rate,
            taxRate: taxRate.rate,
            assessibleIncome: totalTaxableIncome,
            carry,
        };
    }
    return {
        taxLiability: 0,
        taxRate: taxRate.rate,
        assessibleIncome: 0,
        carry: carry,
    };
};
/**
 * Returns all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 * @param ssf if totalDeduction consists of SSF
 */
function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount, ssf) {
    const taxBreakDownArray = [];
    return taxBrackets.map((item, index) => {
        // check if ssf has been deducted
        if (ssf && index === 0) {
            item.rate = 0;
        }
        const result = getTotalTaxForRateWithIncome(item, index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry);
        taxBreakDownArray.push(result);
        return result;
    });
}
/**
 * Returns a two-decimal number converted from the original input float number
 *
 * @param amount floating number
 */
const getAmountRounded = (amount) => {
    return Math.round(amount * 100) / 100;
};
exports.getAmountRounded = getAmountRounded;


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*!
 * Data
 * Tax Slab Data
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const data = {
    '2070/71': {
        fyStartDate: 'July 16, 2013',
        fyStartDateNe: 'Shrawan 1, 2070',
        fyEndDate: 'July 16, 2014',
        fyEndDateNe: 'Ashad 32, 2071',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2071/72': {
        fyStartDate: 'July 17, 2014',
        fyStartDateNe: 'Shrawan 1, 2071',
        fyEndDate: 'July 16, 2015',
        fyEndDateNe: 'Ashad 31, 2072',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2072/73': {
        fyStartDate: 'July 17, 2015',
        fyStartDateNe: 'Shrawan 1, 2072',
        fyEndDate: 'July 15, 2016',
        fyEndDateNe: 'Ashad 31, 2073',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2073/74': {
        fyStartDate: 'July 16, 2016',
        fyStartDateNe: 'Shrawan 1, 2073',
        fyEndDate: 'July 15, 2017',
        fyEndDateNe: 'Ashad 31, 2074',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2074/75': {
        fyStartDate: 'Jul 16, 2017',
        fyStartDateNe: 'Shrawan 1, 2074',
        fyEndDate: 'July 16, 2018',
        fyEndDateNe: 'Asadh 32, 2075',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2075/76': {
        fyStartDate: 'July 17, 2018',
        fyStartDateNe: 'Shrawan 1, 2075',
        fyEndDate: 'July 16, 2019',
        fyEndDateNe: 'Asadh 31, 2076',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2076/77': {
        fyStartDate: 'July 17, 2019',
        fyStartDateNe: 'Shrawan 1, 2076',
        fyEndDate: 'July 15, 2020',
        fyEndDateNe: 'Asadh 31, 2077',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2077/78': {
        fyStartDate: 'July 16, 2013',
        fyStartDateNe: 'Shrawan 1, 2070',
        fyEndDate: 'July 16, 2014',
        fyEndDateNe: 'Ashad 32, 2071',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2078/79': {
        fyStartDate: 'July 16, 2021',
        fyStartDateNe: 'Shrawan 1, 2078',
        fyEndDate: 'July 16, 2022',
        fyEndDateNe: 'Asadh 32, 2079',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2079/80': {
        fyStartDate: 'July 17, 2022',
        fyStartDateNe: 'Shrawan 1, 2079',
        fyEndDate: 'July 16, 2023',
        fyEndDateNe: 'Asadh 31, 2080',
        maxDeductionRate: 0.33,
        maxDeductionLimit: 300000,
        brackets: {
            single: [
                {
                    start: 0.0,
                    end: 400000.0,
                    rate: 0.01,
                },
                {
                    start: 400000.0,
                    end: 500000.0,
                    rate: 0.1,
                },
                {
                    start: 500000.0,
                    end: 700000.0,
                    rate: 0.2,
                },
                {
                    start: 700000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
            married: [
                {
                    start: 0.0,
                    end: 450000.0,
                    rate: 0.01,
                },
                {
                    start: 450000.0,
                    end: 550000.0,
                    rate: 0.1,
                },
                {
                    start: 550000.0,
                    end: 750000.0,
                    rate: 0.2,
                },
                {
                    start: 750000.0,
                    end: 2000000.0,
                    rate: 0.3,
                },
            ],
        },
    },
    '2080/81': {
        fyStartDate: 'July 17, 2023',
        fyStartDateNe: 'Shrawan 1, 2080',
        fyEndDate: 'July 15, 2024',
        fyEndDateNe: 'Asadh 31, 2081',
        maxDeductionRate: 1 / 3,
        maxDeductionLimit: 300000,
        maxDeductionLimitWithSSF: 500000,
        maxInsuranceDeductionLimit: 40000,
        brackets: {
            single: [
                {
                    start: 0,
                    end: 500000,
                    rate: 0.01,
                },
                {
                    start: 500000,
                    end: 700000,
                    rate: 0.1,
                },
                {
                    start: 700000,
                    end: 1000000,
                    rate: 0.2,
                },
                {
                    start: 1000000,
                    end: 2000000,
                    rate: 0.3,
                },
                {
                    start: 2000000,
                    end: 5000000,
                    rate: 0.36,
                },
                {
                    start: 5000000,
                    end: Infinity,
                    rate: 0.39,
                },
            ],
            married: [
                {
                    start: 0,
                    end: 600000,
                    rate: 0.01,
                },
                {
                    start: 600000,
                    end: 800000,
                    rate: 0.1,
                },
                {
                    start: 800000,
                    end: 1100000,
                    rate: 0.2,
                },
                {
                    start: 1100000,
                    end: 2000000,
                    rate: 0.3,
                },
                {
                    start: 2000000,
                    end: 5000000,
                    rate: 0.36,
                },
                {
                    start: 5000000,
                    end: Infinity,
                    rate: 0.39,
                },
            ],
        },
    },
};
exports["default"] = data;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/en/calculators/nepal-personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2024 DanfeBooks®
 *
 * index.ts
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = exports.tax = void 0;
const breakdown_1 = __webpack_require__(/*! ./breakdown */ "./src/breakdown.ts");
const calculator_1 = __webpack_require__(/*! ./calculator */ "./src/calculator.ts");
const tax = (options) => {
    const { income, epf, cit, ssf, insurance, year, single, noOfMonths = 12, } = options;
    // Parameter validation - Check for negative values
    if (income < 0 ||
        epf < 0 ||
        cit < 0 ||
        ssf < 0 ||
        insurance < 0 ||
        noOfMonths < 0) {
        throw new Error('Tax parameters (Income, EPF, CIT, SSF, Insurance) cannot be negative.');
    }
    const meta = (0, breakdown_1.breakdown)(year);
    const taxSettings = {
        maxDeductionRate: meta.maxDeductionRate,
        maxDeductionLimit: meta.maxDeductionLimit,
        maxDeductionLimitWithSSF: meta.maxDeductionLimitWithSSF,
        maxInsuranceDeductionLimit: meta.maxInsuranceDeductionLimit,
    };
    const { taxableIncome, sumOfSsfEpfAndCit, finalInsurance, } = (0, calculator_1.getTotalTaxableAmount)({
        totalIncome: income,
        epf,
        cit,
        ssf,
        insurance,
        taxSettings,
    });
    const maritalStatus = single ? 'single' : 'married';
    const totalTaxAmountWithBrackets = (0, calculator_1.getTotalTaxAmountWithBrackets)(meta.brackets[maritalStatus], taxableIncome, ssf > 0);
    const result = {
        sumOfSsfEpfAndCit: sumOfSsfEpfAndCit,
        insurance: finalInsurance,
        totalIncome: income,
        totalDeduction: income - taxableIncome,
        netAssessable: taxableIncome,
        totalTaxWithBrackets: totalTaxAmountWithBrackets
            .filter((item) => item.assessibleIncome > 0)
            .map((item) => {
            const taxObj = {
                assessibleIncome: item.assessibleIncome,
                rate: item.taxRate * 100,
                taxLiability: item.taxLiability,
            };
            return taxObj;
        }),
        totalAssessibleIncome: totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.assessibleIncome, 0),
        totalTaxLiability: totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.taxLiability, 0),
        netTaxLiabilityMonthly: (0, calculator_1.getAmountRounded)(totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.taxLiability, 0) / noOfMonths),
    };
    return result;
};
exports.tax = tax;
const meta = () => {
    return 'meta work in porogress';
};
exports.meta = meta;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRLFVBQVU7QUFDN0IsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxVQUFVO0FBQzdCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVEsSUFBSSxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q3hCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTthQUMvQixDQUFDO1lBQ0YsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDLENBQUM7UUFDSCxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxNQUFNLENBQ3ZELENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFDOUQsQ0FBQyxDQUNEO1FBRUQsaUJBQWlCLEVBQUUsMEJBQTBCLENBQUMsTUFBTSxDQUNuRCxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxFQUMxRCxDQUFDLENBQ0Q7UUFFRCxzQkFBc0IsRUFBRSxpQ0FBZ0IsRUFDdkMsMEJBQTBCLENBQUMsTUFBTSxDQUNoQyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxFQUMxRCxDQUFDLENBQ0QsR0FBRyxVQUFVLENBQ2Q7S0FDRCxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDLENBQUM7QUFNTyxrQkFBRztBQUpaLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNqQixPQUFPLHdCQUF3QixDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVZLG9CQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvYnJlYWtkb3duLnRzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvY2FsY3VsYXRvci50cyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Z1bGxdIFNwZWNpZnkgYSBjbG9uZSBpbmNsdWRpbmcgc3ltYm9scy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICBpZiAoaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIGlmICghaXNBcnIpIHtcbiAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICB9XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBpc0Z1bGwsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG90eXBlIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZShwcm90bykge1xuICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIHRydWUpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9sIHByb3BlcnRpZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSBuYXRpdmVHZXRTeW1ib2xzID8gb3ZlckFyZyhuYXRpdmVHZXRTeW1ib2xzLCBPYmplY3QpIDogc3R1YkFycmF5O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEsXG4vLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuIiwiaW1wb3J0IGRhdGEsIHsgRmlzY2FsWWVhciB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuXG5jb25zdCBicmVha2Rvd24gPSAoeWVhcjogc3RyaW5nKTogRmlzY2FsWWVhciA9PiB7XG5cdGNvbnN0IGJyYWNrZXRzID0gY2xvbmVEZWVwKGRhdGFbeWVhcl0pO1xuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsImludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQge1xuXHR0YXhhYmxlSW5jb21lOiBudW1iZXI7XG5cdHN1bU9mU3NmRXBmQW5kQ2l0OiBudW1iZXI7XG5cdGZpbmFsSW5zdXJhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUYXhSYXRlIHtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHJhdGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHQge1xuXHR0YXhMaWFiaWxpdHk6IG51bWJlcjtcblx0dGF4UmF0ZTogbnVtYmVyO1xuXHRhc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdGNhcnJ5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRQYXJhbXMge1xuXHR0b3RhbEluY29tZTogbnVtYmVyO1xuXHRlcGY6IG51bWJlcjtcblx0Y2l0OiBudW1iZXI7XG5cdHNzZjogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0dGF4U2V0dGluZ3M6IHtcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiBudW1iZXI7XG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IG51bWJlcjtcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y/OiBudW1iZXI7XG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ/OiBudW1iZXI7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgdGF4YWJsZSBhbW91bnQgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgZm9yIGNhbGN1bGF0aW5nIHRheGFibGUgYW1vdW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50b3RhbEluY29tZSAtIFRvdGFsIGluY29tZSBiZWZvcmUgZGVkdWN0aW9ucy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuZXBmIC0gRW1wbG95ZWVzJyBQcm92aWRlbnQgRnVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMuY2l0IC0gQ29udHJpYnV0aW9uIHRvIHRoZSBDaXRpemVuIEludmVzdG1lbnQgVHJ1c3QuXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnNzZiAtIFNvY2lhbCBTZWN1cml0eSBGdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5pbnN1cmFuY2UgLSBJbnN1cmFuY2UgYW1vdW50LlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcy50YXhTZXR0aW5ncyAtIFNldHRpbmdzIGZvciB0YXggY2FsY3VsYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnRheFNldHRpbmdzLm1heERlZHVjdGlvblJhdGUgLSBNYXhpbXVtIGRlZHVjdGlvbiByYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50YXhTZXR0aW5ncy5tYXhEZWR1Y3Rpb25MaW1pdCAtIE1heGltdW0gZGVkdWN0aW9uIGxpbWl0LlxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy50YXhTZXR0aW5ncy5tYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YgLSBNYXhpbXVtIGRlZHVjdGlvbiBsaW1pdCBjb25zaWRlcmluZyBTb2NpYWwgU2VjdXJpdHkgRnVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMudGF4U2V0dGluZ3MubWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQgLSBNYXhpbXVtIGluc3VyYW5jZSBkZWR1Y3Rpb24gbGltaXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQgLSBPYmplY3QgY29udGFpbmluZyB0YXhhYmxlIGluY29tZSBhbmQgZGVkdWN0aW9ucy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRvdGFsVGF4YWJsZUFtb3VudFJlc3VsdC50YXhhYmxlSW5jb21lIC0gVG90YWwgdGF4YWJsZSBpbmNvbWUuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQuc3VtT2ZTc2ZFcGZBbmRDaXQgLSBTdW0gb2YgRW1wbG95ZWVzJyBQcm92aWRlbnQgRnVuZCwgQ2l0aXplbiBJbnZlc3RtZW50IFRydXN0LCBhbmQgU29jaWFsIFNlY3VyaXR5IEZ1bmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQuZmluYWxJbnN1cmFuY2UgLSBGaW5hbCBpbnN1cmFuY2UgYW1vdW50IGNvbnNpZGVyZWQgZm9yIHRheCBjYWxjdWxhdGlvbi5cbiAqL1xuY29uc3QgZ2V0VG90YWxUYXhhYmxlQW1vdW50ID0gKHtcblx0dG90YWxJbmNvbWUsXG5cdGVwZixcblx0Y2l0LFxuXHRzc2YsXG5cdGluc3VyYW5jZSxcblx0dGF4U2V0dGluZ3MsXG59OiBUb3RhbFRheGFibGVBbW91bnRQYXJhbXMpOiBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQgPT4ge1xuXHRjb25zdCB7XG5cdFx0bWF4RGVkdWN0aW9uUmF0ZSxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdCxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YsXG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQsXG5cdH0gPSB0YXhTZXR0aW5ncztcblx0Y29uc3QgdG90YWxEZWR1Y3Rpb24gPSBlcGYgKyBjaXQgKyBzc2Y7XG5cdGNvbnN0IG1heERlZHVjdGFibGVBbW91bnQgPSB0b3RhbEluY29tZSAqIG1heERlZHVjdGlvblJhdGU7XG5cblx0bGV0IGFjdHVhbERlZHVjdGlvbiA9IDA7XG5cdGxldCBkZWR1Y3Rpb25UaHJlc2hvbGQgPSAwO1xuXG5cdC8vIGlmIHRvdGFsRGVkdWN0aW9uIGNvbnNpc3RzIG9mIFNTRlxuXHRpZiAobWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGICYmIHNzZiA+IDApIHtcblx0XHQvLyBkZWZpbmluZyBkZWR1Y3Rpb25UaHJlc2hvbGQgY29tcGFyaW5nIG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRiAoNSBsYWtocykgYW5kIG1heERlZHVjdGFibGVBbW91bnQgKDMzJSkgd2hpY2hldmVyIGlzIGxvd2VyXG5cdFx0ZGVkdWN0aW9uVGhyZXNob2xkID1cblx0XHRcdG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRiA8IG1heERlZHVjdGFibGVBbW91bnRcblx0XHRcdFx0PyBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Zcblx0XHRcdFx0OiBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuXHR9IGVsc2Uge1xuXHRcdC8vIGRlZmluaW5nIGRlZHVjdGlvblRocmVzaG9sZCBjb21wYXJpbmcgbWF4RGVkdWN0aW9uTGltaXQgKDMgbGFraHMpIGFuZCBtYXhEZWR1Y3RhYmxlQW1vdW50ICgzMyUpIHdoaWNoZXZlciBpcyBsb3dlclxuXHRcdGRlZHVjdGlvblRocmVzaG9sZCA9XG5cdFx0XHRtYXhEZWR1Y3Rpb25MaW1pdCA8IG1heERlZHVjdGFibGVBbW91bnRcblx0XHRcdFx0PyBtYXhEZWR1Y3Rpb25MaW1pdFxuXHRcdFx0XHQ6IG1heERlZHVjdGFibGVBbW91bnQ7XG5cdH1cblx0aWYgKHRvdGFsRGVkdWN0aW9uID4gZGVkdWN0aW9uVGhyZXNob2xkKSB7XG5cdFx0YWN0dWFsRGVkdWN0aW9uID0gZGVkdWN0aW9uVGhyZXNob2xkO1xuXHR9IGVsc2Uge1xuXHRcdGFjdHVhbERlZHVjdGlvbiA9IHRvdGFsRGVkdWN0aW9uO1xuXHR9XG5cblx0Ly8gaWYgaW5zdXJhbmNlIGlzIGdyZWF0ZXIgdGhhbiA0MCwwMDBcblx0bGV0IGFjdHVhbEluc3VyYW5jZSA9IGluc3VyYW5jZTtcblx0aWYgKG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0ICYmIGluc3VyYW5jZSA+IG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0KSB7XG5cdFx0YWN0dWFsSW5zdXJhbmNlID0gbWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRheGFibGVJbmNvbWU6IHRvdGFsSW5jb21lIC0gYWN0dWFsRGVkdWN0aW9uIC0gYWN0dWFsSW5zdXJhbmNlLFxuXHRcdHN1bU9mU3NmRXBmQW5kQ2l0OiBhY3R1YWxEZWR1Y3Rpb24sXG5cdFx0ZmluYWxJbnN1cmFuY2U6IGFjdHVhbEluc3VyYW5jZSxcblx0fTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgdGF4IHdpdGggdGF4IGJyYWNrZXRzXG4gKlxuICogQHBhcmFtIHRheFJhdGUgdGF4IHJhdGUgZnJvbSBzZWxlY3RlZCB0YXggZGF0YVxuICogQHBhcmFtIHRvdGFsVGF4YWJsZUluY29tZSB0b3RhbCBpbmNvbWUgKGNhbiBiZSBjYXJyeSBsZWZ0IG92ZXIgZnJvbSB0aGUgbGFzdCBicmFja2V0KVxuICovXG5cbmNvbnN0IGdldFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWUgPSAoXG5cdHRheFJhdGU6IFRheFJhdGUsXG5cdHRvdGFsVGF4YWJsZUluY29tZTogbnVtYmVyLFxuKTogVG90YWxUYXhGb3JSYXRlV2l0aEluY29tZVJlc3VsdCA9PiB7XG5cdGNvbnN0IGluY29tZVRheFJhdGVEaWZmZXJlbmNlID0gdGF4UmF0ZS5lbmQgLSB0YXhSYXRlLnN0YXJ0O1xuXHRjb25zdCB0b3RhbE1pbnVzRGlmZmVyZW5jZSA9IHRvdGFsVGF4YWJsZUluY29tZSAtIGluY29tZVRheFJhdGVEaWZmZXJlbmNlO1xuXHRjb25zdCBjYXJyeSA9IHRvdGFsTWludXNEaWZmZXJlbmNlID4gMCA/IHRvdGFsTWludXNEaWZmZXJlbmNlIDogMDtcblxuXHRpZiAodG90YWxUYXhhYmxlSW5jb21lID4gMCkge1xuXHRcdGlmICh0b3RhbFRheGFibGVJbmNvbWUgPj0gaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRheExpYWJpbGl0eTogaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UgKiB0YXhSYXRlLnJhdGUsXG5cdFx0XHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRcdFx0YXNzZXNzaWJsZUluY29tZTogaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UsXG5cdFx0XHRcdGNhcnJ5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRheExpYWJpbGl0eTogdG90YWxUYXhhYmxlSW5jb21lICogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0dGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0YXNzZXNzaWJsZUluY29tZTogdG90YWxUYXhhYmxlSW5jb21lLFxuXHRcdFx0Y2FycnksXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGF4TGlhYmlsaXR5OiAwLFxuXHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRhc3Nlc3NpYmxlSW5jb21lOiAwLFxuXHRcdGNhcnJ5OiBjYXJyeSxcblx0fTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhbGwgdGF4IGJyZWFrZG93biBvZiBpbmNvbWUuXG4gKiBAcGFyYW0gdGF4QnJhY2tldHMgZnJvbSBzZWxlY3RlZCB0YXggZGF0YVxuICogQHBhcmFtIHRvdGFsVGF4YWJsZUFtb3VudCB0b3RhbCBjYWxjdWxhdGVkIHRheGFibGUgYW1vdW50XG4gKiBAcGFyYW0gc3NmIGlmIHRvdGFsRGVkdWN0aW9uIGNvbnNpc3RzIG9mIFNTRlxuICovXG5mdW5jdGlvbiBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyhcblx0dGF4QnJhY2tldHM6IFRheFJhdGVbXSxcblx0dG90YWxUYXhhYmxlQW1vdW50OiBudW1iZXIsXG5cdHNzZjogYm9vbGVhbixcbik6IFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHRbXSB7XG5cdGNvbnN0IHRheEJyZWFrRG93bkFycmF5OiBUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lUmVzdWx0W10gPSBbXTtcblx0cmV0dXJuIHRheEJyYWNrZXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHQvLyBjaGVjayBpZiBzc2YgaGFzIGJlZW4gZGVkdWN0ZWRcblx0XHRpZiAoc3NmICYmIGluZGV4ID09PSAwKSB7XG5cdFx0XHRpdGVtLnJhdGUgPSAwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IGdldFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWUoXG5cdFx0XHRpdGVtLFxuXHRcdFx0aW5kZXggPT09IDAgPyB0b3RhbFRheGFibGVBbW91bnQgOiB0YXhCcmVha0Rvd25BcnJheVtpbmRleCAtIDFdLmNhcnJ5LFxuXHRcdCk7XG5cdFx0dGF4QnJlYWtEb3duQXJyYXkucHVzaChyZXN1bHQpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB0d28tZGVjaW1hbCBudW1iZXIgY29udmVydGVkIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0IGZsb2F0IG51bWJlclxuICpcbiAqIEBwYXJhbSBhbW91bnQgZmxvYXRpbmcgbnVtYmVyXG4gKi9cbmNvbnN0IGdldEFtb3VudFJvdW5kZWQgPSAoYW1vdW50OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gTWF0aC5yb3VuZChhbW91bnQgKiAxMDApIC8gMTAwO1xufTtcblxuZXhwb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn07XG4iLCIvKiFcbiAqIERhdGFcbiAqIFRheCBTbGFiIERhdGFcbiAqL1xuXG5pbnRlcmZhY2UgVGF4QnJhY2tldCB7XG5cdHN0YXJ0OiBudW1iZXI7XG5cdGVuZDogbnVtYmVyO1xuXHRyYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlzY2FsWWVhciB7XG5cdGZ5U3RhcnREYXRlOiBzdHJpbmc7XG5cdGZ5U3RhcnREYXRlTmU6IHN0cmluZztcblx0ZnlFbmREYXRlOiBzdHJpbmc7XG5cdGZ5RW5kRGF0ZU5lOiBzdHJpbmc7XG5cdG1heERlZHVjdGlvblJhdGU6IG51bWJlcjtcblx0bWF4RGVkdWN0aW9uTGltaXQ6IG51bWJlcjtcblx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGPzogbnVtYmVyO1xuXHRtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdD86IG51bWJlcjtcblx0YnJhY2tldHM6IHtcblx0XHRzaW5nbGU6IFRheEJyYWNrZXRbXTtcblx0XHRtYXJyaWVkOiBUYXhCcmFja2V0W107XG5cdH07XG59XG5cbmludGVyZmFjZSBGWURhdGEge1xuXHRba2V5OiBzdHJpbmddOiBGaXNjYWxZZWFyO1xufVxuXG5jb25zdCBkYXRhOiBGWURhdGEgPSB7XG5cdCcyMDcwLzcxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDcxLzcyJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MicsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDcyLzczJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MycsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDczLzc0Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxNicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MycsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3NCcsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc0Lzc1Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVsIDE2LCAyMDE3Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc0Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE4Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDc1Jyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzUvNzYnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE4Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc1Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE5Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc2Jyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzYvNzcnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE5Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc2Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDIwJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc3Jyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzcvNzgnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDEzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMyLCAyMDcxJyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzgvNzknOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDIxJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc4Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIyJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDc5Jyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzkvODAnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIyJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc5Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIzJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDgwJyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwODAvODEnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDgwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDI0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDgxJyxcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiAxIC8gMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogM18wMF8wMDAsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGOiA1XzAwXzAwMCxcblx0XHRtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdDogNDBfMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0XHRcdGVuZDogNV8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1XzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDdfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3XzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDEwXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMTBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAyMF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA1MF8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zNixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiBJbmZpbml0eSxcblx0XHRcdFx0XHRyYXRlOiAwLjM5LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0XHRcdGVuZDogNl8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA2XzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDhfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA4XzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDExXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMTFfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAyMF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA1MF8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zNixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiBJbmZpbml0eSxcblx0XHRcdFx0XHRyYXRlOiAwLjM5LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjQgRGFuZmVCb29rc8KuXG4gKlxuICogaW5kZXgudHNcbiAqL1xuXG5pbXBvcnQgeyBicmVha2Rvd24gfSBmcm9tICcuL2JyZWFrZG93bic7XG5pbXBvcnQge1xuXHRnZXRUb3RhbFRheGFibGVBbW91bnQsXG5cdGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLFxuXHRnZXRBbW91bnRSb3VuZGVkLFxufSBmcm9tICcuL2NhbGN1bGF0b3InO1xuaW1wb3J0IHsgVGF4UGFyYW1zLCBUYXhSZXN1bHQgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgdGF4ID0gKG9wdGlvbnM6IFRheFBhcmFtcyk6IFRheFJlc3VsdCA9PiB7XG5cdGNvbnN0IHtcblx0XHRpbmNvbWUsXG5cdFx0ZXBmLFxuXHRcdGNpdCxcblx0XHRzc2YsXG5cdFx0aW5zdXJhbmNlLFxuXHRcdHllYXIsXG5cdFx0c2luZ2xlLFxuXHRcdG5vT2ZNb250aHMgPSAxMixcblx0fSA9IG9wdGlvbnM7XG5cblx0Ly8gUGFyYW1ldGVyIHZhbGlkYXRpb24gLSBDaGVjayBmb3IgbmVnYXRpdmUgdmFsdWVzXG5cdGlmIChcblx0XHRpbmNvbWUgPCAwIHx8XG5cdFx0ZXBmIDwgMCB8fFxuXHRcdGNpdCA8IDAgfHxcblx0XHRzc2YgPCAwIHx8XG5cdFx0aW5zdXJhbmNlIDwgMCB8fFxuXHRcdG5vT2ZNb250aHMgPCAwXG5cdCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdUYXggcGFyYW1ldGVycyAoSW5jb21lLCBFUEYsIENJVCwgU1NGLCBJbnN1cmFuY2UpIGNhbm5vdCBiZSBuZWdhdGl2ZS4nLFxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXG5cdGNvbnN0IHRheFNldHRpbmdzID0ge1xuXHRcdG1heERlZHVjdGlvblJhdGU6IG1ldGEubWF4RGVkdWN0aW9uUmF0ZSxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogbWV0YS5tYXhEZWR1Y3Rpb25MaW1pdCxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y6IG1ldGEubWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGLFxuXHRcdG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0OiBtZXRhLm1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0LFxuXHR9O1xuXG5cdGNvbnN0IHtcblx0XHR0YXhhYmxlSW5jb21lLFxuXHRcdHN1bU9mU3NmRXBmQW5kQ2l0LFxuXHRcdGZpbmFsSW5zdXJhbmNlLFxuXHR9ID0gZ2V0VG90YWxUYXhhYmxlQW1vdW50KHtcblx0XHR0b3RhbEluY29tZTogaW5jb21lLFxuXHRcdGVwZixcblx0XHRjaXQsXG5cdFx0c3NmLFxuXHRcdGluc3VyYW5jZSxcblx0XHR0YXhTZXR0aW5ncyxcblx0fSk7XG5cdGNvbnN0IG1hcml0YWxTdGF0dXMgPSBzaW5nbGUgPyAnc2luZ2xlJyA6ICdtYXJyaWVkJztcblx0Y29uc3QgdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMgPSBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyhcblx0XHRtZXRhLmJyYWNrZXRzW21hcml0YWxTdGF0dXNdLFxuXHRcdHRheGFibGVJbmNvbWUsXG5cdFx0c3NmID4gMCxcblx0KTtcblxuXHRjb25zdCByZXN1bHQ6IFRheFJlc3VsdCA9IHtcblx0XHRzdW1PZlNzZkVwZkFuZENpdDogc3VtT2ZTc2ZFcGZBbmRDaXQsXG5cdFx0aW5zdXJhbmNlOiBmaW5hbEluc3VyYW5jZSxcblx0XHR0b3RhbEluY29tZTogaW5jb21lLFxuXHRcdHRvdGFsRGVkdWN0aW9uOiBpbmNvbWUgLSB0YXhhYmxlSW5jb21lLFxuXHRcdG5ldEFzc2Vzc2FibGU6IHRheGFibGVJbmNvbWUsXG5cdFx0dG90YWxUYXhXaXRoQnJhY2tldHM6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzXG5cdFx0XHQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmFzc2Vzc2libGVJbmNvbWUgPiAwKVxuXHRcdFx0Lm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0YXhPYmo6IHtcblx0XHRcdFx0XHRhc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdFx0XHRcdFx0cmF0ZTogbnVtYmVyO1xuXHRcdFx0XHRcdHRheExpYWJpbGl0eTogbnVtYmVyO1xuXHRcdFx0XHR9ID0ge1xuXHRcdFx0XHRcdGFzc2Vzc2libGVJbmNvbWU6IGl0ZW0uYXNzZXNzaWJsZUluY29tZSxcblx0XHRcdFx0XHRyYXRlOiBpdGVtLnRheFJhdGUgKiAxMDAsXG5cdFx0XHRcdFx0dGF4TGlhYmlsaXR5OiBpdGVtLnRheExpYWJpbGl0eSxcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIHRheE9iajtcblx0XHRcdH0pLFxuXHRcdHRvdGFsQXNzZXNzaWJsZUluY29tZTogdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMucmVkdWNlKFxuXHRcdFx0KGluaXRpYWxWYWx1ZSwgdmFsdWUpID0+IGluaXRpYWxWYWx1ZSArIHZhbHVlLmFzc2Vzc2libGVJbmNvbWUsXG5cdFx0XHQwLFxuXHRcdCksXG5cblx0XHR0b3RhbFRheExpYWJpbGl0eTogdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMucmVkdWNlKFxuXHRcdFx0KGluaXRpYWxWYWx1ZSwgdmFsdWUpID0+IGluaXRpYWxWYWx1ZSArIHZhbHVlLnRheExpYWJpbGl0eSxcblx0XHRcdDAsXG5cdFx0KSxcblxuXHRcdG5ldFRheExpYWJpbGl0eU1vbnRobHk6IGdldEFtb3VudFJvdW5kZWQoXG5cdFx0XHR0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0cy5yZWR1Y2UoXG5cdFx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG5cdFx0XHRcdDAsXG5cdFx0XHQpIC8gbm9PZk1vbnRocyxcblx0XHQpLFxuXHR9O1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBtZXRhID0gKCkgPT4ge1xuXHRyZXR1cm4gJ21ldGEgd29yayBpbiBwb3JvZ3Jlc3MnO1xufTtcblxuZXhwb3J0IHsgdGF4LCBtZXRhIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=