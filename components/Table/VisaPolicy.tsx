import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
interface Props {
  assignedColors:object[];
  selectArray:null | string[];
  verticalColumn:number;
  horizontalColumn:number;
}
const colors:string[] = ['abkhaziaColor','afghanistanColor','albaniaColor','algeriaColor','americanSamoaColor','andorraColor','angolaColor','anguillaColor','antiguaAndBarbudaColor','argentinaColor','armeniaColor','arubaColor','australiaColor','austriaColor','azerbaijanColor','bahamasColor','bahrainColor','bangladeshColor','barbadosColor','belarusColor','belgiumColor','belizeColor','beninColor','bermudaColor','bhutanColor','boliviaColor','bonaireColor','bosniaAndHerzegovinaColor','botswanaColor','bouvetIslandColor','brazilColor','britishIndianOceanTerritory','britishVirginIslandsColor','bruneiColor','bulgariaColor','burkinaFasoColor','burundiColor','cambodiaColor','cameroonColor','canadaColor','capeVerdeColor','caymanIslandsColor','centralAfricanRepublicColor','chadColor','chileColor','chinaColor','colombiaColor','comorosColor','cookIslandsColor','costaRicaColor','croatiaColor','cubaColor','curacaoColor','cyprusColor','czechRepublicColor','democraticRepublicOfTheCongoColor','denmarkColor','djiboutiColor','dominicaColor','dominicanRepublicColor','eastTimorColor','ecuadorColor','egyptColor','elSalvadorColor','equatorialGuineaColor','eritreaColor','estoniaColor','eswatiniColor','ethiopiaColor','falklandIslandsColor','faroeIslandsColor','fijiColor','finlandColor','franceColor','frenchGuianaColor','frenchPolynesiaColor','gabonColor','gambiaColor','georgiaColor','germanyColor','ghanaColor','gibraltarColor','greeceColor','greenlandColor','grenadaColor','guadeloupeColor','guamColor','guatemalaColor','guernseyColor','guineaColor','guineaBissauColor','guyanaColor','haitiColor','heardIslandAndMcDonaldIslandsColor','hondurasColor','hongKongColor','hungaryColor','icelandColor','indiaColor','indonesiaColor','iranColor','iraqColor','irelandColor','isleOfManColor','israelColor','italyColor','ivoryCoastColor','jamaicaColor','janMayenColor','japanColor','jerseyColor','jordanColor','kazakhstanColor','kenyaColor','kiribatiColor','kosovoColor','kuwaitColor','kyrgyzstanColor','laosColor','latviaColor','lebanonColor','lesothoColor','liberiaColor','libyaColor','liechtensteinColor','lithuaniaColor','luxembourgColor','macaoColor','madagascarColor','malawiColor','malaysiaColor','maldivesColor','maliColor','maltaColor','marshallIslandsColor','martiniqueColor','mauritaniaColor','mauritiusColor','mayotteColor','mexicoColor','micronesiaColor','moldovaColor','monacoColor','mongoliaColor','montenegroColor','montserratColor','moroccoColor','mozambiqueColor','myanmarColor','namibiaColor','nauruColor','nepalColor','netherlandsColor','newCaledoniaColor','newZealandColor','nicaraguaColor','nigerColor','nigeriaColor','niueColor','norfolkIslandColor','northernCyprusColor','northernMarianaIslandsColor','northKoreaColor','northMacedoniaColor','norwayColor','omanColor','pakistanColor','palauColor','palestineColor','panamaColor','papuaNewGuineaColor','paraguayColor','peruColor','philippinesColor','pitcairnIslandsColor','polandColor','portugalColor','qatarColor','republicOfTheCongoColor','reunionColor','romaniaColor','russiaColor','rwandaColor','sabaColor','saintBarthelemyColor','saintHelenaColor','saintKittsAndNevisColor','saintLuciaColor','saintMartinColor','saintPierreAndMiquelonColor','saintVincentAndTheGrenadinesColor','samoaColor','sanMarinoColor','saoTomeAndPrincipeColor','saudiArabiaColor','senegalColor','serbiaColor','seychellesColor','sierraLeoneColor','singaporeColor','sintEustatiusColor','sintMaartenColor','slovakiaColor','sloveniaColor','solomonIslandsColor','somaliaColor','somalilandColor','southAfricaColor','southGeorgiaAndTheSouthSandwichIslandsColor','southKoreaColor','southOssetiaColor','southSudanColor','spainColor','sriLankaColor','sudanColor','surinameColor','svalbardColor','swedenColor','switzerlandColor','syriaColor','taiwanColor','tajikistanColor','tanzaniaColor','thailandColor','togoColor','tokelauColor','tongaColor','transnistriaColor','trinidadAndTobagoColor','tunisiaColor','turkeyColor','turkmenistanColor','turksAndCaicosColor','tuvaluColor','ugandaColor','ukraineColor','unitedArabEmiratesColor','unitedKingdomColor','unitedStatesColor','unitedStatesVirginIslandsColor','uruguayColor','uzbekistanColor','vanuatuColor','vaticanCityColor','venezuelaColor','vietnamColor','wallisAndFutunaColor','westernSaharaColor','yemenColor','zambiaColor','zimbabweColor']
const namesEN = ['Home country', 'Permit required', 'OECS freedom of movement', 'MERCSOUR freedom of movement', 'EU freedom of movement', 'GCC freedom of movement', 'Freedom of movement', 'Visa-free', 'Visa on arrival/E-visa', 'Visa on arrival', 'E-visa', 'Special permit/Police check', 'Simplified visa', 'Confirmation required', 'Visa required']
const namesES = ['País de origen', 'Permiso requerido', 'OECS libertad de movimiento', 'MERCSOUR libertad de movimiento', 'EU libertad de movimiento', 'GCC libertad de movimiento', 'Libertad de movimiento', 'Visado libre', 'Visado a llegada/Visado electronico', 'Visado a llegada', 'Visado electronico', 'Permiso especial/Verificación de antecedentes', 'Visado simplificado', 'Confirmación requerida', 'Visado requerido']
const namesPT = ['País natal', 'Permissão necessária', 'OECS liberdade de movimento', 'MERCSOUR liberdade de movimento', 'EU liberdade de movimento', 'GCC liberdade de movimento', ' Liberdade de movimento', 'Sem visto', 'Visto na chegada/Visto eletrônico', 'Visto na chegada', 'Visto eletrônico', 'Permissão especial/Verificação de antecedentes', 'Visto simplificado', 'Necessária confirmação', 'Visto necessário']
const namesFR = ['Pays natal', 'Permis requis', 'OECS liberté de mouvement', 'MERCSOUR liberté de mouvement', 'EU liberté de mouvement', 'GCC liberté de mouvement', 'Liberté de mouvement', 'Sans visa', 'Visa à l\'arrivée/Visa électronique', 'Visa à l\'arrivée', 'Visa électronique', 'Permis spécial/Vérification des antécédents', 'Visa simplifié', 'Confirmation requise', 'Visa requis']

const VisaPolicy:React.FC<Props> = ({ assignedColors, selectArray, verticalColumn, horizontalColumn }) => {

  const { language } = useContext(LanguageContext)

  const languageCaculation = (num:number) => {
    switch(language){
      case '🇬🇧EN': return namesEN[num]
      case '🇪🇸ES': return namesES[num]
      case '🇵🇹PT': return namesPT[num]
      case '🇫🇷FR': return namesFR[num]
    }
  }

  const colorCalculation = () => {
    switch(assignedColors[horizontalColumn]?.[colors[verticalColumn]]) {
      case 0: return 'rgb(255,20,147)';
      case 1: return 'rgb(255,0,0)';
      case 2: return 'rgb(255,145,0)';
      case 3: return 'rgb(0,135,93)';
      case 4: return 'rgb(0,51,153)';
      case 5: return 'rgb(153,123,61)';
      case 6: return 'rgb(255,179,191)';
      case 7: return 'rgb(50,205,50)';
      case 8: return 'rgb(161,224,123)';
      case 9: return 'rgb(255,255,92)';
      case 10: return 'rgb(135,206,250)';
      case 11: return 'rgb(118,65,171)';
      case 12: return 'rgb(200,200,200)';
      case 13: return 'rgb(0,0,0)';
      case 14: return 'rgb(149,150,150)';
      default: return '#333333';
    }
  }

  const visaPolicyCalculation = (main:number) => {
    switch(assignedColors[horizontalColumn]?.[colors[verticalColumn]]) {
      case 0: return languageCaculation(0);
      case 1: return languageCaculation(1);
      case 2: return languageCaculation(2);
      case 3: return languageCaculation(3);
      case 4: return languageCaculation(4);
      case 5: return languageCaculation(5);
      case 6: return languageCaculation(6);
      case 7: return languageCaculation(7);
      case 8: return languageCaculation(8);
      case 9: return languageCaculation(9);
      case 10: return languageCaculation(10);
      case 11: return languageCaculation(11);
      case 12: return languageCaculation(12);
      case 13: return languageCaculation(13);
      case 14: return languageCaculation(14);
      default: return null;
    }
  }

  return (
    <td className={'text'}><style jsx>{`
      .text {
        padding: 10px;
        color: ${(assignedColors[horizontalColumn]?.[colors[verticalColumn]] == 13) ? '#FFFFFF' : '#222222'};
        border: 1px solid #222222;
        background-color: ${(selectArray[horizontalColumn] != null) ? colorCalculation() : '#333333'};
      }
    `}</style>
    {(selectArray[horizontalColumn] != null) ? visaPolicyCalculation(verticalColumn) : null}
    </td>
  )
}

export default VisaPolicy