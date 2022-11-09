import { decrypt } from "../../components/Crypto"
import { addNewAccount } from "../../components/AddAccount"

export default function ImportHelperFunction() {
    return (
        <></>
    )
}
/**
 * ### Function Decrypt And Add To Storage
 * This function decrypts the encrypted data and adds it to the storage
 * @param {string} string The CipherText to decrypt
 * @param {string} key The key to decrypt the CipherText
 * @param {function} setInfo The function to set the info
 * @param {function} setInfoClass The function to set the info class
 * @param {object} styles The styles object
 * @returns {Promise<Object>} Whether the decryption was successful
 */
export async function DAATS(string, key) {

    let returnData = {
        success: true,
        message: ""
    }

    try {
        let decrypted = decrypt(string, key)

        if (decrypted.substring(0, 3) !== `[{"`) {
            console.log("Ran this")
            returnData.success = false
            returnData.message = "Invalid file. Please try again."
            return returnData
        }

        let importedAccounts = JSON.parse(decrypted)

        if(importedAccounts.length === 0) {
            returnData.success = false
            returnData.message = "No accounts found in the file."
            return returnData
        }

        for(let i = 0; i < importedAccounts.length; i++) {
            let account = importedAccounts[i]
            await addNewAccount(account)
        }

        return returnData

        
    } catch (error) {

        // doesn't work if they export when no accounts found
        // if(error.message === "Unexpected token u in JSON at position 0") {
        //     returnData.success = false
        //     returnData.message = "The file is not a valid filelock backup file."
        //     return returnData
        // }

        returnData.success = false
        returnData.message = "Incorrect password. Please try again. Did you choose the correct file?"
        return returnData
    }
}