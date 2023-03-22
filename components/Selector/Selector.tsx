import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  setDiff:Function;
  percentage:number;
  setPercentage:Function;
}

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000000;
  }
`

const Selector:React.FC<Props> = ({ openDrawer, setOpenDrawer, select, setSelect, toggle, setToggle, selectArray, setSelectArray, setPriority, setAssignedColors, setLegend, setDiff, percentage, setPercentage }) => {
  return (
    <>
    <CustomizedDrawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <SelectorPassportContainer
        setOpenDrawer={setOpenDrawer}
        select={select}
        setSelect={setSelect}
        toggle={toggle}
        setToggle={setToggle} />
    </CustomizedDrawer>
      <SelectorButtonContainer
        setOpenDrawer={setOpenDrawer}
        select={select}
        setSelect={setSelect}
        selectArray={selectArray}
        setSelectArray={setSelectArray}
        setPriority={setPriority}
        setAssignedColors={setAssignedColors}
        setLegend={setLegend}
        setDiff={setDiff}
        percentage={percentage}
        setPercentage={setPercentage} />
    </>
  )
}

export default Selector