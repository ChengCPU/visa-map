import { useState } from 'react';
import { useEffect } from 'react';
import SelectorSVG from './SelectorSVG';
import Passport from './Passport'
import styles from '../styles/Selector.module.css'

//MUI drawer component imports
import * as React from 'react';
import Drawer from '@mui/material/Drawer';

//passport imports
import afghanistanPassport from '../public/afghanistan.jpg';
import albaniaPassport from '../public/albania.jpg'
import algeriaPassport from '../public/algeria.jpg';
import andorraPassport from '../public/andorra.jpg'
import angolaPassport from '../public/angola.jpg';

import SelectorButton from './SelectorButton';
import SelectorPassport from './SelectorPassport';
import TempRemove from './TempRemove';

const Selector = () => {

  const [openDrawer, setOpenDrawer] = useState(false)
  const [select, setSelect] = useState({ selection: 0 })
  const [selectArray, setSelectArray] = useState([
    { selection: 0, passport: undefined},
    { selection: 1, passport: undefined},
    { selection: 2, passport: undefined},
    { selection: 3, passport: undefined},
    { selection: 4, passport: undefined},
  ])

  useEffect(() => {
    console.log(select)
  }, [select.passport])


  useEffect(() => {
    setSelectArray(selectArray = [...selectArray, selectArray[select.selection].passport = select.passport]);
    setSelectArray(selectArray = [selectArray[0], selectArray[1], selectArray[2], selectArray[3], selectArray[4]])
  }, [select.passport])

  useEffect(() => {
    console.log(selectArray)
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport])

return (
  <>
  <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div className={styles.container}>
        <TempRemove setSelectArray={setSelectArray} selectArray={selectArray} select={select}/>
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

//use the useState function for passport selection, maybe an array to accomodate for multiple choices? interactive svg and hoverable needed for selection of passport