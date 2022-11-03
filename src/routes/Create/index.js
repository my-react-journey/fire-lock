import Title from "../../components/Title"
import { QrReader } from "react-qr-reader"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { validateQR, addNewAccount } from "../../components/AddAccount"
import styles from "./Create.module.css"
import keyboard from "./keyboard.svg"

export default function Create() {

	let [instruction, setInstruction] = useState("Your account provider will display a QR Code. Scan it to add.")
	let [errorSpan, setErrorSpan] = useState(styles.infoSpan)

	let navigate = useNavigate()
	let handleClick = () => navigate("/manual-entry")
	let returnHome = () => navigate("/")

	return (
		<>
			<Title titleName="Add an account" />
			<div className={styles.container}>
				<span className={errorSpan}>{instruction}</span>
				<QrReader
					constraints={{ facingMode: "environment" }}
					containerStyle={{
						width: "65vw",
						borderRadius: "12px",
						display: "grid",
						placeItems: "center",
					}}
					videoContainerStyle={{ width: "65vw", borderRadius: "12px", paddingTop: "98%" }}
					videoStyle={{ width: "85vw", height: "unset", borderRadius: "12px" }}
					onResult={async (result, error) => {
						if (!!result) {
							let data = validateQR(result?.text)
							if( data != null) {
								await addNewAccount(data)
								returnHome()
							} else {
								console.log(data)
								setInstruction("Invalid QR Code. Try again. Scan the QR Code provided by your account.")
								setErrorSpan(styles.errorSpan + " " + styles.infoSpan)
							}
						}

						if (!!error) {
							console.info(error)
						}
					}}
					style={{ width: "100%" }}
				/>
				
				<div onClick={handleClick} className={styles.enterCode} ><span>OR&nbsp;</span> <span>ENTER&nbsp;</span>CODE&nbsp;<span>MANUALLY</span><img src={keyboard} alt="keyboard" /></div>
			</div>
			<span></span>
		</>
	)
}
