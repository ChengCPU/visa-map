interface Props {
	text: string;
	color: string
}
const Legend:React.FC<Props> = ({ text, color }) => {
	return (
	<>
    <svg width="20" height="20">
    <rect x="0" y="0" width="20" height="20" className={'rectangle'}>
    <style jsx>{`
		.rectangle {
		position: absolute;
		fill: ${color};
		stroke: ${(color == "rgb(0,0,0)") ? '#FFFFFF' : '#111111'};
		stroke-width:2.5;
		}`}</style>
    </rect>
    </svg>
	<p className={'text'}><style jsx>{`
		.text {
		left: 1680px;
		bottom: 877px;
		height: 20px;
		color: white;
		}`}</style>
	{text}</p>
	</>
	)
}

export default Legend