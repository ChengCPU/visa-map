import MapSVG from './MapSVG';
import Legend from './Legend/Legend'
type LegendType = {HC: boolean, FoM: boolean, OECSFoM: boolean, MFoM: boolean, EUFoM: boolean, GCCFoM: boolean, VF: boolean, VoAEV: boolean, VoA: boolean, EV: boolean, SP: boolean, CR: boolean}
interface Props {
  select: {
    selection: number;
    passport: null | string;
  };
  selectArray:null | string[];
  priority: any;
  setPriority: Function;
  assignedColors: object[];
  setAssignedColors: Function;
  legend: LegendType;
  setLegend: Function;
  toggle: boolean;
  secondToggle: boolean;
  setSecondToggle: Function;
  percentage: number;
  setPercentage: Function;
  setSelectArray: Function;
  rerender: boolean;
  setRerender: Function;
}

const Map:React.FC<Props>= ({ select, selectArray, priority, setPriority, assignedColors, setAssignedColors, legend, setLegend, toggle, secondToggle, setSecondToggle, percentage, setPercentage, setSelectArray, rerender, setRerender }) => {
  
  return (
    <>
    <br />
    <br />
    <Legend
      legend={legend}
    />
    <MapSVG />
    </>
  )
}

export default Map