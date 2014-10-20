// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// index.js - combines individual javlin modules into one module

'use strict';

var add = require('./add'),
    sub = require('./sub'),
    scale = require('./scale');

module.exports.add = add;
module.exports.sub = sub;
module.exports.scale = scale;
