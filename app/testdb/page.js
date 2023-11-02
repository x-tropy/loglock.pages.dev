async function getData() {
	const res = await fetch("http://192.168.0.242:8787/api/immutablelog/", {
		next: {
			tags: ["listAllLogs"]
		}
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

export default async function Page() {
	const data = await getData()
	return <code>{JSON.stringify(data)}</code>
}
