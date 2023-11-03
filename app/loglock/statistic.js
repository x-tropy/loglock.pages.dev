import { BadgeDelta, LineChart, Legend, DonutChart, Card, Flex, Grid, Metric, TabPanel, Text, Title, Subtitle, BarChart } from "@tremor/react"

export default function Statistic() {
	const chartdata = [
		{
			name: "Amphibians",
			"Number of threatened species": 2488
		},
		{
			name: "Birds",
			"Number of threatened species": 1445
		},
		{
			name: "Crustaceans",
			"Number of threatened species": 743
		}
	]

	const timeseries = [
		{
			year: 1970,
			"Export Growth Rate": 2.04,
			"Import Growth Rate": 1.53
		},
		{
			year: 1971,
			"Export Growth Rate": 1.96,
			"Import Growth Rate": 1.58
		},
		{
			year: 1972,
			"Export Growth Rate": 1.96,
			"Import Growth Rate": 1.61
		},
		{
			year: 1973,
			"Export Growth Rate": 1.93,
			"Import Growth Rate": 1.61
		},
		{
			year: 1974,
			"Export Growth Rate": 1.88,
			"Import Growth Rate": 1.67
		}
	]

	const cities = [
		{
			name: "New York",
			sales: 9800
		},
		{
			name: "London",
			sales: 4567
		},
		{
			name: "Hong Kong",
			sales: 3908
		},
		{
			name: "San Francisco",
			sales: 2400
		},
		{
			name: "Singapore",
			sales: 1908
		},
		{
			name: "Zurich",
			sales: 1398
		}
	]

	const categories = [
		{
			title: "Sales",
			metric: "$ 12,699",
			metricPrev: "$ 9,456",
			delta: "34.3%",
			deltaType: "moderateIncrease"
		},
		{
			title: "Profit",
			metric: "$ 40,598",
			metricPrev: "$ 45,564",
			delta: "10.9%",
			deltaType: "moderateDecrease"
		},
		{
			title: "Customers",
			metric: "1,072",
			metricPrev: "856",
			delta: "25.3%",
			deltaType: "moderateIncrease"
		}
	]

	return (
		<TabPanel>
			<Grid numItemsMd={2} numItemsLg={3} className='gap-6 mt-6'>
				{categories.map(item => (
					<Card key={item.title}>
						<Flex alignItems='start'>
							<Text>{item.title}</Text>
							<BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
						</Flex>
						<Flex justifyContent='start' alignItems='baseline' className='truncate space-x-3'>
							<Metric>{item.metric}</Metric>
							<Text className='truncate'>from {item.metricPrev}</Text>
						</Flex>
					</Card>
				))}
			</Grid>
			<div className='mt-6'>
				<Card>
					<Title>Export/Import Growth Rates (1970 to 2021)</Title>
					<LineChart className='mt-6' data={timeseries} index='year' categories={["Export Growth Rate", "Import Growth Rate"]} colors={["emerald", "gray"]} yAxisWidth={40} />
				</Card>
			</div>
			<Grid numItemsMd={2} numItemsLg={2} className='gap-6 mt-6 '>
				<Card>
					<Title>Sales</Title>
					<Subtitle>The IUCN Red List has assessed only a small share of the total known species in the world.</Subtitle>
					<Legend className='mt-3' categories={["Active users", "Inactive users"]} colors={["emerald", "red"]} />
					<DonutChart data={cities} className='mt-6' category='sales' index='name' colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]} />
				</Card>
				<Card>
					<Title>Number of species threatened with extinction (2021)</Title>
					<Subtitle>The IUCN Red List has assessed only a small share of the total known species in the world.</Subtitle>
					<BarChart data={chartdata} className='max-h-60' index='name' categories={["Number of threatened species"]} colors={["blue"]} />
				</Card>
			</Grid>
		</TabPanel>
	)
}
