import { useState, useEffect } from 'react';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Map from '../components/Map'
import Selector from '../components/Selector'
import { a } from './_logic'
import { ColorContext } from '../components/context/ColorContext';

export default function Home() {
  const [calculation, setCalculation] = useState(true)
  const [rerender, setRerender] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [select, setSelect] = useState({ selection: 0 })
  const [selectArray, setSelectArray] = useState([
    { selection: 0, passport: undefined},
    { selection: 1, passport: undefined},
    { selection: 2, passport: undefined},
    { selection: 3, passport: undefined},
    { selection: 4, passport: undefined},
    { selection: 5, passport: undefined},
    { selection: 6, passport: undefined},
    { selection: 7, passport: undefined},
    { selection: 8, passport: undefined},
    { selection: 9, passport: undefined},
  ])
  const [assignedColors, setAssignedColors] = useState([
    {
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },{
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    }
  ])

  useEffect(() => {
    switch(selectArray[select.selection].passport) {
      case "afghanistan": a('afghanistan' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
      case "albania": a('albania' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
      case "algeria": a('algeria' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
      case "andorra": a('andorra' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
      case "angola": a('angola' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
      case "anguilla": a('anguilla' , setAssignedColors, assignedColors, select, rerender, setRerender, selectArray, priority, setPriority, calculation, setCalculation)
      break;
    }
  }, [select])

  const [priority, setPriority] = useState({
    afghanistanColor: "rgb(150,150,150)",
    albaniaColor: "rgb(150,150,150)",
    algeriaColor: "rgb(150,150,150)",
    andorraColor: "rgb(150,150,150)",
    angolaColor: "rgb(150,150,150)",
    anguillaColor: "rgb(150,150,150)"
  })

  const value = {
    afghanistanColor: priority.afghanistanColor,
    albaniaColor: priority.albaniaColor,
    algeriaColor: priority.algeriaColor,
    andorraColor: priority.andorraColor,
    angolaColor: priority.angolaColor,
    anguillaColor: priority.anguillaColor
  }

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
        { selection: 5, passport: undefined},
        { selection: 6, passport: undefined},
        { selection: 7, passport: undefined},
        { selection: 8, passport: undefined},
        { selection: 9, passport: undefined}
      ])
      setPriority({
        afghanistanColor: "rgb(150,150,150)",
        albaniaColor: "rgb(150,150,150)",
        algeriaColor: "rgb(150,150,150)",
        andorraColor: "rgb(150,150,150)",
        angolaColor: "rgb(150,150,150)",
        anguillaColor: "rgb(150,150,150)"
      })
    }}
    >reset</button>
    </ColorContext.Provider>
  )
}
