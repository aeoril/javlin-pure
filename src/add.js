// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

function add(vec1, vec2) {
    var result = [];
    for (var i = 0; i < vec1.length; i++) {
        result.push(vec1[i] + vec2[i]);
    }
    return result;
}

module.exports = add;
