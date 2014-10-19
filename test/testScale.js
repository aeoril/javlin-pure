// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

var test = require('tape'),
    scale = require('../src/scale'),
    vec0 =  [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.3, 4],
    vec42 = [5, -6.6, -7, 8],
    vecAlpha = ['a'],
    vecNaN = [NaN];

test('scales an n-dimensional vector by numerical scalar', function (t) {
    t.equal(Array.isArray(scale(vec21, 1)), true, 'returned result is an array');
    t.deepEqual(scale(vec0, 3), vec0, '0 dimensional vector test');
    t.deepEqual(scale(vec11, -2.5), [-2.5], '1 dimensional vector test');
    t.deepEqual(scale(vec21, 3), [3, -7.5], '2 dimensional vector test');
    t.deepEqual(scale(vec31, -4), [-4.8, 8, -14], '3 dimensional vector test');
    t.deepEqual(scale(vec41, 5), [-5.5, 10, -16.5, 20], '4 dimensional vector test');
    t.end();
});
