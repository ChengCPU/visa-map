import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const FrenchPolynesia:React.FC = () => {

  const { pf } = useContext(ColorContext)
  const { PF } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'frenchPolynesia'} onMouseOver={() => setCountrySelect('frenchPolynesia')}>
  <style jsx>{`
  .frenchPolynesia {
  fill: ${pf};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#pf)" />
</defs>
{(PF == 1) ?
<circle fill="url(#pf)" r="5" cy="614" cx="172" stroke="black"/>
:
<circle r="5" cy="614" cx="172" stroke="black"/>
}
</g>
)
}

export default FrenchPolynesia