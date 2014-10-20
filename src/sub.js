// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// sub.js - given two n-dimensional vectors, subtracts the second from the first

'use strict';

function sub(vec1, vec2) {
    return vec1.map(function (elem, index) {
        return elem - vec2[index];
    });
}

module.exports = sub;
