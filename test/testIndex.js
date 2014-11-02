// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testIndex.js - tests index.js module

'use strict';

var test = require('tape'),
    javlinPure = require('../src/index'),
    add = javlinPure.add,
    sub = javlinPure.sub,
    scale = javlinPure.scale,
    dot = javlinPure.dot,
    mag = javlinPure.mag,
    norm = javlinPure.norm,
    proj = javlinPure.proj,
    angle = javlinPure.angle,
    angle2d = javlinPure.angle2d,
    fromPolar2d = javlinPure.fromPolar2d;

test('tests index.js (combined javlinPure exports)', function (t) {
    t.equal(typeof add === 'function', true, 'add is a function');
    t.equal(typeof sub === 'function', true, 'sub is a function');
    t.equal(typeof scale === 'function', true, 'scale is a function');
    t.equal(typeof dot === 'function', true, 'dot is a function');
    t.equal(typeof mag === 'function', true, 'mag is a function');
    t.equal(typeof norm === 'function', true, 'norm is a function');
    t.equal(typeof proj === 'function', true, 'proj is a function');
    t.equal(typeof angle === 'function', true, 'angle is a function');
    t.equal(typeof angle2d === 'function', true, 'angle2d is a function');
    t.equal(typeof fromPolar2d === 'function', true, 'fromPolar2d is a function');
    t.end();
});
