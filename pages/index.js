import { useState, useEffect } from 'react';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Map from '../components/Map'
import Selector from '../components/Selector'
import { a } from './_logic'
import { ColorContext } from '../components/context/ColorContext';

export default function Home() {
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
      selection: 0,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 1,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 2,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 3,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 4,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 5,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 6,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 7,
      afghanistanColor: "afghantest",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 8,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    },
    {
      selection: 9,
      afghanistanColor: "rgb(150,150,150)",
      albaniaColor: "rgb(150,150,150)",
      algeriaColor: "rgb(150,150,150)",
      andorraColor: "rgb(150,150,150)",
      angolaColor: "rgb(150,150,150)",
      anguillaColor: "rgb(150,150,150)"
    }
  ])
  const priority = {
    afghanistanColor: assignedColors.afghanistanColor,
    albaniaColor: assignedColors.albaniaColor,
    algeriaColor: assignedColors.algeriaColor,
    andorraColor: assignedColors.andorraColor,
    angolaColor: assignedColors.angolaColor,
    anguillaColor: assignedColors.aguillaColor
  }
  useEffect(() => {
    console.log(select)
    console.log(selectArray)
    switch(selectArray[select.selection].passport) {
      case "afghanistan": a('afghanistan' , setAssignedColors, assignedColors, select)
      break;
      case "albania": a('albania' , setAssignedColors, assignedColors, select)
      break;
      case "algeria": a('algeria' , setAssignedColors, assignedColors, select)
      break;
      case "andorra": a('andorra' , setAssignedColors, assignedColors, select)
      break;
      case "angola": a('angola' , setAssignedColors, assignedColors, select)
      break;
      case "anguilla": a('anguilla' , setAssignedColors, assignedColors, select)
      break;
    }
  }, [selectArray[0].passport, selectArray[1].passport, selectArray[2].passport, selectArray[3].passport, selectArray[4].passport, selectArray[5].passport, selectArray[6].passport, selectArray[7].passport, selectArray[8].passport, selectArray[9].passport])

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
      setAssignedColors({
        afghanistanColor: 'rgb(150,150,150)',
        albaniaColor: 'rgb(150,150,150)',
        algeriaColor: 'rgb(150,150,150)',
        andorraColor: 'rgb(150,150,150)',
        angolaColor: 'rgb(150,150,150)',
        anguillaColor: 'rgb(150,150,150)'
      })
    }}
    >reset</button>
    </ColorContext.Provider>
  )
}
