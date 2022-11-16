interface Props {
  flag: string;
	country: string;
}
const Country:React.FC<Props> = ({ flag, country }) => {
  return (
    <td className={'country'}>
			<style jsx>{`
			.country {
			padding: 10px;
			border: 1px solid #222222;
			}
			`}</style>
    {flag + country.charAt(0).toUpperCase() + country.slice(1)}</td>
  )
}

export default Country