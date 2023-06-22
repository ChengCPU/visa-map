import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Maldives:React.FC = () => {

  const { maldivesColor } = useContext(ColorContext)
  const { MV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'maldives'} onMouseOver={() => setCountrySelect('maldives')}>
  <style jsx>{`
  .maldives {
  fill: ${maldivesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mv)" />
</defs>
{(MV == 1) ?
<circle fill="url(#mv)" r="5" cy="474" cx="1402" stroke="black"/>
:
<circle r="5" cy="474" cx="1402" stroke="black"/>
}
</g>
)
}

export default Maldives