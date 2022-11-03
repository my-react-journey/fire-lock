import styles from "./NothingHere.module.css"

export default function NothingHere() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.number}>404</div>
				<div className={styles.text}>
					<span>Ooops...</span>
					<br></br>page not found
				</div>
			</div>
		</>
	)
}
