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
			const scroll = window.pageYOffset

			const position = ids
				.map(id => {
					const element = document.getElementById(id)

					if (!element) return { id, top: -1, bottom: -1 }

					const rect = element.getBoundingClientRect()
					const top = clamp(rect.top + scroll - offset)
					const bottom = clamp(rect.bottom + scroll - offset)

					return { id, top, bottom }
				})
				.find(({ top, bottom }) => isBetween(scroll, top - 24, bottom))

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
	const activeMenu = useScrollspy(
		Object.keys(menus)
			.map(categoryName => menus[categoryName].map(menuItem => menuItem.id))
			.flat(),
		80
	)
	// const [activeId, setActiveId] = useState("")
	return (
		<ul className='flex flex-col w-[240px] h-[calc(100vh-80px)] overflow-y-auto bg-white px-2 rounded sticky top-[90px]'>
			{Object.keys(menus).map((categoryName, index) => (
				<li key={index} className='mb-5'>
					<h5 className='px-3 mb-1 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900'>{categoryName.split("_").join(" ")}</h5>
					<ul className='flex flex-col text-sm'>
						{menus[categoryName].map((menuItem, index) => (
							<li
								key={index}
								className={`px-3 py-[6px] first-letter:capitalize transition-colors duration-200 relative block hover:text-gray-900 text-gray-500  hover:rounded-md hover:inset-0 hover:bg-cyan-50 ${
									activeMenu == menuItem.id ? "rounded-md bg-cyan-50" : ""
								}`}
								onClick={() => {
									const menuContent = document.querySelector("#" + menuItem.id)
									window.scrollTo({ top: menuContent.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80, behavior: "smooth" })
									// setActiveId(menuItem.id)
								}}
							>
								{menuItem.id.split("_").join(" ")}
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	)
}

//
