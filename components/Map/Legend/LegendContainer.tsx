import styles from '../../../styles/LegendContainer.module.css'
interface Props {text: string;color: string}

const Legend:React.FC<Props> = ({ text, color }) => {
	return (
	<div className={styles.container}>
    <svg width="15" height="15">
    <rect x="0" y="0" width="15" height="15" className={'rectangle'}>
    <style jsx>{`
		.rectangle {
		fill: ${color};
		stroke: #111111;
		stroke-width:2.5;
		}`}</style>
    </rect>
    </svg>
	<p className={'text'}><style jsx>{`
		.text {
		color: white;
		}`}</style>
	{text}</p>
	</div>
	)
}

export default Legend