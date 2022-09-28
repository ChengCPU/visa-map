import { Button } from "@mui/material"
import Passport from "../Passport"

const SelectorPassport = ({ setOpenDrawer, toggle, setToggle, select, setSelect, image, name }) => {

  return (
    <Button onClick={() => {
      setSelect({ selection: select.selection, passport: name });
      setToggle(!toggle)
      setOpenDrawer(false)
    }}>
        <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport