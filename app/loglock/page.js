import { Title, Text, TabGroup, TabPanels } from "@tremor/react"
import { TabListClient } from "./client"
import { getLogList } from "@/lib/loglock/db"
import Statistic from "./statistic.js"
import ProjectList from "./project-list.js"
import MockData from "./mock-data.js"
import VerificationTool from "./verification-tool.js"

export default async function DashboardExample() {
	const data = await getLogList()

	return (
		<>
			<Title>
				<img src='./images/loglock.svg' alt='LogLock logo' />
			</Title>
			<Text className='mt-2'>This demo system servers as a proof of concept, showcasing how Ethereum blockchain could be used to enhace transparency of data usages.</Text>
			<TabGroup className='mt-6' defaultIndex={1}>
				<TabListClient />
				<TabPanels>
					<Statistic />
					<ProjectList data={data.reverse()} />
					<MockData />
					<VerificationTool />
				</TabPanels>
			</TabGroup>
		</>
	)
}
