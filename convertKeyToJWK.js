const fs = require('fs');
const rsaKeyToJwt = require('rsa-pem-to-jwk');


const privateKey = fs.readFileSync('./certs/private.pem');

// converts pem key to public jwk, to convert into private set 'private' as 3d param;
const jwk = rsaKeyToJwt(privateKey, {use: 'sig'}, 'public');

console.log(jwk);