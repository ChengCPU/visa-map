//react imports
import { useState, useEffect } from 'react';
//MUI drawer component imports
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
//component imports
import Map from '../components/Map'
import Selector from '../components/Selector'
import { b } from './_logic'
//context imports
import { ColorContext } from '../components/context/ColorContext';

export default function Home() {
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
  const [assignedColors, setAssignedColors] = useState({
    afghanistanColor: 'rgb(150,150,150)',
    albaniaColor: 'rgb(150,150,150)',
    algeriaColor: 'rgb(150,150,150)',
    andorraColor: 'rgb(150,150,150)',
    angolaColor: 'rgb(150,150,150)'
  })

  const a = (...c) => {
    setAssignedColors({
      afghanistanColor: c[0][0],
      albaniaColor: c[0][1],
      algeriaColor: c[0][2],
      andorraColor: c[0][3],
      angolaColor: c[0][4]
    })
  }

  const value = {
    afghanistanColor: assignedColors.afghanistanColor,
    albaniaColor: assignedColors.albaniaColor,
    algeriaColor: assignedColors.algeriaColor,
    andorraColor: assignedColors.andorraColor,
    angolaColor: assignedColors.angolaColor
  }

  //log select state, read currently selected selectArray passport and log passport
  useEffect(() => {
    console.log(select)
    console.log(selectArray)
    console.log(select.selection)
    switch(selectArray[select.selection].passport) {
      case "afghanistan": a(b())
      break;
      case "albania": a()
      break;
      case "algeria": a()
      break;
      case "andorra": a(b())
      break;
      case "angola": a()
      break;
    }
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport])

  return (
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
      setAssignedColors({
        afghanistanColor: 'rgb(150,150,150)',
        albaniaColor: 'rgb(150,150,150)',
        algeriaColor: 'rgb(150,150,150)',
        andorraColor: 'rgb(150,150,150)',
        angolaColor: 'rgb(150,150,150)'
      })
    }}
    >reset</button>
    </ColorContext.Provider>
  )
}
