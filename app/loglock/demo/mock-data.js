"use client"

import { Text, Button, Select, Callout, SelectItem, Title, TabPanel, Card, Divider, Bold, Flex, Grid, Col, List, ListItem, TextInput, MultiSelect, MultiSelectItem, Icon } from "@tremor/react"
import { useState, useRef, useEffect } from "react"
import { RefreshIcon, DocumentAddIcon, CubeTransparentIcon, CheckCircleIcon } from "@heroicons/react/outline"
import pythonCodeSamples from "@/lib/loglock/pythonCodeSamples"
import { organizations, projectTypes, projectAcronyms, projectTitles, dataCategories, virtualResources, randomPick } from "@/lib/loglock/mockDataFiller"
import getHash from "@/lib/loglock/getHash"
import CodeEditor from "@/components/ui/code-editor"
import Link from "next/link"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>   Handle form submission

import { postLog_request } from "../../actions"
import { useFormState, useFormStatus } from "react-dom"

function SubmitButton({ incomplete }) {
	const { pending } = useFormStatus()
	return (
		<Button disabled={incomplete || pending} variant='primary' icon={DocumentAddIcon} type='submit'>
			{pending ? "Submitting..." : "Submit"}
		</Button>
	)
}

const initialState = {
	message: "",
	transactionHash: ""
}

export default function MockData() {
	const [organization, setOrganization] = useState("")
	const [projectType, setProjectType] = useState("")
	const [projectAcronym, setProjectAcronym] = useState("")
	const [projectTitle, setProjectTitle] = useState("")
	const [dataCategory, setDataCategory] = useState([])
	const [virtualResource, setVirtualResource] = useState("")
	const [code, setCode] = useState(`/* input data analysis code */\n\n\n\n`)
	const [hashInput, setHashInput] = useState({
		organization: "",
		timestamp: "",
		projectURL: "",
		experimentURL: "",
		algorithm: {
			fileHash: "",
			filePath: ""
		}
	})

	const autoFill = e => {
		e.preventDefault()
		setCode(randomPick(pythonCodeSamples, true))
		setOrganization(randomPick(organizations, true))
		setProjectType(randomPick(projectTypes, true))
		setProjectTitle(randomPick(projectTitles, true))
		setProjectAcronym(randomPick(projectAcronyms, true))
		setDataCategory(randomPick(dataCategories, false))
		setVirtualResource(randomPick(virtualResources, true))

		// clear success message
		setHashInput({
			organization: "",
			timestamp: "",
			projectURL: "",
			experimentURL: "",
			algorithm: {
				fileHash: "",
				filePath: ""
			}
		})
	}

	const refreshIconRef = useRef(null)

	useEffect(() => {
		// setInterval(() => {
		// 	refreshIconRef.current.click()
		// }, 1000)
	})

	const updateHashInput = () => {
		// set state of hashInput
		const timestamp = Date.now().toString()
		const projectURL = getHash({
			organization,
			timestamp,
			projectType,
			projectAcronym
		}).slice(0, 10)
		const fileHash = getHash(code)
		const filePath = fileHash.slice(0, 10)
		const algorithm = {
			fileHash,
			filePath
		}
		const experimentURL = getHash({
			organization,
			timestamp,
			projectURL,
			algorithm
		}).slice(0, 10)
		const newHashInput = {
			organization,
			timestamp,
			algorithm,
			projectURL,
			experimentURL
		}
		setHashInput(newHashInput)
	}

	const isFormComplete = () => {
		return organization && projectType && projectAcronym && projectTitle && dataCategory.length > 0 && virtualResource && hashInput?.experimentURL != ""
	}

	const [state, formAction] = useFormState(postLog_request, initialState)

	return (
		<TabPanel className='mt-6 '>
			<Grid numItems={1} numItemsLg={3} className='gap-4'>
				<Col numColSpan={1} numColSpanLg={2}>
					<Card>
						<form action={formAction} name='newLogForm'>
							<Title>Create new project</Title>
							<Grid numItems={2} className='gap-4'>
								<Col numColSpan={1}>
									<Text className=' mt-4'>Organization (admin)</Text>
									<Select name='organization' className=' mt-2' onValueChange={value => setOrganization(value)} value={organization}>
										{organizations.map((item, i) => (
											<SelectItem value={item} key={i}>
												{item}
											</SelectItem>
										))}
									</Select>
								</Col>
								<Col numColSpan={1}>
									<Text className=' mt-4'>Project type</Text>
									<Select name='projectType' className=' mt-2' onValueChange={value => setProjectType(value)} value={projectType}>
										{projectTypes.map((item, i) => (
											<SelectItem value={item} key={i}>
												{item}
											</SelectItem>
										))}
									</Select>
								</Col>
								<Col numColSpan={2}>
									<Text className=' mt-4'>Project title</Text>
									<TextInput name='projectTitle' className=' mt-2' onChange={e => setProjectTitle(e.target.value)} value={projectTitle} />
								</Col>
								<Col numColSpan={1}>
									<Text className=' mt-4'>Project acronym</Text>
									<TextInput name='projectAcronym' className=' mt-2' onChange={e => setProjectAcronym(e.target.value)} value={projectAcronym} />
								</Col>
								<Col numColSpan={1}>
									<Text className=' mt-4'>Data categories</Text>
									<MultiSelect name='dataCategory' className=' mt-2' onValueChange={value => setDataCategory(value)} value={dataCategory}>
										{dataCategories.map((item, i) => (
											<MultiSelectItem value={item} key={i}>
												{item}
											</MultiSelectItem>
										))}
									</MultiSelect>
								</Col>
							</Grid>
							<Divider />
							<Title>Experiment setting</Title>
							<Text className='mt-4'>Virtual resource</Text>
							<Select name='virtualResource' className='mt-2' onValueChange={value => setVirtualResource(value)} value={virtualResource}>
								{virtualResources.map((item, i) => (
									<SelectItem value={item} key={i}>
										{item}
									</SelectItem>
								))}
							</Select>
							<Text className='mt-4'>Algorithm code</Text>
							<div className='mt-2' style={{ maxHeight: 300, overflow: "auto" }}>
								<CodeEditor
									name='code'
									value={code}
									language='python'
									placeholder='Please enter data analysis code...'
									onChange={e => setCode(e.target.value)}
									padding={15}
									style={{
										fontSize: 12,
										backgroundColor: "#f5f5f5",
										borderRadius: 8,
										fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
									}}
								/>
							</div>
							<Divider />
							<input type='hidden' name='hashInput' value={JSON.stringify(hashInput)} />
							<input type='hidden' name='dataCategory' value={dataCategory} />
							<Flex justifyContent='center' className='gap-2'>
								<SubmitButton incomplete={!isFormComplete()} />
								<Button variant='secondary' icon={RefreshIcon} onClick={autoFill}>
									Generate mock data
								</Button>
							</Flex>
							<Text className='mt-4'>
								<Bold>Note</Bold>: before submitting the form, click the refresh icon in the right column to get updated core information.
							</Text>
							{state.transactionHash == "" ? null : (
								<Callout className='mt-4' title='Good job!' icon={CheckCircleIcon} color='fuchsia'>
									A new project log has been generated, you can see it in the <Bold>Project list</Bold>. <br />
									Blockchain transaction hash: <Link href={`https://sepolia.etherscan.io/tx/${state.transactionHash}`}>{state.transactionHash}</Link>
								</Callout>
							)}
						</form>
					</Card>
				</Col>
				<Col numColSpan={1}>
					<Card>
						<Title>Log item</Title>
						<List className='mt-4'>
							<ListItem>
								<span>Organization</span> <span> {organization}</span>
							</ListItem>
							<ListItem>
								<span>Type</span> <span> {projectType}</span>
							</ListItem>
							<ListItem>
								<span>Title</span> <span> {projectTitle.length > 25 ? projectTitle.slice(0, 30) + "..." : projectTitle}</span>
							</ListItem>
							<ListItem>
								<span>Acronym</span> <span> {projectAcronym}</span>
							</ListItem>
							<ListItem>
								<span>Data</span> <span> {dataCategory.join(", ")}</span>
							</ListItem>
							<ListItem>
								<span>Resource</span> <span> {virtualResource.length > 25 ? virtualResource.slice(0, 30) + "..." : virtualResource}</span>
							</ListItem>
						</List>
						<Divider />
						<Flex justifyContent='start'>
							<Bold>Core information</Bold>
							<Icon icon={RefreshIcon} variant='solid' tooltip='update the JSON string' onClick={updateHashInput} className='ml-auto cursor-pointer' ref={refreshIconRef} />
						</Flex>
						<div className='mt-2' style={{ overflow: "auto" }}>
							<CodeEditor
								value={JSON.stringify(hashInput, null, 2)}
								language='json'
								disabled={true}
								padding={15}
								style={{
									fontSize: 13,
									backgroundColor: "#f5f5f5",
									borderRadius: 8,
									fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
								}}
							/>
						</div>
						<Callout className='mt-4' title='Blockchain proof' icon={CubeTransparentIcon} color='teal'>
							This will be immediately written into Ethereum blockchain once the experiment is submitted.
						</Callout>
					</Card>
				</Col>
			</Grid>
		</TabPanel>
	)
}
