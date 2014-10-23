// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testAngle.js - tests angle.js module

'use strict';

var test = require('tape'),
    angle = require('./angle'),
    vec0 =  [],
    vec11 = [-5.3],
    vec12 = [-2],
    vec21 = [3, 4],
    vec31 = [-2, 2, -1],
    vec41 = [1, 2, -2, 4],
    vec42 = [2.1, -1.9, 7.5, 4.1],
    vecAlpha = ['a'];

test('tests angle.js (2-dimensional vector angle)', function (t) {
    t.equal(typeof angle(vec41) === 'number', true, 'returned result is a number');
    t.throws(function () { return angle(); }, null, 'Zero arguments');
    t.throws(function () { return angle(3); }, null, 'Non-array argument');
    t.equal(isNaN(angle(vecAlpha)), true, 'Argument has alpha element');
    t.deepEqual(angle(vec0), 0, '0 dimensional vectors');
    t.deepEqual(angle(vec11), 5.3, '1 dimensional vector');
    t.deepEqual(angle(vec12), 2, '1 dimensional vector');
    t.deepEqual(angle(vec21), 5, '2 dimensional vector');
    t.deepEqual(angle(vec31), 3, '3 dimensional vector');
    t.deepEqual(angle(vec41), 5, '4 dimensional vector');
    t.deepEqual(angle(vec42).toFixed(10), '9.0044433476', '4 dimensional vector floats');
    t.end();
});
