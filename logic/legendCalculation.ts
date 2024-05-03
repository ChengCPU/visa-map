import { MutableRefObject } from 'react'
const rgb:string[] = ['rgb(255,20,147)','rgb(255,145,0)','rgb(0,135,93)','rgb(0,51,153)','rgb(153,123,61)','rgb(255,179,191)','rgb(50,205,50)','rgb(81,205,123)','rgb(161,224,123)','rgb(255,255,92)','rgb(135,206,250)','rgb(118,65,171)','rgb(200,200,200)','rgb(150,150,150)','rgb(0,0,0)'] 

export default function legendCalculation(setLegend:Function, priorityRef:MutableRefObject<{[key:string]:string}>) {
  let temp:boolean[] = new Array(15).fill(false)

  for(const key in priorityRef.current) {
    if(priorityRef.current.hasOwnProperty(key)) {
      const rgbValue = priorityRef.current[key]
      if(rgb.includes(rgbValue)) {
        temp[rgb.indexOf(rgbValue)] = true
      }
    }
  }

  setLegend(temp)
}