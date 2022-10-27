
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

function retriveData(object) {
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

