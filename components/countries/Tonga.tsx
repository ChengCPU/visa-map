import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Tonga:React.FC = () => {

  const { to } = useContext(ColorContext)
  const { TO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tonga'} onMouseOver={() => setCountrySelect('tonga')}>
  <style jsx>{`
  .tonga {
  fill: ${to};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="to" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#to)" />
</defs>
{TO ?
<circle fill="url(#to)" r="5" cy="630" cx="13" stroke="black"/>
:
<circle r="5" cy="630" cx="13" stroke="black"/>
}
</g>
)
}

export default Tonga