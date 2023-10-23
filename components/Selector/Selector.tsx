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
  selectArrayRef:any;
  priorityRef:any;
  tempPriorityRef:any;
  setAssignedColors:Function;
  diffRef:any;
  percentage:number;
  setPercentage:Function;
  selectorLoad:boolean;
  tempDiffRef:any;
}

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000000;
  }
`

const Selector:React.FC<Props> = ({ openDrawer, setOpenDrawer, select, setSelect, toggle, setToggle, selectArrayRef, priorityRef, tempPriorityRef, setAssignedColors, diffRef, percentage, setPercentage, selectorLoad, tempDiffRef }) => {
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
        selectArrayRef={selectArrayRef}
        priorityRef={priorityRef}
        tempPriorityRef={tempPriorityRef}
        setAssignedColors={setAssignedColors}
        diffRef={diffRef}
        percentage={percentage}
        setPercentage={setPercentage}
        selectorLoad={selectorLoad}
        tempDiffRef={tempDiffRef} />
    </>
  )
}

export default Selector