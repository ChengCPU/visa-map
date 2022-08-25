//react imports
import { useState, useEffect, useReducer } from 'react';
//MUI drawer component imports
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
//component imports
import Map from '../components/Map'
import Selector from '../components/Selector'
import { ColorContext } from '../components/context/ColorContext';

const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGECOLOR":
      return {afghanistanColor: 'red', albaniaColor: state.albaniaColor}
    default:
      return state;
  }
};

export default function Home() {
  //beggining useReducer declaration
  const [state, dispatch] = useReducer(reducer, {
    afghanistanColor: 'blue',
    albaniaColor: 'purple'
  })

  //beggining useState declaration
  const [color, setColor] = useState('red')
  const [openDrawer, setOpenDrawer] = useState(false)
  const [select, setSelect] = useState({ selection: 0 })
  const [selectArray, setSelectArray] = useState([
    { selection: 0, passport: undefined},
    { selection: 1, passport: undefined},
    { selection: 2, passport: undefined},
    { selection: 3, passport: undefined},
    { selection: 4, passport: undefined},
  ])

  //log select state, read currently selected selectArray passport and log passport
  useEffect(() => {
    console.log(select)
    console.log(selectArray)
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
    <button onClick={() => {
      dispatch({ type: "CHANGECOLOR" });
      console.log(state.afghanistanColor)
    }}
    >test</button>
    </ColorContext.Provider>
    </>
  )
}
