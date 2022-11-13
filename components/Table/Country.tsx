interface Props {
	country: string;
}

const Country:React.FC<Props> = ({ country }) => {
  return (
    <td className={'country'}>
			<style jsx>{`
			.country {
			padding: 10px;
			border: 1px solid #ff0000;
			}
			`}</style>
    {country.charAt(0).toUpperCase() + country.slice(1)}</td>
  )
}

export default Country