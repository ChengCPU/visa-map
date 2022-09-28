import { Button } from "@mui/material"
import SelectorSVG from '../SelectorSVG';
import Passport from '../Passport';
import abkhaziaPassport from '/public/abkhazia.jpg';
import afghanistanPassport from '/public/afghanistan.jpg';
import albaniaPassport from '/public/albania.jpg'
import algeriaPassport from '/public/algeria.jpg';
import andorraPassport from '/public/andorra.jpg'
import angolaPassport from '/public/angola.jpg';
import anguillaPassport from '/public/anguilla.jpg';
import antiguaAndBarbudaPassport from '/public/antiguaAndBarbuda.jpg';

const SelectorButton = ({ selectArray, setOpenDrawer, setSelect, num, select }) => {

    const i = () => {
        switch(selectArray[num]) {
            case "abkhazia" : return abkhaziaPassport
            case "afghanistan": return afghanistanPassport
            case "albania": return albaniaPassport
            case "algeria": return algeriaPassport
            case "andorra": return andorraPassport
            case "angola": return angolaPassport
            case "anguilla": return anguillaPassport
            case "antiguaAndBarbuda": return antiguaAndBarbudaPassport
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