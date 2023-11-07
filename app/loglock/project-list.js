"use client"

import { useState } from "react"
import {
	Divider,
	Table,
	Button,
	TableHead,
	TableHeaderCell,
	TableBody,
	TableRow,
	TableCell,
	Card,
	MultiSelectItem,
	Select,
	MultiSelect,
	Grid,
	Col,
	Title,
	Text,
	TabPanel,
	Badge,
	SelectItem,
	TextInput
} from "@tremor/react"
import { SearchIcon, OfficeBuildingIcon, LockClosedIcon, BookOpenIcon } from "@heroicons/react/outline"
import Link from "next/link"

export default function ProjectList({ data }) {
	const [projectType, setProjectType] = useState("")
	const [organization, setOrganization] = useState([])
	const [searchString, setSearchString] = useState("")

	const listFilterFn = item => {
		if (item.projectType != projectType && projectType != "") return false
		if (organization.length > 0 && !organization.includes(item.organization)) return false
		if (searchString != "" && !item.projectTitle.toLowerCase().includes(searchString.toLowerCase())) return false
		return true
	}

	return (
		<TabPanel className='mt-6'>
			<Card>
				<Title>Filter options</Title>
				<Grid numItems={3} className='gap-5'>
					<Col className='mt-4' numColSpan={1}>
						<Text>Project type</Text>
						<Select className='mt-2' onValueChange={value => setProjectType(value)} value={projectType}>
							<SelectItem value='Public (open research)'>Public</SelectItem>
							<SelectItem value='Private'>Private</SelectItem>
						</Select>
					</Col>
					<Col className='mt-4' numColSpan={1}>
						<Text>Organization</Text>
						<MultiSelect className='mt-2' onValueChange={value => setOrganization(value)} value={organization}>
							{uniqueItems(data.map(row => row.organization)).map((item, i) => (
								<MultiSelectItem key={i} icon={OfficeBuildingIcon} value={item}>
									{item}
								</MultiSelectItem>
							))}
						</MultiSelect>
					</Col>
					<Col className='mt-4' numColSpan={1}>
						<Text>Keywords</Text>
						<TextInput className='mt-2' icon={SearchIcon} onChange={e => setSearchString(e.target.value)} value={searchString} />
					</Col>
				</Grid>
				<Divider />
				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>Acronym</TableHeaderCell>
							<TableHeaderCell>Project title</TableHeaderCell>
							<TableHeaderCell>Project type</TableHeaderCell>
							<TableHeaderCell>Project URL</TableHeaderCell>
							<TableHeaderCell>Experiment URL</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.filter(listFilterFn).map((item, i) => (
							<TableRow key={i}>
								<TableCell>{item.projectAcronym}</TableCell>
								<TableCell>
									<Text>
										{
											// truncate long text, and show full text on hover
											item.projectTitle.length > 60 ? item.projectTitle.substring(0, 60) + "..." : item.projectTitle
										}
									</Text>
								</TableCell>
								<TableCell>
									<Badge color='blue' icon={item.projectType == "Private" ? LockClosedIcon : BookOpenIcon}>
										{item.projectType.split(" (")[0]}
									</Badge>
								</TableCell>
								<TableCell className='gap-5'>
									<Link href={`/loglock/project/${item.projectURL}`}>
										<Button size='xs' variant='secondary' color='gray'>
											Visit project
										</Button>
									</Link>
								</TableCell>
								<TableCell>
									<Link href={`/loglock/experiment/${item.experimentURL}`}>
										<Button size='xs' variant='secondary' color='gray'>
											Visit experiment
										</Button>
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</TabPanel>
	)
}

const uniqueItems = arr => [...new Set(arr)]
