import { Title, Text, TabGroup, TabPanels } from "@tremor/react"
import { TabListClient } from "../client"
import { getLogList } from "@/lib/loglock/db"
import ProjectList from "./project-list.js"
import MockData from "./mock-data.js"
import VerificationTool from "./verification-tool.js"
import HowItWorks from "./how-it-works.js"
import {ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/outline";

export default async function DashboardExample() {
	const data = await getLogList()

	return (
		<>
			<div className='max-w-[960px] mt-10 my-16 mx-auto'>
				<h3 className='text-lg font-semibold mb-2'><ChatBubbleOvalLeftEllipsisIcon
					className='size-6 mr-1 text-green-600 inline mb-1'/>Just a Demo</h3>
				<p>This demo system servers as a proof of concept, showcasing how Ethereum
					blockchain
					could be used to enhace transparency of data usages.</p>
			</div>
			<TabGroup className='mt-6' defaultIndex={0}>
				<TabListClient/>
				<TabPanels>
					<ProjectList data={data.reverse()}/>
					<MockData/>
					<VerificationTool/>
					<HowItWorks/>
				</TabPanels>
			</TabGroup>
		</>
	)
}

export const runtime = "edge"
