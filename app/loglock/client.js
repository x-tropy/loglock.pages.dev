"use client"
import Link from "next/link"
import { BeakerIcon, BadgeCheckIcon, TrendingUpIcon, PlusCircleIcon } from "@heroicons/react/outline"
import { Tab, TabList } from "@tremor/react"
import { usePathname } from "next/navigation"

export function TabListClient() {
	return (
		<TabList color='blue'>
			<Tab icon={BeakerIcon}>Project list</Tab>
			<Tab icon={PlusCircleIcon}>Mock data</Tab>
			<Tab icon={BadgeCheckIcon}>Verification tool</Tab>
		</TabList>
	)
}

export function NavMenus({ menus }) {
	let activeMenu = usePathname().split("/").pop()
	if (activeMenu === "loglock") activeMenu = ""

	return menus.map((item, index) => (
		<Link className={`capitalize transition-colors hover:text-foreground/80 text-foreground${activeMenu === item.url.slice(1) ? "" : "/60"}`} href={`/loglock${item.url}`} key={index}>
			{item.name}
		</Link>
	))
}
