import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Palestine:React.FC = () => {

  const { palestineColor } = useContext(ColorContext)
  const { palestineDiff } = useContext(DiffContext)

return (
<g className={'palestine'}>
  <style jsx>{`
  .palestine {
  fill: ${palestineColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ps" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(palestineColor)}/>
  </pattern>
</defs>
{(palestineDiff == 1) ?
<>
<path fill="url(#ps)" d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z" />
<circle fill="url(#ps)" r="3" cy="297" cx="1178" stroke="black"/>
</>
:
<>
<path d="M1178.3 293.8l0.4 4-0.6 1.9-2.5 0.8 0.1-1.7 1.3-0.9-1.5-0.7 0.7-4.2 2.1 0.8z" />
<circle r="3" cy="297" cx="1178" stroke="black"/>
</>
}
</g>
)
}

export default Palestine