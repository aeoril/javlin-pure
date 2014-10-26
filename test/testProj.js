// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testProj.js - tests proj.js module

'use strict';

var test = require('tape'),
    proj = require('../src/proj'),
    vec0 =  [],
    vec11 = [-8],
    vec12 = [5],
    vec21 = [3, 4],
    vec22 = [6, 8],
    vec31 = [1.2, -3.5, 2],
    vec32 = [-1.2, 3.5, -2],
    vec41 = [1, 1, 1, 1],
    vec42 = [2, 2, 2, 0],
    vecAlpha = ['a'];

test('tests proj.js (n-dimensional vector projection)', function (t) {
    t.equal(Array.isArray(proj(vec21, vec22)), true, 'returned result is an array');
    t.throws(function () { return proj(); }, null, 'Zero arguments');
    t.throws(function () { return proj(vec11); }, null, 'One argument');
    t.throws(function () { return proj(3, vec12); }, null, 'Non-array first argument');
    t.throws(function () { return proj(vec11, 3)[0]; }, null, 'Non-array second argument');
    t.equal(isNaN(proj(vec31, vec22)[2]), true, 'First argument has more elements');
    t.deepEqual(proj(vec11, vec22), [-2.88, -3.84], 'Second argument has more elements');
    t.equal(isNaN(proj(vecAlpha, vec12)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(proj(vec11, vecAlpha)[0]), true, 'Second argument has alpha element');
    t.deepEqual(proj(vec0, vec0), [], '0 dimensional vectors');
    t.deepEqual(proj(vec11, vec12), [-8], '1 dimensional vectors');
    t.deepEqual(proj(vec21, vec22), [3, 4], '2 dimensional vectors');
    t.deepEqual(proj(vec31, vec32), [1.2, -3.5, 2], '3 dimensional vectors');
    t.deepEqual(proj(vec41, vec42), [1, 1, 1, 0], '4 dimensional vectors');
    t.end();
});
