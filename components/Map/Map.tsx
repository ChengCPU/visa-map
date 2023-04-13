import { useContext } from 'react';
import { WidthContext } from '../../logic/context/WidthContext';
import MapSVG from './MapSVG';
import styles from '../../styles/Map.module.css';
interface Props {setHover:Function;}

const Map:React.FC<Props>= ({ setHover }) => {

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