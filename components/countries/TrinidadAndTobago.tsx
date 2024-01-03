import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const TrinidadAndTobago:React.FC = () => {

  const { tt } = useContext(ColorContext)
  const { TT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'trinidadAndTobago'} onMouseOver={() => setCountrySelect('trinidadAndTobago')}>
  <style jsx>{`
  .trinidadAndTobago {
  fill: ${tt};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#tt)" />
</defs>
{(TT == 1) ?
<circle fill="url(#tt)" r="3.25" cy="435" cx="640" stroke="black"/>
:
<circle r="3.25" cy="435" cx="640" stroke="black"/>
}
</g>
)
}

export default TrinidadAndTobago