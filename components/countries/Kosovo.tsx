import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Kosovo:React.FC = () => {

  const { xk } = useContext(ColorContext)
  const { XK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'kosovo'} onMouseOver={() => setCountrySelect('kosovo')}>
  <style jsx>{`
  .kosovo {
  fill: ${xk};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xk)" />
</defs>
{XK ?
<circle fill="url(#xk)" r="4" cy="228" cx="1095" stroke="black"/>
:
<circle r="4" cy="228" cx="1095" stroke="black"/>
}
</g>
)
}

export default Kosovo