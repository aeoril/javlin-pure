// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// proj.js - projection of n-dimensional vector onto another one

'use strict';

var scale = require('./scale'),
    mag = require('./mag'),
    dot = require('./dot');

function proj(vec1, vec2) {
    var vec2Mag = mag(vec2);
    return scale(vec2, Math.abs(dot(vec1, vec2)) / (vec2Mag * vec2Mag));
}

module.exports = proj;
