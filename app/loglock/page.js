"use client"

import { Title, Text, Tab, TabList, TabGroup, TabPanels } from "@tremor/react"
import Layout from "./page-shell.js"
import { BeakerIcon, BadgeCheckIcon, TrendingUpIcon, PlusCircleIcon } from "@heroicons/react/outline"
import Statistic from "./statistic.js"
import ProjectList from "./project-list.js"
// import MockData from "./mock-data.js"
import VerificationTool from "./verification-tool.js"
import { getLogList } from "../api/loglock/db.js"

export default async function DashboardExample() {
	const data = await getLogList()

	return (
		<Layout>
			<Title>
				<img src='./loglock.svg' alt='LogLock logo' />
			</Title>
			<Text className='mt-2'>This demo system servers as a proof of concept, showcasing how Ethereum blockchain could be used to enhace transparency of data usages.</Text>
			<TabGroup className='mt-6' defaultIndex={1}>
				<TabList color='blue'>
					<Tab icon={TrendingUpIcon}>Statistic</Tab>
					<Tab icon={BeakerIcon}>Project list</Tab>
					{/* <Tab icon={PlusCircleIcon}>Mock data</Tab> */}
					<Tab icon={BadgeCheckIcon}>Verification tool</Tab>
				</TabList>
				<TabPanels>
					<Statistic />
					<ProjectList data={data} />
					{/* <MockData /> */}
					<VerificationTool />
				</TabPanels>
			</TabGroup>
		</Layout>
	)
}
