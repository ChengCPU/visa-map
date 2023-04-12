import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const BritishVirginIslands:React.FC = () => {

  const { britishVirginIslandsColor } = useContext(ColorContext)
  const { britishVirginIslandsDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'britishVirginIslands'} onMouseOver={() => setCountrySelect('britishVirginIslands')}>
  <style jsx>{`
  .britishVirginIslands {
  fill: ${britishVirginIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vg" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(britishVirginIslandsColor)}/>
  </pattern>
</defs>
{(britishVirginIslandsDiff == 1) ?
<circle fill="url(#vg)" r="2.5" cy="382" cx="625" stroke="black"/>
:
<circle r="2.5" cy="382" cx="625" stroke="black"/>
}
</g>
)
}

export default BritishVirginIslands
