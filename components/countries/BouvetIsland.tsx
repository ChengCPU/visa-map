import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const BouvetIsland:React.FC = () => {

  const { bouvetIslandColor } = useContext(ColorContext)
  const { bouvetIslandDiff } = useContext(DiffContext)

return (
<g className={'bouvetIsland'}>
  <style jsx>{`
  .bouvetIsland {
  fill: ${bouvetIslandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(bouvetIslandDiff == 1) ?
<circle fill="url(#bv)" r="5" cy="854" cx="1000" stroke="black"/>
:
<circle r="5" cy="854" cx="1000" stroke="black"/>
}
</g>
)
}

export default BouvetIsland