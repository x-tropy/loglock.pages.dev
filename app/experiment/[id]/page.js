import { Card, Bold, Title, List, ListItem, Metric, Text, Divider, Button, Grid, Col, Flex } from "@tremor/react"
import dateFormatter from "date-format"
import { CodeHighlightPython } from "@/components/ui/code-highlight"
import { getLogDetails } from "@/lib/loglock/db.js"
import { CopyIcon, ButtonBack, FooterAction, VisitProject } from "../../project/[id]/client"
import Link from "next/link"

export default async function DisplayExperiment({ params: { id } }) {
	const { code, fileHash, projectURL, projectAcronym, organization, virtualResource, dataCategory, timestamp, filePath } = await getLogDetails(id, "experiment")
	const algorithmFilePath = `https://loglock.pages.dev/algorithm/${filePath}`

	return (
		<>
			<Flex justifyContent='start' className='mt-4 gap-5'>
				<ButtonBack />
				<Metric>Experiment details</Metric>
			</Flex>
			<Grid numItems={1} numItemsLg={2} className='w-90 mx-auto mt-4 gap-5'>
				<Col numColSpan={1}>
					<Card>
						<List>
							<ListItem>
								<span>Timestamp (formatted)</span>
								<span>{dateFormatter("hh:mm dd/MM/yyyy", new Date(parseInt(timestamp)))}</span>
							</ListItem>
							<ListItem>
								<span>Organization</span>
								<span>{organization}</span>
							</ListItem>
							<ListItem>
								<span>Virtual resource</span>
								<span>{virtualResource}</span>
							</ListItem>
							<ListItem>
								<span>Project acronym</span>
								<span>{projectAcronym}</span>
							</ListItem>
							<ListItem>
								<span>Data category</span>
								<span>{dataCategory}</span>
							</ListItem>
						</List>
						<Flex justifyContent='center' className='mt-4'>
							<VisitProject projectURL={projectURL} />
						</Flex>
					</Card>
				</Col>
				<Col numColSpan={1}>
					<Card>
						<Flex justifyContent='start'>
							<Title>Algorithm used in experiment</Title>
							<CopyIcon content={code} />
						</Flex>
						<div className='mb-4 h-[300px] overflow-auto rounded-lg'>
							<CodeHighlightPython codeString={code} />
						</div>
						<Bold>File hash</Bold>
						<Text className='mt-2 mb-4 break-all'>{fileHash}</Text>
						<Bold>File path</Bold>
						<Link href={`/algorithm/${filePath}`}>
							<Text className='mt-2 break-all underline' color='blue'>
								{algorithmFilePath}
							</Text>
						</Link>
						<Divider />
						<FooterAction />
					</Card>
				</Col>
			</Grid>
		</>
	)
}

export const runtime = "edge"
