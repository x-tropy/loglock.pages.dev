import "@/styles/global.css"
import {Inter as FontSans} from "next/font/google"
import {Toaster} from "@/components/ui/toaster"
import Link from "next/link"
import {NavMenus} from "@/app/client"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
})

export default function RootLayout({children}) {
    return (
        <html lang='en' suppressHydrationWarning>
        <head><title>🔒LogLock</title></head>
        <body className="min-h-screen bg-background tracking-wide font-sans antialiased">
        <Toaster/>
        <header
            className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container p-6 lg:p-8 flex h-10 lg:h-14 items-center'>
                <div className='mr-4 flex items-center'>
                    <Link href='/' className='mr-4 md:mr-8'>
                        <img className='h-7 w-auto' src='/images/loglock.svg' alt='LogLock'/>
                    </Link>
                    <nav className='flex items-center mr-4 space-x-2 md:space-x-4 lg:space-x-8 text-sm font-medium'>
                        <NavMenus
                            menus={[
                                {name: "introduction", url: "intro", iconName: "home"},
                                {name: "mockup system", url: "demo", iconName: "computer-desktop"},
                                {name: "presentation", url: "slides", iconName: "presentation-chart-bar"},
                                {name: "UI prototype", url: "ui", iconName: "paint-brush"},
                                {name: "thesis", url: "thesis", iconName: "document"}
                            ]}
                        />
                    </nav>
                </div>
                <div className='flex flex-1 items-center space-x-2 justify-end'>
                    <nav className='flex items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/x-tropy/LogLock_Smart_Contract'>
                            <div
                                className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0'>
                                <img className='h-6 w-6' src='/images/github.svg' alt='GitHub'/>
                                <span className='sr-only'>GitHub</span>
                            </div>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
        <main className={"lg:px-6 lg:py-8 max-w-screen-2xl min-h-screen mx-auto bg-slate-50"}>{children}</main>
        <footer className='bg-[#3f3f3f] pt-24  w-full'>
            <div className='pl-6 grid grid-cols-5 md:gap-8 max-w-[960px] mx-auto mb-24'>
                <div className={'col-span-4 tracking-wide'}>
                    <p className='text-gray-300 italic text-lg relative'><span
                        className='text-[6em] text-gray-500 absolute font-serif -left-12'>“</span> 👋 Hi there!
                        Thanks for stopping by. This companion website is dedicated to explaining my master's thesis
                        work. If you have any questions about the project or Blockchain-related topics in general,
                        feel free to reach out to me through the following channels 👉</p>
                </div>
                <div className='flex-col md:flex-row mt-8 flex items-center col-span-1'>
                    {[
                        {
                            url: "https://github.com/x-tropy",
                            src: "github.svg"
                        },
                        {
                            url: "https://linkedin.com/in/buwei-liao-06426472/",
                            src: "linkedin.svg"
                        },
                        {
                            url: "mailto:buweiliao@gmail.com",
                            src: "email.svg"
                        }
                    ].map(item => (
                        <Link href={item.url} key={item.url}>
                            <img src={`/images/${item.src}`} alt={item.src}
                                 className='h-8 w-8 inline-block mb-4 md:mr-4 p-1 rounded-sm bg-white'/>
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className='border-t border-gray-500 text-xs tracking-wide text-gray-300 h-20 md:h-12 bg-black flex flex-col md:flex-row md:justify-between justify-evenly items-center px-4'>
                <div className='text-center md:text-left'>
							<span>
								© LogLock {new Date().getFullYear()}
                                {", implemented & maintained by "}
							</span>
                    <span className=' font-semibold'>Buwei Liao</span>
                    <span className=''>, All rights reserved.</span>
                </div>
                <div>
                    <span>Special thanks ♥ to</span>
                    <a href='https://www.cloudflare.com/'>
                        <img src='/images/cloudflare.svg' alt='Cloudflare' className='h-6 inline-block ml-2'/>{" "}
                    </a>
                </div>
            </div>
        </footer>
        </body>
        </html>
    )
}
