interface Props {
	legendArray:null | string[]
}
const Legend:React.FC<Props> = ({ legendArray }) => {
	return (
		<>
		<p className={'text'}><style jsx>{`
			.text {
			position: absolute;
			left: 1680px;
			bottom: 877px;
			height: 20px;
			color: white;
			}`}</style>
		Visa-Free</p>
    <svg width="1905" height="790">
    <rect x="1645" y="10" width="20" height="20" className={'homeCountry'}>
    <style jsx>{`
			.homeCountry {
			position: absolute;
			fill: rgb(50,205,50);
			stroke: #111111;
			stroke-width:2.5;
			}`}</style>
    </rect>
    </svg>
		</>
	)
}

export default Legend