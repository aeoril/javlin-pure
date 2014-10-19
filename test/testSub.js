// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

var test = require('tape'),
    sub = require('../src/sub'),
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

test('subtracts two n-dimensional vectors', function (t) {
    t.equal(Array.isArray(sub(vec21, vec22)), true, 'returned result is an array');
    t.deepEqual(sub(vec0, vec0), vec0, '0 dimensional vector test');
    t.deepEqual(sub(vec11, vec12), [-1], '1 dimensional vector test');
    t.deepEqual(sub(vec21, vec22), [4, -6.5], '2 dimensional vector test');
    t.deepEqual(sub(vec31, vec32), [-2.8, -7, 9.5], '3 dimensional vector test');
    t.deepEqual(sub(vec41, vec42), [-6.1, 8.6, 3.7, -4], '4 dimensional vector test');
    t.end();
});
