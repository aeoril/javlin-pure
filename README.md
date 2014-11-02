# javlin-pure (pronounced "javelin pure")
## Just Another Vector Library In Node - Pure
Pure, stateless, modular vector manipulation functions written in Javascript.  Designed for Node.js.

## Key Attributes

### Vector Types are Simple Arrays
All vectors are simple arrays of numbers.  The vector "dimension" is just the length of the array (number of elements).
"n-dimensional" means the function can act on vectors (arrays) of any length.

### Pure functions
All vector functions are pure functions - they return a new array as the result instead of mutating an existing array.

### Stateless
All vector functions are stateless - they are not methods of a class instance prototype

### Module pattern
Each function resides in its own individual file and is designed to run in Node.js.  They can be run in a browser using
[Browserify][browserify].  Dependencies are included with 'require()' and each function is exported via "module.exports"

### Unit Testing
Full unit testing suite implemented using Tape (TAP output) for node, npm and Testling.  Easily configurable for
Travis-ci.  Includes "pretty-print" tests using tap-spec for Windows and Linux.

## APIs
The following are the API descriptions.  The file name is the API (function) name followed by ".js"

### add(vec1, vec2)
Adds two n-dimensional vectors, returning the result in a new vector

var vec = add([1, 2], [3, 4]); // vec === [4, 6]

### sub(vec1, vec2)
Subtracts two n-dimensional vectors (subtracts vec2 from vec1), returning the result in a new vector

var vec = sub([1, 2], [3, -4]); // vec === [-2, 6]

### scale(vec, scalar)
Scales an n-dimensional vector by scalar (just a number), returning the result in a new vector

var vec = scale([1, 2], 3); // vec === [3, 6]

### dot(vec1, vec2)
Computes the dot (inner) product of two n-dimensional vectors

var value = dot([1, 2], [3, 4]); // value === 11

### mag(vec)
Computes the magnitude (length) of an n-dimensional vector

var value = mag([3, 4]); // value === 5

### norm(vec)
Normalizes an n-dimensional vector (returns vector of magnitude 1, or unit vector, retaining direction)

var vec = norm([3, 4]); // vec === [.6, .8]

### proj(vec1, vec2)
Returns the projection of n-dimensional vector vec1 along vec2

var vec = proj([3, 4, 5], [6, 8, 0]); // vec === [3, 4, 0]

### angle(vec)
Returns the angle in radians from 0 to PI of an n-dimensional vector.  Angle is 0 along the positive x axis and
positive counterclockwise.  NOTE:  This function does not retain angle sign information

var value = angleN([5, 5, 0, 0, 0]); // value === 0.785

### angle2d(vec)
Returns the angle in radians from -PI to PI of a 2-dimensional vector.  Angle is 0 along the positive x axis and
positive counterclockwise.  This is a simple wrapper for [Math.atan2(y, x)][atan2]

var value = angle2d([3, 4]); // value === 0.927

### fromPolar2d(mag, angle)
Given a magnitude and angle in radians positive counterclockwise from the x axis returns a 2-dimensional vector

var vec = fromPolar2d(5, 0.927); // vec === [3, 4] (very close approximations)

[browserify]: http://browserify.org/
[atan2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2