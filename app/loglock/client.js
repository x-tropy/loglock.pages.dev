"use client"
import { BeakerIcon, BadgeCheckIcon, TrendingUpIcon, PlusCircleIcon } from "@heroicons/react/outline"
import { Tab, TabList } from "@tremor/react"

export function TabListClient() {
	return (
		<TabList color='blue'>
			<Tab icon={TrendingUpIcon} value='statistic'>
				Statistic
			</Tab>
			<Tab icon={BeakerIcon}>Project list</Tab>
			<Tab icon={PlusCircleIcon}>Mock data</Tab>
			<Tab icon={BadgeCheckIcon}>Verification tool</Tab>
		</TabList>
	)
}
