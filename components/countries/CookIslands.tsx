import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const CookIslands:React.FC = () => {

  const { cookIslandsColor } = useContext(ColorContext)

return (
<g className={'cookIslands'}>
  <style jsx>{`
  .cookIslands {
  fill: ${cookIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="631" cx="100" stroke="black"/>
</g>
)
}

export default CookIslands