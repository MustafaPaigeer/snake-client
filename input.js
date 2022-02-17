const {connect} = require('./client');

let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput)
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\w'){
    connection.write('Move: up');
  }
  if (key === '\a') {
    connection.write('Move: left');
  }
  if (key === '\s') {
    connection.write('Move: down');
  }
  if (key === '\d') {
    connection.write('Move: right');
  }
  if (key === '\q') {
    connection.write('Say: Hi');
  }
};
setupInput();


module.exports = {
  setupInput
}