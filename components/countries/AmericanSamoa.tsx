import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const AmericanSamoa:React.FC = () => {

  const { americanSamoaColor } = useContext(ColorContext)
  const { americanSamoaDiff } = useContext(DiffContext)

return (
<g className={'americanSamoa'}>
  <style jsx>{`
  .americanSamoa {
  fill: ${americanSamoaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="as" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(americanSamoaColor)}/>
  </pattern>
</defs>
{(americanSamoaDiff) ?
<circle fill="url(#as)" r="5" cy="596" cx="29" stroke="black"/>
:
<circle r="5" cy="596" cx="29" stroke="black"/>
}
</g>
)
}

export default AmericanSamoa