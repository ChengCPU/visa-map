import { MutableRefObject } from 'react'
import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import SelectorButtonContainer from './SelectorButtonContainer'
import SelectorPassportContainer from './SelectorPassportContainer'
interface Props {
  Drawer:Function;
  openDrawer:boolean;
  setOpenDrawer:Function;
  selectRef:MutableRefObject<{selection:number;passport:null|string}>;
  toggle:boolean;
  setToggle:Function;
  selectArrayRef:MutableRefObject<(null|string)[]>;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  tempPriorityRef:MutableRefObject<{[key:string]:string}>;
  assignedColorsRef:MutableRefObject<{[key:string]:string}[]>;
  diffRef:MutableRefObject<{[key:string]:number}>;
  percentage:number;
  setPercentage:Function;
  selectorLoad:boolean;
  tempDiffRef:MutableRefObject<{[key:string]:number}>;
  ESTAbanRef:MutableRefObject<boolean>;
}

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000000;
  }
`

const Selector:React.FC<Props> = ({ openDrawer, setOpenDrawer, selectRef, toggle, setToggle, selectArrayRef, priorityRef, tempPriorityRef, assignedColorsRef, diffRef, percentage, setPercentage, selectorLoad, tempDiffRef, ESTAbanRef }) => {
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
      />
    </>
  )
}

export default Selector