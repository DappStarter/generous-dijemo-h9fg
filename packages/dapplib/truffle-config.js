require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain minor heavy clock forward giggle'; 
let testAccounts = [
"0x3d41b449fe758f96205fe2482ccba442cc3be4398964b9fc683c9d879e6410e2",
"0x38fb2aabeab8d23321a22944ccfd70849a3e69e7a2aa5f484c1897d4ec775eb4",
"0x2db4b4c9014302b79b97ecd857544f7fe907724e119ba2347a3650c1a5b0580f",
"0x29387752e1aab3bcf6632d796a43bc0ba197732e8c2a4766d5c9007c9057ab93",
"0x8e81e8071fae446255d4e84edd36bdc35982cfc9ad87630e3e13250827f8fc11",
"0xb1a80f51156777655c829f0e9ee0dfeebb03022efb079152fc7a504af5a9424a",
"0x9443654bf96e83d2cdd366442393c2ad63b4a60126069193d1e5d29ff478852f",
"0x70d4c902eeff0200c2b0e963f72470f50e1b674deb323e8c1e5ef71c2c7eb835",
"0xf2315f867fff1d7a2f04aa2f44387c51e0041b4f23744039eed47b4b370dd530",
"0xcef1d1932e3e434da48a20f822aae85e0ce3d606b07b60b1f6d97f64b9ac7168"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


