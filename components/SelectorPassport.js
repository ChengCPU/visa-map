import { useEffect } from "react";
import { Button } from "@mui/material"
import Passport from "./Passport"

import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';

const SelectorPassport = ({ setSelect, setSelectArray, selectArray, select, image, name }) => {
  
  return (
    <Button onClick={() => {
        setSelect({ ...select, passport: name });
    }}>
        <Passport image={image}/>
    </Button>
  )
}

export default SelectorPassport