// Get a list of all logs
export async function getLogList() {
	const res = await fetch("http://127.0.0.1:8787/api/immutablelog/", {
		next: {
			tags: ["getLogList"]
		}
	})

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

// Get details of a log
export async function getLogDetails(id) {
	const res = await fetch(`http://127.0.0.1:8787/api/immutablelog/${id}`)
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}
