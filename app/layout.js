import "@/styles/global.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

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
			</body>
		</html>
	)
}
