// Modules
//Node.js uses commonjs library under the hood.
// If you crated your own module, always starts your module by ./ or ../ or at whatver level, it is there

const names =  require('./4-names');
const {peter} = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

require('./7-mind-grenade');


// console.log(data);
// console.log(names);

// sayHi('susan');

// sayHi(names.john);

// // sayHi(john);

// sayHi(peter);



