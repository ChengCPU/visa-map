import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Micronesia:React.FC = () => {

  const { micronesiaColor } = useContext(ColorContext)
  const { micronesiaDiff } = useContext(DiffContext)

return (
<g className={'micronesia'}>
  <style jsx>{`
  .micronesia {
  fill: ${micronesiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(micronesiaColor)}/>
  </pattern>
</defs>
{(micronesiaDiff == 1) ?
<circle fill="url(#fm)" r="5" cy="457" cx="1881" stroke="black"/>
:
<circle r="5" cy="457" cx="1881" stroke="black"/>
}
</g>
)
}

export default Micronesia