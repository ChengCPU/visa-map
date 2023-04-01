import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Mauritius:React.FC = () => {

  const { mauritiusColor } = useContext(ColorContext)
  const { mauritiusDiff } = useContext(DiffContext)

return (
<g className={'mauritius'}>
  <style jsx>{`
  .mauritius {
  fill: ${mauritiusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mu" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(mauritiusColor)}/>
  </pattern>
</defs>
{(mauritiusDiff == 1) ?
<circle fill="url(#mu)" r="5" cy="630" cx="1307" stroke="black"/>
:
<circle r="5" cy="630" cx="1307" stroke="black"/>
}
</g>
)
}

export default Mauritius