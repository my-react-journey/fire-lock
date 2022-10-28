import left from "./left.svg"
import settings from "./settings.svg"
import styles from "./AccountTitle.module.css"
import { returnIssuerImage } from "../AddAccount"
import { useNavigate } from "react-router-dom"

function Title(props) {
	let navigate = useNavigate()
	let imageSrc = returnIssuerImage(props.issuer, ".")

	let handleSettings = () => {
		let { id } = props
		setTimeout(() => {
			navigate(`/settings/${id}`)
		}, 100)
	}

	let handleClick = () => {
		setTimeout(() => {
			navigate("/")
		}, 100)
	}

	return (
		<>
			<div className={styles.accountTitle}>
				<div className={styles.header}>
					<span
						className={styles.actionIconsAdd}
						onClick={handleClick}
					>
						<img src={left} alt="Go Back" />
					</span>

					<span className={styles.appName}>{props.titleName}</span>

					<span
						className={`${styles.actionIconsAdd} ${styles.cogIcon}`}
						onClick={handleSettings}
					>
						<img src={settings} alt="Account Settings" />
					</span>
				</div>
				<div className={styles.mainContent}>
					<div className={styles.left}>
						<div className={styles.logoHolder}>
							<img
								src={imageSrc}
								alt={props.issuer}
								height={70}
								width={70}
							/>
						</div>
					</div>
					<div className={styles.right}>
						<span className={styles.contentLabel}>
							{props.issuer}
						</span>
						<span className={styles.contentEmail}>
							{props.account}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Title
