import { useContext } from 'react';
import MapSVG from './MapSVG';
import Legend from './Legend/Legend'
import { WidthContext } from '../context/WidthContext';
import styles from '../../styles/Map.module.css'
type LegendType = {HC:boolean, FoM:boolean, OECSFoM:boolean, MFoM:boolean, EUFoM:boolean, GCCFoM:boolean, VF:boolean, VoAEV:boolean, VoA:boolean, EV:boolean, SP:boolean, CR:boolean}
interface Props {legend:LegendType;}

const Map:React.FC<Props>= ({ legend }) => {

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
    <MapSVG />
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
    <Legend
      legend={legend}
    />
    </div>
    </>
  )
}

export default Map