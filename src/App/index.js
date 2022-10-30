import styles from "./App.module.css"
import menu from "./menu.webp"
import plus from "./plus.webp"
import sadCat from "./sadCat.webp"
import line from "./line.svg"
import { get, set } from "idb-keyval"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


import AccountCard from "./AccountCard"

function App() {
    let navigate = useNavigate()
	let [accounts, setAccounts] = useState()
	let [showNoAccounts, setShowNoAccounts] = useState(false)

	// didn't re-render when a new account was added, so I had to use useEffect
	useEffect(() => {
		if (window.location.search.includes("update=true")) {
			window.location.href = window.location.href.replace("?update=true", "")
		}
	}, [])

	let addHandler = () => navigate("/create")
	let menuHandler = () => navigate("/menu")

	useEffect(() => {
		get("accounts").then((accounts) => {
			if( accounts != null) {
				if(accounts.length !== 0) {
					setAccounts(accounts)
					return setShowNoAccounts(false)
				}
			}
			setShowNoAccounts(true)
		})
	}, [])

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