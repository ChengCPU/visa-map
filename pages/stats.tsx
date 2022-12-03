import StatsPassport from '../components/Stats/StatsPassport';
interface Props {
  selectArray: null | string[];
}
const verticalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]

const Stats:React.FC<Props> = ({ selectArray }) => {

  const renderPassports = (verticalColumn:number[]) => {
    return verticalColumn.map(verticalColumn =>
      <tr>
        <th><StatsPassport selectArray={selectArray} verticalColumn={verticalColumn} /></th>
      </tr>
    )
  }

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
        {renderPassports(verticalColumn)}
			</tbody>
    </table>
    </div>
    </>
  )
}

export default Stats