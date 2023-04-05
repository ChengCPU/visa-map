import Rectangle from './Rectangle';
import Text from './Text';
import styles from '../../../styles/Legend.module.css';
type LegendType = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
interface Props {legend:LegendType;} //props interface assigns LegendType to legend

const Legend:React.FC<Props> = ({ legend }) => {
  //each nested div inside of the main div include one rectangle svg and one <p> element. If their respective object boolean is true, they will be rendered.
  return (
    <div className={styles.main}>
      {(legend.HC == true) ?
      <div className={styles.container}>
        <Rectangle color={'rgb(255,20,147)'}/>
        <Text text={'Home country'}/>
      </div> : <br />}
      {(legend.FoM == true) ?
      <div className={styles.container}>
        <Rectangle color={'rgb(255,179,191)'}/>
        <Text text={'Freedom of movement'}/>
      </div> : null}
      {(legend.OECSFoM == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(255,145,0)'}/>
        <Text text={'OECS FoM'}/>
      </div> : null}
      {(legend.MFoM == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(0,135,93)'}/>
        <Text text={'MERCOSUR FoM'}/>
      </div> : null}
      {(legend.EUFoM == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(0,51,153)'}/>
        <Text text={'EU/EFTA FoM'}/>
      </div> : null}
      {(legend.GCCFoM == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(153,123,61)'}/>
        <Text text={'GCC FoM'}/>
      </div> : null}
      {(legend.VF == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(50,205,50)'}/>
        <Text text={'Visa free'}/>
      </div> : null}
      {(legend.VoAEV == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(161,224,123)'}/>
        <Text text={'Visa on arrival/E-visa'}/>
      </div> : null}
      {(legend.VoA == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(255,255,92)'}/>
        <Text text={'Visa on arrival'}/>
      </div> : null}
      {(legend.EV == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(135,206,250)'}/>
        <Text text={'E-visa/eTA'}/>
      </div> : null}
      {(legend.SP == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(118,65,171)'}/>
        <Text text={'Special permit'}/>
      </div> : null}
      {(legend.CR == true) ? <div className={styles.container}>
        <Rectangle color={'rgb(0,0,0)'}/>
        <Text text={'Unrecognized/Confirmation required'}/>
      </div> : null}
    </div>
  )
}

export default Legend