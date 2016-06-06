// Copyright © 2015 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

'use strict';

var test = require('tape'),
    distance = require('../src/distance'),
    vec0 =  [],
    vec11 = [-5.3],
    vec12 = [-2],
    vec21 = [1, 2],
    vec22 = [4, 6],
    vec31 = [-2, 2, -1],
    vec32 = [4, -10, 11],
    vec41 = [1, 2, -2, 4],
    vec41Copy = vec41.slice(),
    vec42 = [2.1, -1.9, 7.5, 4.1],
    vec42Copy = vec42.slice(),
    vecAlpha = ['a'];

test('tests distance.js (n-dimensional vector distance)', function (t) {
    t.equal(typeof distance(vec41, vec42) === 'number', true, 'returned result is a number');
    t.throws(function () { return distance(); }, null, 'Zero arguments');
    t.throws(function () { return distance(vec11); }, null, '1 argument');
    t.throws(function () { return distance(3, vec12); }, null, '1st argument is number');
    t.throws(function () { return distance(vec12, 3); }, null, '2nd argument is number');
    t.equal(isNaN(distance(vecAlpha, vec11)), true, '1st Argument has alpha element');
    t.equal(isNaN(distance(vec11, vecAlpha)), true, '2nd Argument has alpha element');
    t.deepEqual(distance(vec0, vec11), 0, '1st argument is 0 dimensional vector');
    t.deepEqual(distance(vec11, vec0), 0, '2nd argument is 0 dimensional vector');
    t.deepEqual(distance(vec11, vec12), 5.3, '1 dimensional vectors');
    t.deepEqual(distance(vec21, vec22), 5, '2 dimensional vectors');
    t.deepEqual(distance(vec31, vec32), 3, '3 dimensional vectors');
    t.deepEqual(distance(vec41, vec42).toFixed(10), '9.0044433476', '4 dimensional vectors');
    t.deepEqual([vec41, vec42], [vec41Copy, vec42Copy], 'Purity confirmed with 4d vectors');
    t.end();
});
