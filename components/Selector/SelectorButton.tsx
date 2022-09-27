import { Button } from "@mui/material"
import SelectorSVG from '../SelectorSVG';
import Passport from '../Passport';
import afghanistanPassport from '/public/afghanistan.jpg';
import albaniaPassport from '/public/albania.jpg'
import algeriaPassport from '/public/algeria.jpg';
import andorraPassport from '/public/andorra.jpg'
import angolaPassport from '/public/angola.jpg';
import anguillaPassport from '/public/anguilla.jpg'

const SelectorButton = ({ selectArray, setOpenDrawer, setSelect, num, select }) => {

    const i = () => {
        switch(selectArray[num]) {
            case "afghanistan": return afghanistanPassport
                break;
            case "albania": return albaniaPassport
                break;
            case "algeria": return algeriaPassport
                break;
            case "andorra": return andorraPassport
                break;
            case "angola": return angolaPassport
                break;
            case "anguilla": return anguillaPassport
                break;
        }
    }
    
  return (
    <Button onClick={() => {
        setOpenDrawer(true);
        setSelect({ selection: num, passport: select.passport });
    }}>
    {(selectArray[num] == null) ? <SelectorSVG /> : <Passport image={i()}/>}
    </Button>
  )
}

export default SelectorButton