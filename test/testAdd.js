// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

var test = require('tape'),
    add = require('../src/add'),
    vec0 =  [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.3, 4],
    vec42 = [5, -6.6, -7, 8],
    vecAlpha = ['a'];

test('adds two n-dimensional vectors', function (t) {
    t.equal(Array.isArray(add(vec21, vec22)), true, 'returned result is an array');
    t.equal(add(vec21, vec22).length, 2, 'returned result has proper length');
    t.throws(function () { return add(); }, null, 'Zero arguments throws');
    t.throws(function () { return add(vec11); }, null, 'One argument throws');
    t.deepEqual(add(vec0, vec0), [], '0 dimensional vector test');
    t.deepEqual(add(vec11, vec12), [3], '1 dimensional vector test');
    t.deepEqual(add(vec21, vec22), [-2, 1.5], '2 dimensional vector test');
    t.deepEqual(add(vec31, vec32), [5.2, 3, -2.5], '3 dimensional vector test');
    t.deepEqual(add(vec41, vec42), [3.9, -4.6, -10.3, 12], '4 dimensional vector test');
    t.equal(isNaN(add(vec31, vec22)[2]), true, 'First argument has more elements');
    t.deepEqual(add(vec11, vec22), [-2], 'Second argument has more elements');
    t.equal(isNaN(add(vecAlpha, vec12)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(add(vec11, vecAlpha)[0]), true, 'Second argument has alpha element');
    t.end();
});
