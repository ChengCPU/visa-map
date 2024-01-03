import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const HongKong:React.FC = () => {

  const { hk } = useContext(ColorContext)
  const { HK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'hongKong'} onMouseOver={() => setCountrySelect('hongKong')}>
  <style jsx>{`
  .hongKong {
  fill: ${hk};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="hk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#hk)" />
</defs>
{(HK == 1) ?
<circle fill="url(#hk)" r="4" cy="358" cx="1622" stroke="black"/>
:
<circle r="4" cy="358" cx="1622" stroke="black"/>
}
</g>
)
}

export default HongKong