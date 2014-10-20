// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testMag.js - tests mag.js module

'use strict';

var test = require('tape'),
    mag = require('../src/mag'),
    vec0 =  [],
    vec11 = [-5.3],
    vec12 = [-2],
    vec21 = [3, 4],
    vec31 = [-2, 2, -1],
    vec41 = [1, 2, -2, 4],
    vec42 = [2.1, -1.9, 7.5, 4.1],
    vecAlpha = ['a'];

test('scales an n-dimensional vector by numerical scalar', function (t) {
    t.equal(typeof mag(vec41) === 'number', true, 'returned result is a number');
    t.throws(function () { return mag(); }, null, 'Zero arguments');
    t.throws(function () { return mag(3); }, null, 'Non-array argument');
    t.equal(isNaN(mag(vecAlpha)), true, 'Argument has alpha element');
    t.deepEqual(mag(vec0), 0, '0 dimensional vectors');
    t.deepEqual(mag(vec11), 5.3, '1 dimensional vector');
    t.deepEqual(mag(vec12), 2, '1 dimensional vector');
    t.deepEqual(mag(vec21), 5, '2 dimensional vector');
    t.deepEqual(mag(vec31), 3, '3 dimensional vector');
    t.deepEqual(mag(vec41), 5, '4 dimensional vector');
    t.deepEqual(mag(vec42).toFixed(10), '9.0044433476', '4 dimensional vector');
    t.end();
});
