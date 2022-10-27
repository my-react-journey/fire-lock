import styles from "./App.module.css"
import menu from "./menu.webp"
import plus from "./plus.webp"
import sadCat from "./sadCat.webp"
import line from "./line.svg"
import { get, set } from "idb-keyval"
import { useEffect, useState, useId } from "react"
import { useNavigate } from "react-router-dom"


import AccountCard from "./AccountCard"

function App() {
    let navigate = useNavigate()
	let [accounts, setAccounts] = useState()

	let addHandler = () => navigate("/create")
	let menuHandler = () => navigate("/menu")

	useEffect(() => {
		get("accounts").then((accounts) => {
			setAccounts(accounts)
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
							label={account.label}
							account={account.account}
							accountLabel={account.accountLabel}
						/>
					))
				}
				{
					accounts == null && (
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