import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Macao:React.FC = () => {

  const { macaoColor } = useContext(ColorContext)

return (
<g className={'macao'}>
  <style jsx>{`
  .macao {
  fill: ${macaoColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="360" cx="1614" stroke="black"/>
</g>
)
}

export default Macao