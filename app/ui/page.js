import Scrollspy from "@/components/ui/scrollspy"
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

    return (
        <div className='flex flex-row'>
            <Scrollspy menus={menus}/>

            <div id='content' className='w-full ml-4 flex flex-col space-y-4  rounded mx-auto'>
                {menus.map((menu, key) => {
                    return (
                        <div key={key}>
                            {/* <h1 className='text-center text-lg my-3'>{menu.name}</h1> */}
                            <ul>
                                {menu.submenu.map(({id, url}, key) => {
                                    return (
                                        <li key={key} id={id} className='mb-10 '>
                                            <img src={url} className='shadow-elevation-sm pb-3 bg-white'/>
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
    imageUrls.map(({folder, urls}) => {
        const name = folder.split("_").pop().split("-").join(" ")
        return {
            name,
            submenu: urls.map(url => {
                const subname = url.split("_").pop().split(".")[0].split("-").join(" ")
                return {name: subname, id: (name + " " + subname).split(" ").join("-"), url}
            })
        }
    })
