// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// angle.js - angle from 0 .. 2 * PI counterclockwise increasing for 2-dimensional of 2D vector wrt positive x axis

'use strict';

function angle(vec) {
    return Math.atan2(vec[1], vec[0]);
}

module.exports = angle;
