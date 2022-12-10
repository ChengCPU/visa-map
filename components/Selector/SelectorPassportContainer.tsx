import { useContext, useState } from 'react'
import { PassportContext } from '../context/PassportContext'
import styles from '../../styles/SelectorPassportContainer.module.css';
import SelectorPassport from './SelectorPassport';
interface Props {
  setOpenDrawer:Function;
  select:{
    selection:number;
    passport:null | string;
  };
  setSelect:Function;
  toggle:boolean;
  setToggle:Function;
}

const passportsArray:any = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
let testArray = []

const SelectorPassportContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, toggle, setToggle }) => {

  const passports = useContext(PassportContext)
  
  const [input, setInput] = useState('');
  const [foundPassports, setFoundPassports] = useState(passportsArray);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = passportsArray.filter((a) => {
        return a.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundPassports(results)
    } else {
      setFoundPassports(passportsArray);
    }
    setInput(keyword);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        value={input}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      <br />
    {foundPassports && foundPassports.length > 0 ? (
      foundPassports.map((passportsMap) => (
        <>
        <SelectorPassport
          key={Math.random()}
          setOpenDrawer={setOpenDrawer}
          select={select}
          setSelect={setSelect}
          toggle={toggle}
          setToggle={setToggle}
          image={passports[passportsMap]}
          name={passportsMap} 
        />
        {((foundPassports.indexOf(passportsMap) + 1) % 3 == 0 && passportsArray.indexOf(passportsMap) != 0) ? <br /> : null}
        </>
      ))
    ) : (
      <p>No results found</p>
    )}
    </div>
  )
}

export default SelectorPassportContainer