import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CaymanIslands:React.FC = () => {

  const { caymanIslandsColor } = useContext(ColorContext)

return (
<g className={'caymanIslands'}>
  <style jsx>{`
  .caymanIslands {
  fill: ${caymanIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="377" cx="532" stroke="black"/>
</g>
)
}

export default CaymanIslands