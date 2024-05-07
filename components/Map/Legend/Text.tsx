interface Props {
	text:string;
}

const Text:React.FC<Props> = ({ text }) => {
	return (
		<p className={'text'}>
			<style jsx>{`
				.text {
					color: white;
					margin-left: 20px;
					margin-top: -37px;
				}
			`}</style>
			{text}
		</p>
	)
}

export default Text