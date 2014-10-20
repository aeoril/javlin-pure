// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// norm.js - normalizes an n-dimensional vector (makes its length 1)

'use strict';

var scale = require('./scale'),
    mag = require('./mag')

function norm(vec) {
    return scale(vec, 1 / mag(vec));
}

module.exports = norm;
