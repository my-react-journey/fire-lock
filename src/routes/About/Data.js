import { v4 as uuidv4 } from "uuid"
import styles from "./About.module.css"

export default function Data(props) {
	let { content } = props
	return (
		<>
			{content &&
				content.map((item, index) => {
					return (
						<span key={uuidv4()} className={styles.whatDoesItDo}>
							{item}
						</span>
					)
				})}
		</>
	)
}

export let data = [
	"A Privacy Respecting, Fully Private and Secure 2FA app that generate OTPs to securely login to your accounts.",
	"No data is stored on our servers. All data is stored locally on your device. Import and Export your data to keep it safe with your preferred password using AES-256 encryption.",
	"Fire Lock doesn't track you, doesn't collect or use or sell your data, doesn't even know who you are or even if you're reading this. All it knows is that you are using it. And that makes Fire Lock happy :)",
]
