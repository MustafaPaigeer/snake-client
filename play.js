const {connect} = require('./client');
const {setupInput} = require('./input');

// setup interface to handle user input from stdin




console.log("Connecting ...");
connect();


// \u0003 maps to ctrl+c input