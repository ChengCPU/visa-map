import { Button } from "@mui/material"
import SelectorSVG from '../SelectorSVG';
import Passport from './Passport';
import abkhazia from '/public/passports/abkhazia.png';
import afghanistan from '/public/passports/afghanistan.png';
import albania from '/public/passports/albania.png'
import algeria from '/public/passports/algeria.png';
import andorra from '/public/passports/andorra.png'
import angola from '/public/passports/angola.png';
import anguilla from '/public/passports/anguilla.png';
import antiguaAndBarbuda from '/public/passports/antiguaAndBarbuda.png';
import argentina from '/public/passports/argentina.png';
import armenia from '/public/passports/armenia.png';
import australia from '/public/passports/australia.png';
import austria from '/public/passports/austria.png';
import azerbaijan from '/public/passports/azerbaijan.png';
import bahamas from '/public/passports/bahamas.png';
import bahrain from '/public/passports/bahrain.png';
import bangladesh from '/public/passports/bangladesh.png';
import barbados from '/public/passports/barbados.png';
import belarus from '/public/passports/belarus.png';
import belgium from '/public/passports/belgium.png';
import belize from '/public/passports/belize.png';
import benin from '/public/passports/benin.png';
import bhutan from '/public/passports/bhutan.png';
import bolivia from '/public/passports/bolivia.png';
import bosniaAndHerzegovina from '/public/passports/bosniaAndHerzegovina.png';
import botswana from '/public/passports/botswana.png';
import brazil from '/public/passports/brazil.png';
import brunei from '/public/passports/brunei.png';
import bulgaria from '/public/passports/bulgaria.png';
import burkinaFaso from '/public/passports/burkinaFaso.png';
import burundi from '/public/passports/burundi.png';
import cambodia from '/public/passports/cambodia.png';
import cameroon from '/public/passports/cameroon.png';
import canada from '/public/passports/canada.png';
import capeVerde from '/public/passports/capeVerde.png';
import centralAfricanRepublic from '/public/passports/centralAfricanRepublic.png';
import chad from '/public/passports/chad.png';
import chile from '/public/passports/chile.png';
import china from '/public/passports/china.png';
import colombia from '/public/passports/colombia.png';
import comoros from '/public/passports/comoros.png';
import costaRica from '/public/passports/costaRica.png';
import croatia from '/public/passports/croatia.png';
import cuba from '/public/passports/cuba.png';
import cyprus from '/public/passports/cyprus.png';
import czechRepublic from '/public/passports/czechRepublic.png';
import democraticRepublicOfTheCongo from '/public/passports/democraticRepublicOfTheCongo.png';
import denmark from '/public/passports/denmark.png';
import djibouti from '/public/passports/djibouti.png';
import dominica from '/public/passports/dominica.png';
import dominicanRepublic from '/public/passports/dominicanRepublic.png';
import ecuador from '/public/passports/ecuador.png';
import egypt from '/public/passports/egypt.png';
import elSalvador from '/public/passports/elSalvador.png';
import equatorialGuinea from '/public/passports/equatorialGuinea.png';
import eritrea from '/public/passports/eritrea.png';
import estonia from '/public/passports/estonia.png';
import eswatini from '/public/passports/eswatini.png';
import ethiopia from '/public/passports/ethiopia.png';
import fiji from '/public/passports/fiji.png';
import finland from '/public/passports/finland.png';
import france from '/public/passports/france.png';
import gabon from '/public/passports/gabon.png';
import gambia from '/public/passports/gambia.png';
import georgia from '/public/passports/georgia.png';
import germany from '/public/passports/germany.png';
import ghana from '/public/passports/ghana.png';
import greece from '/public/passports/greece.png';
import grenada from '/public/passports/grenada.png';
import guatemala from '/public/passports/guatemala.png';
import guinea from '/public/passports/guinea.png';
import guineaBissau from '/public/passports/guineaBissau.png';
import guyana from '/public/passports/guyana.png';
import haiti from '/public/passports/haiti.png';
import honduras from '/public/passports/honduras.png';
import hongKong from '/public/passports/hongKong.png';
import hungary from '/public/passports/hungary.png';
import ivoryCoast from '/public/passports/ivoryCoast.png';
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
            case "cambodia": return cambodia
            case "cameroon": return cameroon
            case "canada": return canada
            case "capeVerde": return capeVerde
            case "centralAfricanRepublic": return centralAfricanRepublic
            case "chad": return chad
            case "chile": return chile
            case "china": return china
            case "colombia": return colombia
            case "comoros": return comoros
            case "costaRica": return costaRica
            case "croatia": return croatia
            case "cuba": return cuba
            case "cyprus": return cyprus
            case "czechRepublic": return czechRepublic
            case "democraticRepublicOfTheCongo": return democraticRepublicOfTheCongo
            case "denmark": return denmark
            case "djibouti": return djibouti
            case "dominica": return dominica
            case "dominicanRepublic": return dominicanRepublic
            case "ecuador": return ecuador
            case "egypt": return egypt
            case "elSalvador": return elSalvador
            case "equatorialGuinea": return equatorialGuinea
            case "eritrea": return eritrea
            case "estonia": return estonia
            case "eswatini": return eswatini
            case "ethiopia": return ethiopia
            case "fiji": return fiji
            case "finland": return finland
            case "france": return france
            case "gabon": return gabon
            case "gambia": return gambia
            case "georgia": return georgia
            case "germany": return germany
            case "ghana": return ghana
            case "greece": return greece
            case "grenada": return grenada
            case "guatemala": return guatemala
            case "guinea": return guinea
            case "guineaBissau": return guineaBissau
            case "guyana": return guyana
            case "haiti": return haiti
            case "honduras": return honduras
            case "hongKong": return hongKong
            case "hungary": return hungary
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