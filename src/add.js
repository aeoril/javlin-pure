// Copyright © 2014 QuarksCode.  MIT License - see http://opensource.org/licenses/MIT or LICENSE.md file
// Original Author:  aeoril

'use strict';

function add(vec1, vec2) {
    if (arguments.length !== 2) {
        throw new TyperError('You must pass add exactly two array arguments (vectors)')
    }
    if (!Array.isArray(vec1) || !Array.isArray(vec2)) {
        throw new TypeError('Both arguments (vectors) must be arrays');
    }
    if (vec1.length === 0 || vec2.length === 0) {
        throw new TypeError('Both arguments (vectors) must contain at least 1 element');
    }
    if (vec1.length !== vec2.length) {
        throw new TypeError('Both arguments (vectors) must have the same array length');
    }
    return vec1.map(function(elem1, index) {
        var elem2 = vec2[index];
        if (typeof elem1 !== 'number' || typeof elem2 !== 'number' ||
            isNaN(elem1) || isNaN(elem2)) {
            throw new TypeError('All vector elements must be valid numbers');
        }
        return elem1 + elem2;
    });
}

module.exports = add;
