import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Martinique:React.FC = () => {

  const { martiniqueColor } = useContext(ColorContext)
  const { martiniqueDiff } = useContext(DiffContext)

return (
<g className={'martinique'}>
  <style jsx>{`
  .martinique {
  fill: ${martiniqueColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mq" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(martiniqueColor)}/>
  </pattern>
</defs>
{(martiniqueDiff == 1) ?
<circle fill="url(#mq)" r="2.5" cy="413" cx="648" stroke="black"/>
:
<circle r="2.5" cy="413" cx="648" stroke="black"/>
}
</g>
)
}

export default Martinique