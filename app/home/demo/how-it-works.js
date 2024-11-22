import { Card } from "@tremor/react"

export default function Page() {
	return (
		<Card className='max-w-[52em] md:p-12 mt-6 p-6 mx-auto flex flex-col items-center'>
			<H1>Generation of a log entry</H1>
			<P>When a researcher applies for data, or doing experiment with data, a log entry is generated.</P>
			<img src='/diagrams/generate-log-entry.png' className='my-6' />
			<H1>Explain core information</H1>
			<P>The core information is comprised of the most important aspects of a data usage record.</P>
			<img src='/diagrams/explain-hashinput.png' className='my-6' />
			<H1>Where does it come from</H1>
			<P>Core information comes form the step-by-step hashing of data fields from original log entry.</P>
			<img src='/diagrams/hashing-order.png' className='my-6' />
		</Card>
	)
}

function H1({ children }) {
	return <h3 className='mt- text-2xl font-semibold tracking-tight '>{children}</h3>
}

function P({ children }) {
	return <p className='mt-4 leading-5 text-sm text-muted-foreground max-w-xs text-center'>{children}</p>
}
