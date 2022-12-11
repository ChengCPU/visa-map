import StatsPassport from '../components/Stats/StatsPassport';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/Stats.module.css';
interface Props {
  selectArray:null | string[];
  percentage:any;
}
const verticalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]

const Stats:React.FC<Props> = ({ selectArray, percentage }) => {

  const renderPassports = (verticalColumn:number[]) => {
    return verticalColumn.map(verticalColumn =>
      (selectArray[verticalColumn] != null) ?
      <th key={verticalColumn * 10}>
        <StatsPassport selectArray={selectArray} verticalColumn={verticalColumn} />
      </th>
      : null
    )
  }

  const renderStats = (verticalColumn:number[]) => {
    return verticalColumn.map(verticalColumn =>
      (selectArray[verticalColumn] != null) ?
      <th key={verticalColumn * 100} className={styles.container}>
      <p>Total</p>
      <ProgressBar percentage={percentage[verticalColumn].total} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={'rgb(255,255,255)'} />
      <br />
      <p>Visa-free</p>
      <ProgressBar percentage={percentage[verticalColumn].visaFree} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={'rgb(50,205,50)'} />
      <br />
      <p>Visa on arrival/E-visa</p>
      <ProgressBar percentage={percentage[verticalColumn].visaOnArrivalEVisa} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={'rgb(161,224,123)'} />
      <br />
      <p>Visa on arrival</p>
      <ProgressBar percentage={percentage[verticalColumn].visaOnArrival} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={'rgb(255,255,92)'} />
      <br />
      <p>E-visa</p>
      <ProgressBar percentage={percentage[verticalColumn].eVisa} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={'rgb(135,206,250)'} />
      </th>
      : null
    )
  }

  return (
    <>
    <br />
    <br />
    <br />
    <div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody className={styles.table}>
        <tr>
          {renderPassports(verticalColumn)}
        </tr>
        <tr>
          {renderStats(verticalColumn)}
        </tr>
			</tbody>
    </table>
    </div>
    </>
  )
}

export default Stats