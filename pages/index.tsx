import Map from '../components/Map/Map';
import Head from 'next/head';
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

export default function Home({ select, selectArray, priority, setPriority, assignedColors, setAssignedColors, legend, setLegend, toggle, secondToggle, setSecondToggle, percentage, setPercentage, setSelectArray, rerender, setRerender }:Props) {
  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map
      select={select}
      selectArray={selectArray}
      priority={priority}
      setPriority={setPriority}
      assignedColors={assignedColors}
      setAssignedColors={setAssignedColors}
      legend={legend}
      setLegend={setLegend}
      toggle={toggle}
      secondToggle={secondToggle}
      setSecondToggle={setSecondToggle}
      percentage={percentage}
      setPercentage={setPercentage}
      setSelectArray={setSelectArray}
      rerender={rerender}
      setRerender={setRerender}
    />
    </>
  )
}
