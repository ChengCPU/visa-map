import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const UnitedStatesVirginIslands:React.FC = () => {

  const { unitedStatesVirginIslandsColor } = useContext(ColorContext)
  const { unitedStatesVirginIslandsDiff } = useContext(DiffContext)

return (
<g className={'unitedStatesVirginIslands'}>
  <style jsx>{`
  .unitedStatesVirginIslands {
  fill: ${unitedStatesVirginIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vi" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(unitedStatesVirginIslandsDiff == 1) ?
<circle fill="url(#vi)" r="2.5" cy="387" cx="622" stroke="black"/>
:
<circle r="2.5" cy="387" cx="622" stroke="black"/>
}
</g>
)
}

export default UnitedStatesVirginIslands