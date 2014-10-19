// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

'use strict';

function scale(vec, scalar) {
    return vec.map(function (elem, index) {
        return elem * scalar;
    });
}

module.exports = scale;
