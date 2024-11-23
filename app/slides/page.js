import Iframe from "react-iframe"
import {ArrowTopRightOnSquareIcon, ChatBubbleOvalLeftEllipsisIcon} from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <>
            <p className='max-w-[960px]  mt-4 mb-10 mx-auto text-center'>
                <ChatBubbleOvalLeftEllipsisIcon
                    className='size-6 mr-1 text-green-600 inline mb-1'/> For better reading experience, you could <a target='_blank' className='underline font-semibold decoration-stone-300 underline-offset-4 hover:decoration-stone-500' href='https://static.buweiliao.workers.dev/BuweiLiao_Presentation_KIT.pdf'>view in new tab</a>
                <ArrowTopRightOnSquareIcon className='size-5 ml-2 inline relative mb-0.5'/>
            </p>
        <div className='w-full mx-auto'>
            <Iframe url='https://static.buweiliao.workers.dev/BuweiLiao_Presentation_KIT.pdf' width='100%'
                    height='600px' display='block' position='relative'/>
        </div>
        </>
    )
}
