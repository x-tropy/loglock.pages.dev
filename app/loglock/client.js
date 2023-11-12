"use client"
import Link from "next/link"
import { BeakerIcon, BadgeCheckIcon, PlusCircleIcon, AnnotationIcon } from "@heroicons/react/outline"
import { Tab, TabList } from "@tremor/react"
import { usePathname } from "next/navigation"

export function TabListClient() {
	return (
		<TabList color='blue'>
			<Tab icon={BeakerIcon}>Project list</Tab>
			<Tab icon={PlusCircleIcon}>Mock data</Tab>
			<Tab icon={BadgeCheckIcon}>Verification tool</Tab>
			<Tab icon={AnnotationIcon}>How it works</Tab>
		</TabList>
	)
}

export function NavMenus({ menus }) {
	return menus.map((item, index) => <ActiveLink key={index} item={item} />)
}

function ActiveLink({ item }) {
	let pathname = usePathname().split("/").pop()
	if (pathname == "loglock") pathname = ""
	const appendClass = pathname == item.url ? "text-foreground" : "text-foreground/60"
	const baseClass = "capitalize transition-colors hover:text-foreground/80 "
	const className = baseClass + appendClass
	return (
		<Link className={className} href={`/loglock/${item.url}`}>
			{item.name}
		</Link>
	)
}
