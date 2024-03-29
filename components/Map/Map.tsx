import { useContext } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import MapSVG from './MapSVG'
interface Props {
  setHover:Function;
  panzoomReset:boolean;
}

const Map:React.FC<Props>= ({ setHover, panzoomReset }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  
  return (
    <>
    <br />
    <br />
    {(dimensions.width <= 800) ?
    <br />
    :
    null}
    <div className={'container'}>
    <style jsx>{`
      .container {
        position: relative;
        margin-left: 10px;
      }
    `}</style>
    <MapSVG 
      setHover={setHover}
      panzoomReset={panzoomReset}
    />
    {(dimensions.width <= 800) ?
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
    : null}
    </div>
    </>
  )
}

export default Map