import { getLogDetails } from "@/lib/loglock/db"
import { CodeHighlightPython } from "@/components/ui/code-highlight"

export default async function DisplayAlgorithm({ params: { id } }) {
	const { code } = await getLogDetails(id, "algorithm")

	return (
		<>
			<CodeHighlightPython codeString={code} />
		</>
	)
}

export const runtime = "edge"
