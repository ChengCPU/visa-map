import { Button } from "@mui/material"
import Passport from "./Passport"
interface Props {
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  toggle: boolean;
  setToggle: Function;
  image: object;
  name: string;
}

const SelectorPassport:React.FC<Props> = ({ setOpenDrawer, select, setSelect, toggle, setToggle, image, name }) => {
  return (
    <Button title={name.charAt(0).toUpperCase() + name.slice(1)} onClick={() => {
      setSelect({ selection: select.selection, passport: name });
      setToggle(!toggle)
      setOpenDrawer(false)
    }}>
        <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport