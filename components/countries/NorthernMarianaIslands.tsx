import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const NorthernMarianaIslands:React.FC = () => {

  const { mp } = useContext(ColorContext)
  const { MP } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'northernMarianaIslands'} onMouseOver={() => setCountrySelect('northernMarianaIslands')}>
  <style jsx>{`
  .northernMarianaIslands {
  fill: ${mp};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mp" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mp)" />
</defs>
{(MP == 1) ?
<circle fill="url(#mp)" r="5" cy="396" cx="1802" stroke="black"/>
:
<circle r="5" cy="396" cx="1802" stroke="black"/>
}
</g>
)
}

export default NorthernMarianaIslands