import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Guam:React.FC = () => {

  const { guamColor } = useContext(ColorContext)
  const { GU } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guam'} onMouseOver={() => setCountrySelect('guam')}>
  <style jsx>{`
  .guam {
  fill: ${guamColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gu)" />
</defs>
{(GU == 1) ?
<circle fill="url(#gu)" r="5" cy="414" cx="1800" stroke="black"/>
:
<circle r="5" cy="414" cx="1800" stroke="black"/>
}
</g>
)
}

export default Guam