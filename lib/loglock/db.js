//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   API URLs
const apiUrl_base = "https://db.buweiliao.workers.dev"
const apiUrl_loglock = apiUrl_base + "/api/loglock"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   1. Get a list of all logs

export async function getLogList() {
	return fetch(apiUrl_loglock, {
		next: {
			tags: ["getLogList"]
		}
	}).then(res => {
		if (!res.ok) {
			throw new Error("Failed to fetch list of logs")
		}
		return res.json()
	})
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   2. Get details of a log

export async function getLogDetails(id, flag) {
	// flag types: project, experiment, algorithm
	return fetch(`${apiUrl_loglock}/${flag}/${id}`).then(res => {
		if (!res.ok) {
			throw new Error("Failed to fetch log details")
		}
		return res.json()
	})
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   3. Post a new log

export async function postLog(body) {
	return fetch(apiUrl_loglock, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body
	}).then(res => {
		if (!res.ok) {
			throw new Error("Failed to post log")
		}
		return res.json()
	})
}
