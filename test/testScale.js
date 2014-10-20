// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testScale.js - test scale.js module

'use strict';

var test = require('tape'),
    scale = require('../src/scale'),
    vec0 =  [],
    vec11 = [1],
    vec21 = [1, -2.5],
    vec31 = [1.2, -2, 3.5],
    vec41 = [-1.1, 2, -3.3, 4],
    vecAlpha = ['a'];

test('scales an n-dimensional vector by numerical scalar', function (t) {
    t.equal(Array.isArray(scale(vec21, 3)), true, 'returned result is an array');
    t.throws(function () { return scale(); }, null, 'Zero arguments');
    t.equals(isNaN(scale(vec11)[0]), true, 'One argument');
    t.throws(function () { return scale(3, 5); }, null, 'Non-array first element');
    t.equal(isNaN(scale(vecAlpha, -2)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(scale(vec11, 'a')[0]), true, 'Non-number second argument');
    t.deepEqual(scale(vec0, 3), vec0, '0 dimensional vectors');
    t.deepEqual(scale(vec11, -2.5), [-2.5], '1 dimensional vector');
    t.deepEqual(scale(vec21, 3), [3, -7.5], '2 dimensional vector');
    t.deepEqual(scale(vec31, -4), [-4.8, 8, -14], '3 dimensional vector');
    t.deepEqual(scale(vec41, 5), [-5.5, 10, -16.5, 20], '4 dimensional vector');
    t.end();
});
