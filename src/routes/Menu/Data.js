import { v4 as uuidv4 } from "uuid"

let menuContents = [
	{
		title: "Import",
		description: "Import accounts from a file (Restoring from backup)",
		icon: "import",
		navigation: "/import",
		id: uuidv4(),
	},
	{
		title: "Export",
		description: "Export current accounts to a file as a backup",
		icon: "export",
		navigation: "/export",
		id: uuidv4(),
	},
	{
		title: "About",
		description: "About Fire Lock",
		icon: "about",
		navigation: "/about",
		id: uuidv4(),
	},
]

function Data() {
	return <></>
}


export { menuContents }
export default Data
