import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const PitcairnIslands:React.FC = () => {

  const { pitcairnIslandsColor } = useContext(ColorContext)
  const { pitcairnIslandsDiff } = useContext(DiffContext)

return (
<g className={'pitcairnIslands'}>
  <style jsx>{`
  .pitcairnIslands {
  fill: ${pitcairnIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pn" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(pitcairnIslandsDiff == 1) ?
<circle fill="url(#pn)" r="5" cy="660" cx="300" stroke="black"/>
:
<circle r="5" cy="660" cx="300" stroke="black"/>
}
</g>
)
}

export default PitcairnIslands