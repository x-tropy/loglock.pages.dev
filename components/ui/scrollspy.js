"use client"
import { useState } from "react"
import { useLayoutEffect } from "react"

const capitalize = text => text.charAt(0).toUpperCase() + text.substr(1)

const clamp = value => Math.max(0, value)

const isBetween = (value, floor, ceil) => value >= floor && value <= ceil

const useScrollspy = (ids, offset) => {
	const [activeId, setActiveId] = useState("")

	useLayoutEffect(() => {
		const listener = () => {
			const scroll = window.scrollY

			const position = ids
				.map(id => {
					const element = document.getElementById(id)

					if (!element) return { id, top: -1, bottom: -1 }

					const rect = element.getBoundingClientRect()
					const top = clamp(rect.top + scroll - offset)
					const bottom = clamp(rect.bottom + scroll - offset)

					return { id, top, bottom }
				})
				//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
				//>>>>>>>>>>> Enlarge the capture scope
				.find(({ top, bottom }) => isBetween(scroll, top - 40, bottom))

			setActiveId(position?.id || "")
		}

		listener()

		window.addEventListener("resize", listener)
		window.addEventListener("scroll", listener)

		return () => {
			window.removeEventListener("resize", listener)
			window.removeEventListener("scroll", listener)
		}
	}, [ids, offset])

	return activeId
}

export default function ({ menus }) {
	const activeMenu = useScrollspy(menus.map(menu => menu.submenu.map(submenu => submenu.id)).flat(), 80)
	// const [activeId, setActiveId] = useState("")
	return (
		<ul className='flex flex-col w-[240px] h-[calc(100vh-80px)] overflow-y-auto  px-2 rounded sticky top-[90px]'>
			{menus.map((menu, index) => (
				<li key={index} className='mb-6'>
					<h5 className='px-3 mb-1 uppercase tracking-wide font-semibold text-xs text-gray-900'>{index + '. ' + menu.name}</h5>
					<ul className='flex flex-col text-sm'>
						{menu.submenu.map((submenu, index) => {
							return (
								<li
									key={index}
									className={`px-3 py-1 first-letter:capitalize transition-colors duration-200 relative block hover:text-gray-900 hover:cursor-pointer text-gray-500  hover:rounded-md hover:bg-[#fff] ${
										activeMenu == submenu.id ? "rounded-md bg-[#fff] shadow-sm text-gray-900" : ""
									}`}
									onClick={() => {
										const menuContent = document.querySelector("#" + submenu.id)
										window.scrollTo({ top: menuContent.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80, behavior: "smooth" })
										// setActiveId(submenu.id)
									}}
								>
									{submenu.name}
								</li>
							)
						})}
					</ul>
				</li>
			))}
		</ul>
	)
}

//
