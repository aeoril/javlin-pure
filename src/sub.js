// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

'use strict';

function sub(vec1, vec2) {
    return vec1.reduce(function(acc, elem, index) {
        acc.push(elem - vec2[index]);
        return acc;
    }, []);
}

module.exports = sub;
