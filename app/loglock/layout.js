import Link from "next/link"
import { NavMenus } from "app/loglock/client"

export default function Layout({ children }) {
	return (
		<>
			{/* >>>>>>>>>>>>> Navigation bar for LogLock <<<<<<<<<<<< */}

			<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
				<div className='container flex h-14 items-center'>
					<div className='mr-4 hidden md:flex'>
						<Link href='/'>
							<img className='h-6' src='/images/extropy_home.svg' alt='Extropy' />
						</Link>
						<Link href='/loglock' className='mr-8 flex items-center space-x-2'>
							<img className='h-7 w-auto' src='/images/loglock.svg' alt='LogLock' />
						</Link>
						<nav className='flex items-center space-x-8 text-sm font-medium'>
							<NavMenus
								menus={[
									{ name: "introduction", url: "/introduction" },
									{ name: "demo system", url: "/" },
									{ name: "presentation", url: "/presentation" },
									{ name: "prototype design", url: "/prototype" },
									{ name: "thesis", url: "/thesis" }
								]}
							/>
						</nav>
					</div>
					<div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
						<nav className='flex items-center'>
							<a target='_blank' rel='noreferrer' href='https://github.com/x-tropy/LogLock_eth'>
								<div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0'>
									<img className='h-6 w-6' src='/images/github.svg' alt='GitHub' />
									<span className='sr-only'>GitHub</span>
								</div>
							</a>
						</nav>
					</div>
				</div>
			</header>
			<main className={"px-6 py-8 max-w-screen-2xl min-h-screen mx-auto bg-slate-50"}>{children}</main>
		</>
	)
}
