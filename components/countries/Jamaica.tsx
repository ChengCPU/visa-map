import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Jamaica:React.FC = () => {

  const { jamaicaColor } = useContext(ColorContext)

return (
<g className={'jamaica'}>
  <style jsx>{`
  .jamaica {
  fill: ${jamaicaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="386" cx="554.5" stroke="black"/>
</g>
)
}

export default Jamaica