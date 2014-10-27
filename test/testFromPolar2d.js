// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// testFromPolar2d.js - test fromPolar2d.js module

'use strict';

var test = require('tape'),
    fromPolar2d = require('../src/fromPolar2d'),
    mag1 = 5,
    angle1 = 0.9272952180016122,
    mag2 = 1,
    angle2 = 0.7853981633974483,
    mag3 = 3,
    angle3 = -angle2,
    alpha = 'a';

test('tests fromPolar2d.js (2-dimensional vector from magnitude and angle)', function (t) {
    t.equal(Array.isArray(fromPolar2d(mag1, angle1)), true, 'returned result is an array');
    t.equal(isNaN(fromPolar2d()[0]) && isNaN(fromPolar2d()[1]), true, 'Zero arguments');
    t.equals(isNaN(fromPolar2d(mag1)[0]) && isNaN(fromPolar2d(mag1)[1]), true, 'One argument');
    t.equal(isNaN(fromPolar2d(alpha, angle1)[0]) && isNaN(fromPolar2d(alpha, angle1)[1]), true, 'Non-number first argument');
    t.equal(isNaN(fromPolar2d(angle1, alpha)[0]) && isNaN(fromPolar2d(angle1, alpha)[1]), true, 'Non-number second argument');
    t.equal(Number(fromPolar2d(mag1, angle1)[0].toFixed(8)) === 3 &&
        Number(fromPolar2d(mag1, angle1)[1].toFixed(8)) === 4, true, 'Valid inputs gives correct outputs test 1');
    t.equal(Number(fromPolar2d(mag2, angle2)[0].toFixed(8)) === 0.70710678 &&
        Number(fromPolar2d(mag2, angle2)[1].toFixed(8)) === 0.70710678, true, 'Valid inputs gives correct outputs test 2');
    t.equal(Number(fromPolar2d(mag3, angle3)[0].toFixed(8)) === 2.12132034 &&
        Number(fromPolar2d(mag3, angle3)[1].toFixed(8)) === -2.12132034, true, 'Valid inputs gives correct outputs test 3');
    t.end();
});
