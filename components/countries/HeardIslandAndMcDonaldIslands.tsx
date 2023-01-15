import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const HeardIslandAndMcDonaldIslands:React.FC = () => {

  const { heardIslandAndMcDonaldIslandsColor } = useContext(ColorContext)
  const { heardIslandAndMcDonaldIslandsDiff } = useContext(DiffContext)

return (
<g className={'heardIslandAndMcDonaldIslands'}>
  <style jsx>{`
  .heardIslandAndMcDonaldIslands {
  fill: ${heardIslandAndMcDonaldIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="hm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(heardIslandAndMcDonaldIslandsDiff == 1) ?
<circle fill="url(#hm)" r="5" cy="860" cx="1390" stroke="black"/>
:
<circle r="5" cy="860" cx="1390" stroke="black"/>
}
</g>
)
}

export default HeardIslandAndMcDonaldIslands