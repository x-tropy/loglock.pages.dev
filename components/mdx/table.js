export default function Table({ data }) {
	return (
		<div className='my-6 w-full overflow-y-auto'>
			<table className='w-full'>
				<thead>
					<tr className='m-0 border-t p-0 even:bg-muted'>
						{data[0].map((item, index) => (
							<th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right' key={index}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.slice(1).map((row, index) => (
						<tr className='m-0 border-t p-0 even:bg-muted' key={index}>
							{row.map((item, index) => (
								<td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right' key={index}>
									{item}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
