import Title from "../../components/Title"
import styles from "./Privacy.module.css"

export default function Privacy() {
	return (
		<>
			<Title titleName="Privacy" back={"/"} />

			<div className={styles.privacy}>
				<span className={styles.infoSpan}>
					Privacy Policy
				</span>
			</div>
		</>
	)
}
