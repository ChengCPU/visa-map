interface Props {color: string}

const Rectangle:React.FC<Props> = ({ color }) => {
	return (
    <svg width="20" height="50">
    <rect x="2" y="17" width="15" height="15" className={'rectangle'}>
        <style jsx>{`
        .rectangle {
        fill: ${color};
        stroke: #111111;
        stroke-width: 1;
        }`}</style>
    </rect>
    </svg>
	)
}

export default Rectangle