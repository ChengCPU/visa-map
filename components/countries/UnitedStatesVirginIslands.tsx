import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

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
  <pattern id="vi" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(unitedStatesVirginIslandsColor)}/>
  </pattern>
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