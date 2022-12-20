import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const BouvetIsland:React.FC = () => {

  const { bouvetIslandColor } = useContext(ColorContext)

return (
<g className={'bouvetIsland'}>
  <style jsx>{`
  .bouvetIsland {
  fill: ${bouvetIslandColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="854" cx="1000" stroke="black"/>
</g>
)
}

export default BouvetIsland