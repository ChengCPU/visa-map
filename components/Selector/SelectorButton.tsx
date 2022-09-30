import { Button } from "@mui/material"
import SelectorSVG from '../SelectorSVG';
import Passport from '../Passport';
import abkhazia from '/public/abkhazia.png';
import afghanistan from '/public/afghanistan.png';
import albania from '/public/albania.png'
import algeria from '/public/algeria.png';
import andorra from '/public/andorra.png'
import angola from '/public/angola.png';
import anguilla from '/public/anguilla.png';
import antiguaAndBarbuda from '/public/antiguaAndBarbuda.png';
import argentina from '/public/argentina.png';
import armenia from '/public/armenia.png';
import australia from '/public/australia.png';
import austria from '/public/austria.png';
import azerbaijan from '/public/azerbaijan.png';
import bahamas from '/public/bahamas.png';
import bahrain from '/public/bahrain.png';
import bangladesh from '/public/bangladesh.png';
import barbados from '/public/barbados.png';
import belarus from '/public/belarus.png';
import belgium from '/public/belgium.png';
import belize from '/public/belize.png';
import benin from '/public/benin.png';
import bhutan from '/public/bhutan.png';
import bolivia from '/public/bolivia.png';
import bosniaAndHerzegovina from '/public/bosniaAndHerzegovina.png';
import botswana from '/public/botswana.png';
import brazil from '/public/brazil.png';
import brunei from '/public/brunei.png';
import bulgaria from '/public/bulgaria.png';
import burkinaFaso from '/public/burkinaFaso.png';
import burundi from '/public/burundi.png';
interface Props {
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  selectArray:null | string[];
  num: number;
}
const SelectorButton:React.FC<Props> = ({ setOpenDrawer, select, setSelect, selectArray, num }) => {
    const i = () => {
        switch(selectArray[num]) {
            case "abkhazia" : return abkhazia
            case "afghanistan": return afghanistan
            case "albania": return albania
            case "algeria": return algeria
            case "andorra": return andorra
            case "angola": return angola
            case "anguilla": return anguilla
            case "antiguaAndBarbuda": return antiguaAndBarbuda
            case "argentina": return argentina
            case "armenia": return armenia
            case "australia": return australia
            case "austria": return austria
            case "azerbaijan": return azerbaijan
            case "bahamas": return bahamas
            case "bahrain": return bahrain
            case "bangladesh": return bangladesh
            case "barbados": return barbados
            case "belarus": return belarus
            case "belgium": return belgium
            case "belize": return belize
            case "benin": return benin
            case "bhutan": return bhutan
            case "bolivia": return bolivia
            case "bosniaAndHerzegovina": return bosniaAndHerzegovina
            case "botswana": return botswana
            case "brazil": return brazil
            case "brunei": return brunei
            case "bulgaria": return bulgaria
            case "burkinaFaso": return burkinaFaso
            case "burundi": return burundi
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