import { Button } from "@mui/material"
import Passport from "./Passport"

const SelectorPassport = ({ setSelect, select, image, name, toggle, setToggle }) => {

  return (
    <Button onClick={() => {
        setSelect({ selection: select.selection, passport: name });
        setToggle(!toggle)
    }}>
        <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport