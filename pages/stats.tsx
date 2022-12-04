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
    <br />
    <br />
    <div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
        {(selectArray[0] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={0} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[1] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={1} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[2] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={2} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[3] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={3} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[4] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={4} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[5] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={5} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[6] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={6} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[7] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={7} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[8] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={8} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
        {(selectArray[9] !== null) ? <tr><th><StatsPassport selectArray={selectArray} number={9} /></th><th><ProgressBar percentage={45} /></th></tr> : null}
			</tbody>
    </table>
    </div>
    </>
  )
}

export default Stats