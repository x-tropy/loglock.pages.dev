import SideMenu from "@/components/ui/side-menu"
import fs from "fs"
import path from "path"

export default function page() {
	const dirRelativeToPublicFolder = "souvemed"

	const dir = path.resolve("./public", dirRelativeToPublicFolder)

	const filenames = fs.readdirSync(dir)

	const imageUrls = filenames.map(name => path.join("/", dirRelativeToPublicFolder, name))

	console.log("\n>>>>>>>>>>", imageUrls, "<<<<<<<<<<\n")

	const menus = transform(imageUrls)

	return (
		<div className='flex flex-row'>
			<SideMenu menus={menus} />

			<div id='content' className='w-full ml-4 flex flex-col space-y-4 bg-white rounded mx-auto'>
				{Object.keys(menus).map((categoryName, key) => {
					return (
						<div>
							{/* <h1 className='text-center text-lg my-3'>{categoryName}</h1> */}
							<ul>
								{menus[categoryName].map((menuItem, index) => {
									return (
										<li key={index} id={menuItem.id} className='mb-6 '>
											<img src={menuItem.url} className='border pb-3 rounded-lg' />
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}

const transform = arr => {
	const result = {}

	arr.forEach((url, index) => {
		const twoParts = url.split("/").pop().split(".")[0].split("-")
		const category = twoParts[0]
		if (!result[category]) {
			result[category] = []
		}
		result[category].push({ id: twoParts[1], url })
	})

	return result
}

// '/souvemed/about_souvemed-dynamic_consent.png',
// '/souvemed/about_souvemed-three rules.png',
// '/souvemed/about_souvemed-usage_policy.png',
// '/souvemed/data_management-consent_management.png',
// '/souvemed/data_management-my_datasets.png',
// '/souvemed/other_user-policy.png',
// '/souvemed/usage_records_(by dataset)-all_organizations.png',
// '/souvemed/usage_records_(by dataset)-all_records.png',
// '/souvemed/usage_records_(by dataset)-filtered_records.png',
// '/souvemed/usage_records_(powerful filter)-all_records.png',
// '/souvemed/usage_records_(powerful filter)-filtered_records.png',
// '/souvemed/usage_records_(powerful_filter)-project_detail.png'
