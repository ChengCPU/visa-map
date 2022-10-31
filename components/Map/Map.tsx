import MapSVG from './MapSVG';
import Legend from './Legend/Legend'
type LegendType = {HC: boolean, FoM: boolean, OECSFoM: boolean, MFoM: boolean, EUFoM: boolean, GCCFoM: boolean, VF: boolean, VoAEV: boolean, VoA: boolean, EV: boolean, SP: boolean, CR: boolean}
interface Props {
  legend: LegendType;
  rerender: boolean;
}

const Map:React.FC<Props>= ({ legend, rerender }) => {
  return (
    <>
    <br />
    <br />
    <Legend
      legend={legend}
    />
    <MapSVG
      legend={legend}
      rerender={rerender}
    />
    </>
  )
}

export default Map