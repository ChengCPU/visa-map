import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaoTomeAndPrincipe:React.FC = () => {

  const { st } = useContext(ColorContext)
  const { ST } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saoTomeAndPrincipe'} onMouseOver={() => setCountrySelect('saoTomeAndPrincipe')}>
  <style jsx>{`
  .saoTomeAndPrincipe {
  fill: ${st};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="st" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#st)" />
</defs>
{(ST == 1) ?
<circle fill="url(#st)" r="5" cy="500" cx="1025" stroke="black"/>
:
<circle r="5" cy="500" cx="1025" stroke="black"/>
}
</g>
)
}

export default SaoTomeAndPrincipe