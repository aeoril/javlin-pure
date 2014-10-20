// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// proj.js - projection of n-dimensional vector onto another one

'use strict';

var scale = require('./scale'),
    dot = require('./dot');

function proj(vec1, vec2) {
    return scale(vec2, dot(vec1, vec2) / dot(vec2, vec2));
}

module.exports = proj;
