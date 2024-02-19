import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import SelectorButtonContainer from './SelectorButtonContainer'
import SelectorPassportContainer from './SelectorPassportContainer'
interface Props {
  Drawer:any;
  openDrawer:boolean;
  setOpenDrawer:Function;
  selectRef:any;
  toggle:boolean;
  setToggle:Function;
  selectArrayRef:any;
  priorityRef:any;
  tempPriorityRef:any;
  assignedColorsRef:any;
  diffRef:any;
  percentage:number;
  setPercentage:Function;
  selectorLoad:boolean;
  tempDiffRef:any;
  ESTAbanRef:any;
  proToggle:boolean;
}

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000000;
  }
`

const Selector:React.FC<Props> = ({ openDrawer, setOpenDrawer, selectRef, toggle, setToggle, selectArrayRef, priorityRef, tempPriorityRef, assignedColorsRef, diffRef, percentage, setPercentage, selectorLoad, tempDiffRef, ESTAbanRef, proToggle }) => {
  return (
    <>
    <CustomizedDrawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <SelectorPassportContainer
        setOpenDrawer={setOpenDrawer}
        selectRef={selectRef}
        toggle={toggle}
        setToggle={setToggle}
      />
    </CustomizedDrawer>
      <SelectorButtonContainer
        setOpenDrawer={setOpenDrawer}
        selectRef={selectRef}
        selectArrayRef={selectArrayRef}
        priorityRef={priorityRef}
        tempPriorityRef={tempPriorityRef}
        assignedColorsRef={assignedColorsRef}
        diffRef={diffRef}
        percentage={percentage}
        setPercentage={setPercentage}
        selectorLoad={selectorLoad}
        tempDiffRef={tempDiffRef}
        ESTAbanRef={ESTAbanRef}
        proToggle={proToggle}
      />
    </>
  )
}

export default Selector