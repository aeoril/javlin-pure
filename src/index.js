// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// index.js - combines individual javlin modules into one module

'use strict';

var add = require('./add'),
    sub = require('./sub'),
    scale = require('./scale'),
    mag = require('./mag'),
    norm = require('./norm');

module.exports.add = add;
module.exports.sub = sub;
module.exports.scale = scale;
module.exports.mag = mag;
module.exports.norm = norm;
