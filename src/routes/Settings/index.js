import { useParams } from "react-router-dom"

export default function Settings() {

	let { accountId } = useParams()

	return (
		<>
			<span>This is the Settings Page for Account:  {accountId}</span>
		</>
	)
}
