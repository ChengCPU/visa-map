import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const UnitedStatesVirginIslands:React.FC = () => {

  const { unitedStatesVirginIslandsColor } = useContext(ColorContext)
  const { VI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'unitedStatesVirginIslands'} onMouseOver={() => setCountrySelect('unitedStatesVirginIslands')}>
  <style jsx>{`
  .unitedStatesVirginIslands {
  fill: ${unitedStatesVirginIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vi" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#vi)" />
</defs>
{(VI == 1) ?
<circle fill="url(#vi)" r="2.5" cy="387" cx="622" stroke="black"/>
:
<circle r="2.5" cy="387" cx="622" stroke="black"/>
}
</g>
)
}

export default UnitedStatesVirginIslands