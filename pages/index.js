//react imports
import { useState, useEffect } from 'react';
import { ColorContext } from '../components/context/ColorContext';

//MUI drawer component imports
import * as React from 'react';
import Drawer from '@mui/material/Drawer';

//component imports
import Map from '../components/Map'
import Selector from '../components/Selector'

export default function Home() {

  const [color, setColor] = useState('red')
  const [openDrawer, setOpenDrawer] = useState(false)
  const [select, setSelect] = useState({ selection: 0 })
  const [selectArray, setSelectArray] = useState([
    { selection: 0, passport: null},
    { selection: 1, passport: null},
    { selection: 2, passport: null},
    { selection: 3, passport: null},
    { selection: 4, passport: null},
  ])

  useEffect(() => {
    console.log(select)
    switch(selectArray[select.selection].passport) {
      case "afghanistan": console.log('afghanistan')
      setColor('hotpink')
      break;
      case "albania": console.log('albania')
      setColor('red')
      break;
      case "algeria": console.log('algeria')
      setColor('red')
      break;
      case "andorra": console.log('andorra')
      setColor('red')
      break;
      case "angola": console.log('angola')
      setColor('red')
      break;
    }
  }, [select.passport])

  useEffect(() => {
    console.log(selectArray)
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport])
  
  return (
    <>
    <ColorContext.Provider value={{ color, setColor }}>
    <Map />
    <Selector
    Drawer={Drawer}
    openDrawer={openDrawer}
    setOpenDrawer={setOpenDrawer}
    select={select}
    setSelect={setSelect}
    selectArray={selectArray}
    setSelectArray={setSelectArray}
    />
    </ColorContext.Provider>
    </>
  )
}
