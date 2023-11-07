"use client"

import dynamic from "next/dynamic"
import "@uiw/react-textarea-code-editor/dist.css"

export default dynamic(() => import("@uiw/react-textarea-code-editor").then(mod => mod.default), { ssr: false })
