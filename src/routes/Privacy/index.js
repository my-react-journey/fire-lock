import Title from "../../components/Title"
import styles from "./Privacy.module.css"

export default function Privacy() {
	return (
		<>
			<Title titleName="Privacy" back={"/"} />

			<div className={styles.privacy}>
				<span className={styles.infoSpan}>Privacy Policy</span>
			</div>

			<div className={styles.privacyPolicy}>
				<p>Effective date: November 01, 2022</p>
				<p>
					Firelock ("us", "we", or "our") operates the Firelock
					website (the "Service").
				</p>

				<p className={styles.privacyPolicyTitle}>tldr;</p>

				<ul>
					<li>
						<p className={styles.privacyText}>
							Fire Lock will never collect, store, share, or use
							any of your data, ever.
						</p>
					</li>
					<li>
						<p className={styles.privacyText}>
							All transactions like saving, generating codes,
							happen only on your device and no data is ever sent
							to Fire Lock servers.
						</p>
					</li>
					<li>
						<p className={styles.privacyText}>
							All data would be lost if you simply clear your
							browser content. You can even take the whole app
							offline and it would still work as intended. Only
							because it doesn't collect, store or share any
							information from you or require any internet
							connectivity.
						</p>
					</li>
				</ul>

				<p className={styles.privacyPolicyTitle}>
					Introduction
				</p>

				<p className={styles.privacyText}>
					Our Privacy Policy governs your visit to Firelock, and
					explains how Fire Lock collect, safeguard and disclose
					information that results from your use of our Service.
				</p>
				
				<p className={styles.privacyPolicyTitle}>
					What does Fire Lock collect?
				</p>

				<p className={styles.privacyText}>
					Fire Lock never collects, stores, shares, or use any of your data,
					ever. It simply don't need it.
				</p>

				<p className={styles.privacyPolicyTitle}>
					What data does Fire Lock work with?
				</p>

				<p className={styles.privacyText}>
					All data is stored on your device and never sent to Fire Lock
					servers. Here are the data types that Fire Lock works with:
				</p>

				<ul>
					<li> Data from scanning QR codes </li>
					<li> Data from user input while adding accounts </li>
					<li> Data from user input while generating backup files </li>
				</ul>

				<p className={styles.privacyPolicyText}>
					All data would be lost if you simply clear your browser. The above listed data types are the only data that Fire Lock works with. It doesn't collect, store or share any information from you or require any internet connectivity.
				</p>

				<p className={styles.privacyPolicyTitle}>
					How does Fire Lock use the data?
				</p>

				<ul>

					<li>
						<p className={styles.privacyText}>
							The data from scanning QR codes is added to your browser storage. Information from the QR is used for generating the OTPs. The data is never sent to Fire Lock servers or shared with anyone.
						</p>
					</li>

					<li>
						<p className={styles.privacyText}>
							The data from user input while adding accounts is added to your browser storage. Information from your input is used for generating the OTPs for the added account. The data is never sent to Fire Lock servers or shared with anyone.
						</p>

					</li>

					<li>
						<p className={styles.privacyText}>
							The data from user input while generating backup files is added to your browser storage. Information from your input is used for generating the backup file. The data is never sent to Fire Lock servers or shared with anyone.
						</p>
					</li>

				</ul>

				<p className={styles.privacyPolicyTitle}>
					Contact Us
				</p>

				<p className={styles.privacyText}>
					If you have any questions about this Privacy Policy, please
					contact us: {" "}
					<a href="mailto:meowitapp@gmail.com" style={{color: "#3f97ff", textDecoration: "none"}}> 
						meowitapp@gmail.com
					</a>
				</p>

			</div>
		</>
	)
}
