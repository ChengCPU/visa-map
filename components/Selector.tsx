//component imports
import SelectorButtonContainer from './Selector/SelectorButtonContainer';
import SelectorPassportContainer from './Selector/SelectorPassportContainer';
type LegendType = {HC: boolean, FoM: boolean, OECSFoM: boolean, MFoM: boolean, EUFoM: boolean, GCCFoM: boolean, VF: boolean, VoAEV: boolean, VoA: boolean, EV: boolean, SP: boolean, CR: boolean}
interface Props {
  Drawer: any;
  openDrawer: boolean;
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  selectArray:null | string[];
  setSelectArray: Function;
  toggle: boolean;
  setToggle: Function;
  setPriority: Function;
  setAssignedColors: Function;
  legend: LegendType;
  setLegend: Function;
}

const Selector:React.FC<Props> = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, selectArray, setSelectArray, toggle, setToggle, setPriority, setAssignedColors, legend, setLegend }) => {
  return (
    <>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <SelectorPassportContainer
        setOpenDrawer={setOpenDrawer}
        select={select}
        setSelect={setSelect}
        toggle={toggle}
        setToggle={setToggle} />
    </Drawer>
      <SelectorButtonContainer
        setOpenDrawer={setOpenDrawer}
        select={select}
        setSelect={setSelect}
        selectArray={selectArray}
        setSelectArray={setSelectArray}
        setPriority={setPriority}
        setAssignedColors={setAssignedColors}
        legend={legend}
        setLegend={setLegend}
      />
    </>
  )
}

export default Selector