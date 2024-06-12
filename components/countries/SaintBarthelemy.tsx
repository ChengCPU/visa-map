import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaintBarthelemy:React.FC = () => {

  const { bl } = useContext(ColorContext)
  const { BL } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintBarthelemy'} onMouseOver={() => setCountrySelect('saintBarthelemy')}>
  <style jsx>{`
  .saintBarthelemy {
  fill: ${bl};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bl" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bl)" />
</defs>
{BL ?
<circle fill="url(#bl)" r="2.5" cy="388" cx="627" stroke="black"/>
:
<circle r="2.5" cy="388" cx="627" stroke="black"/>
}
</g>
)
}

export default SaintBarthelemy