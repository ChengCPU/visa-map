import MapSVG from './MapSVG';
import Legend from './Legend/Legend'
type LegendType = {HC: boolean, FoM: boolean, OECSFoM: boolean, MFoM: boolean, EUFoM: boolean, GCCFoM: boolean, VF: boolean, VoAEV: boolean, VoA: boolean, EV: boolean, SP: boolean, CR: boolean}
interface Props {legend: LegendType;}

const Map:React.FC<Props>= ({ legend }) => {
  return (
    <>
    <br />
    <br />
    <MapSVG />
    <Legend
      legend={legend}
    />
    </>
  )
}

export default Map