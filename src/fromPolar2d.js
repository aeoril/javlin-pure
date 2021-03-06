// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// fromPolar2d.js - given an angle and magnitude returns a two dimensional vector
// angle is in radians going counterclockwise from the positive x axis

'use strict';

var scale = require('./scale');

function fromPolar2d(mag, angle) {
    return scale([Math.cos(angle), Math.sin(angle)], mag);
}

module.exports = fromPolar2d;
