// necessary because of an unknow error
import React from "react"

// to avoid a `createContext` error, we need to setup this `mdx-components.tsx` file
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl '>{children}</h1>,
		h2: ({ children }) => <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10'>{children}</h2>,
		h3: ({ children }) => <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h3>,
		p: ({ children }) => <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>,
		blockquote: ({ children }) => <blockquote className='mt-6 border-l-2 pl-6 italic'>{children}</blockquote>,
		a: ({ children, href }) => (
			<a href={href} className='font-medium text-primary underline underline-offset-4'>
				{children}
			</a>
		),
		ul: ({ children }) => <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>,
		ol: ({ children }) => <ol className='my-6 ml-6 list-decimal [&>li]:mt-2'>{children}</ol>,
		img: ({ src, alt }) => {
			const [layoutFlag, ...processedAlt] = alt.split("_")
			if (layoutFlag == "inline") return <img src={src} alt={processedAlt.join(" ")} className='inline-block h-6 mx-2' />
			if (layoutFlag == "center") return <img src={src} alt={processedAlt.join(" ")} className=' my-6' />
			if (layoutFlag == "full") return <img src={src} alt={processedAlt.join(" ")} className='w-full my-6' />
			if (layoutFlag == "left") return <img src={src} alt={processedAlt.join(" ")} className='float-left w-1/2 mb-6 mr-6' />
			if (layoutFlag == "right") return <img src={src} alt={processedAlt.join(" ")} className='float-right w-1/2 mb-6 ml-6' />
		}
	}
}
