import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Serbia:React.FC = () => {

  const { serbiaColor } = useContext(ColorContext)
  const { serbiaDiff } = useContext(DiffContext)

return (
<g className={'serbia'}>
  <style jsx>{`
  .serbia {
  fill: ${serbiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="rs" x="0" y="0" width="1" height="1" viewBox="0 0 18 18">
    <image width="1500" height="1500" xlinkHref={gridCalculation(serbiaColor)}/>
  </pattern>
</defs>
{(serbiaDiff == 1) ?
<path fill="url(#rs)" d="M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z" stroke="black"/>
:
<path d="M1102 218.2l-1.1 1.4 0.7 2.4 2.8 2.7-1.8 2-0.6 2 0.6 0.8-0.7 0.8-2.4 0.2-1.7 0.3-0.3-0.5 0.6-0.7 0.4-1.6-0.7 0.1-1.1-1.2-0.9-0.3-0.8-1-1-0.4-0.8-0.9-0.9 0.4-0.5 2.1-1.2 0.4 0.4-0.5-2.1-1.3-1.7-0.7-0.9-0.9-1.4-1.1 1.1-0.3 0.5-2.9-2.7-2.5 1.1-2.8-1.9 0.1 1.7-2.4-1.7-1.8-1.5-2.5 3.7-1.6 3.2 0.3 3 2.4 0.8 2.1 3.2 1.4 0.7 2.6 3.1 1.9 1.5-1.4 1.3 0.7-1 1.1 1 1.1z" stroke="black"/>
}
</g>
)
}

export default Serbia