const bitcoin = require('bitcoinjs-lib');
const testnet = bitcoin.networks.testnet;

const keyPair = bitcoin.ECPair.fromWIF(
	// your WIF (private key)
	'cP49cEkczTRsTGcTyVuRNmpdNU5yKc1jUanpaPT5zQCHotatYRbY',
	testnet
);

const tx = new bitcoin.TransactionBuilder(testnet);
tx.addInput(
	// tx(transaction) ID of the tx that spend to this address
	'854a5828c73baec886249e6dd84cf1629c7486b370c20c9d1c29d6abbed670dd',
	1 //index
);
tx.addOutput(
	// address
	'mt2GsrS9XwFAqkcmuPP4EsBMmQs5mPzfrZ',
	 10000000-200 //amount in Satoshis, remember fee
 );
tx.addOutput('mw8chGZszbHXSUTRvuaegykGxsrGz81CfJ', 40000000-400);
tx.sign(0, keyPair); // sign(index of inputs, private key)

console.log(tx.build().toHex()); // Generate transaction hash
//0100000001dd70d6beabd6291c9d0cc270b386749c62f14cd86d9e2486c8ae3bc728584a85010000006a47304402200b50b85ba635080da0fc47126dc9b58e240f49eaf0d0569fc9c94a39f5076b7d02207270f426d34a0fb229fe318db6cbfbf1b6bdc8f6d1fb819b7bf72282a545703c0121032a9879d667a9f54ca32a79e67f1c8392d703d0e8fc9bd603ba8d0ca90f349031ffffffff02b8959800000000001976a914892d159a94925ca8aa7c2cfd3b64824ba5085b9488ac70586202000000001976a914ab48801685730c9122e8995d7b3e2234c7225d0a88ac00000000
// Push on to testnet:  https://tbtc.blockr.io/tx/push
// tx id returned:  d03a4ac89174a99d1dcd9308f2a0f798fb176574bbff206ff5398d7f994ebd3f