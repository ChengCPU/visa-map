import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Netherlands:React.FC = () => {

  const { nl } = useContext(ColorContext)
  const { NL } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'netherlands'} onMouseOver={() => setCountrySelect('netherlands')}>
  <style jsx>{`
  .netherlands {
  fill: ${nl};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nl" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#nl)" />
</defs>
{(NL == 1) ?
<path fill="url(#nl)" d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z" stroke="black"/>
:
<path d="M1016.5 177.1l-2.8-1.5-3.1-2.7-4.5 1.3-3.6-0.5 2.5-1.7 4-9 6.5-2.6 4 0.2 0.9 2.1-0.9 5.6-1.2 2.3-2.9 0 1.1 6.5z" stroke="black"/>
}
</g>
)
}

export default Netherlands