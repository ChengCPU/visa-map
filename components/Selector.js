import { useEffect } from 'react';
import styles from '../styles/Selector.module.css'

//passport imports
import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';

//component imports
import SelectorButton from './SelectorButton';
import SelectorPassport from './SelectorPassport';

const Selector = ({
  Drawer,
  openDrawer, setOpenDrawer,
  select, setSelect,
  selectArray, setSelectArray
}) => {

  useEffect(() => {
    setSelectArray(selectArray = [...selectArray, selectArray[select.selection].passport = select.passport]);
    setSelectArray(selectArray = [selectArray[0], selectArray[1], selectArray[2], selectArray[3], selectArray[4]])
  }, [select.passport])

return (
  <>
  <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div className={styles.container}>
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={afghanistanPassport} name={"afghanistan"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={albaniaPassport} name={"albania"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={algeriaPassport} name={"algeria"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={andorraPassport} name={"andorra"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={angolaPassport} name={"angola"} />
      </div>
  </Drawer>
      <div className={styles.container}>
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={0} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={1} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={2} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={3} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={4} />
      </div>
  </>
)
}

export default Selector