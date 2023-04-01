import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Liechtenstein:React.FC = () => {

  const { liechtensteinColor } = useContext(ColorContext)
  const { liechtensteinDiff } = useContext(DiffContext)

return (
<g className={'liechtenstein'}>
  <style jsx>{`
  .liechtenstein {
  fill: ${liechtensteinColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="li" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(liechtensteinColor)}/>
  </pattern>
</defs>
{(liechtensteinDiff == 1) ?
<circle fill="url(#li)" r="4" cy="200" cx="1038" stroke="black"/>
:
<circle r="4" cy="200" cx="1038" stroke="black"/>
}
</g>
)
}

export default Liechtenstein