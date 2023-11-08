"use client"

import { Callout, TabPanel, Divider, Badge, Card, Button, Title, Text } from "@tremor/react"
import { useState } from "react"
import Link from "next/link"
import { ShieldCheckIcon, BadgeCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid"
import { useFormStatus, useFormState } from "react-dom"
import { verifyLog_request } from "../actions"

const initialState = {
	message: "",
	verified: null
}

function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<Button disabled={pending} type='submit' icon={BadgeCheckIcon}>
			Verify
		</Button>
	)
}

export default function VerificationTool() {
	const [hashInput, setHashInput] = useState("")
	const [state, formAction] = useFormState(verifyLog_request, initialState)

	return (
		<TabPanel className='mt-6 '>
			<Card className='max-w-lg mx-auto mt-2 '>
				<Title>Fast check</Title>
				{/* Update needed: Goerli -> Sepolia */}
				<Text className='my-2'>
					Just paste the log item here and get verification result from the Ethereum smart contract ➜{" "}
					<Link href={"https://sepolia.etherscan.io/address/0xd078377970eA26c29FeFa1410018A84ed861cc21#code"}>LogProof</Link>
				</Text>
				<form action={formAction} name='verifyForm'>
					<textarea
						placeholder='Input content'
						name='hashInput'
						value={hashInput}
						onChange={e => {
							setHashInput(e.target.value)
							state.verified = null
						}}
						className='mt-2 w-full h-48 rounded-lg p-2 resize-none text-xs bg-gray-100 font-mono'
					/>
					<VerificationResult verified={state.verified} />
					<Divider />
					<SubmitButton />
				</form>
			</Card>
		</TabPanel>
	)
}

function VerificationResult({ verified }) {
	if (verified == true) {
		return (
			<div className='my-2'>
				<Badge size='xl' variant='success' icon={ShieldCheckIcon}>
					Verification success!
				</Badge>
			</div>
		)
	} else if (verified == false) {
		return (
			<Callout className='my-2' title='Verification failed!' icon={ShieldExclamationIcon} color='rose'>
				Be cautious, this log item is not recorded and verified by Ethereum blockchain.
			</Callout>
		)
	} else {
		return ""
	}
}
