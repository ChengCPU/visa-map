import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Jamaica:React.FC = () => {

  const { jamaicaColor } = useContext(ColorContext)
  const { jamaicaDiff } = useContext(DiffContext)

return (
<g className={'jamaica'}>
  <style jsx>{`
  .jamaica {
  fill: ${jamaicaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="jm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(jamaicaColor)}/>
  </pattern>
</defs>
{(jamaicaDiff == 1) ?
<circle fill="url(#jm)" r="5" cy="386" cx="554.5" stroke="black"/>
:
<circle r="5" cy="386" cx="554.5" stroke="black"/>
}
</g>
)
}

export default Jamaica