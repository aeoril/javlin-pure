// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

var test = require('tape'),
    srcPath = '../src/',
    add = require(srcPath + 'add.js'),
    sub = require(srcPath + 'sub.js'),
    scale = require(srcPath + 'scale.js'),
    vec0 = [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.3, 4],
    vec42 = [5, -6.6, -7, 8];

test('adds two n-dimensional vectors', function(t) {
    t.equal(Array.isArray(add(vec21, vec22)), true, 'returned result is an array');
    t.deepEqual(add(vec0, vec0), vec0, '0 dimensional vector test');
    t.deepEqual(add(vec11, vec12), [3], '1 dimensional vector test');
    t.deepEqual(add(vec21, vec22), [-2, 1.5], '2 dimensional vector test');
    t.deepEqual(add(vec31, vec32), [5.2, 3, -2.5], '3 dimensional vector test');
    t.deepEqual(add(vec41, vec42), [3.9, -4.6, -10.3, 12], '4 dimensional vector test');
    t.end();
});
test('subtracts two n-dimensional vectors', function(t) {
    t.equal(Array.isArray(sub(vec21, vec22)), true, 'returned result is an array');
    t.deepEqual(sub(vec0, vec0), vec0, '0 dimensional vector test');
    t.deepEqual(sub(vec11, vec12), [-1], '1 dimensional vector test');
    t.deepEqual(sub(vec21, vec22), [4, -6.5], '2 dimensional vector test');
    t.deepEqual(sub(vec31, vec32), [-2.8, -7, 9.5], '3 dimensional vector test');
    t.deepEqual(sub(vec41, vec42), [-6.1, 8.6, 3.7, -4], '4 dimensional vector test');
    t.end();
});
test('scales an n-dimensional vector by numerical scalar', function(t) {
    t.equal(Array.isArray(scale(vec21, 1)), true, 'returned result is an array');
    t.deepEqual(scale(vec0, 1), vec0, '0 dimensional vector test');
    t.deepEqual(scale(vec11, -2.5), [-2.5], '1 dimensional vector test');
    t.deepEqual(scale(vec21, 3), [3, -7.5], '2 dimensional vector test');
    t.deepEqual(scale(vec31, -4), [-4.8, 8, -14], '3 dimensional vector test');
    t.deepEqual(scale(vec41, 5), [-5.5, 10, -16.5, 20], '4 dimensional vector test');
    t.end();
});
