import { useContext, MutableRefObject } from 'react'
import { DimensionsContext } from '../../logic/context/DimensionsContext'
import MapSVG from './MapSVG'
interface Props {
  setHover:Function;
  panzoomReset:boolean;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  diffRef:MutableRefObject<{[key:string]:boolean}>;
  setCountrySelect:Function;
}

const Map:React.FC<Props>= ({ setHover, panzoomReset, priorityRef, diffRef, setCountrySelect }) => {

  const dimensions:{width:number;height:number} = useContext(DimensionsContext)
  
  return (
    <>
    <br />
    <br />
    {dimensions.width <= 800 && <br />}
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
        priorityRef={priorityRef}
        diffRef={diffRef}
        setCountrySelect={setCountrySelect}
      />
      {dimensions.width <= 800 &&
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
      }
    </div>
    </>
  )
}

export default Map