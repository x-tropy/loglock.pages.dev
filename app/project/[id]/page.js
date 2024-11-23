import { Card, Icon, Bold, Title, List, ListItem, Subtitle, Metric, Text, Divider, Button, Grid, Col, Flex, Badge, Callout } from "@tremor/react"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   Replace these icons
// import { ArrowCircleLeftIcon, ExternalLinkIcon, CodeIcon, InformationCircleIcon, CubeTransparentIcon } from "@heroicons/react/outline"

import dateFormatter from "date-format"
import { CodeHighlightJson } from "@/components/ui/code-highlight"
import getHash from "@/lib/loglock/getHash"
import { CopyIcon, VerificationStatus, FooterAction, VisitExperiment, CallOut, ButtonBack, VerifyButton } from "./client"
import { getLogDetails } from "@/lib/loglock/db"

export default async function DisplayProject({ params: { id } }) {
	const { projectTitle, hashInput, experimentURL, projectType, projectAcronym, organization, dataCategory, timestamp, transactionHash } = await getLogDetails(id, "project")

	return (
		<>
			<Flex justifyContent='start' className='mt-4 px-6 gap-5'>
				<ButtonBack />
				<Metric>Project Details</Metric>
			</Flex>
			<Grid numItems={1} numItemsLg={2} className='w-90 mx-auto mt-4 gap-5'>
				<Col numColSpan={1}>
					<Card>
						<Subtitle>{projectTitle}</Subtitle>
						<List className='mt-4'>
							<ListItem>
								<span>Timestamp (formatted)</span>
								<span>{dateFormatter("hh:mm dd/MM/yyyy", new Date(parseInt(timestamp)))}</span>
							</ListItem>
							<ListItem>
								<span>Organization</span>
								<span>{organization}</span>
							</ListItem>
							<ListItem>
								<span>Project type</span>
								<span>{projectType}</span>
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
						<Divider />
						<Flex justifyContent='center'>
							<VisitExperiment experimentURL={experimentURL} />
						</Flex>
					</Card>
				</Col>
				<Col numColSpan={1}>
					<Card>
						<Title>Log verification</Title>
						<CallOut />
						<Flex justifyContent='start' className='mt-2'>
							<Bold>Core message</Bold>
							<CopyIcon content={hashInput} />
						</Flex>
						<div className='mb-4  overflow-auto rounded-lg'>
							<CodeHighlightJson codeString={JSON.stringify(JSON.parse(hashInput), null, 2)} />
						</div>
						<Text className='mt-2'>
							<b>Hash method ➜ </b>Keccak256
						</Text>
						<Text className='mt-2 break-all'>
							<b>Hash output ➜ </b>
							{getHash(hashInput).toUpperCase()}
						</Text>
						<VerificationStatus />
						<Divider />
						<FooterAction transactionHash={transactionHash} />
					</Card>
				</Col>
			</Grid>
		</>
	)
}

export const runtime = "edge"
