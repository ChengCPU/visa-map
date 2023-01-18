import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Maldives:React.FC = () => {

  const { maldivesColor } = useContext(ColorContext)
  const { maldivesDiff } = useContext(DiffContext)

return (
<g className={'maldives'}>
  <style jsx>{`
  .maldives {
  fill: ${maldivesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(maldivesColor)}/>
  </pattern>
</defs>
{(maldivesDiff == 1) ?
<circle fill="url(#mv)" r="5" cy="474" cx="1402" stroke="black"/>
:
<circle r="5" cy="474" cx="1402" stroke="black"/>
}
</g>
)
}

export default Maldives