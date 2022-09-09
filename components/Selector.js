import { useEffect, memo } from 'react';
import styles from '../styles/Selector.module.css'
//passport imports
import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';
import anguillaPassport from '../public/anguilla.jpg'
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
    setSelectArray(selectArray = [selectArray[0], selectArray[1], selectArray[2], selectArray[3], selectArray[4], selectArray[5], selectArray[6], selectArray[7], selectArray[8], selectArray[9]])
  }, [select.passport, openDrawer])
return (
  <>
  <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div className={styles.container}>
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={afghanistanPassport} name={"afghanistan"} />
        <br></br>
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={albaniaPassport} name={"albania"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={algeriaPassport} name={"algeria"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={andorraPassport} name={"andorra"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={angolaPassport} name={"angola"} />
        <SelectorPassport setSelectArray={setSelectArray} setSelect={setSelect} selectArray={selectArray} select={select} image={anguillaPassport} name={"anguilla"} />
      </div>
  </Drawer>
      <div className={styles.container}>
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={0} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={1} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={2} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={3} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={4} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={5} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={6} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={7} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={8} />
        <SelectorButton setOpenDrawer={setOpenDrawer} selectArray={selectArray} setSelect={setSelect} select={select} num={9} />
      </div>
  </>
)
}

export default memo(Selector)