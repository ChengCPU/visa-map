import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Aruba:React.FC = () => {

  const { arubaColor } = useContext(ColorContext)
  const { AW } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'aruba'} onMouseOver={() => setCountrySelect('aruba')}>
  <style jsx>{`
  .aruba {
  fill: ${arubaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="aw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#aw)" />
</defs>
{(AW == 1) ?
<circle fill="url(#aw)" r="2.5" cy="422" cx="590" stroke="black"/>
:
<circle r="2.5" cy="422" cx="590" stroke="black"/>
}
</g>
)
}

export default Aruba