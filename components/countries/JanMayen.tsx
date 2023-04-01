import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const JanMayen:React.FC = () => {

  const { janMayenColor } = useContext(ColorContext)
  const { janMayenDiff } = useContext(DiffContext)

return (
<g className={'janMayen'}>
  <style jsx>{`
  .janMayen {
  fill: ${janMayenColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(janMayenColor)}/>
  </pattern>
</defs>
{(janMayenDiff == 1) ?
<circle fill="url(#xm)" r="5" cy="60" cx="952" stroke="black"/>
:
<circle r="5" cy="60" cx="952" stroke="black"/>
}
</g>
)
}

export default JanMayen