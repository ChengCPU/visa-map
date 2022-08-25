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
    case "AFGHANISTAN":
      console.log('a')
    case "ALBANIA":
      return {afghanistanColor: 'green'}
    case "ALGERIA":
      return {afghanistanColor: 'red'}
    case "ANDORRA":
      return {afghanistanColor: 'yellow'}
    case "ANGOLA":
      return {afghanistanColor: 'purple'}

    case "BLACK":
      return {afghanistanColor: 'black'}
    default:
      return state;
  }
};

export default function Home() {
  //beggining useReducer declaration
  const [state, dispatch] = useReducer(reducer, {
    afghanistanColor: true
  })

  //beggining useState declaration
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
      case "afghanistan": dispatch({ type: "AFGHANISTAN" });
      break;
      case "albania": dispatch({ type: "ALBANIA" });
      break;
      case "algeria": dispatch({ type: "ALGERIA" });
      break;
      case "andorra": dispatch({ type: "ANDORRA" });
      break;
      case "angola": dispatch({ type: "ANGOLA" });
      break;
    }
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport])

  useEffect(() => {
    console.log(state.afghanistanColor)
  }, [state.afghanistanColor])

  const value = {
    color: state.afghanistanColor
  }

  return (
    <>
    <ColorContext.Provider value={value}>
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
      setSelectArray([
        { selection: 0, passport: undefined},
        { selection: 1, passport: undefined},
        { selection: 2, passport: undefined},
        { selection: 3, passport: undefined},
        { selection: 4, passport: undefined},
      ])
      dispatch({ type: "BLACK" });
    }}
    >reset</button>
    </ColorContext.Provider>
    </>
  )
}
