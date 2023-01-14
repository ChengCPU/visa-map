import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Barbados:React.FC = () => {
    
  const { barbadosColor } = useContext(ColorContext)
  const { barbadosDiff } = useContext(DiffContext)

return (
<g className={'barbados'}>
  <style jsx>{`
  .barbados {
  fill: ${barbadosColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bb" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(barbadosDiff == 1) ?
<circle fill="url(#bb)" r="3.25" cy="422" cx="655" stroke="black"/>
:
<circle r="3.25" cy="422" cx="655" stroke="black"/>
}
</g>
)
}
    
export default Barbados