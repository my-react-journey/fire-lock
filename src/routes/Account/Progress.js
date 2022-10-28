const cleanPercentage = (percentage) => {
	const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0
	const isTooHigh = percentage > 100
	return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage
}

const Circle = ({ colour, percentage }) => {
	const r = 15
	const circ = 2 * Math.PI * r
	const strokePct = ((100 + percentage) * circ) / 100
	return (
		<circle
			r={r}
			cx={50}
			cy={50}
			fill="transparent"
			stroke={strokePct !== circ ? colour : ""} 
			strokeWidth={"3px"}
			strokeDasharray={circ}
			strokeDashoffset={percentage ? strokePct : 0}
			transform={"rotate(-90, 60,60)"}
		></circle>
	)
}

const Text = ({ text }) => {
	return (
		<text
			x="50%"
			y="50%"
			dominantBaseline="central"
			textAnchor="middle"
			fill="#FFF"
			fontSize={"1em"}
		>
			{text}
		</text>
	)
}

const Pie = ({ percentage, colour, text }) => {
	const pct = cleanPercentage(percentage)
	return (
		<svg width={40} height={40}>
			<g style={{ transform: "translate(-30px, -50px)" }}>
				<Circle colour={colour} percentage={pct} />
			</g>
			<Text text={text} />
		</svg>
	)
}

export default Pie
