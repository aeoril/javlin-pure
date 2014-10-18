// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

function add(vec1, vec2) {
    'use strict';
    return vec1.reduce(function(acc, elem, index) {
        acc.push(elem + vec2[index]);
        return acc;
    }, []);
}

module.exports = add;
