import styles from "./Import.module.css"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { DAATS } from "./ImportHelperFunction"
import toast from "react-simple-toasts"

function Decrypt() {

	let inputRef = useRef()
	let fileRef = useRef()
	let [key, setKey] = useState("")
	let [info, setInfo] = useState("Enter the password you entered while exporting a backup and also select the backup file.")
	let [infoClass, setInfoClass] = useState(styles.importantText)
	let navigate = useNavigate()

	let handleInput = () => {
		let value = inputRef.current.value
		setKey(value)
	}

	let handleClick = async () => {
		let keyValue = key
		if(keyValue.trim().length < 1) {
			setInfo("Please enter a password.")
			setInfoClass(styles.errorText)
			return
		} 

		let fileContents = fileRef.current.files[0]
		let reader = new FileReader()

		if(fileContents.type !== "text/plain") {
			setInfo("Please select a valid backup file.")
			setInfoClass(styles.errorText)
			return
		}
		
		try {
			reader.readAsText(fileContents)
		} catch (error) {
			console.log(error)
			setInfo("Error reading file. Please try again.")
			setInfoClass(styles.errorText)
			return
		}

		reader.onload = async () => {
			let encrypted = reader.result
			let didSucceed = await DAATS(encrypted, keyValue, setInfo, setInfoClass, styles)

			if(didSucceed.success) {
				navigate("/")
				toast("Accounts successfully imported.")
			}

			setInfo(didSucceed.message)
			setInfoClass(styles.errorText)
		}
		reader.onerror = () => {
			setInfoClass(styles.errorText)
			setInfo("Error reading file. Please try again.")
		}

	}

	return (
		<>
			<div className={styles.inputField}>
				<span className={infoClass}>{info}</span>
				
				<label htmlFor="textFile" className={styles.dropContainer}>
					<span className={styles.dropTitle}>Drop file here or</span>
					<input ref={fileRef} type="file" id="textFile" accept="file/*" required />
				</label>

				<input
					onInput={handleInput}
					value={key}
					ref={inputRef}
					type="text"
					placeholder="Enter Keyphrase (required)"
				/>

			</div>

			<div>
				<button
					onClick={handleClick}
					type="button"
					className={styles.button}
				>
					Import Accounts
				</button>
			</div>
		</>
	)
}

export default Decrypt
