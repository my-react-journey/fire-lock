import { useParams, useNavigate } from "react-router-dom"
import { get } from "idb-keyval"
import { useEffect, useState } from "react"
import { returnIssuerImage } from "../../components/AddAccount"
import AccountTitle from "../../components/AccountTitle"
import * as OTPAuth from "otpauth"
import renderStyle from "./RenderTime.module.css"
import Pie from "./Progress"
import toast from "react-simple-toasts"

export default function Account() {
	let [issuer, setIssuer] = useState("")
	let [account, setAccount] = useState("")
	let [secret, setSecret] = useState("")
	let [profile, setProfile] = useState("")
	let [algorithm, setAlgorithm] = useState("SHA1")
	let [digits, setDigits] = useState(6)
	let [period, setPeriod] = useState(6)
	let navigate = useNavigate()
	let { accountId } = useParams()

	// didn't re-render when a new account was added, so I had to use useEffect
	useEffect(() => {
		if (window.location.search.includes("update=true")) {
			window.location.href = window.location.href.replace("?update=true", "")
		}
	}, [])

	useEffect(() => {
		let returnHome = () => navigate("/")
		async function run() {
			let account = await retriveData(accountId)
			if (account != null) {
				setIssuer(account.issuer)
				setAccount(account.account)
				setSecret(account.secret)
				setProfile(returnIssuerImage(account.issuer))
				setAlgorithm(account.algorithm)
				setDigits(account.digits)
				setPeriod(account.period)
			}
		}
		async function retriveData() {
			let accounts = await get("accounts")
			let account = accounts.filter((account) => account.id === accountId)[0]
			if (account != null) return account
			returnHome()
		}
		run()
	}, [accountId, navigate])

	return (
		<>
			<AccountTitle issuer={issuer} account={account} profile={profile} id={accountId} />
			<RenderTime algorithm={algorithm} digits={digits} period={period} secret={secret} />
		</>
	)
}

function RenderTime(props) {

	let {algorithm, digits, period, secret} = props

	let [time, setTime] = useState("30")
	let [token, setToken] = useState("000000")
	let [percentage, setPercentage] = useState(0)

	function getTime() {
		let currentUnixTimeEpoch = Date.now() / 1000
    	let timeValue = (30 - (currentUnixTimeEpoch % 30)).toFixed(0)
		return timeValue !== 0 ? timeValue : 30
	}
	

	useEffect(() => {

		let interval = setInterval(() => {
			setTime(getTime)
			setPercentage((time / 30) * 100)

			let totp = new OTPAuth.TOTP({
				algorithm: algorithm,
				digits: digits,
				period: period,
				secret: secret
			})
			let otp = totp.generate()
			let otp1 = otp.slice(0, 3)
			let otp2 = otp.slice(3, 6)
			setToken(otp1 + " " + otp2)
		}, 0)
		return () => clearInterval(interval)
	}, [token, algorithm, digits, period, secret, time])

	let handleCopy = () => {
		let text = token.replace(/\s/g, "")
		navigator.clipboard.writeText(text)
		toast("Copied to clipboard")
	}
	

	return(
		<>
			<div className={renderStyle.contentWrapper}>
				<div className={renderStyle.left}>
					<Pie percentage={percentage} colour="#0d7dff" text={time} />
				</div>
				<div className={renderStyle.right}>
					<span className={renderStyle.heading}>{"One-time password code"}</span>
					<span onClick={handleCopy} className={renderStyle.otpNumber}>{token}</span>
				</div>
			</div>
		</>
	)
}