import { getLogDetails } from "@/lib/loglock/db"
import { CodeHighlightPython } from "@/components/ui/code-highlight"
import {ButtonBack} from "@/app/project/[id]/client";
import {Flex, Metric} from "@tremor/react";

export default async function DisplayAlgorithm({ params: { id } }) {
	const { code } = await getLogDetails(id, "algorithm")

	return (
		<>
			<Flex justifyContent='start' className='mt-4 px-6 gap-5'>
				<ButtonBack />
				<Metric>Algorithm Used</Metric>
			</Flex>
			<CodeHighlightPython codeString={code} />
		</>
	)
}

export const runtime = "edge"
