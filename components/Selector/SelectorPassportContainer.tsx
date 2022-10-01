import styles from '../../styles/SelectorPassportContainer.module.css'
import SelectorPassport from './SelectorPassport'
//passport imports
import abkhazia from '/public/passports/abkhazia.png'
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
  toggle: boolean;
  setToggle: Function;
}

const SelectorPassportContainer:React.FC<Props> = ({ setOpenDrawer, select, setSelect, toggle, setToggle }) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.text}>A</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={abkhazia} name={"abkhazia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={afghanistan} name={"afghanistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={albania} name={"albania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={algeria} name={"algeria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={andorra} name={"andorra"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={angola} name={"angola"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={anguilla} name={"anguilla"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={antiguaAndBarbuda} name={"antiguaAndBarbuda"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={argentina} name={"argentina"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={armenia} name={"armenia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={australia} name={"australia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={austria} name={"austria"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={azerbaijan} name={"azerbaijan"} />
    <br />
    <h1 className={styles.text}>B</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bahamas} name={"bahamas"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bahrain} name={"bahrain"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bangladesh} name={"bangladesh"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={barbados} name={"barbados"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={belarus} name={"belarus"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={belgium} name={"belgium"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={belize} name={"belize"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={benin} name={"benin"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bhutan} name={"bhutan"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bolivia} name={"bolivia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bosniaAndHerzegovina} name={"bosniaAndHerzegovina"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={botswana} name={"botswana"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={brazil} name={"brazil"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={brunei} name={"brunei"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={bulgaria} name={"bulgaria"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={burkinaFaso} name={"burkinaFaso"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={burundi} name={"burundi"} />
    <br />
    <h1 className={styles.text}>C</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={cambodia} name={"cambodia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={cameroon} name={"cameroon"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={canada} name={"canada"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={capeVerde} name={"capeVerde"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={centralAfricanRepublic} name={"centralAfricanRepublic"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={chad} name={"chad"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={chile} name={"chile"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={china} name={"china"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={colombia} name={"colombia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={comoros} name={"comoros"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={costaRica} name={"costaRica"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={croatia} name={"croatia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={cuba} name={"cuba"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={cyprus} name={"cyprus"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={czechRepublic} name={"czechRepublic"} />
    <br />
    <h1 className={styles.text}>D</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={democraticRepublicOfTheCongo} name={"democraticRepublicOfTheCongo"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={denmark} name={"denmark"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={djibouti} name={"djibouti"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={dominica} name={"dominica"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={dominicanRepublic} name={"dominicanRepublic"} />
    <br />
    <h1 className={styles.text}>E</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={ecuador} name={"ecuador"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={egypt} name={"egypt"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={elSalvador} name={"elSalvador"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={equatorialGuinea} name={"equatorialGuinea"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={eritrea} name={"eritrea"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={estonia} name={"estonia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={eswatini} name={"eswatini"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={ethiopia} name={"ethiopia"} />
    <br />
    <h1 className={styles.text}>F</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={fiji} name={"fiji"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={finland} name={"finland"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={france} name={"france"} />
    <br />
    <h1 className={styles.text}>G</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={gabon} name={"gabon"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={gambia} name={"gambia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={georgia} name={"georgia"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={germany} name={"germany"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={ghana} name={"ghana"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={greece} name={"greece"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={grenada} name={"grenada"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={guatemala} name={"guatemala"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={guinea} name={"guinea"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={guineaBissau} name={"guineaBissau"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={guyana} name={"guyana"} />
    <br />
    <h1 className={styles.text}>H</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={haiti} name={"haiti"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={honduras} name={"honduras"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={hongKong} name={"hongKong"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={hungary} name={"hungary"} />
    </div>
  )
}

export default SelectorPassportContainer