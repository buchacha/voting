require('babel-register')
module.exports = {
  networks: {
    develop: {
      port: 8545,      
      host: 'localhost',
      network_id: '*',
      gas: 6700000
    }
  },
  compilers: {
    solc: {
      version: "0.4.19"
      //Uncomment and update the solc version as shown here
   }
  }
}