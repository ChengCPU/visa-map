import { Button } from "@mui/material"
import Passport from "./Passport"

const SelectorPassport = ({ setSelect, select, image, name }) => {

  return (
    <Button onClick={() => {
        setSelect({ ...select, passport: name });
    }}>
        <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport