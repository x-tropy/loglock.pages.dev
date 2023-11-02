import { cookies } from "next/headers"

// This line declares: this is a serverless function. It will run on the edge.
// necessary for deployment to Cloudflare pages
export const runtime = "edge"

export async function GET(request) {
	const cookieStore = cookies()
	const token = cookieStore.get("token")

	return new Response("Hello, Next.js!", {
		status: 200,
		headers: { "Set-Cookie": `token=${token}` }
	})
}
