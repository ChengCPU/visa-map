import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const IsleOfMan:React.FC = () => {

  const { isleOfManColor } = useContext(ColorContext)
  const { IM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'isleOfMan'} onMouseOver={() => setCountrySelect('isleOfMan')}>
  <style jsx>{`
  .isleOfMan {
  fill: ${isleOfManColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="im" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#im)" />
</defs>
{(IM == 1) ?
<circle fill="url(#im)" r="4" cy="158" cx="962" stroke="black"/>
:
<circle r="4" cy="158" cx="962" stroke="black"/>
}
</g>
)
}

export default IsleOfMan