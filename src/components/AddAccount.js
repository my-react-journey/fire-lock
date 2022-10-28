import {get, set} from "idb-keyval"
import { v4 as uuidv4 } from 'uuid'

function AddAccount() {
	return <></>
}

async function checkAndRemoveIfAccountExists(data) {
    let accounts = await get("accounts")
    if(accounts) {
        accounts = accounts.filter(account => account.account !== data.account && account.issuer !== data.issuer)
        return accounts
    }
    return []
}

export async function addNewAccount(data) {
    let accounts = await checkAndRemoveIfAccountExists(data)
    if(accounts) {
        data.id = uuidv4()
        accounts.push(data)
        await set("accounts", accounts)
        return true
    }
    await set("accounts", [data])
    return true
}

let IssuerPics = {
    "Facebook": "./IssuerPics/Facebook.svg",
    "Google": "./IssuerPics/Google.svg",
    "Instagram": "./IssuerPics/Instagram.svg",
    "LinkedIn": "./IssuerPics/LinkedIn.svg",
    "Pinterest": "./IssuerPics/Pinterest.svg",
    "Proton": "./IssuerPics/Proton.svg",
    "Reddit": "./IssuerPics/Reddit.svg",
    "Spotify": "./IssuerPics/Spotify.svg",
    "Snapchat": "./IssuerPics/Snapchat.svg",
    "Twitter": "./IssuerPics/Twitter.svg",
    "WhatsApp": "./IssuerPics/WhatsApp.svg",
}

export function returnIssuerImage(issuer, string = "") {
    if(IssuerPics[issuer]) return `${string}./IssuerPics/${issuer}.svg`
    return `${string}./IssuerPics/default.svg`
}

// Code I copied from otpauth-uri-parser
function parseURI(uri) {
	if (typeof uri !== "string" || uri.length < 7) return null

	const parts = /otpauth:\/\/([A-Za-z]+)\/([^?]+)\??(.*)?/i.exec(uri)

	if (!parts || parts.length < 3) {
		return null
	}

	// eslint-disable-next-line no-unused-vars
	const [fullUri, type, fullLabel] = parts

	if (!type || !fullLabel) {
		return null
	}

	const decodedLabel = decodeURIComponent(fullLabel)

	const labelParts = decodedLabel.split(/: ?/)

	const label =
		labelParts && labelParts.length === 2
			? { issuer: labelParts[0], account: labelParts[1] }
			: { issuer: "", account: decodedLabel }

	const qs = parts[3] ? new URLSearchParams(parts[3]) : []

	const query = [...qs].reduce((acc, [key, value]) => {
		acc[key] = value

		return acc
	}, {})

	return { type: type.toLowerCase(), label, query }
}

export function retriveData(object) {
    let data = {}

    if(object?.label?.account) {
        data.account = object.label.account
    } else {
        if(object?.query?.account) {
            data.account = object.query.account
        } else return null
    }
    
    if(object?.query?.secret) {
        data.secret = object.query.secret
    } else return null

    if(object?.label?.issuer) {
        data.issuer = object.label.issuer
    } else {
        if(object?.query?.issuer) {
            data.issuer = object.query.issuer
        }
    }

    if(object?.query?.algorithm) {
        data.algorithm = object.query.algorithm
    } else {
        data.algorithm = "SHA1"
    }

    if(object?.query?.digits) {
        data.digits = parseInt(object.query.digits)
    } else {
        data.digits = 6
    }

    if(object?.query?.period) {
        data.period = parseInt(object.query.period)
    } else {
        data.period = 30
    }

    return data
}

export function validateQR(string) {
    let object = parseURI(string)
    return retriveData(object)
}

export default AddAccount
