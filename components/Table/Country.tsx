interface Props {
	country: string;
  flag: string;
}
const Country:React.FC<Props> = ({ country, flag }) => {
  return (
    <td className={'country'}>
			<style jsx>{`
			.country {
			padding: 10px;
			border: 1px solid #222222;
			}
			`}</style>
    {country.charAt(0).toUpperCase() + country.slice(1) + flag}</td>
  )
}

export default Country