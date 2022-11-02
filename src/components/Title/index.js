import left from "./left.svg"
import styles from "./Title.module.css"

import { useNavigate } from "react-router-dom"

function Title(props) {
	let navigate = useNavigate()

	let { titleName, back } = props

	let handleClick = () => {
		setTimeout(() => {
			if (back) {
				return navigate(back)
			}
			navigate("/")
		}, 100)
	}

	return (
		<>
			<div className={styles.header}>
				<span className={styles.actionIconsAdd} onClick={handleClick}>
					<img src={left} alt="Go Back" />
				</span>

				<span className={styles.appName}>{titleName}</span>
			</div>
		</>
	)
}

export default Title
