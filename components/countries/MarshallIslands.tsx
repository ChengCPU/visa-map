import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const MarshallIslands:React.FC = () => {

  const { marshallIslandsColor } = useContext(ColorContext)

return (
<g className={'marshallIslands'}>
  <style jsx>{`
  .marshallIslands {
  fill: ${marshallIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="456" cx="1953" stroke="black"/>
</g>
)
}

export default MarshallIslands