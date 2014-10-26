// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testAngle.js - tests angle.js module

'use strict';

var test = require('tape'),
    angle = require('../src/angle'),
    vec0 =  [],
    vec11 = [3],
    vec12 = [-4],
    vec21 = [1, 0],
    vec22 = [3, -3],
    vec31 = [1, 0, 0],
    vec32 = [1, 1, 0],
    vec41 = [1, 0, 0, 0],
    vec42 = [1, 1, 0, 0],
    vecAlpha = ['a'];

test('tests angle.js (n-dimensional vector angle)', function (t) {
    t.equal(typeof angle(vec21, vec22) === 'number', true, 'returned result is a number');
    t.throws(function () { return angle(); }, null, 'Zero arguments');
    t.throws(function () { return angle(vec11); }, null, 'One argument');
    t.throws(function () { return angle(3, vec11); }, true, '1st argument is non-array');
    t.throws(function () { return angle(vec11, 3); }, true, '2nd argument is non-array');
    t.equal(isNaN(angle(vecAlpha, vec11)), true, 'First argument has alpha element');
    t.equal(isNaN(angle(vec11, vecAlpha)), true, 'Second argument has alpha element');
    t.equal(isNaN(angle(vec0, vec11)), true, '1st argument is 0 dimensional vector');
    t.equal(isNaN(angle(vec11, vec0)), true, '2nd argument is 0 dimensional vector');
    t.equal(angle(vec11, vec12), Math.PI, '1 dimensional vectors');
    t.equal(Number(angle(vec21, vec22).toFixed(9)), 0.785398163, '2 dimensional vectors');
    t.equal(Number(angle(vec31, vec32).toFixed(9)), 0.785398163, '3 dimensional vectors');
    t.equal(Number(angle(vec41, vec42).toFixed(9)), 0.785398163, '4 dimensional vectors');
    t.end();
});
