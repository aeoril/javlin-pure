// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testNorm.js - tests norm.js module

'use strict';

var test = require('tape'),
    norm = require('../src/norm'),
    mag = require('../src/mag'),
    vec0 =  [],
    vec11 = [-5.3],
    vec12 = [-2],
    vec21 = [3, 4],
    vec31 = [-2, 2, -1],
    vec41 = [1, 2, -2, 4],
    vec42 = [2.1, -1.9, 7.5, 4.1],
    vecAlpha = ['a'];

test('tests norm.js (n-dimensional vector normalization)', function (t) {
    t.equal(Array.isArray(norm(vec41)), true, 'returned result is an array');
    t.throws(function () { return norm(); }, null, 'Zero arguments');
    t.throws(function () { return norm(3); }, null, 'Non-array argument');
    t.equal(isNaN(norm(vecAlpha)[0]), true, 'Argument has alpha element');
    t.deepEqual(norm(vec0), vec0, '0 dimensional vectors');
    t.equal(mag(norm(vec11)), 1, '1 dimensional vector');
    t.equal(mag(norm(vec12)), 1, '1 dimensional vector');
    t.equal(mag(norm(vec21)), 1, '2 dimensional vector');
    t.equal(mag(norm(vec31)), 1, '3 dimensional vector');
    t.equal(mag(norm(vec41)), 1, '4 dimensional vector');
    t.equal(Number((mag(norm(vec42))).toFixed(10)), 1, '4 dimensional vector floats');
    t.end();
});
