import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const NorfolkIsland:React.FC = () => {

  const { norfolkIslandColor } = useContext(ColorContext)
  const { norfolkIslandDiff } = useContext(DiffContext)

return (
<g className={'norfolkIsland'}>
  <style jsx>{`
  .norfolkIsland {
  fill: ${norfolkIslandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nf" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(norfolkIslandColor)}/>
  </pattern>
</defs>
{(norfolkIslandDiff == 1) ?
<circle fill="url(#nf)" r="5" cy="690" cx="1900" stroke="black"/>
:
<circle r="5" cy="690" cx="1900" stroke="black"/>
}
</g>
)
}

export default NorfolkIsland