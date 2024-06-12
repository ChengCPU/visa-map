import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const ElSalvador:React.FC = () => {

  const { sv } = useContext(ColorContext)
  const { SV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'elSalvador'} onMouseOver={() => setCountrySelect('elSalvador')}>
  <style jsx>{`
  .elSalvador {
  fill: ${sv};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sv)" />
</defs>
{SV ?
<>
<path fill="url(#sv)" d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z" />
<circle fill="url(#sv)" r="5" cy="414" cx="487" stroke="black"/>
</>
:
<>
<path d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z" />
<circle r="5" cy="414" cx="487" stroke="black"/>
</>
}
</g>
)
}

export default ElSalvador
