import "@/styles/global.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans"
})

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head ><title>🔒LogLock</title></head>
			<body className="min-h-screen bg-background tracking-wide font-sans antialiased">
				{children}
				<Toaster />
				{/* >>>>>>>>>>>>> Universal Footer <<<<<<<<<<<< */}
				<footer className='bg-[#3f3f3f] pt-24  w-full'>
					<div className='grid grid-cols-5 gap-8 w-[960px] mx-auto mb-24'>
							<div className={'col-span-4 tracking-wide'}>
								<p className='text-gray-300 italic text-lg relative'><span className='text-[6em] text-gray-500 absolute font-serif -left-12'>“</span> 👋 Hi there! Thanks for stopping by. This companion website is dedicated to explaining my master's thesis work. If you have any questions about the project or data privacy-related topics in general, feel free to reach out to me through the following channels 👉</p>
							</div>
							<div className='flex-row flex items-center col-span-1'>
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
										<img src={`/images/${item.src}`} alt={item.src} className='h-8 w-8 inline-block mr-4 p-1 rounded-sm bg-white' />
									</Link>
								))}
							</div>
					</div>
					<div className='border-t border-gray-500 text-xs tracking-wide text-gray-300 h-20 md:h-12 bg-black flex flex-col md:flex-row md:justify-between justify-evenly items-center px-4'>
						<div>
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
								<img src='/images/cloudflare.svg' alt='Cloudflare' className='h-6 inline-block ml-2' />{" "}
							</a>
						</div>
					</div>
				</footer>
			</body>
		</html>
	)
}
