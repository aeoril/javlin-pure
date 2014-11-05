// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testMul.js - tests mul.js module

'use strict';

var test = require('tape'),
    mul = require('../src/mul'),
    vec0 =  [],
    vec11 = [1],
    vec12 = [2],
    vec21 = [1, -2.5],
    vec22 = [-3, 4],
    vec31 = [1.2, -2, 3.5],
    vec32 = [4, 5, -6],
    vec41 = [-1.1, 2, -3.3, 4],
    vec42 = [5, -6.6, -8, 8],
    vec41Copy = vec41.slice(),
    vec42Copy = vec42.slice(),
    vecAlpha = ['a'];

test('tests mul.js (n-dimensional vector multiplication along diagonal)', function (t) {
    t.equal(Array.isArray(mul(vec21, vec22)), true, 'returned result is an array');
    t.throws(function () { return mul(); }, null, 'Zero arguments');
    t.throws(function () { return mul(vec11); }, null, 'One argument');
    t.throws(function () { return mul(3, vec12); }, null, 'Non-array first argument');
    t.equal(isNaN(mul(vec11, 3)[0]), true, 'Non-array second argument');
    t.equal(isNaN(mul(vec31, vec22)[2]), true, 'First argument has more elements');
    t.deepEqual(mul(vec11, vec22), [-3], 'Second argument has more elements');
    t.equal(isNaN(mul(vecAlpha, vec12)[0]), true, 'First argument has alpha element');
    t.equal(isNaN(mul(vec11, vecAlpha)[0]), true, 'Second argument has alpha element');
    t.deepEqual(mul(vec0, vec0), [], '0 dimensional vectors');
    t.deepEqual(mul(vec11, vec12), [2], '1 dimensional vectors');
    t.deepEqual(mul(vec21, vec22), [-3, -10], '2 dimensional vectors');
    t.deepEqual(mul(vec31, vec32), [4.8, -10, -21], '3 dimensional vectors');
    t.deepEqual(mul(vec41, vec42), [-5.5, -13.2, 26.4, 32], '4 dimensional vectors');
    t.deepEqual([vec41, vec42], [vec41Copy, vec42Copy], 'Purity confirmed with 4d vectors');
    t.end();
});
