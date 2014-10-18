// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

function scale(vec, scalar) {
    'use strict';
    var i, result = [];
    for (i = 0; i < vec.length; i++) {
        result.push(vec[i] * scalar);
    }
    return result;
}

module.exports = scale;
