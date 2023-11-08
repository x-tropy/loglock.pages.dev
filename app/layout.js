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
			<head />
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				{children}
				<Toaster />
				{/* >>>>>>>>>>>>> Universal Footer <<<<<<<<<<<< */}
				<footer className='bg-[#3f3f3f] pt-12'>
					<div className='grid grid-cols-5 gap-8 w-[960px] mx-auto mb-12'>
						<div className='col-span-2 flex flex-col justify-between'>
							<div>
								<a href='https://extropy.dev'>
									<img src='/images/extropy_line.svg' />
								</a>
							</div>
							<div className='flex-row flex items-center'>
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
						{["fluent", "frontdev", "loglock"].map(item => (
							<Link href={"/" + item} key={item}>
								<div className='col-span-1 p-2 bg-white rounded-lg hover:scale-110 transition ease-in-out' key={item}>
									<img src={`/images/card_${item}.svg`} />
								</div>
							</Link>
						))}
					</div>
					<div className='text-xs text-white h-20 md:h-12 bg-slate-950 flex flex-col md:flex-row md:justify-between justify-evenly items-center px-4'>
						<div>
							<span>
								© extropy.dev {new Date().getFullYear()}
								{", by "}
							</span>
							<span className=' font-semibold'>Buwei Liao</span>
							<span className=''>, All rights reserved.</span>
						</div>
						<div>
							<span>Special thx to Cloudflare for its widely-accessible cloud services.</span>
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
