import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const NorthernMarianaIslands = () => {

  const { northernMarianaIslandsColor } = useContext(ColorContext)

return (
<g className={'northernMarianaIslands'}>
  <style jsx>{`
  .northernMarianaIslands {
  fill: ${northernMarianaIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="396" cx="1802" stroke="black"/>
</g>
)
}

export default NorthernMarianaIslands