import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Kiribati:React.FC = () => {

  const { ki } = useContext(ColorContext)
  const { KI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'kiribati'} onMouseOver={() => setCountrySelect('kiribati')}>
  <style jsx>{`
  .kiribati {
  fill: ${ki};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ki" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ki)" />
</defs>
{KI ?
<circle fill="url(#ki)" r="5" cy="490" cx="1960" stroke="black"/>
:
<circle r="5" cy="490" cx="1960" stroke="black"/>
}
</g>
)
}

export default Kiribati