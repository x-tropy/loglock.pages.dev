"use server"

import { revalidateTag } from "next/cache"
import { postLog } from "@/lib/loglock/db"
import { verifyLog } from "@/lib/loglock/eth"
import { notarizeLog } from "@/lib/loglock/eth"

export async function postLog_request(prevState, formData) {
	try {
		const code = formData.get("code")
		const organization = formData.get("organization")
		const projectType = formData.get("projectType")
		const projectTitle = formData.get("projectTitle")
		const projectAcronym = formData.get("projectAcronym")
		const dataCategory = formData.get("dataCategory")
		const virtualResource = formData.get("virtualResource")
		const hashInput = formData.get("hashInput")
		const {
			experimentURL,
			projectURL,
			algorithm: { fileHash, filePath },
			timestamp
		} = JSON.parse(hashInput)

		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		//>>>>>>>>>>>   1.Write a log to blockchain, get transaction hash
		const { transactionHash } = await notarizeLog(hashInput)

		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		//>>>>>>>>>>>   2.Write a log to DB
		await postLog(
			JSON.stringify({
				code,
				organization,
				projectType,
				projectTitle,
				projectAcronym,
				dataCategory,
				virtualResource,
				hashInput,
				experimentURL,
				projectURL,
				fileHash,
				timestamp,
				filePath,
				transactionHash
			})
		)

		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		//>>>>>>>>>>>  Revalidate after submission
		revalidateTag("getLogList")
		prevState.message = "Created a new log"
		prevState.transactionHash = transactionHash
		return prevState
	} catch (e) {
		prevState.message = "Failed to create"
		return prevState
	}
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   3. Verify log with blockchain
export async function verifyLog_request(prevState, formData) {
	const input = formData.get("hashInput")
	const { verified } = await verifyLog(input)
	prevState.verified = verified
	prevState.message = "Successfully verified"
	return prevState
}
