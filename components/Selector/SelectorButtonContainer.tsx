import styles from '../../styles/SelectorButtonContainer.module.css';
import ProgressBar from '../ProgressBar';
import SelectorButton from './SelectorButton';
interface Props {
  setOpenDrawer:Function;
  select:{
    selection: number;
    passport: null | string;
  };
  setSelect:Function;
  selectArray:null | string[];
  setSelectArray:Function;
  setPriority:Function;
  setAssignedColors:Function;
  setLegend:Function;
  percentage:any;
  setPercentage:Function;
}
const selectorButtonArray = [0,1,2,3,4,5,6,7,8,9]

const SelectorButtonContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, selectArray, setSelectArray, setPriority, setAssignedColors, setLegend, percentage, setPercentage }) => {
  const color:object = {
    abkhaziaColor: "rgb(149,150,150)",
    afghanistanColor: "rgb(149,150,150)",
    albaniaColor: "rgb(149,150,150)",
    algeriaColor: "rgb(149,150,150)",
    americanSamoaColor: "rgb(149,150,150)",
    andorraColor: "rgb(149,150,150)",
    angolaColor: "rgb(149,150,150)",
    anguillaColor: "rgb(149,150,150)",
    antiguaAndBarbudaColor: "rgb(149,150,150)",
    argentinaColor: "rgb(149,150,150)",
    armeniaColor: "rgb(149,150,150)",
    arubaColor: "rgb(149,150,150)",
    australiaColor: "rgb(149,150,150)",
    austriaColor: "rgb(149,150,150)",
    azerbaijanColor: "rgb(149,150,150)",
    bahamasColor: "rgb(149,150,150)",
    bahrainColor: "rgb(149,150,150)",
    bangladeshColor: "rgb(149,150,150)",
    barbadosColor: "rgb(149,150,150)",
    belarusColor: "rgb(149,150,150)",
    belgiumColor: "rgb(149,150,150)",
    belizeColor: "rgb(149,150,150)",
    beninColor: "rgb(149,150,150)",
    bermudaColor: "rgb(149,150,150)",
    bhutanColor: "rgb(149,150,150)",
    boliviaColor: "rgb(149,150,150)",
    bonaireColor: "rgb(149,150,150)",
    bosniaAndHerzegovinaColor: "rgb(149,150,150)",
    botswanaColor: "rgb(149,150,150)",
    bouvetIslandColor: "rgb(149,150,150)",
    brazilColor: "rgb(149,150,150)",
    britishIndianOceanTerritory: "rgb(149,150,150)",
    britishVirginIslandsColor: "rgb(149,150,150)",
    bruneiColor: "rgb(149,150,150)",
    bulgariaColor: "rgb(149,150,150)",
    burkinaFasoColor: "rgb(149,150,150)",
    burundiColor: "rgb(149,150,150)",
    cambodiaColor: "rgb(149,150,150)",
    cameroonColor: "rgb(149,150,150)",
    canadaColor: "rgb(149,150,150)",
    capeVerdeColor: "rgb(149,150,150)",
    caymanIslandsColor: "rgb(149,150,150)",
    centralAfricanRepublicColor: "rgb(149,150,150)",
    chadColor: "rgb(149,150,150)",
    chileColor: "rgb(149,150,150)",
    chinaColor: "rgb(149,150,150)",
    colombiaColor: "rgb(149,150,150)",
    comorosColor: "rgb(149,150,150)",
    cookIslandsColor: "rgb(149,150,150)",
    costaRicaColor: "rgb(149,150,150)",
    croatiaColor: "rgb(149,150,150)",
    cubaColor: "rgb(149,150,150)",
    curacaoColor: "rgb(149,150,150)",
    cyprusColor: "rgb(149,150,150)",
    czechRepublicColor: "rgb(149,150,150)",
    democraticRepublicOfTheCongoColor: "rgb(149,150,150)",
    denmarkColor: "rgb(149,150,150)",
    djiboutiColor: "rgb(149,150,150)",
    dominicaColor: "rgb(149,150,150)",
    dominicanRepublicColor: "rgb(149,150,150)",
    eastTimorColor: "rgb(149,150,150)",
    ecuadorColor: "rgb(149,150,150)",
    egyptColor: "rgb(149,150,150)",
    elSalvadorColor: "rgb(149,150,150)",
    equatorialGuineaColor: "rgb(149,150,150)",
    eritreaColor: "rgb(149,150,150)",
    estoniaColor: "rgb(149,150,150)",
    eswatiniColor: "rgb(149,150,150)",
    ethiopiaColor: "rgb(149,150,150)",
    falklandIslandsColor: "rgb(149,150,150)",
    faroeIslandsColor: "rgb(149,150,150)",
    fijiColor: "rgb(149,150,150)",
    finlandColor: "rgb(149,150,150)",
    franceColor: "rgb(149,150,150)",
    frenchGuianaColor: "rgb(149,150,150)",
    frenchPolynesiaColor: "rgb(149,150,150)",
    gabonColor: "rgb(149,150,150)",
    gambiaColor: "rgb(149,150,150)",
    georgiaColor: "rgb(149,150,150)",
    germanyColor: "rgb(149,150,150)",
    ghanaColor: "rgb(149,150,150)",
    gibraltarColor: "rgb(149,150,150)",
    greeceColor: "rgb(149,150,150)",
    greenlandColor: "rgb(149,150,150)",
    grenadaColor: "rgb(149,150,150)",
    guadeloupeColor: "rgb(149,150,150)",
    guamColor: "rgb(149,150,150)",
    guatemalaColor: "rgb(149,150,150)",
    guernseyColor: "rgb(149,150,150)",
    guineaColor: "rgb(149,150,150)",
    guineaBissauColor: "rgb(149,150,150)",
    guyanaColor: "rgb(149,150,150)",
    haitiColor: "rgb(149,150,150)",
    heardIslandAndMcDonaldIslandsColor: "rgb(149,150,150)",
    hondurasColor: "rgb(149,150,150)",
    hongKongColor: "rgb(149,150,150)",
    hungaryColor: "rgb(149,150,150)",
    icelandColor: "rgb(149,150,150)",
    indiaColor: "rgb(149,150,150)",
    indonesiaColor: "rgb(149,150,150)",
    iranColor: "rgb(149,150,150)",
    iraqColor: "rgb(149,150,150)",
    irelandColor: "rgb(149,150,150)",
    isleOfManColor: "rgb(149,150,150)",
    israelColor: "rgb(149,150,150)",
    italyColor: "rgb(149,150,150)",
    ivoryCoastColor: "rgb(149,150,150)",
    jamaicaColor: "rgb(149,150,150)",
    janMayenColor: "rgb(149,150,150)",
    japanColor: "rgb(149,150,150)",
    jerseyColor: "rgb(149,150,150)",
    jordanColor: "rgb(149,150,150)",
    kazakhstanColor: "rgb(149,150,150)",
    kenyaColor: "rgb(149,150,150)",
    kiribatiColor: "rgb(149,150,150)",
    kosovoColor: "rgb(149,150,150)",
    kuwaitColor: "rgb(149,150,150)",
    kyrgyzstanColor: "rgb(149,150,150)",
    laosColor: "rgb(149,150,150)",
    latviaColor: "rgb(149,150,150)",
    lebanonColor: "rgb(149,150,150)",
    lesothoColor: "rgb(149,150,150)",
    liberiaColor: "rgb(149,150,150)",
    libyaColor: "rgb(149,150,150)",
    liechtensteinColor: "rgb(149,150,150)",
    lithuaniaColor: "rgb(149,150,150)",
    luxembourgColor: "rgb(149,150,150)",
    macaoColor: "rgb(149,150,150)",
    madagascarColor: "rgb(149,150,150)",
    malawiColor: "rgb(149,150,150)",
    malaysiaColor: "rgb(149,150,150)",
    maldivesColor: "rgb(149,150,150)",
    maliColor: "rgb(149,150,150)",
    maltaColor: "rgb(149,150,150)",
    marshallIslandsColor: "rgb(149,150,150)",
    martiniqueColor: "rgb(149,150,150)",
    mauritaniaColor: "rgb(149,150,150)",
    mauritiusColor: "rgb(149,150,150)",
    mayotteColor: "rgb(149,150,150)",
    mexicoColor: "rgb(149,150,150)",
    micronesiaColor: "rgb(149,150,150)",
    moldovaColor: "rgb(149,150,150)",
    monacoColor: "rgb(149,150,150)",
    mongoliaColor: "rgb(149,150,150)",
    montenegroColor: "rgb(149,150,150)",
    montserratColor: "rgb(149,150,150)",
    moroccoColor: "rgb(149,150,150)",
    mozambiqueColor: "rgb(149,150,150)",
    myanmarColor: "rgb(149,150,150)",
    namibiaColor: "rgb(149,150,150)",
    nauruColor: "rgb(149,150,150)",
    nepalColor: "rgb(149,150,150)",
    netherlandsColor: "rgb(149,150,150)",
    newCaledoniaColor: "rgb(149,150,150)",
    newZealandColor: "rgb(149,150,150)",
    nicaraguaColor: "rgb(149,150,150)",
    nigerColor: "rgb(149,150,150)",
    nigeriaColor: "rgb(149,150,150)",
    niueColor: "rgb(149,150,150)",
    norfolkIslandColor: "rgb(149,150,150)",
    northernCyprusColor: "rgb(149,150,150)",
    northernMarianaIslandsColor: "rgb(149,150,150)",
    northKoreaColor: "rgb(149,150,150)",
    northMacedoniaColor: "rgb(149,150,150)",
    norwayColor: "rgb(149,150,150)",
    omanColor: "rgb(149,150,150)",
    pakistanColor: "rgb(149,150,150)",
    palauColor: "rgb(149,150,150)",
    palestineColor: "rgb(149,150,150)",
    panamaColor: "rgb(149,150,150)",
    papuaNewGuineaColor: "rgb(149,150,150)",
    paraguayColor: "rgb(149,150,150)",
    peruColor: "rgb(149,150,150)",
    philippinesColor: "rgb(149,150,150)",
    pitcairnIslandsColor: "rgb(149,150,150)",
    polandColor: "rgb(149,150,150)",
    portugalColor: "rgb(149,150,150)",
    qatarColor: "rgb(149,150,150)",
    republicOfTheCongoColor: "rgb(149,150,150)",
    reunionColor: "rgb(149,150,150)",
    romaniaColor: "rgb(149,150,150)",
    russiaColor: "rgb(149,150,150)",
    rwandaColor: "rgb(149,150,150)",
    sabaColor: "rgb(149,150,150)",
    saintBarthelemyColor: "rgb(149,150,150)",
    saintHelenaColor: "rgb(149,150,150)",
    saintKittsAndNevisColor: "rgb(149,150,150)",
    saintLuciaColor: "rgb(149,150,150)",
    saintMartinColor: "rgb(149,150,150)",
    saintPierreAndMiquelonColor: "rgb(149,150,150)",
    saintVincentAndTheGrenadinesColor: "rgb(149,150,150)",
    samoaColor: "rgb(149,150,150)",
    sanMarinoColor: "rgb(149,150,150)",
    saoTomeAndPrincipeColor: "rgb(149,150,150)",
    saudiArabiaColor: "rgb(149,150,150)",
    senegalColor: "rgb(149,150,150)",
    serbiaColor: "rgb(149,150,150)",
    seychellesColor: "rgb(149,150,150)",
    sierraLeoneColor: "rgb(149,150,150)",
    singaporeColor: "rgb(149,150,150)",
    sintEustatiusColor: "rgb(149,150,150)",
    sintMaartenColor: "rgb(149,150,150)",
    slovakiaColor: "rgb(149,150,150)",
    sloveniaColor: "rgb(149,150,150)",
    solomonIslandsColor: "rgb(149,150,150)",
    somaliaColor: "rgb(149,150,150)",
    southAfricaColor: "rgb(149,150,150)",
    southGeorgiaAndTheSouthSandwichIslandsColor: "rgb(149,150,150)",
    southKoreaColor: "rgb(149,150,150)",
    southOssetiaColor: "rgb(149,150,150)",
    southSudanColor: "rgb(149,150,150)",
    spainColor: "rgb(149,150,150)",
    sriLankaColor: "rgb(149,150,150)",
    sudanColor: "rgb(149,150,150)",
    surinameColor: "rgb(149,150,150)",
    svalbardColor: "rgb(149,150,150)",
    swedenColor: "rgb(149,150,150)",
    switzerlandColor: "rgb(149,150,150)",
    syriaColor: "rgb(149,150,150)",
    taiwanColor: "rgb(149,150,150)",
    tajikistanColor: "rgb(149,150,150)",
    tanzaniaColor: "rgb(149,150,150)",
    thailandColor: "rgb(149,150,150)",
    togoColor: "rgb(149,150,150)",
    tokelauColor: "rgb(149,150,150)",
    tongaColor: "rgb(149,150,150)",
    transnistriaColor: "rgb(149,150,150)",
    trinidadAndTobagoColor: "rgb(149,150,150)",
    tunisiaColor: "rgb(149,150,150)",
    turkeyColor: "rgb(149,150,150)",
    turkmenistanColor: "rgb(149,150,150)",
    turksAndCaicosColor: "rgb(149,150,150)",
    tuvaluColor: "rgb(149,150,150)",
    ugandaColor: "rgb(149,150,150)",
    ukraineColor: "rgb(149,150,150)",
    unitedArabEmiratesColor: "rgb(149,150,150)",
    unitedKingdomColor: "rgb(149,150,150)",
    unitedStatesColor: "rgb(149,150,150)",
    unitedStatesVirginIslandsColor: "rgb(149,150,150)",
    uruguayColor: "rgb(149,150,150)",
    uzbekistanColor: "rgb(149,150,150)",
    vanuatuColor: "rgb(149,150,150)",
    vaticanCityColor: "rgb(149,150,150)",
    venezuelaColor: "rgb(149,150,150)",
    vietnamColor: "rgb(149,150,150)",
    wallisAndFutunaColor: "rgb(149,150,150)",
    westernSaharaColor: "rgb(149,150,150)",
    yemenColor: "rgb(149,150,150)",
    zambiaColor: "rgb(149,150,150)",
    zimbabweColor: "rgb(149,150,150)"
  }
  const renderSelectorButtons = (selectorButtonArray:number[]) => {
    return selectorButtonArray.map(selectorButtonArray =>
      (selectorButtonArray == 0 || selectArray[selectorButtonArray - 1] != null) ?
      <SelectorButton key={selectorButtonArray} setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray} num={selectorButtonArray} />
      : null
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <ProgressBar percentage={percentage} verticalColumn={null} width={'100px'} height={'100px'} color={'rgb(255,255,255)'} />
      </div>
      {renderSelectorButtons(selectorButtonArray)}
    <button className={styles.button} onClick={() => {
      setSelectArray([null,null,null,null,null,null,null,null,null,null,null])
      setPriority(color)
      setAssignedColors([color,color,color,color,color,color,color,color,color,color,color])
      setLegend({HC: false, FoM: false, OECSFoM: false, MFoM: false, EUFoM: false, GCCFoM: false, VF: false, VoAEV: false, VoA: false, EV: false, SP: false, CR: false})
      setPercentage([{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },{
        total:null,
        visaFree:null,
        visaOnArrivalEVisa:null,
        visaOnArrival:null,
        eVisa:null
      },0])
    }}>X</button>
    </div>
  )
}

export default SelectorButtonContainer