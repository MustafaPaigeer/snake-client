const net = require("net");
const { IP, PORT } = require("./constant");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
      console.log('successfully connected to the server'); 
      conn.write('Name: MPK')
      // let timer = 50;
      // let count = 0;
      // do {
      //   setTimeout(() => { 
      //     conn.write('Move: up');  
      //   }, timer);
      //   timer += 300;
      //   count++;
      // } while(count < 6);
      // do {
      //   setTimeout(() => { 
      //     conn.write('Move: right');  
      //   }, timer);
      //   timer += 300;
      //   count++;
      // } while (count < 10)
    });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
   
  });
  // conn.on('connect', () => {
  //     conn.write('mpk')
  //   });
  return conn;
};

  module.exports = {connect};