import AES from "crypto-js/aes"
import enc from "crypto-js/enc-utf8"

export function encrypt(message, key) {
    return AES.encrypt(message, key).toString()
}

export function decrypt(cipherText, key) {
    var bytes  = AES.decrypt(cipherText, key);
    return bytes.toString(enc)
}