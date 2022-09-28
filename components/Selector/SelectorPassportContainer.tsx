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

const SelectorPassportContainer = ({ setOpenDrawer, toggle, setToggle, select, setSelect }) => {
  return (
    <>
    <h1>A</h1>
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={abkhaziaPassport} name={"abkhazia"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={afghanistanPassport} name={"afghanistan"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={albaniaPassport} name={"albania"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={algeriaPassport} name={"algeria"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={andorraPassport} name={"andorra"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={angolaPassport} name={"angola"} />
    <br />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={anguillaPassport} name={"anguilla"} />
    <SelectorPassport setOpenDrawer={setOpenDrawer} toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={antiguaAndBarbudaPassport} name={"antiguaAndBarbuda"} />
    </>
  )
}

export default SelectorPassportContainer