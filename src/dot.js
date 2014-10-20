// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// dot.js - returns dot product (inner product) of two n-dimensional vectors

'use strict';

function dot(vec1, vec2) {
    return vec1.reduce(function (acc, elem, index) {
        return acc + elem * vec2[index];
    }, 0);
}

module.exports = dot;
