import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const TurksAndCaicos:React.FC = () => {

  const { turksAndCaicosColor } = useContext(ColorContext)

return (
<g className={'turksAndCaicos'}>
  <style jsx>{`
  .turksAndCaicos {
  fill: ${turksAndCaicosColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="361" cx="587" stroke="black"/>
</g>
)
}

export default TurksAndCaicos