//component imports
import SelectorButtonContainer from './SelectorButtonContainer';
import SelectorPassportContainer from './SelectorPassportContainer';
interface Props {
  Drawer:any;
  openDrawer:boolean;
  setOpenDrawer:Function;
  select:{
    selection:number;
    passport:null | string;
  };
  setSelect:Function;
  toggle:boolean;
  setToggle:Function;
  selectArray:null | string[];
  setSelectArray:Function;
  setPriority:Function;
  setAssignedColors:Function;
  setLegend:Function;
  percentage:any;
  setPercentage:Function;
}

const Selector:React.FC<Props> = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, toggle, setToggle, selectArray, setSelectArray, setPriority, setAssignedColors, setLegend, percentage, setPercentage }) => {
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
        setLegend={setLegend}
        percentage={percentage}
        setPercentage={setPercentage} />
    </>
  )
}

export default Selector