import { useParams, useNavigate } from "react-router-dom"
import Title from "../../components/Title"
import styles from "./Settings.module.css"
import { useState, useRef, useEffect } from "react"
import { get, set } from "idb-keyval"

export default function Settings() {
	let { accountId } = useParams()
	return (
		<>
			<Title titleName="Settings" />
			<div className={styles.container}>
				<SettingsCard accountId={accountId} />
				<DeleteCard accountId={accountId} />
			</div>
		</>
	)
}

function SettingsCard(props) {
	let navigate = useNavigate()
	let { accountId } = props

	let [issuer, setIssuer] = useState("")
	let issuerInput = useRef()

	let onInputKeyPress = () => {
		setIssuer(issuerInput.current.value)
	}

	let saveToDatabase = () => {
		async function run() {
			let accounts = await get("accounts")

			accounts.forEach((account) => {
				if (account.id === accountId) {
					account.issuer = issuer.trim()
				}
			})
			set("accounts", accounts)
		}
		run()
		navigate(`/account/${accountId}?update=true`)
	}

	useEffect(() => {
		let returnHome = () => navigate("/")
		async function retriveData() {
			let accounts = await get("accounts")
			let account = accounts.filter(
				(account) => account.id === accountId
			)[0]
			if (account != null) return account
			returnHome()
		}
		async function run() {
			let account = await retriveData(accountId)
			if (account != null) {
				setIssuer(account.issuer)
			}
		}
		run()
	}, [accountId, navigate])

	return (
		<div className={styles.settingsCard}>
			<span className={styles.infoSpan}>Edit Issuer Name</span>
			<input
				ref={issuerInput}
				onChange={onInputKeyPress}
				type="text"
				value={issuer}
				placeholder="Issuer"
			/>
			<button onClick={saveToDatabase} className={styles.button}>
				Save Changes
			</button>
		</div>
	)
}

function DeleteCard(props) {

	let navigate = useNavigate()
	let { accountId } = props

	let handleDelete = () => {
		async function run() {
			let accounts = await get("accounts")
			accounts = accounts.filter(account => account.id !== accountId)
			set("accounts", accounts)
		}
		run()
		navigate("/?update=true")
	}

	return (
		<div className={styles.deleteCard}>
			<span className={`${styles.infoSpan} ${styles.realInfoSpan}`}>
				Delete Account
			</span>
			<span className={styles.infoSpanForDelete}>
				This action cannot be undone and you will lose access to all 2FA
				One-Time Password codes for this account.
			</span>
			<span className={styles.infoSpanForDelete}>
				You will not be able to login to your account without the
				recovery passphrase that you should have saved while setting up
				2FA.
			</span>
			<button onClick={handleDelete} className={styles.deleteButton}>Delete Account</button>
		</div>
	)
}
