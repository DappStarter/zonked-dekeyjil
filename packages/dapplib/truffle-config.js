require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift rate noble hole just fashion force gauge'; 
let testAccounts = [
"0xf47d9049c7578da5f77ea13e27a3d9d2dda52da204ac74c0ac63f992a0945f27",
"0x8ab7eeecf173e174daa25bd842cd5cef3b337e99fec06914c078b2ab34881e7f",
"0x967aea89303ef5e5e8a3e916877e90dae88189c54b905b20de584632582645d3",
"0xcf888c00334bb0aa93de146f754dafb4c9c6eea17c61507bfe5d609e97ee7018",
"0x9d746482783a1505cc310598948c646937fb0cf8ec1cf0155fbc6fdebcf9959b",
"0x02e5c516b5242aa2bdde97c47aa13675d2fe8bbf1e2198b68bce0fbb3eb37ec1",
"0x78bb4a343f141f08b791374e0b3bdb86a5c1fceadd44efd5f8d9a557e8e039af",
"0x3ae1bd0edbb9e15f15a3a14fa783875de61acbf03d3430dbd6174b83f31d7981",
"0x0bcaeb250e0da1e26c484586570c2c01a8e08b053846711df74eddc9bbdb05be",
"0x72dd9ced2e80d307bd44b3951c76c20488c945b83c010e6f770245aadc3145d6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
