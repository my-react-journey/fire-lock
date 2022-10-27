import { useParams } from "react-router-dom"

export default function Account() {

	let { accountId } = useParams()

	return (
		<>
			<span>This is the Account {accountId} page</span>
		</>
	)
}
