let speakeasy = require("speakeasy")
let fs = require("fs")
let secret = speakeasy.generateSecret({length: 17})

// write to file with name secret.txt
fs.writeFile('secret.txt', secret.base32, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
