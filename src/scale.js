// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

function scale(vec, scalar) {
    'use strict';
    'use strict';
    return vec.reduce(function(acc, elem, index) {
        acc.push(elem * scalar);
        return acc;
    }, []);
}

module.exports = scale;
