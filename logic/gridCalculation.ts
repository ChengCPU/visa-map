export default function gridCalculation(color:string) {
  switch(color) {
    case 'rgb(255,20,147)': return './grids/homeCountry.png'
    case 'rgb(255,145,0)': return './grids/gridoecsfom.png'
    case 'rgb(0,135,93)': return './grids/gridmercosurfom.png'
    case 'rgb(0,51,153)': return './grids/grideufom.png'
    case 'rgb(153,123,61)': return './grids/gridgccfom.png'
    case 'rgb(255,179,191)': return './grids/gridfom.png'
    case 'rgb(50,205,50)': return './grids/gridvf.png'
    case 'rgb(161,224,123)': return './grids/gridvoaevisa.png'
    case 'rgb(255,255,92)': return './grids/gridvoa.png'
    case 'rgb(135,206,250)': return './grids/gridevisa.png'
    case 'rgb(118,65,171)': return './grids/gridsp.png'
    case 'rgb(200,200,200)': return './grids/gridsv.png'
  }
}