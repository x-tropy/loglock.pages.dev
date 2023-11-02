// necessary because of an unknow error
import React from "react"

// to avoid a `createContext` error, we need to setup this `mdx-components.tsx` file
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components
	}
}
