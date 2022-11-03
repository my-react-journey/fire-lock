import Title from "../../components/Title"
import logo from "./logo.webp"
import styles from "./About.module.css"
import { data } from "./Data"
import Data from "./Data"

export default function About() {
	let goToGithub = () => {
		window.open("https://github.com/tharunoptimus", "_blank")
	}

	return (
		<>
			<Title titleName="About" back="/menu" />

			<div className={styles.container}>
				<img src={logo} alt="logo" height={150} width={150} />

				<span className={styles.appName}>Fire Lock </span>

				<span onClick={goToGithub} className={styles.appAuthor}>
					by @tharunoptimus ↗
				</span>

				<div className={styles.appDesc}>
					<Data content={data} />
				</div>
			</div>
		</>
	)
}
