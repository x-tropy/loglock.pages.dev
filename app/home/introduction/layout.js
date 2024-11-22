import { Card } from "@tremor/react"

export default function Layout({ children }) {
	return <Card className='max-w-[60em] lg:p-20 md:p-12 p-6 mx-auto'>{children}</Card>
}
