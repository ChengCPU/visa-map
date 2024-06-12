import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Jamaica:React.FC = () => {

  const { jm } = useContext(ColorContext)
  const { JM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'jamaica'} onMouseOver={() => setCountrySelect('jamaica')}>
  <style jsx>{`
  .jamaica {
  fill: ${jm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="jm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#jm)" />
</defs>
{JM ?
<circle fill="url(#jm)" r="5" cy="386" cx="554.5" stroke="black"/>
:
<circle r="5" cy="386" cx="554.5" stroke="black"/>
}
</g>
)
}

export default Jamaica