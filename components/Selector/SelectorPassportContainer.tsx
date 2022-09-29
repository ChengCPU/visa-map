import SelectorPassport from './SelectorPassport'
//passport imports
import abkhaziaPassport from '/public/abkhazia.jpg'
import afghanistanPassport from '/public/afghanistan.jpg';
import albaniaPassport from '/public/albania.jpg'
import algeriaPassport from '/public/algeria.jpg';
import andorraPassport from '/public/andorra.jpg'
import angolaPassport from '/public/angola.jpg';
import anguillaPassport from '/public/anguilla.jpg'
import antiguaAndBarbudaPassport from '/public/antiguaAndBarbuda.jpg'
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
    <>
    <h1>A</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={abkhaziaPassport} name={"abkhazia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={afghanistanPassport} name={"afghanistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={albaniaPassport} name={"albania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={algeriaPassport} name={"algeria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={andorraPassport} name={"andorra"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={angolaPassport} name={"angola"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={anguillaPassport} name={"anguilla"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} image={antiguaAndBarbudaPassport} name={"antiguaAndBarbuda"} />
    </>
  )
}

export default SelectorPassportContainer