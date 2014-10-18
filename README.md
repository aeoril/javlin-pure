# javlin - Just Another Vector Library In Node
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

## APIs
The following are the API descriptions.  The file name is the API (function) name followed by ".js"

### add(vec1, vec2)
Adds two n-dimensional vectors, returning the result in a new vector

var vec = add([1, 2], [3, 4]); // vec === [4, 6]

### sub(vec1, vec2)
Subtracts two n-dimensional vectors (subtracts vec2 from vec1), returning the result in a new vector

var vec = sub([1, 2], [3, -4]); // vec === [-2, 6]

[browserify]: http://browserify.org/