import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SanMarino:React.FC = () => {

  const { sm } = useContext(ColorContext)
  const { SM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'sanMarino'} onMouseOver={() => setCountrySelect('sanMarino')}>
  <style jsx>{`
  .sanMarino {
  fill: ${sm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sm)" />
</defs>
{SM ?
<circle fill="url(#sm)" r="4" cy="223" cx="1053" stroke="black"/>
:
<circle r="4" cy="223" cx="1053" stroke="black"/>
}
</g>
)
}

export default SanMarino