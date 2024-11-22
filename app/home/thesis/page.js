import Iframe from "react-iframe"
import {ChatBubbleOvalLeftEllipsisIcon, ArrowDownTrayIcon} from "@heroicons/react/24/outline";

export default function Page() {
	return (
		<>
		<div className='max-w-[960px] my-10 mx-auto'>
			<h3 className='text-lg font-semibold mb-2 flex'><ChatBubbleOvalLeftEllipsisIcon className='size-6 mr-2 text-green-600' /><span>Reading Tips</span></h3>
			<p className='leading-relaxed'>Before diving into the following embedded version of my master thesis, I encourage you to <a className='underline font-semibold decoration-stone-300 underline-offset-4 hover:decoration-stone-500' target='_blank' href='https://static.buweiliao.workers.dev/BuweiLiao_MA_KIT.pdf'>download</a> <ArrowDownTrayIcon className='size-5 inline bottom-0.5 relative'/> (only 2.1 MB) and explore it in your favorite PDF viewer for the best reading experience. While the document spans just over 100 pages, it’s designed to be accessible and engaging, featuring more than 80 diagrams, illustrations, and charts. These visuals simplify complex concepts and make the content enjoyable to digest.</p></div>
		<div className='w-[960px] mx-auto'>
			<Iframe url='https://static.buweiliao.workers.dev/BuweiLiao_MA_KIT.pdf' width='100%' height='1000px' display='block' position='relative' />
		</div>
		</>
	)
}
