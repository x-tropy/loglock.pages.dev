import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { NavigationMenuLink } from "./navigation-menu"

const NavigationMenuLinkWithIntro = forwardRef(({ parentClassName, className, title, href, children, ...props }, ref) => {
	return (
		<li className={parentClassName}>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					href={href}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-full w-full",
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-1 text-sm leading-snug text-muted-foreground'>{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
export { NavigationMenuLinkWithIntro }
