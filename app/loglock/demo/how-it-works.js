import { Card } from "@tremor/react"

export default function Page() {
	return (
		<Card className='max-w-[52em] md:p-12 mt-6 p-6 mx-auto flex flex-col items-center'>
			<h3 className='mt- text-2xl font-semibold tracking-tight '>Generation of a log entry</h3>
			<p className='mt-4 leading-5 text-sm text-muted-foreground max-w-xs text-center'>When a researcher applies for data, or doing experiment with data, a log entry is generated.</p>
			<img src='/souvemed/generate-log-entry.png' className='my-6' />
			<h3 className='mt- text-2xl font-semibold tracking-tight '>Explain core information</h3>
			<p className='mt-4 leading-5 text-sm text-muted-foreground max-w-xs text-center'>The core information is comprised of the most important aspects of a data usage record.</p>
			<img src='/souvemed/explain-hashinput.png' className='my-6' />
			<h3 className='mt- text-2xl font-semibold tracking-tight '>Where does it come from</h3>
			<p className='mt-4 leading-5 text-sm text-muted-foreground max-w-xs text-center'>Core information comes form the step-by-step hashing of data fields from original log entry.</p>
			<img src='/souvemed/hashing-order.png' className='my-6' />
		</Card>
	)
}
