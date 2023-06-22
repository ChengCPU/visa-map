import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const CapeVerde:React.FC = () => {

  const { capeVerdeColor } = useContext(ColorContext)
  const { CV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'capeVerde'} onMouseOver={() => setCountrySelect('capeVerde')}>
  <style jsx>{`
  .capeVerde {
  fill: ${capeVerdeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cv" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#cv)" />
</defs>
{(CV == 1) ?
<circle fill="url(#cv)" r="5" cy="400" cx="853" stroke="black"/>
:
<circle r="5" cy="400" cx="853" stroke="black"/>
}
</g>
)
}

export default CapeVerde