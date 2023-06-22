import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Gibraltar:React.FC = () => {

  const { gibraltarColor } = useContext(ColorContext)
  const { GI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'gibraltar'} onMouseOver={() => setCountrySelect('gibraltar')}>
  <style jsx>{`
  .gibraltar {
  fill: ${gibraltarColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gi" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gi)" />
</defs>
{(GI == 1) ?
<circle fill="url(#gi)" r="4" cy="270" cx="958" stroke="black"/>
:
<circle r="4" cy="270" cx="958" stroke="black"/>
}
</g>
)
}

export default Gibraltar