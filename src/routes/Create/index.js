import Title from "../../components/Title"
import { QrReader } from "react-qr-reader"
import { useState } from "react"
import styles from "./Create.module.css"

export default function Create() {
	let [data, setData] = useState("No result")

	return (
		<>
			<Title titleName="Add an account" />
			<div className={styles.container}>
				<span className={styles.infoSpan}>
					Your account provider will display a QR Code. Scan it to
					add.
				</span>
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
					onResult={(result, error) => {
						if (!!result) {
							setData(result?.text)
						}

						if (!!error) {
							console.info(error)
						}
					}}
					style={{ width: "100%" }}
				/>
				<p>{data}</p>
			</div>
			<span></span>
		</>
	)
}
