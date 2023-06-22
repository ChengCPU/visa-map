import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Mauritius:React.FC = () => {

  const { mauritiusColor } = useContext(ColorContext)
  const { MU } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'mauritius'} onMouseOver={() => setCountrySelect('mauritius')}>
  <style jsx>{`
  .mauritius {
  fill: ${mauritiusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mu)" />
</defs>
{(MU == 1) ?
<circle fill="url(#mu)" r="5" cy="630" cx="1307" stroke="black"/>
:
<circle r="5" cy="630" cx="1307" stroke="black"/>
}
</g>
)
}

export default Mauritius