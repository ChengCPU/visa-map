import { MutableRefObject } from 'react'
import { Button } from '@mui/material'
import Passport from "./Passport"
interface Props {
  setOpenDrawer:Function;
  selectRef:MutableRefObject<{selection:number;passport:null|string}>;
  toggle:boolean;
  setToggle:Function;
  image:object;
  name:string;
  passportName:string;
}

const SelectorPassport:React.FC<Props> = ({ setOpenDrawer, selectRef, toggle, setToggle, image, name, passportName }) => {
  return (
    <Button title={name.charAt(0).toUpperCase() + name.slice(1)} onClick={() => {
      selectRef.current = { selection: selectRef.current.selection, passport: passportName }
      setToggle(!toggle)
      setOpenDrawer(false)
    }}>
      <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport