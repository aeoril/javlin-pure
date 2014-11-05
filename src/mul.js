// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// mul.js - vector multiplication of two n-dimensional vectors along the diagonal

'use strict';

function mul(vec1, vec2) {
    return vec1.map(function (elem, index) {
        return elem * vec2[index];
    });
}

module.exports = mul;
