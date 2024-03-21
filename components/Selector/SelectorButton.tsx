import { useContext, MutableRefObject } from 'react'
import { PassportContext } from '../../logic/context/PassportContext'
import { Button } from '@mui/material'
import SelectorSVG from './SelectorSVG'
import Passport from './Passport'
interface Props {
  setOpenDrawer:Function;
  selectRef:MutableRefObject<{selection:number;passport:null|string}>;
  selectArrayRef:MutableRefObject<(null|string)[]>;
  num:number;
}

const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
const countriesWithPassports:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','north Korea','north Macedonia','norway','oman','pakistan','palau','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','yemen','zambia','zimbabwe']

const SelectorButton:React.FC<Props> = ({ setOpenDrawer, selectRef, selectArrayRef, num }) => {

  const passports = useContext(PassportContext) //useContext makes the passport imports available through passports variable

  const passportCalculation = () => {
    switch(selectArrayRef.current[num]) { //the [num] prop is a number ranging from 0-9 that is representative of each 10 selector button components
      case 'abkhazia' : return passports.abkhazia
      case 'afghanistan': return passports.afghanistan
      case 'albania': return passports.albania
      case 'algeria': return passports.algeria
      case 'andorra': return passports.andorra
      case 'angola': return passports.angola
      case 'anguilla': return passports.anguilla
      case 'antiguaAndBarbuda': return passports.antiguaAndBarbuda
      case 'argentina': return passports.argentina
      case 'armenia': return passports.armenia
      case 'australia': return passports.australia
      case 'austria': return passports.austria
      case 'azerbaijan': return passports.azerbaijan
      case 'bahamas': return passports.bahamas
      case 'bahrain': return passports.bahrain
      case 'bangladesh': return passports.bangladesh
      case 'barbados': return passports.barbados
      case 'belarus': return passports.belarus
      case 'belgium': return passports.belgium
      case 'belize': return passports.belize
      case 'benin': return passports.benin
      case 'bermuda': return passports.bermuda
      case 'bhutan': return passports.bhutan
      case 'bolivia': return passports.bolivia
      case 'bosniaAndHerzegovina': return passports.bosniaAndHerzegovina
      case 'botswana': return passports.botswana
      case 'brazil': return passports.brazil
      case 'britishVirginIslands': return passports.britishVirginIslands
      case 'brunei': return passports.brunei
      case 'bulgaria': return passports.bulgaria
      case 'burkinaFaso': return passports.burkinaFaso
      case 'burundi': return passports.burundi
      case 'cambodia': return passports.cambodia
      case 'cameroon': return passports.cameroon
      case 'canada': return passports.canada
      case 'capeVerde': return passports.capeVerde
      case 'caymanIslands': return passports.caymanIslands
      case 'centralAfricanRepublic': return passports.centralAfricanRepublic
      case 'chad': return passports.chad
      case 'chile': return passports.chile
      case 'china': return passports.china
      case 'colombia': return passports.colombia
      case 'comoros': return passports.comoros
      case 'costaRica': return passports.costaRica
      case 'croatia': return passports.croatia
      case 'cuba': return passports.cuba
      case 'cyprus': return passports.cyprus
      case 'czechRepublic': return passports.czechRepublic
      case 'democraticRepublicOfTheCongo': return passports.democraticRepublicOfTheCongo
      case 'denmark': return passports.denmark
      case 'djibouti': return passports.djibouti
      case 'dominica': return passports.dominica
      case 'dominicanRepublic': return passports.dominicanRepublic
      case 'eastTimor': return passports.eastTimor
      case 'ecuador': return passports.ecuador
      case 'egypt': return passports.egypt
      case 'elSalvador': return passports.elSalvador
      case 'equatorialGuinea': return passports.equatorialGuinea
      case 'eritrea': return passports.eritrea
      case 'estonia': return passports.estonia
      case 'eswatini': return passports.eswatini
      case 'ethiopia': return passports.ethiopia
      case 'fiji': return passports.fiji
      case 'finland': return passports.finland
      case 'france': return passports.france
      case 'gabon': return passports.gabon
      case 'gambia': return passports.gambia
      case 'georgia': return passports.georgia
      case 'germany': return passports.germany
      case 'ghana': return passports.ghana
      case 'greece': return passports.greece
      case 'grenada': return passports.grenada
      case 'guatemala': return passports.guatemala
      case 'guinea': return passports.guinea
      case 'guineaBissau': return passports.guineaBissau
      case 'guyana': return passports.guyana
      case 'haiti': return passports.haiti
      case 'honduras': return passports.honduras
      case 'hongKong': return passports.hongKong
      case 'hungary': return passports.hungary
      case 'iceland': return passports.iceland
      case 'india': return passports.india
      case 'indonesia': return passports.indonesia
      case 'iran': return passports.iran
      case 'iraq': return passports.iraq
      case 'ireland': return passports.ireland
      case 'israel': return passports.israel
      case 'italy': return passports.italy
      case 'ivoryCoast': return passports.ivoryCoast
      case 'jamaica': return passports.jamaica
      case 'japan': return passports.japan
      case 'jordan': return passports.jordan
      case 'kazakhstan': return passports.kazakhstan
      case 'kenya': return passports.kenya
      case 'kiribati': return passports.kiribati
      case 'kuwait': return passports.kuwait
      case 'kyrgyzstan': return passports.kyrgyzstan
      case 'laos': return passports.laos
      case 'latvia': return passports.latvia
      case 'lebanon': return passports.lebanon
      case 'lesotho': return passports.lesotho
      case 'liberia': return passports.liberia
      case 'libya': return passports.libya
      case 'liechtenstein': return passports.liechtenstein
      case 'lithuania': return passports.lithuania
      case 'luxembourg': return passports.luxembourg
      case 'macao': return passports.macao
      case 'madagascar': return passports.madagascar
      case 'malawi': return passports.malawi
      case 'malaysia': return passports.malaysia
      case 'maldives': return passports.maldives
      case 'mali': return passports.mali
      case 'malta': return passports.malta
      case 'marshallIslands': return passports.marshallIslands
      case 'mauritania': return passports.mauritania
      case 'mauritius': return passports.mauritius
      case 'mexico': return passports.mexico
      case 'micronesia': return passports.micronesia
      case 'moldova': return passports.moldova
      case 'monaco': return passports.monaco
      case 'mongolia': return passports.mongolia
      case 'montenegro': return passports.montenegro
      case 'montserrat': return passports.montserrat
      case 'morocco': return passports.morocco
      case 'mozambique': return passports.mozambique
      case 'myanmar': return passports.myanmar
      case 'namibia': return passports.namibia
      case 'nauru': return passports.nauru
      case 'nepal': return passports.nepal
      case 'netherlands': return passports.netherlands
      case 'newZealand': return passports.newZealand
      case 'nicaragua': return passports.nicaragua
      case 'niger': return passports.niger
      case 'nigeria': return passports.nigeria
      case 'northKorea': return passports.northKorea
      case 'northMacedonia': return passports.northMacedonia
      case 'norway': return passports.norway
      case 'oman': return passports.oman
      case 'pakistan': return passports.pakistan
      case 'palau': return passports.palau
      case 'panama': return passports.panama
      case 'papuaNewGuinea': return passports.papuaNewGuinea
      case 'paraguay': return passports.paraguay
      case 'peru': return passports.peru
      case 'philippines': return passports.philippines
      case 'poland': return passports.poland
      case 'portugal': return passports.portugal
      case 'qatar': return passports.qatar
      case 'republicOfTheCongo': return passports.republicOfTheCongo
      case 'romania': return passports.romania
      case 'russia': return passports.russia
      case 'rwanda': return passports.rwanda
      case 'saintHelena': return passports.saintHelena
      case 'saintKittsAndNevis': return passports.saintKittsAndNevis
      case 'saintLucia': return passports. saintLucia
      case 'saintVincentAndTheGrenadines': return passports.saintVincentAndTheGrenadines
      case 'samoa': return passports.samoa
      case 'sanMarino': return passports.sanMarino
      case 'saoTomeAndPrincipe': return passports.saoTomeAndPrincipe
      case 'saudiArabia': return passports.saudiArabia
      case 'senegal': return passports.senegal
      case 'serbia': return passports.serbia
      case 'seychelles': return passports.seychelles
      case 'sierraLeone': return passports.sierraLeone
      case 'singapore': return passports.singapore
      case 'slovakia': return passports.slovakia
      case 'slovenia': return passports.slovenia
      case 'solomonIslands': return passports.solomonIslands
      case 'somalia': return passports.somalia
      case 'somaliland': return passports.somaliland
      case 'southAfrica': return passports.southAfrica
      case 'southKorea': return passports.southKorea
      case 'southOssetia': return passports.southOssetia
      case 'southSudan': return passports.southSudan
      case 'spain': return passports.spain
      case 'sriLanka': return passports.sriLanka
      case 'sudan': return passports.sudan
      case 'suriname': return passports.suriname
      case 'sweden': return passports.sweden
      case 'switzerland': return passports.switzerland
      case 'syria': return passports.syria
      case 'taiwan': return passports.taiwan
      case 'tajikistan': return passports.tajikistan
      case 'tanzania': return passports.tanzania
      case 'thailand': return passports.thailand
      case 'togo': return passports.togo
      case 'tonga': return passports.tonga
      case 'trinidadAndTobago': return passports.trinidadAndTobago
      case 'tunisia': return passports.tunisia
      case 'turkey': return passports.turkey
      case 'turkmenistan': return passports.turkmenistan
      case 'turksAndCaicos': return passports.turksAndCaicos
      case 'tuvalu': return passports.tuvalu
      case 'uganda': return passports.uganda
      case 'ukraine': return passports.ukraine
      case 'unitedArabEmirates': return passports.unitedArabEmirates
      case 'unitedKingdom': return passports.unitedKingdom
      case 'unitedStates': return passports.unitedStates
      case 'uruguay': return passports.uruguay
      case 'uzbekistan': return passports.uzbekistan
      case 'vanuatu': return passports.vanuatu
      case 'vaticanCity': return passports.vaticanCity
      case 'venezuela': return passports.venezuela
      case 'vietnam': return passports.vietnam
      case 'yemen': return passports.yemen
      case 'zambia': return passports.zambia
      case 'zimbabwe': return passports.zimbabwe
    }
  }

  const passportTextCalculation = (n:number) => {
    return countriesWithPassports[passportsArray.indexOf(selectArrayRef.current[n])]
  }
  
  return (
    <Button title={selectArrayRef.current[num] == null ? null : passportTextCalculation(num).charAt(0).toUpperCase() + passportTextCalculation(num).slice(1)} onClick={() => {
      setOpenDrawer(true)
      selectRef.current = { selection: num, passport: selectRef.current.passport }
    }}>
    {(selectArrayRef.current[num] == null) ? <SelectorSVG /> : <Passport image={passportCalculation()}/>} 
    {/* If selectArrayRef.current[num] does not equal a string, it will render the selectorSVG.
    If it does equal a string and match a country, it will render the passport component and run the i() function*/}
    </Button>
  )
}

export default SelectorButton