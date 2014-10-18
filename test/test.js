// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

var test = require('tape'),
    srcPath = '../src/',
    add = require(srcPath + 'add.js'),
    sub = require(srcPath + 'sub.js'),
    vec0 = [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2],
    vec22 = [-3, 4],
    vec31 = [1, -2, 3],
    vec32 = [4, 5, -6],
    vec41 = [-1, 2, -3, 4],
    vec42 = [5, -6, -7, 8];

test('adds two n-dimensional vectors', function(t) {
    t.equal(Array.isArray(add(vec21, vec22)), true, 'returned result is an array');
    t.deepEqual(add(vec0, vec0), vec0, 'add 0 dimensional vector test');
    t.deepEqual(add(vec11, vec12), [3], 'add 1 dimensional vector test');
    t.deepEqual(add(vec21, vec22), [-2, 2], 'add 2 dimensional vector test');
    t.deepEqual(add(vec31, vec32), [5, 3, -3], 'add 3 dimensional vector test');
    t.deepEqual(add(vec41, vec42), [4, -4, -10, 12], 'add 4 dimensional vector test');
    t.end();
});
test('subtracts two n-dimensional vectors', function(t) {
    t.equal(Array.isArray(sub(vec21, vec22)), true, 'returned result is an array');
    t.deepEqual(sub(vec0, vec0), vec0, 'subtract 0 dimensional vector test');
    t.deepEqual(sub(vec11, vec12), [-1], 'subtract 1 dimensional vector test');
    t.deepEqual(sub(vec21, vec22), [4, -6], 'subtract 2 dimensional vector test');
    t.deepEqual(sub(vec31, vec32), [-3, -7, 9], 'subtract 3 dimensional vector test');
    t.deepEqual(sub(vec41, vec42), [-6, 8, 4, -4], 'subtract 4 dimensional vector test');
    t.end();
});
