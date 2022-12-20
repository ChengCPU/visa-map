import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const SanMarino:React.FC = () => {

  const { sanMarinoColor } = useContext(ColorContext)

return (
<g className={'sanMarino'}>
  <style jsx>{`
  .sanMarino {
  fill: ${sanMarinoColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="4" cy="223" cx="1053" stroke="black"/>
</g>
)
}

export default SanMarino