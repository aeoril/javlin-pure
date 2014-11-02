// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testAngle2d.js - tests angle2d.js module

'use strict';

var test = require('tape'),
    angle2d = require('../src/angle2d'),
    vec0 =  [],
    vec11 = [3],
    vec21 = [3, -4],
    vec22 = [1, 1],
    vec22Copy = vec22.slice(),
    vecAlpha = ['a'];

test('tests angle2d.js (2-dimensional vector angle)', function (t) {
    t.equal(typeof angle2d(vec21) === 'number', true, 'returned result is a number');
    t.throws(function () { return angle2d(); }, null, 'Zero arguments');
    t.equal(isNaN(angle2d(3)), true, 'Non-array argument');
    t.equal(isNaN(angle2d(vecAlpha)), true, 'Argument has alpha element');
    t.equal(isNaN(angle2d(vec0)), true, '0 dimensional vector');
    t.equal(isNaN(angle2d(vec11)), true, '1 dimensional vector');
    t.equal(Number(angle2d(vec21).toFixed(9)), -0.927295218, '2 dimensional vector');
    t.equal(Number(angle2d(vec22).toFixed(9)), 0.785398163, '2 dimensional vector');
    t.deepEqual(vec22, vec22Copy, 'Purity confirmed with 2d vector');
    t.end();
});
