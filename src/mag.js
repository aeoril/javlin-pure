// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// mag.js - returns magnitude (length) of n-dimensional vector

'use strict';

function mag(vec) {
    return Math.sqrt(vec.reduce(function (acc, elem) {
        return acc + elem * elem;
    }, 0));
}

module.exports = mag;
