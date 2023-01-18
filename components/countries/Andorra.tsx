import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Andorra:React.FC = () => {

  const { andorraColor } = useContext(ColorContext)
  const { andorraDiff } = useContext(DiffContext)

return (
<g className={'andorra'}>
  <style jsx>{`
  .andorra {
  fill: ${andorraColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ad" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(andorraColor)}/>
  </pattern>
</defs>
{(andorraDiff == 1) ?
<circle fill="url(#ad)" r="4" cy="230" cx="993" stroke="black"/>
:
<circle r="4" cy="230" cx="993" stroke="black"/>
}
</g>
)
}

export default Andorra