import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Tuvalu:React.FC = () => {

  const { tuvaluColor } = useContext(ColorContext)
  const { TV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tuvalu'} onMouseOver={() => setCountrySelect('tuvalu')}>
  <style jsx>{`
  .tuvalu {
  fill: ${tuvaluColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#tv)" />
</defs>
{(TV == 1) ?
<circle fill="url(#tv)" r="5" cy="556" cx="1998" stroke="black"/>
:
<circle r="5" cy="556" cx="1998" stroke="black"/>
}
</g>
)
}

export default Tuvalu