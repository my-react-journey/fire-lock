import Title from "../../components/Title"
import styles from "./ManualEntry.module.css"
import { addNewAccount, retriveData } from "../../components/AddAccount"
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"

export default function Account() {

	let issuerNameHook = useRef()
	let accountNameHook = useRef()
	let secretKeyHook = useRef()

	let navigate = useNavigate()
	let returnHome = () => navigate("/?update=true")

	let [instruction, setInstruction] = useState("Enter the details provided by your account provider.")


	let submitHandler = () => {
		let issuerName = issuerNameHook.current.value
		let accountName = accountNameHook.current.value
		let secretKey = secretKeyHook.current.value

		let account = validate(issuerName, accountName, secretKey)
		if(account != null) {
			let data = constructData(account)
			data = retriveData(data)
			addNewAccount(data)
			returnHome()
		}	
	}

	let validate = (issuerName, accountName, secretKey) => {
		if(accountName && secretKey) {

			if(issuerName == "") {
				if(accountName.includes("@")) {
					issuerName = accountName.split("@")[1]
					issuerName = issuerName.split(".")[0]
				} else {
					issuerName = accountName
				}
			}
			issuerName = issuerName.charAt(0).toUpperCase() + issuerName.slice(1)
			return {
				issuer: issuerName,
				account: accountName,
				secret: secretKey
			}
		}
		return null
	}

	let constructData = (account) => {
		return {
			label: {
				issuer: account.issuer,
				account: account.account
			},
			query: {
				secret: account.secret
			}
		}
		
	}

	return (
		<>
			<Title titleName="Add an account" />
			
			<div className={styles.container}>
				<span className={styles.infoSpan}>{instruction}</span>
				<input type="text" ref={issuerNameHook} placeholder="Issuer Name" />
				<input type="text" ref={accountNameHook} placeholder="Account Name" required />
				<input type="text" ref={secretKeyHook} placeholder="Secret Key" required />

				<button className={styles.button} onClick={submitHandler}>Add Account</button>


			</div>
		</>
	)
}
