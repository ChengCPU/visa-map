import { memo } from 'react';
import styles from '../styles/Selector.module.css'
//component imports
import SelectorButtonContainer from './Selector/SelectorButtonContainer'
import SelectorPassportContainer from './Selector/SelectorPassportContainer'

const Selector = ({ Drawer, openDrawer, setOpenDrawer, select, setSelect, selectArray, rerender, toggle, setToggle }) => {
  return (
    <>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div className={styles.container} onClick={() => setOpenDrawer(false)}>
        <SelectorPassportContainer toggle={toggle} setToggle={setToggle} select={select} setSelect={setSelect} />
      </div>
    </Drawer>
      <div className={styles.container}>
        <SelectorButtonContainer setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select}/>
      </div>
    </>
  )
}

export default Selector