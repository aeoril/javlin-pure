// Copyright © 2015 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

'use strict';

var sub = require('./sub'),
    mag = require('./mag');

function distance(vec1, vec2) {
    return mag(sub(vec2, vec1));
}

module.exports = distance;
