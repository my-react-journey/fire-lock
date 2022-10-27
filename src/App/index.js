import styles from "./App.module.css"
import menu from "./menu.webp"
import plus from "./plus.webp"
import { get, set } from "idb-keyval"
import { useEffect, useState, useId } from "react"
import { useNavigate } from "react-router-dom"


import AccountCard from "./AccountCard"

function App() {
    let navigate = useNavigate()
	let [acccounts, setAccounts] = useState()

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
				{acccounts &&
					acccounts.map((account) => (
						<AccountCard
							key={account.id}
							id={account.id}
							label={account.label}
							account={account.account}
							accountLabel={account.accountLabel}
						/>
					))}
			</div>
		</>
	)
}

export default App
