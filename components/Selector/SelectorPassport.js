import { Button } from "@mui/material"
import Passport from "../Passport"

const SelectorPassport = ({ toggle, setToggle, select, setSelect, image, name }) => {

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