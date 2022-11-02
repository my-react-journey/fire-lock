import Title from "../../components/Title"
import styles from "./Export.module.css"
import encrypt from "./encrypt.webp"

export default function Export() {
	return (
		<>
			<Title titleName="Export" back={"/menu"} />
			
			<div className={styles.export}>
				<span className={styles.infoSpan}> Export all your account data with Industry-Level Encryption </span>

				<img src={encrypt} alt="Encryption" className={styles.encrypt} width={100} height={100} />

				<div className={styles.inputField}>

					<span className={styles.importantText}> Enter a password to encrypt your data. Please write this down on a piece of paper and keep it in a safe place. Without this password, your data will be lost forever. </span>
					<input type="text" placeholder="Enter Keyphrase" autoFocus/>
				</div>

				<div className={styles.exportButton}>
					<button type="button" className={styles.button}> Export </button>
				</div>

			</div>
		</>
	)
}
