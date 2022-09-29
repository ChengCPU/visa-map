import styles from '../styles/Selector.module.css'
//component imports
import SelectorButtonContainer from './Selector/SelectorButtonContainer'
import SelectorPassportContainer from './Selector/SelectorPassportContainer'
interface Props {
  Drawer: any;
  openDrawer: boolean;
  setOpenDrawer: Function;
  select: {
    selection: number;
    passport: null | string;
  };
  setSelect: Function;
  selectArray:null | string[];
  toggle: boolean;
  setToggle: Function;
}
const Selector:React.FC<Props> = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, selectArray, toggle, setToggle }) => {
  return (
    <>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div>
        <SelectorPassportContainer setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} toggle={toggle} setToggle={setToggle} />
      </div>
    </Drawer>
      <div className={styles.container}>
        <SelectorButtonContainer setOpenDrawer={setOpenDrawer} select={select} setSelect={setSelect} selectArray={selectArray}/>
      </div>
    </>
  )
}

export default Selector