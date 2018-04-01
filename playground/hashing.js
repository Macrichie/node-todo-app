const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10
}

let token = jwt.sign(data, "thesecret");
console.log(token);
let decoded = jwt.verify(token, "thesecret")
console.log('decoded: ', decoded);


// let message = "This is my first hashing";
// let hash = SHA256(message).toString();

// console.log(`message: ${message}`)
// console.log(`Hashing: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecrets').toString()
// }

// // data.id = 200;
// // token.hash = SHA256(JSON.stringify(data).toString());

// let result = SHA256(JSON.stringify(data) + 'somesecrets').toString();
// if(result === token.hash) {
//     console.log('Proceed! You are safe...');
// } else {
//     console.log('Stop! data has been compromised');
// }

