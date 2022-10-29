import Rectangle from './Rectangle'
import Text from './Text'
import styles from '../../../styles/Legend.module.css'

const Legend:React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Rectangle color={"rgb(255,20,147)"}/>
        <Text text={'Home country'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(255,179,191)"}/>
        <Text text={'Freedom of movement'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(0,135,93)"}/>
        <Text text={'MERCOSUR FoM'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(0,51,153)"}/>
        <Text text={'EU/EFTA FoM'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(153,123,61)"}/>
        <Text text={'GCC FoM'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(255,145,0)"}/>
        <Text text={'OECS FoM'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(50,205,50)"}/>
        <Text text={'Visa free'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(161,224,123)"}/>
        <Text text={'Visa on arrival/E-visa'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(255,255,92)"}/>
        <Text text={'Visa on arrival'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(135,206,250)"}/>
        <Text text={'E-visa/eTA'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(200,200,200)"}/>
        <Text text={'Simplified visa'}/>
      </div>
      <div className={styles.container}>
        <Rectangle color={"rgb(0,0,0)"}/>
        <Text text={'Unrecognized/Confirmation required'}/>
      </div>
    </div>
  )
}

export default Legend