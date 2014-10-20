// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testAdd.js - tests add.js module

'use strict';

var test = require('tape'),
    add = require('../src/add'),
    vec0 =  [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.3, 4],
    vec42 = [5, -6.6, -7, 8],
    vecAlpha = ['a'];

test('tests add.js (n-dimensional vector addition)', function (t) {
    t.equal(Array.isArray(add(vec21, vec22)), true, 'returned result is an array');
    t.throws(function () { return add(); }, null, 'Zero arguments');
    t.throws(function () { return add(vec11); }, null, 'One argument');
    t.throws(function () { return add(3, vec12); }, null, 'Non-array first argument');
    t.equal(isNaN(add(vec11, 3)[0]), true, 'Non-array second argument');
    t.equal(isNaN(add(vec31, vec22)[2]), true, 'First argument has more elements');
    t.deepEqual(add(vec11, vec22), [-2], 'Second argument has more elements');
    t.equal(isNaN(add(vecAlpha, vec12)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(add(vec11, vecAlpha)[0]), true, 'Second argument has alpha element');
    t.deepEqual(add(vec0, vec0), [], '0 dimensional vectors');
    t.deepEqual(add(vec11, vec12), [3], '1 dimensional vectors');
    t.deepEqual(add(vec21, vec22), [-2, 1.5], '2 dimensional vectors');
    t.deepEqual(add(vec31, vec32), [5.2, 3, -2.5], '3 dimensional vectors');
    t.deepEqual(add(vec41, vec42), [3.9, -4.6, -10.3, 12], '4 dimensional vectors');
    t.end();
});
