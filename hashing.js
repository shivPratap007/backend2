// Import the crypto module
const crypto = require('crypto');

// Function to hash a string using SHA-256
function hashString(inputString) {
    const hash = crypto.createHash('sha256');
    hash.update(inputString);
    return hash.digest('hex');
}

// Example input string
const inputString = 'I am doing the hashing here';

// Calculate the hash
const hashedResult = hashString(inputString);
console.log('Input:', inputString);
console.log('Hash:', hashedResult);
