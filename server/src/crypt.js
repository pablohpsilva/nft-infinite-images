// source: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
const crypto = require('crypto-js');

const secretKey = 'vOVH6=/=pNWjRRIqCc7rdxs0|#!Hzfr3';

// Encrypt
const encrypt = (input) => {
    const text = typeof input === 'object' ? JSON.stringify(input) : input;
    return crypto.AES.encrypt(text, secretKey).toString();
}

// Decrypt
const decrypt = (hash) => {
    const bytes  = crypto.AES.decrypt(hash, secretKey);
    const result = bytes.toString(crypto.enc.Utf8);
    try {
        return JSON.parse(result);
    } catch {
        return result;
    }
}
module.exports = {
    encrypt,
    decrypt
}