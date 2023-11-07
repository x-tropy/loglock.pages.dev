const apiUrl_base = "https://eth.buweiliao.workers.dev"
const apiUrl_verify = apiUrl_base + "/api/verify"
const apiUrl_notarize = apiUrl_base + "/api/notarize"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   verify
export async function verifyLog(input) {
	return fetch(apiUrl_verify, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			input: input.trim()
		})
	}).then(res => {
		if (!res.ok) {
			throw new Error("Failed to do verification") // did not complete the verification
		}
		return res.json()
	})
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   notarize
export async function notarizeLog(input) {
	return fetch(apiUrl_notarize, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			input: input.trim()
		})
	}).then(res => {
		if (!res.ok) {
			throw new Error("Failed to do notarization") // did not complete the notarization
		}
		return res.json()
	})
}
