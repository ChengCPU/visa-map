import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Liechtenstein:React.FC = () => {

  const { liechtensteinColor } = useContext(ColorContext)
  const { LI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'liechtenstein'} onMouseOver={() => setCountrySelect('liechtenstein')}>
  <style jsx>{`
  .liechtenstein {
  fill: ${liechtensteinColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="li" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#li)" />
</defs>
{(LI == 1) ?
<circle fill="url(#li)" r="4" cy="200" cx="1038" stroke="black"/>
:
<circle r="4" cy="200" cx="1038" stroke="black"/>
}
</g>
)
}

export default Liechtenstein