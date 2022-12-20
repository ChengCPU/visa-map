import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Grenada:React.FC = () => {

  const { grenadaColor } = useContext(ColorContext)

return (
<g className={'grenada'}>
  <style jsx>{`
  .grenada {
  fill: ${grenadaColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="428" cx="638" stroke="black"/>
</g>
)
}

export default Grenada