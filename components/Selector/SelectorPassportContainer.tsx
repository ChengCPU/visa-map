import styles from '../../styles/SelectorPassportContainer.module.css'
import SelectorPassport from './SelectorPassport'
//passport imports
import abkhazia from '/public/abkhazia.png'
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
    </div>
  )
}

export default SelectorPassportContainer