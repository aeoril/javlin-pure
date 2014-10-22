// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// angle.js - angle between two n-dimensional vectors

'use strict';

var mag = require('./mag'),
    dot = require('./dot');

function angle(vec1, vec2) {
    return Math.acos(dot(vec1, vec2) / mag(vec1) * mag(vec2));
}

module.exports = angle;
