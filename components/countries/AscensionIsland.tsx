import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const AscensionIsland:React.FC = () => {

  const { ascensionIslandColor } = useContext(ColorContext)
  const { AC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'ascensionIsland'} onMouseOver={() => setCountrySelect('ascensionIsland')}>
  <style jsx>{`
  .ascensionIsland {
  fill: ${ascensionIslandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ac" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(ascensionIslandColor)}/>
  </pattern>
</defs>
{(AC == 1) ?
<circle fill="url(#ac)" r="4" cy="550" cx="900" stroke="black"/>
:
<circle r="4" cy="550" cx="900" stroke="black"/>
}
</g>
)
}

export default AscensionIsland