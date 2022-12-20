import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Tonga:React.FC = () => {

  const { tongaColor } = useContext(ColorContext)

return (
<g className={'tonga'}>
  <style jsx>{`
  .tonga {
  fill: ${tongaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="630" cx="13" stroke="black"/>
</g>
)
}

export default Tonga