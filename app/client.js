"use client"
import Link from "next/link"
import { BeakerIcon, CheckBadgeIcon, PlusCircleIcon, InformationCircleIcon, HomeIcon, ComputerDesktopIcon, PresentationChartBarIcon,  PaintBrushIcon, DocumentIcon } from "@heroicons/react/24/outline"

import { Tab, TabList } from "@tremor/react"
import { usePathname } from "next/navigation"

export function TabListClient() {
	return (
		<TabList color='blue'>
			<Tab key='BeakerIcon' icon={BeakerIcon}>Project list</Tab>
			<Tab key='PlusCircleIcon' icon={PlusCircleIcon}>Mock data</Tab>
			<Tab key='CheckBadgeIcon' icon={CheckBadgeIcon}>Verification tool</Tab>
			<Tab key='InformationCircleIcon' icon={InformationCircleIcon}>How it works</Tab>
		</TabList>
	)
}

export function NavMenus({ menus }) {
	return menus.map((item, index) => <ActiveLink key={index} item={item} />)
}

const IconMap = {
	"home": HomeIcon,
	"presentation-chart-bar": PresentationChartBarIcon,
	"computer-desktop": ComputerDesktopIcon,
	"paint-brush": PaintBrushIcon,
	"document": DocumentIcon,
};

function ActiveLink({ item }) {
	let pathname = usePathname().split("/").pop()
	if (pathname == "") pathname = "intro"
	const appendClass = pathname == item.url ? "text-orange-600" : "text-foreground"
	const baseClass = "capitalize transition-colors hover:text-orange-600 flex items-center "
	const className = baseClass + appendClass
	const IconComponent = IconMap[item.iconName];
	return (
		<Link className={className} href={`/${item.url}`}>
			{IconComponent ? <IconComponent className="size-5 rounded  md:border-0 lg:size-[18px] mr-1.5 "/> : null}
			<span className={'hidden md:inline md:text-xs lg:text-sm'}>{item.name}</span>
		</Link>
	)
}
