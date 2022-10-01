import MapSVG from './MapSVG'
import Legend from './Legend/Legend'
interface Props {
  legendArray:null | string[]
}

const Map:React.FC<Props> = ({ legendArray }) => {
  return (
    <>
    <MapSVG />
    </>
  )
}

export default Map

{/* <Legend
legendArray={legendArray}
/> */}