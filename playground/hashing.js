const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = "123abc#";
let hashedPassword = "$2a$10$gPJxqRB.jKvggPqGl4x1eOClXlOeHm/LZa5lo45dBn.aP9WwO40ti";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

bcrypt.compare('432dsa', hashedPassword, (err, res) => {
    console.log(res);
});




// let data = {
//     id: 10
// }

// let token = jwt.sign(data, "thesecret");
// console.log(token);
// let decoded = jwt.verify(token, "thesecret")
// console.log('decoded: ', decoded);


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

