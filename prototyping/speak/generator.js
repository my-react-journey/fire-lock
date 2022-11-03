let speakeasy = require("speakeasy")
let fs = require("fs")

let secret = fs.readFileSync("secret.txt", "utf8")

function main() {
    let token = speakeasy.totp({
        secret: secret,
        encoding: "base32"
    })
    
    let currentUnixTimeEpoch = Date.now() / 1000
    let timeRemaining = (30 - (currentUnixTimeEpoch % 30)).toFixed(0)
    console.log(`${token} ${timeRemaining}s ${getProgressBar()}`)
}

setInterval(main, 1000)

// function that returns ⬛ for the number of seconds remaining
function getProgressBar() {
    let currentUnixTimeEpoch = Date.now() / 1000
    let timeRemaining = (30 - (currentUnixTimeEpoch % 30)).toFixed(0)
    let progressBar = ""
    for (let i = 0; i < timeRemaining; i++) {
        progressBar += "⬛"
    }
    return progressBar
}