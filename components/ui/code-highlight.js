import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python"
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json"
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco"

export function CodeHighlightJs({ codeString }) {
	SyntaxHighlighter.registerLanguage("javascript", js)

	return (
		<SyntaxHighlighter language='javascript' style={docco} showLineNumbers className='text-sm'>
			{codeString}
		</SyntaxHighlighter>
	)
}

export function CodeHighlightPython({ codeString }) {
	SyntaxHighlighter.registerLanguage("python", python)

	return (
		<SyntaxHighlighter language='python' style={docco} showLineNumbers className='text-sm'>
			{codeString}
		</SyntaxHighlighter>
	)
}

export function CodeHighlightJson({ codeString }) {
	SyntaxHighlighter.registerLanguage("json", json)

	return (
		<SyntaxHighlighter language='json' style={docco} showLineNumbers className='text-sm'>
			{codeString}
		</SyntaxHighlighter>
	)
}
