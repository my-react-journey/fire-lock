import Title from "../../components/Title"
import styles from "./Import.module.css"
import Decrypt from "./Decrypt"
import fileDecryptImage from "./decrypt.webp"

export default function Import() {
	return (
		<>
			<Title titleName="Import" back={"/menu"} />

			<div className={styles.import}>
				<span className={styles.infoSpan}>
					Import your accounts from a firelock backup file
				</span>

				<img
					src={fileDecryptImage}
					alt="Decryption"
					className={styles.encrypt}
					width={100}
					height={100}
				/>

				<Decrypt />
			</div>
		</>
	)
}
