import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SierraLeone:React.FC = () => {

  const { sierraLeoneColor } = useContext(ColorContext)
  const { sierraLeoneDiff } = useContext(DiffContext)

return (
<g className={'sierraLeone'}>
  <style jsx>{`
  .sierraLeone {
  fill: ${sierraLeoneColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sl" x="0" y="0" width="1" height="1" viewBox="0 10 12 12">
    <image width="1500" height="1500" xlinkHref={gridCalculation(sierraLeoneColor)}/>
  </pattern>
</defs>
{(sierraLeoneDiff == 1) ?
<path fill="url(#sl)" d="M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z" stroke="black"/>
:
<path d="M928.5 447.9l-2.6 3-2.6 3.4-0.3 1.9-1.4 2.1-1.5-0.5-4-2.6-3-3.4-0.9-2.4-0.7-4.7 3.1-2.9 0.6-1.7 1-1.4 1.6-0.2 1.3-1.2 4.5 0 1.6 2.3 1.2 2.7-0.2 1.9 0.9 1.7-0.1 2.3 1.5-0.3z" stroke="black"/>
}
</g>
)
}

export default SierraLeone