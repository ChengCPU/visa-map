import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const AmericanSamoa:React.FC = () => {

  const { americanSamoaColor } = useContext(ColorContext)
  const { AS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'americanSamoa'} onMouseOver={() => setCountrySelect('americanSamoa')}>
  <style jsx>{`
  .americanSamoa {
  fill: ${americanSamoaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="as" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#as)" />
</defs>
{(AS == 1) ?
<circle fill="url(#as)" r="5" cy="596" cx="29" stroke="black"/>
:
<circle r="5" cy="596" cx="29" stroke="black"/>
}
</g>
)
}

export default AmericanSamoa