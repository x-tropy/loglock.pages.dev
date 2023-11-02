"use client"

import revalidate from "@/lib/revalidate"

export default () => {
	return <button onClick={() => revalidate("/testdb")}>Revalidate</button>
}
