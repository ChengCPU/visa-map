import { useContext } from 'react';
import { WidthContext } from '../../logic/context/WidthContext';
import MapSVG from './MapSVG';
import Legend from './Legend/Legend';
import styles from '../../styles/Map.module.css';
type LegendType = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
interface Props {legend:LegendType; setHover:Function;}

const Map:React.FC<Props>= ({ legend, setHover }) => {

  const width = useContext(WidthContext)
  
  return (
    <>
    <br />
    <br />
    {
    (width.width <= 800) ?
    <br />
    :
    null
    }
    <div className={styles.container}>
    <MapSVG setHover={setHover}/>
    {
    (width.width <= 800) ?
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </>
    : null
    }
    </div>
    </>
  )
}

export default Map