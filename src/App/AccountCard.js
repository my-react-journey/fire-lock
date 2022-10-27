import right from "./right.svg"
import styles from "./AccountCard.module.css"
import { useNavigate } from "react-router-dom"

function AccountCard(props) {
    
    let navigate = useNavigate()

    let handleClick = () => {
        let {id} = props
        navigate(`/account/${id}`)
    }

	return (
		<>
            <div className={styles.cardHolder} onClick={handleClick}>
                <div className={styles.logoHolder}>
                    <img src={props.accountLabel} alt={props.label} />
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <span className={styles.contentLabel}>{props.label}</span>
                        <span className={styles.contentEmail}>{props.account}</span>
                    </div>
                    <div className={styles.navigatorHolder} onClick={handleClick}>
                        <img src={right} alt="View" />
                    </div>
                </div>
            </div>
		</>
	)
}

export default AccountCard
