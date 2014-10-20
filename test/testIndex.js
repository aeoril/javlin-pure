// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testIndex.js - tests index.js module

'use strict';

var test = require('tape'),
    javlin = require('../src/index'),
    add = javlin.add,
    sub = javlin.sub,
    scale = javlin.scale,
    mag = javlin.mag,
    norm = javlin.norm;

test('tests index.js (combined javlin exports)', function (t) {
    t.equal(typeof add === 'function', true, 'add is a function');
    t.equal(typeof sub === 'function', true, 'sub is a function');
    t.equal(typeof scale === 'function', true, 'scale is a function');
    t.equal(typeof mag === 'function', true, 'mag is a function');
    t.equal(typeof norm === 'function', true, 'norm is a function');
    t.end();
});
