import styles from "./App.module.css"
import menu from "./menu.webp"
import plus from "./plus.webp"
import sadCat from "./sadCat.webp"
import line from "./line.svg"
import { get } from "idb-keyval"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


import AccountCard from "./AccountCard"

function App() {
    let navigate = useNavigate()
	let [accounts, setAccounts] = useState()
	let [accountsLength, setAccountsLength] = useState(0)
	let [showNoAccounts, setShowNoAccounts] = useState(false)

	let addHandler = () => navigate("/create")
	let menuHandler = () => navigate("/menu")

	// async function run() {
	// 	console.log("RAN THIS FUNCTION")
	// 	let accounts = await get("accounts")
	// 	console.log(accounts.length)
	// 	if (accounts != null) {
	// 		setAccounts(accounts)
	// 		if (accounts.length === 0) {
	// 			setAccountsLength(accounts.length)
	// 			setShowNoAccounts(true)
	// 		}
	// 		setAccounts(accounts)
	// 	}
	// }

	async function retriveData() {
		let accounts = await get("accounts")
		return accounts != null ? accounts : []
	}

	useEffect(() => {

		async function run() {
			let accounts = await retriveData()
			setAccounts(accounts)
			setAccountsLength(accounts.length)
			if (accounts.length === 0) {
				setShowNoAccounts(true)
			}
		}
		run()
	}, [accountsLength])

	return (
		<>
			<div className={styles.header}>
				
				<span className={styles.appName}>Fire Lock</span>

				<span className={styles.actionIconsAdd} onClick={addHandler}>
					<img src={plus} alt="Add" />
				</span>

				<span className={styles.actionIconsMenu} onClick={menuHandler}>
					<img src={menu} alt="Menu" />
				</span>
			</div>

			<AccountCards accounts={accounts} showNoAccounts={showNoAccounts} />
		</>
	)
}

export default App


function NoAccounts() {
	return (
		<>
			<div className={styles.noAccounts}>
				<img src={sadCat} alt="No Accounts" />
				<span className={styles.noAccountsText}>No Accounts</span>

				<span className={styles.noAccountsSubText}>Add an account by pressing the + button</span>
			</div>

			<img src={line} alt="Line" className={styles.line} />
		</>
	)
}

function AccountCards(props) {
	let {accounts, showNoAccounts} = props

	return (
		<div className={styles.mainContent}>
			{accounts &&
				accounts.map((account) => (
					<AccountCard
						key={account.id}
						id={account.id}
						issuer={account.issuer}
						account={account.account}
					/>
				))
			}
			{
				showNoAccounts && (
					<NoAccounts />
				)
			}
		</div>
	)
}