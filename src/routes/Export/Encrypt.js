import styles from "./Export.module.css"
import { useState } from "react"
import { get } from "idb-keyval"
import { useRef } from "react"
import { encrypt } from "../../components/Crypto"

function Encrypt() {
	let inputRef = useRef()
	let [key, setKey] = useState("")

	let handleInput = () => {
		let value = inputRef.current.value
		setKey(value)
	}

	let handleClick = async () => {
		let accounts = await get("accounts")
		let string = JSON.stringify(accounts)
		let output = encrypt(string, key)

		downloadFile(output, "firelock_backup", "txt")
	}

	let downloadFile = (contents, fileName, fileExtn) => {
		let file = new File([contents], `${fileName}.${fileExtn}`, {
			type: "text/plain",
		})
		let url = URL.createObjectURL(file)
		let a = document.createElement("a")
		a.href = url
		a.download = "backup.txt"
		a.click()
	}

	return (
		<>
			<div className={styles.inputField}>
				<span className={styles.importantText}>
					Enter a password to encrypt your data. Please write this
					down on a piece of paper and keep it in a safe place.
					Without this password, your data will be lost forever.
				</span>
				<input
					onInput={handleInput}
					value={key}
					ref={inputRef}
					type="text"
					placeholder="Enter Keyphrase"
					autoFocus
				/>
			</div>

			<div className={styles.exportButton}>
				<button
					onClick={handleClick}
					type="button"
					className={styles.button}
				>
					Export
				</button>
			</div>
		</>
	)
}

export default Encrypt
