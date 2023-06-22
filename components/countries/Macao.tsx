import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Macao:React.FC = () => {

  const { macaoColor } = useContext(ColorContext)
  const { MO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'macao'} onMouseOver={() => setCountrySelect('macao')}>
  <style jsx>{`
  .macao {
  fill: ${macaoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mo)" />
</defs>
{(MO == 1) ?
<circle fill="url(#mo)" r="4" cy="360" cx="1614" stroke="black"/>
:
<circle r="4" cy="360" cx="1614" stroke="black"/>
}
</g>
)
}

export default Macao