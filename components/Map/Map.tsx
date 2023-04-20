import { useContext } from 'react';
import { WidthContext } from '../../logic/context/WidthContext';
import MapSVG from './MapSVG';
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
    <div className={'container'}><style jsx>{`
    .container {
      position: relative;
      margin-left: 10px;
    }
    `}</style>
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