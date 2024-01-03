import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Micronesia:React.FC = () => {

  const { fm } = useContext(ColorContext)
  const { FM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'micronesia'} onMouseOver={() => setCountrySelect('micronesia')}>
  <style jsx>{`
  .micronesia {
  fill: ${fm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#fm)" />
</defs>
{(FM == 1) ?
<circle fill="url(#fm)" r="5" cy="457" cx="1881" stroke="black"/>
:
<circle r="5" cy="457" cx="1881" stroke="black"/>
}
</g>
)
}

export default Micronesia