import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Reunion:React.FC = () => {

  const { re } = useContext(ColorContext)
  const { RE } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'reunion'} onMouseOver={() => setCountrySelect('reunion')}>
  <style jsx>{`
  .reunion {
  fill: ${re};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="re" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#re)" />
</defs>
{(RE == 1) ?
<circle fill="url(#re)" r="4" cy="635" cx="1295" stroke="black"/>
:
<circle r="4" cy="635" cx="1295" stroke="black"/>
}
</g>
)
}

export default Reunion