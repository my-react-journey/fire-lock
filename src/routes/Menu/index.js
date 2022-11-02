import Title from "../../components/Title"
import { menuContents } from "./Data"
import styles from "./Menu.module.css"
import { useNavigate } from "react-router-dom"
import exportImage from "./export.svg"
import importImage from "./import.svg"
import about from "./about.svg"
import right from "./right.svg"

export default function Menu() {
	return (
		<>
			<Title titleName="Menu" />
			<div className="meow">

				{
					menuContents.map((content) => {
						return (
							<MenuCard
								title={content.title}
								description={content.description}
								icon={content.icon}
								navigation={content.navigation}
								key={content.id}
							/>
						)
					})
				}

			</div>
		</>
	)
}

function MenuCard (props) {
	
	let {title, description, icon, navigation} = props
	let navigate = useNavigate()
	
	let handleClick = () => {
		setTimeout(() => {
			navigate(navigation)
        }, 100)
    }
	
	return (
		<div className={styles.menuCard} onClick={handleClick}>
			<Icons icon={icon} />
			<MenuContent title={title} description={description} />
			<Navigation navigation={navigation} />
		</div>
	)
}


function Icons(props) {
	let { icon } = props

	return (
		<div className={styles.icon}>
			{icon === "export" && <img src={exportImage} alt="Export" height={30} width={30} />}
			{icon === "import" && <img src={importImage} alt="Import" height={30} width={30} />}
			{icon === "about" && <img src={about} alt="About" height={30} width={30} />}
		</div>
	)
}

function Navigation(props) {
	let { navigation } = props

	return (
		<div className={styles.menuCardNavigation}>
			<img src={right} alt="Go There" height={30} width={30} />
		</div>
	)
}

function MenuContent(props) {
	let {title, description} = props

	return (
		<div className={styles.menuContent}>
			<span className={styles.menuContentTitle}>{title}</span>
			<span className={styles.menuContentDescription}>{description}</span>
		</div>
	)
}