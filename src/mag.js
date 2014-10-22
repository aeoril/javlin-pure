// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// mag.js - returns magnitude (length) of n-dimensional vector

'use strict';

var dot = require('./dot');

function mag(vec) {
    return Math.sqrt(dot(vec, vec));
}

module.exports = mag;
