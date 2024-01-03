import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const JanMayen:React.FC = () => {

  const { xm } = useContext(ColorContext)
  const { XM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'janMayen'} onMouseOver={() => setCountrySelect('janMayen')}>
  <style jsx>{`
  .janMayen {
  fill: ${xm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xm)" />
</defs>
{(XM == 1) ?
<circle fill="url(#xm)" r="5" cy="60" cx="952" stroke="black"/>
:
<circle r="5" cy="60" cx="952" stroke="black"/>
}
</g>
)
}

export default JanMayen