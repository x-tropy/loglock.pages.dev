//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   Also used in /experiment/[id]/

"use client"
import { useState } from "react"
import { CubeTransparentIcon, ExternalLinkIcon, CodeIcon, InformationCircleIcon, DuplicateIcon, BadgeCheckIcon, BeakerIcon, ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { Icon, Flex } from "@tremor/react"
import { Badge, Button, Callout } from "@tremor/react"
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid"
import Link from "next/link"

export function CopyIcon({ content }) {
	const [tooltip, setTooltip] = useState("Copy to clipboard")

	const copyToClipboard = async () => {
		navigator.clipboard.writeText(content)
		await navigator.clipboard.readText()
		setTooltip("Successfully copied!")
		setTimeout(() => {
			setTooltip("Copy to clipboard")
		}, 2000)
	}

	return <Icon icon={DuplicateIcon} variant='solid' tooltip={tooltip} onClick={copyToClipboard} className='ml-auto cursor-pointer' />
}

export function VerificationStatus() {
	return (
		<Badge size='xl' variant='success' className='mt-4 cursor-pointer' icon={ShieldCheckIcon}>
			Verification success!
		</Badge>
	)
}

export function FooterAction({ transactionHash }) {
	return (
		<Flex justifyContent='center' className='gap-6'>
			<Link href={`https://sepolia.etherscan.io/tx/${transactionHash}`}>
				<Button variant='light' iconPosition='right' icon={CubeTransparentIcon}>
					Transaction detail
				</Button>
			</Link>
			<Link href='https://emn178.github.io/online-tools/keccak_256.html'>
				<Button iconPosition='right' icon={ExternalLinkIcon} variant='light'>
					Other hash tools
				</Button>
			</Link>
		</Flex>
	)
}

export function VisitExperiment({ experimentURL }) {
	return (
		<Link href={`/loglock/experiment/${experimentURL}`}>
			<Button icon={CodeIcon} variant='secondary'>
				Vist experiment
			</Button>
		</Link>
	)
}

export function CallOut() {
	return (
		<Callout className='mt-4' title='How to use' icon={InformationCircleIcon}>
			The log verification is based on the hash of the log input. The hash is calculated using the Keccak256 algorithm, and then recorded on the Ethereum blockchain. The "verify" function checks if
			the hash of the log input matches the hash recorded on the blockchain.
		</Callout>
	)
}

export function ButtonBack() {
	return (
		<Link href='/loglock/demo'>
			<Button iconPosition='left' icon={ArrowCircleLeftIcon}>
				Back to list
			</Button>
		</Link>
	)
}

export function VisitProject({ projectURL }) {
	return (
		<Link href={`/loglock/project/${projectURL}`}>
			<Button icon={BeakerIcon} variant='secondary'>
				Vist project
			</Button>
		</Link>
	)
}
