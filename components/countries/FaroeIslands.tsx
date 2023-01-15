import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const FaroeIslands:React.FC = () => {

  const { faroeIslandsColor } = useContext(ColorContext)
  const { faroeIslandsDiff } = useContext(DiffContext)

return (
<g className={'faroeIslands'}>
  <style jsx>{`
  .faroeIslands {
  fill: ${faroeIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fo" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(faroeIslandsDiff == 1) ?
<circle fill="url(#fo)" r="5" cy="109" cx="954" stroke="black"/>
:
<circle r="5" cy="109" cx="954" stroke="black"/>
}
</g>
)
}

export default FaroeIslands