import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Israel:React.FC = () => {

  const { israelColor } = useContext(ColorContext)
  const { israelDiff } = useContext(DiffContext)

return (
<g className={'israel'}>
  <style jsx>{`
  .israel {
  fill: ${israelColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="il" x="0" y="0" width="1" height="1" viewBox="0 20 5 5">
    <image width="1500" height="1500" xlinkHref={gridCalculation(israelColor)}/>
  </pattern>
</defs>
{(israelDiff == 1) ?
<path fill="url(#il)" d="M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z" stroke="black"/>
:
<path d="M1179.1 288.2l0.4 2.6-0.6 1 0.1 0-0.7 2-2.1-0.8-0.7 4.2 1.5 0.7-1.3 0.9-0.1 1.7 2.5-0.8 0.4 2.5-1.8 10.2-0.7-1.6-3.9-9.4 1.4-2.1-0.4-0.4 1.1-3 0.6-4.8 0.6-1.7 0.1 0 1.8 0 0.4-1.1 1.4-0.1z" stroke="black"/>
}
</g>
)
}

export default Israel