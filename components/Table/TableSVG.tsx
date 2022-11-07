const TableSVG:React.FC = () => {
  return (
		<svg width="200" height="50">
			<rect x="2" y="17" width="200" height="50" className={'rectangle'}>
				<style jsx>{`
						.rectangle {
						fill: #111111;
						stroke: #111111;
						stroke-width: 1;
				}`}</style>
			</rect>
		</svg>
  )
}

export default TableSVG