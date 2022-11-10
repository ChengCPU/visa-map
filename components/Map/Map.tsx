import MapSVG from './MapSVG';
import Legend from './Legend/Legend'
import reset from '../../logic/reset';
import selectArrayCalculation from '../../logic/selectArrayCalculation';
import mainCalculation from '../../logic/mainCalculation';
import subCalculation from '../../logic/subCalculation';
import { useEffect } from 'react';
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

  useEffect(() => {
    //function that takes in logic function
    if(selectArray[select.selection] != null && selectArray[select.selection] != select.passport) {
      reset(setAssignedColors, setPriority, secondToggle, setSecondToggle, legend, setLegend, percentage, setPercentage); return
    }
    selectArrayCalculation(selectArray, setSelectArray, select);
    if(selectArray[select.selection] != null) {
      mainCalculation(selectArray[select.selection], assignedColors, setAssignedColors, select, priority, setPriority, rerender, setRerender, legend, setLegend, percentage, setPercentage)
    }
  }, [toggle])

  useEffect(() => {
    subCalculation(selectArray, assignedColors, setAssignedColors, priority, setPriority, rerender, setRerender, legend, setLegend, percentage, setPercentage)
    selectArrayCalculation(selectArray, setSelectArray, select)
  }, [secondToggle])

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