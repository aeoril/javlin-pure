// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testDot.js - tests dot.js module

'use strict';

var test = require('tape'),
    dot = require('../src/dot'),
    vec0 =  [],
    vec11 = [3],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.4, 4],
    vec42 = [5, -6.6, -7, 8],
    vecAlpha = ['a'];

test('tests dot.js (n-dimensional vector dot product (inner product))', function (t) {
    t.equal(Array.isArray(dot(vec21, vec22)), true, 'returned result is an array');
    t.throws(function () { return dot(); }, null, 'Zero arguments');
    t.throws(function () { return dot(vec11); }, null, 'One argument');
    t.throws(function () { return dot(3, vec12); }, null, 'Non-array first argument');
    t.equal(isNaN(dot(vec11, 3)[0]), true, 'Non-array second argument');
    t.equal(isNaN(dot(vec31, vec22)[2]), true, 'First argument has more elements');
    t.deepEqual(dot(vec11, vec22), [-9], 'Second argument has more elements');
    t.equal(isNaN(dot(vecAlpha, vec12)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(dot(vec11, vecAlpha)[0]), true, 'Second argument has alpha element');
    t.deepEqual(dot(vec0, vec0), [], '0 dimensional vectors');
    t.deepEqual(dot(vec11, vec12), [6], '1 dimensional vectors');
    t.deepEqual(dot(vec21, vec22), [-3, -10], '2 dimensional vectors');
    t.deepEqual(dot(vec31, vec32), [4.8, -10, -21], '3 dimensional vectors');
    t.deepEqual(dot(vec41, vec42), [-5.5, -13.2, 23.8, 32], '4 dimensional vectors');
    t.end();
});
