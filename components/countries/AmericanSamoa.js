import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const AmericanSamoa = () => {

  const { americanSamoaColor } = useContext(ColorContext)

return (
<g className={'americanSamoa'}>
  <style jsx>{`
  .americanSamoa {
  fill: ${americanSamoaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="596" cx="29" stroke="black"/>
</g>
)
}

export default AmericanSamoa