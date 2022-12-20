import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Barbados:React.FC = () => {
    
  const { barbadosColor } = useContext(ColorContext)

return (
<g className={'barbados'}>
  <style jsx>{`
  .barbados {
  fill: ${barbadosColor};
  stroke-width: 1;
  }
  `}</style>
<circle r="3.25" cy="422" cx="655" stroke="black"/>
</g>
)
}
    
export default Barbados