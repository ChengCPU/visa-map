import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const BouvetIsland:React.FC = () => {

  const { bouvetIslandColor } = useContext(ColorContext)
  const { bouvetIslandDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bouvetIsland'} onMouseOver={() => setCountrySelect('bouvetIsland')}>
  <style jsx>{`
  .bouvetIsland {
  fill: ${bouvetIslandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bouvetIslandColor)}/>
  </pattern>
</defs>
{(bouvetIslandDiff == 1) ?
<circle fill="url(#bv)" r="5" cy="854" cx="1000" stroke="black"/>
:
<circle r="5" cy="854" cx="1000" stroke="black"/>
}
</g>
)
}

export default BouvetIsland