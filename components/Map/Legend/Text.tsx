interface Props {text: string}

const Text:React.FC<Props> = ({ text }) => {
	return (
	<p className={'text'}>
    <style jsx>{`
    .text {
    color: white;
    }
    `}</style>
	{text}</p>
	)
}

export default Text