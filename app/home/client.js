"use client"
import Link from "next/link"
import { BeakerIcon, CheckBadgeIcon, PlusCircleIcon, AnnotationIcon, InformationCircleIcon, ComputerDesktopIcon, PresentationChartBarIcon,  PaintBrushIcon, DocumentIcon } from "@heroicons/react/24/outline"

import { Tab, TabList } from "@tremor/react"
import { usePathname } from "next/navigation"

export function TabListClient() {
	return (
		<TabList color='blue'>
			<Tab icon={BeakerIcon}>Project list</Tab>
			<Tab icon={PlusCircleIcon}>Mock data</Tab>
			<Tab icon={CheckBadgeIcon}>Verification tool</Tab>
			<Tab icon={AnnotationIcon}>How it works</Tab>
		</TabList>
	)
}

export function NavMenus({ menus }) {
	return menus.map((item, index) => <ActiveLink key={index} item={item} />)
}

const IconMap = {
	"information-circle": InformationCircleIcon,
	"presentation-chart-bar": PresentationChartBarIcon,
	"computer-desktop": ComputerDesktopIcon,
	"paint-brush": PaintBrushIcon,
	"document": DocumentIcon,
};

function ActiveLink({ item }) {
	let pathname = usePathname().split("/").pop()
	if (pathname == "home") pathname = ""
	console.log(pathname, item.url)
	const appendClass = pathname == item.url ? "text-orange-600" : "text-foreground"
	const baseClass = "capitalize transition-colors hover:text-orange-600 flex items-center "
	const className = baseClass + appendClass
	const IconComponent = IconMap[item.iconName];
	return (
		<Link className={className} href={`/home/${item.url}`}>
			{IconComponent ? <IconComponent className="size-[18px] mr-1.5 "/> : null}
			<span className={''}>{item.name}</span>
		</Link>
	)
}
