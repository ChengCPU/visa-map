import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Curacao:React.FC = () => {

  const { curacaoColor } = useContext(ColorContext)
  const { curacaoDiff } = useContext(DiffContext)

return (
<g className={'curacao'}>
  <style jsx>{`
  .curacao {
  fill: ${curacaoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(curacaoColor)}/>
  </pattern>
</defs>
{(curacaoDiff == 1) ?
<circle fill="url(#cw)" r="2.5" cy="424" cx="598" stroke="black"/>
:
<circle r="2.5" cy="424" cx="598" stroke="black"/>
}
</g>
)
}

export default Curacao