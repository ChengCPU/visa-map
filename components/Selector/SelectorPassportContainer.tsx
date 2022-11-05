import { useContext } from 'react';
import { PassportContext } from '../context/PassportContext';
import styles from '../../styles/SelectorPassportContainer.module.css';
import SelectorPassport from './SelectorPassport';
interface Props {
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  toggle: boolean;
  setToggle: Function;
};

const SelectorPassportContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, toggle, setToggle }) => {

  const passports = useContext(PassportContext)

  return (
    <div className={styles.container}>
    <h1 className={styles.text}>A</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.abkhazia} name={"abkhazia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.afghanistan} name={"afghanistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.albania} name={"albania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.algeria} name={"algeria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.andorra} name={"andorra"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.angola} name={"angola"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.anguilla} name={"anguilla"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.antiguaAndBarbuda} name={"antiguaAndBarbuda"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.argentina} name={"argentina"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.armenia} name={"armenia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.australia} name={"australia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.austria} name={"austria"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.azerbaijan} name={"azerbaijan"} />
    <br />
    <h1 className={styles.text}>B</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bahamas} name={"bahamas"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bahrain} name={"bahrain"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bangladesh} name={"bangladesh"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.barbados} name={"barbados"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.belarus} name={"belarus"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.belgium} name={"belgium"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.belize} name={"belize"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.benin} name={"benin"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bermuda} name={"bermuda"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bhutan} name={"bhutan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bolivia} name={"bolivia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bosniaAndHerzegovina} name={"bosniaAndHerzegovina"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.botswana} name={"botswana"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.brazil} name={"brazil"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.britishVirginIslands} name={"britishVirginIslands"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.brunei} name={"brunei"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.bulgaria} name={"bulgaria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.burkinaFaso} name={"burkinaFaso"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.burundi} name={"burundi"} />
    <br />
    <h1 className={styles.text}>C</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.cambodia} name={"cambodia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.cameroon} name={"cameroon"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.canada} name={"canada"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.caymanIslands} name={"caymanIslands"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.capeVerde} name={"capeVerde"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.centralAfricanRepublic} name={"centralAfricanRepublic"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.chad} name={"chad"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.chile} name={"chile"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.china} name={"china"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.colombia} name={"colombia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.comoros} name={"comoros"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.costaRica} name={"costaRica"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.croatia} name={"croatia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.cuba} name={"cuba"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.cyprus} name={"cyprus"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.czechRepublic} name={"czechRepublic"} />
    <br />
    <h1 className={styles.text}>D</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.democraticRepublicOfTheCongo} name={"democraticRepublicOfTheCongo"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.denmark} name={"denmark"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.djibouti} name={"djibouti"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.dominica} name={"dominica"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.dominicanRepublic} name={"dominicanRepublic"} />
    <br />
    <h1 className={styles.text}>E</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.eastTimor} name={"eastTimor"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ecuador} name={"ecuador"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.egypt} name={"egypt"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.elSalvador} name={"elSalvador"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.equatorialGuinea} name={"equatorialGuinea"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.eritrea} name={"eritrea"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.estonia} name={"estonia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.eswatini} name={"eswatini"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ethiopia} name={"ethiopia"} />
    <br />
    <h1 className={styles.text}>F</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.fiji} name={"fiji"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.finland} name={"finland"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.france} name={"france"} />
    <br />
    <h1 className={styles.text}>G</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.gabon} name={"gabon"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.gambia} name={"gambia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.georgia} name={"georgia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.germany} name={"germany"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ghana} name={"ghana"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.greece} name={"greece"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.grenada} name={"grenada"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.guatemala} name={"guatemala"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.guinea} name={"guinea"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.guineaBissau} name={"guineaBissau"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.guyana} name={"guyana"} />
    <br />
    <h1 className={styles.text}>H</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.haiti} name={"haiti"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.honduras} name={"honduras"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.hongKong} name={"hongKong"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.hungary} name={"hungary"} />
    <br />
    <h1 className={styles.text}>I</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.iceland} name={"iceland"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.india} name={"india"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.indonesia} name={"indonesia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.iran} name={"iran"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.iraq} name={"iraq"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ireland} name={"ireland"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.israel} name={"israel"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.italy} name={"italy"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ivoryCoast} name={"ivoryCoast"} />
    <br />
    <h1 className={styles.text}>J</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.jamaica} name={"jamaica"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.japan} name={"japan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.jordan} name={"jordan"} />
    <br />
    <h1 className={styles.text}>K</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.kazakhstan} name={"kazakhstan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.kenya} name={"kenya"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.kiribati} name={"kiribati"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.kuwait} name={"kuwait"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.kyrgyzstan} name={"kyrgyzstan"} />
    <br />
    <h1 className={styles.text}>L</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.laos} name={"laos"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.latvia} name={"latvia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.lebanon} name={"lebanon"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.lesotho} name={"lesotho"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.liberia} name={"liberia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.libya} name={"libya"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.liechtenstein} name={"liechtenstein"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.lithuania} name={"lithuania"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.luxembourg} name={"luxembourg"} />
    <br />
    <h1 className={styles.text}>M</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.macao} name={"macao"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.madagascar} name={"madagascar"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.malawi} name={"malawi"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.malaysia} name={"malaysia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.maldives} name={"maldives"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mali} name={"mali"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.malta} name={"malta"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.marshallIslands} name={"marshallIslands"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mauritania} name={"mauritania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mauritius} name={"mauritius"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mexico} name={"mexico"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.micronesia} name={"micronesia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.moldova} name={"moldova"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.monaco} name={"monaco"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mongolia} name={"mongolia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.montenegro} name={"montenegro"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.montserrat} name={"montserrat"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.morocco} name={"morocco"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.mozambique} name={"mozambique"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.myanmar} name={"myanmar"} />
    <br />
    <h1 className={styles.text}>N</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.namibia} name={"namibia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.nauru} name={"nauru"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.nepal} name={"nepal"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.netherlands} name={"netherlands"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.newZealand} name={"newZealand"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.nicaragua} name={"nicaragua"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.niger} name={"niger"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.nigeria} name={"nigeria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.northKorea} name={"northKorea"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.northMacedonia} name={"northMacedonia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.norway} name={"norway"} />
    <br />
    <h1 className={styles.text}>O</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.oman} name={"oman"} />
    <br />
    <h1 className={styles.text}>P</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.pakistan} name={"pakistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.palau} name={"palau"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.palestine} name={"palestine"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.panama} name={"panama"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.papuaNewGuinea} name={"papuaNewGuinea"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.paraguay} name={"paraguay"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.peru} name={"peru"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.philippines} name={"philippines"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.poland} name={"poland"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.portugal} name={"portugal"} />
    <br />
    <h1 className={styles.text}>Q</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.qatar} name={"qatar"} />
    <br />
    <h1 className={styles.text}>R</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.republicOfTheCongo} name={"republicOfTheCongo"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.romania} name={"romania"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.russia} name={"russia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.rwanda} name={"rwanda"} />
    <br />
    <h1 className={styles.text}>S</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saintHelena} name={"saintHelena"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saintKittsAndNevis} name={"saintKittsAndNevis"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saintLucia} name={"saintLucia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saintVincentAndTheGrenadines} name={"saintVincentAndTheGrenadines"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.samoa} name={"samoa"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.sanMarino} name={"sanMarino"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saoTomeAndPrincipe} name={"saoTomeAndPrincipe"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.saudiArabia} name={"saudiArabia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.senegal} name={"senegal"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.serbia} name={"serbia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.seychelles} name={"seychelles"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.sierraLeone} name={"sierraLeone"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.singapore} name={"singapore"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.slovakia} name={"slovakia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.slovenia} name={"slovenia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.solomonIslands} name={"solomonIslands"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.somalia} name={"somalia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.southAfrica} name={"southAfrica"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.southKorea} name={"southKorea"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.southOssetia} name={"southOssetia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.southSudan} name={"southSudan"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.spain} name={"spain"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.sriLanka} name={"sriLanka"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.sudan} name={"sudan"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.suriname} name={"suriname"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.sweden} name={"sweden"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.switzerland} name={"switzerland"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.syria} name={"syria"} />
    <br />
    <h1 className={styles.text}>T</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.taiwan} name={"taiwan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.tajikistan} name={"tajikistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.tanzania} name={"tanzania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.thailand} name={"thailand"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.togo} name={"togo"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.tonga} name={"tonga"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.trinidadAndTobago} name={"trinidadAndTobago"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.tunisia} name={"tunisia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.turkey} name={"turkey"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.turkmenistan} name={"turkmenistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.turksAndCaicos} name={"turksAndCaicos"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.tuvalu} name={"tuvalu"} />
    <br />
    <h1 className={styles.text}>U</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.uganda} name={"uganda"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.ukraine} name={"ukraine"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.unitedArabEmirates} name={"unitedArabEmirates"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.unitedKingdom} name={"unitedKingdom"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.unitedStates} name={"unitedStates"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.uruguay} name={"uruguay"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.uzbekistan} name={"uzbekistan"} />
    <br />
    <h1 className={styles.text}>V</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.vanuatu} name={"vanuatu"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.vaticanCity} name={"vaticanCity"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.venezuela} name={"venezuela"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.vietnam} name={"vietnam"} />
    <br />
    <h1 className={styles.text}>Y</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.yemen} name={"yemen"} />
    <br />
    <h1 className={styles.text}>Z</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.zambia} name={"zambia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={passports.zimbabwe} name={"zimbabwe"} />
    </div>
  )
}

export default SelectorPassportContainer