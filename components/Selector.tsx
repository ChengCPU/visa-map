//component imports
import SelectorButtonContainer from './Selector/SelectorButtonContainer'
import SelectorPassportContainer from './Selector/SelectorPassportContainer'

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
}
const Selector:React.FC<Props> = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, selectArray, setSelectArray, toggle, setToggle, setPriority, setAssignedColors }) => {
  return (
    <>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <SelectorPassportContainer setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} />
    </Drawer>
      <SelectorButtonContainer setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} setSelectArray={setSelectArray} setPriority={setPriority} setAssignedColors={setAssignedColors}/>
    </>
  )
}

export default Selector