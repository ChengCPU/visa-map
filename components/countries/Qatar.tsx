import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Qatar:React.FC = () => {

  const { qatarColor } = useContext(ColorContext)
  const { qatarDiff } = useContext(DiffContext)

return (
<g className={'qatar'}>
  <style jsx>{`
  .qatar {
  fill: ${qatarColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="qa" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(qatarColor)}/>
  </pattern>
</defs>
{(qatarDiff == 1) ?
<>
<path fill="url(#qa)" d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z" />
<circle fill="url(#qa)" r="5" cy="339.5" cx="1270" stroke="black"/>
</>
:
<>
<path d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z" />
<circle r="5" cy="339.5" cx="1270" stroke="black"/>
</>
}
</g>
)
}

export default Qatar