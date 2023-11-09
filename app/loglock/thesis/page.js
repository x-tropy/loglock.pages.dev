import Iframe from "react-iframe"

export default function Page() {
	return (
		<div className='w-[960px] mx-auto'>
			<Iframe url='https://static.buweiliao.workers.dev/BuweiLiao_MA_KIT.pdf' width='100%' height='1000px' display='block' position='relative' />
		</div>
	)
}
