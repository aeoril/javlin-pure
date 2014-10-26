// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testAngle.js - tests angle.js module

'use strict';

var test = require('tape'),
    angle = require('../src/angle'),
    vec0 =  [],
    vec11 = [3],
    vec21 = [3, -4],
    vec22 = [1, 1],
    vecAlpha = ['a'];

test('tests angle.js (2-dimensional vector angle)', function (t) {
    t.equal(typeof angle(vec21) === 'number', true, 'returned result is a number');
    t.throws(function () { return angle(); }, null, 'Zero arguments');
    t.equal(isNaN(angle(3)), true, 'Non-array argument');
    t.equal(isNaN(angle(vecAlpha)), true, 'Argument has alpha element');
    t.equal(isNaN(angle(vec0)), true, '0 dimensional vectors');
    t.equal(isNaN(angle(vec11)), true, '1 dimensional vector');
    t.equal(Number(angle(vec21).toFixed(9)), -0.927295218, '2 dimensional vector');
    t.equal(Number(angle(vec22).toFixed(9)), 0.785398163, '2 dimensional vector');
    t.end();
});
