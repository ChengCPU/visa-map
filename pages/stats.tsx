import StatsPassport from '../components/Stats/StatsPassport';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/Stats.module.css';
interface Props {
  selectArray: null | string[];
}
const verticalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]

const Stats:React.FC<Props> = ({ selectArray }) => {

  return (
    <>
    <br />
    <br />
    <br />
    <div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody className={styles.table}>
        <tr>
          <th>
            <StatsPassport selectArray={selectArray} verticalColumn={0} />
          </th>
        </tr>
        <tr>
          <th>
            <p>Visa-free</p>
            <ProgressBar percentage={45} width={'75px'} height={'75px'} color={'rgb(50,205,50)'} />
            <br />
            <p>Visa on arrival/E-visa</p>
            <ProgressBar percentage={45} width={'75px'} height={'75px'} color={'rgb(161,224,123)'} />
            <br />
            <p>Visa on arrival</p>
            <ProgressBar percentage={45} width={'75px'} height={'75px'} color={'rgb(255,255,92)'} />
            <br />
            <p>E-visa</p>
            <ProgressBar percentage={45} width={'75px'} height={'75px'} color={'rgb(135,206,250)'} />
          </th>
        </tr>
			</tbody>
    </table>
    </div>
    </>
  )
}

export default Stats