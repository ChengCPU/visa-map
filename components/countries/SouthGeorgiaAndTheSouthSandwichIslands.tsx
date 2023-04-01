import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SouthGeorgiaAndTheSouthSandwichIslands:React.FC = () => {

  const { southGeorgiaAndTheSouthSandwichIslandsColor } = useContext(ColorContext)
  const { southGeorgiaAndTheSouthSandwichIslandsDiff } = useContext(DiffContext)

return (
<g className={'southGeorgiaAndTheSouthSandwichIslands'}>
  <style jsx>{`
  .southGeorgiaAndTheSouthSandwichIslands {
  fill: ${southGeorgiaAndTheSouthSandwichIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gs" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(southGeorgiaAndTheSouthSandwichIslandsColor)}/>
  </pattern>
</defs>
{(southGeorgiaAndTheSouthSandwichIslandsDiff == 1) ?
<circle fill="url(#gs)" r="5" cy="852" cx="770" stroke="black"/>
:
<circle r="5" cy="852" cx="770" stroke="black"/>
}
</g>
)
}

export default SouthGeorgiaAndTheSouthSandwichIslands