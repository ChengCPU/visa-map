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
  assignedColorsRef:MutableRefObject<{[key:string]:number}[]>;
  diffRef:MutableRefObject<{[key:string]:boolean}>;
  percentage:number;
  setPercentage:Function;
  selectorLoad:boolean;
  ESTAbanRef:MutableRefObject<boolean>;
  visaDurationRef:MutableRefObject<{[key:string]:number}>;
  assignedVisaDurationRef:MutableRefObject<{[key:string]:number}[]>;
  setLegend:Function;
  tableDiffRef:MutableRefObject<boolean[]>;
}

const CustomizedDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #000000;
  }
`

const Selector:React.FC<Props> = ({ openDrawer, setOpenDrawer, selectRef, toggle, setToggle, selectArrayRef, priorityRef, assignedColorsRef, diffRef, percentage, setPercentage, selectorLoad, ESTAbanRef, visaDurationRef, assignedVisaDurationRef, setLegend, tableDiffRef }) => {
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
        assignedColorsRef={assignedColorsRef}
        diffRef={diffRef}
        percentage={percentage}
        setPercentage={setPercentage}
        selectorLoad={selectorLoad}
        ESTAbanRef={ESTAbanRef}
        visaDurationRef={visaDurationRef}
        assignedVisaDurationRef={assignedVisaDurationRef}
        setLegend={setLegend}
        tableDiffRef={tableDiffRef}
      />
    </>
  )
}

export default Selector