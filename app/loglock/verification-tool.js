import { Callout, TabPanel, Divider, Badge, Card, TextInput, Button, Title, Text } from "@tremor/react"
import { useState } from "react"
import Link from "next/link"
import { ShieldCheckIcon, BadgeCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid"

export default function VerificationTool() {
	const verify = async v => {
		const response = await fetch("/api/verify", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ hashInput: v })
		})
		const data = await response.json()
		console.log(data)
		setVerificationStatus(data.result)
	}

	const [hashInput, setHashInput] = useState("")
	const [verificationStatus, setVerificationStatus] = useState()

	return (
		<TabPanel className='mt-6 '>
			<Card className='max-w-lg mx-auto mt-2 '>
				<Title>Fast check</Title>
				{/* Update needed: Goerli -> Sepolia */}
				<Text className='my-2'>
					Just paste the content here and get verification result from the Ethereum smart contract ➜{" "}
					<Link href={`https://goerli.etherscan.io/address/${process.env.LOG_PROOF_CONTRACT_ADDRESS}#code`}>LogProof</Link>
				</Text>
				<textarea
					placeholder='Input content'
					value={hashInput}
					onChange={e => {
						setHashInput(e.target.value)
						setVerificationStatus(undefined)
					}}
					className='mt-2 w-full h-48 rounded-lg p-2 resize-none font text-xs bg-gray-100 font-mono'
				/>

				{verificationStatus == true ? (
					<div className='my-2'>
						<Badge size='xl' variant='success' icon={ShieldCheckIcon}>
							Verification success!
						</Badge>
					</div>
				) : (
					""
				)}
				{verificationStatus == false ? (
					<Callout className='my-2' title='Verification failed!' icon={ShieldExclamationIcon} color='rose'>
						Be cautious, this log item is not recorded and verified by Ethereum blockchain.
					</Callout>
				) : (
					""
				)}
				<Divider />
				<Button icon={BadgeCheckIcon} onClick={() => verify(hashInput)}>
					Verify
				</Button>
			</Card>
		</TabPanel>
	)
}
