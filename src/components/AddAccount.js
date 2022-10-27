
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

