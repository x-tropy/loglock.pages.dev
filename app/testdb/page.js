import { getLogList } from "@/app/api/loglock/db.js"

export default async function Page() {
	const data = await getLogList()
	return <code>{JSON.stringify(data)}</code>
}
