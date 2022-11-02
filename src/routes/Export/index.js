import Title from "../../components/Title"
import styles from "./Export.module.css"
import Encrypt from "./Encrypt"
import fileEncryptImage from "./encrypt.webp"

export default function Export() {
	return (
		<>
			<Title titleName="Export" back={"/menu"} />

			<div className={styles.export}>
				<span className={styles.infoSpan}>
					Export all your account data with Industry-Level Encryption
				</span>

				<img
					src={fileEncryptImage}
					alt="Encryption"
					className={styles.encrypt}
					width={100}
					height={100}
				/>

				<Encrypt />
			</div>
		</>
	)
}
