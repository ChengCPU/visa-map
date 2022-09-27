import SelectorPassport from './SelectorPassport'
//passport imports
import afghanistanPassport from '/public/afghanistan.jpg';
import albaniaPassport from '/public/albania.jpg'
import algeriaPassport from '/public/algeria.jpg';
import andorraPassport from '/public/andorra.jpg'
import angolaPassport from '/public/angola.jpg';
import anguillaPassport from '/public/anguilla.jpg'

const SelectorPassportContainer = ({ toggle, setToggle, select, setSelect }) => {
  return (
    <>
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={afghanistanPassport} name={"afghanistan"} />
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={albaniaPassport} name={"albania"} />
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={algeriaPassport} name={"algeria"} />
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={andorraPassport} name={"andorra"} />
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={angolaPassport} name={"angola"} />
    <SelectorPassport toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} image={anguillaPassport} name={"anguilla"} />
    </>
  )
}

export default SelectorPassportContainer