import { NextResponse } from "next/server"
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   not working, don't know why
export default async function middleware(req) {
	let { pathname } = req.nextUrl
}
