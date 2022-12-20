import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const FrenchPolynesia:React.FC = () => {

  const { frenchPolynesiaColor } = useContext(ColorContext)

return (
<g className={'frenchPolynesia'}>
  <style jsx>{`
  .frenchPolynesia {
  fill: ${frenchPolynesiaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="5" cy="614" cx="172" stroke="black"/>
</g>
)
}

export default FrenchPolynesia