// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril
//
// index.js - combines individual javlin modules into one module

'use strict';

var add = require('./add'),
    sub = require('./sub'),
    scale = require('./scale'),
    dot = require('./dot'),
    mag = require('./mag'),
    norm = require('./norm'),
    proj = require('./proj'),
    angle = require('./angle'),
    angle2d = require('./angle2d'),
    fromPolar2d = require('./fromPolar2d');

module.exports.add = add;
module.exports.sub = sub;
module.exports.scale = scale;
module.exports.dot = dot;
module.exports.mag = mag;
module.exports.norm = norm;
module.exports.proj = proj;
module.exports.angle = angle;
module.exports.angle2d = angle2d;
module.exports.fromPolar2d = fromPolar2d;
