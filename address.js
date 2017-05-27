const bitcoin = require('bitcoinjs-lib');
// console.log(bitcoin);
const testnet = bitcoin.networks.testnet;
// New random
const keyPair = bitcoin.ECPair.makeRandom({network: testnet});
// console.log(keyPair);
console.log("addess:", keyPair.getAddress());
console.log("WIF:", keyPair.toWIF()); // Wallet input format, serialize key pair

// New WIF(s):

// address: mmT3SRdroqHWdNEyAqnAPps3bzhbmV47SB --> represent public key
// WIF: cP49cEkczTRsTGcTyVuRNmpdNU5yKc1jUanpaPT5zQCHotatYRbY --> private key

// address: mw8chGZszbHXSUTRvuaegykGxsrGz81CfJ
// WIF: cMkDqgPD9goDdLhFk8kqfThCfZrPUTxzECCDgsgCtEQm2sW54o6M