
export default function Loader({height, color}){
     let btn = false
	return (
		<div className="sc-gKclnd sc-furwcr keuypW hTWjOR loading"  style={{minHeight: height+"vh"}}>
			<svg viewBox="0 0 84 24" fill={color}>
			<circle cx="18" cy="12" r="6"></circle>
				<circle cx="18" cy="12" r="6"></circle>
				<circle cx="42" cy="12" r="6"></circle>
				<circle cx="66" cy="12" r="6"></circle>
			</svg>
		</div>
	)
}
