import SideMenu from "@/components/ui/side-menu"
import fs from "fs"
import path from "path"

export default function page() {
	const targetFolder = "souvemed"
	const root = path.resolve("./public", targetFolder)
	const folders = fs.readdirSync(root)
	let imageUrls = []
	folders.forEach(folder => {
		// avoid .DS_Store
		if (folder.startsWith(".")) return

		const folderPath = path.join(root, folder)
		const files = fs.readdirSync(folderPath)
		imageUrls.push({
			folder: folder,
			urls: files.map(file => path.join("/", targetFolder, folder, file))
		})
	})

	const menus = transform(imageUrls)
	console.log("\n>>>>>>>>>>", menus, "<<<<<<<<<<\n")

	return (
		<div className='flex flex-row'>
			<SideMenu menus={menus} />

			<div id='content' className='w-full ml-4 flex flex-col space-y-4  rounded mx-auto'>
				{menus.map((menu, key) => {
					return (
						<div>
							{/* <h1 className='text-center text-lg my-3'>{menu.name}</h1> */}
							<ul key={key}>
								{menu.submenu.map(({ id, url }, key) => {
									return (
										<li key={key} id={id} className='mb-10 '>
											<img src={url} className='border pb-3 bg-white rounded-lg' />
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

const transform = imageUrls =>
	imageUrls.map(({ folder, urls }) => {
		const name = folder.split("_").pop()
		return {
			name,
			submenu: urls.map(url => {
				const subname = url.split("_").pop().split(".")[0]
				return { name: subname, id: (name + " " + subname).split(" ").join("-"), url }
			})
		}
	})
