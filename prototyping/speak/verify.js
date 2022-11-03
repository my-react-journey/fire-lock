let speakeasy = require("speakeasy")
let fs = require("fs")

let secret = fs.readFileSync("secret.txt", "utf8")

let userToken = "644159"

var verified = speakeasy.totp.verify({
	secret: secret,
	encoding: "base32",
	token: userToken,
})

console.log(verified)