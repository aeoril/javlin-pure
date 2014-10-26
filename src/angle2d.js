// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// angle2d.js - angle from -PI .. PI counterclockwise increasing for 2-dimensional vector wrt positive x axis

'use strict';

function angle2d(vec) {
    return Math.atan2(vec[1], vec[0]);
}

module.exports = angle2d;
