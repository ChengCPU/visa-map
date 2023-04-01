import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Singapore:React.FC = () => {

  const { singaporeColor } = useContext(ColorContext)
  const { singaporeDiff } = useContext(DiffContext)

return (
<g className={'singapore'}>
  <style jsx>{`
  .singapore {
  fill: ${singaporeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sg" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(singaporeColor)}/>
  </pattern>
</defs>
{(singaporeDiff == 1) ?
<circle fill="url(#sg)" r="5" cy="492" cx="1575" stroke="black"/>
:
<circle r="5" cy="492" cx="1575" stroke="black"/>
}
</g>
)
}

export default Singapore