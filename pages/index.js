import { useState, useEffect, useContext } from 'react';


//MUI drawer component imports
import * as React from 'react';
import Drawer from '@mui/material/Drawer';

import Map from '../components/Map'
import Selector from '../components/Selector'

export default function Home() {

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
    switch(selectArray[select.selection].passport) {
      case "afghanistan": console.log('afghanistan')
      break;
      case "albania": console.log('albania')
      break;
      case "algeria": console.log('algeria')
      break;
      case "andorra": console.log('andorra')
      break;
      case "angola": console.log('angola')
      break;
    }
  }, [select.passport])

  useEffect(() => {
    console.log(selectArray)
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport])

  return (
    <>
      <Map/>
      <Selector
      Drawer={Drawer}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      select={select}
      setSelect={setSelect}
      selectArray={selectArray}
      setSelectArray={setSelectArray}
      />
    </>
  )
}
