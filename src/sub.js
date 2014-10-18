// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

function sub(vec1, vec2) {
    'use strict';
    var i, result = [];
    for (i = 0; i < vec1.length; i++) {
        result.push(vec1[i] - vec2[i]);
    }
    return result;
}

module.exports = sub;
