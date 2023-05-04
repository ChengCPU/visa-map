import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const PitcairnIslands:React.FC = () => {

  const { pitcairnIslandsColor } = useContext(ColorContext)
  const { PN } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'pitcairnIslands'} onMouseOver={() => setCountrySelect('pitcairnIslands')}>
  <style jsx>{`
  .pitcairnIslands {
  fill: ${pitcairnIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pn" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(pitcairnIslandsColor)}/>
  </pattern>
</defs>
{(PN == 1) ?
<circle fill="url(#pn)" r="5" cy="660" cx="300" stroke="black"/>
:
<circle r="5" cy="660" cx="300" stroke="black"/>
}
</g>
)
}

export default PitcairnIslands