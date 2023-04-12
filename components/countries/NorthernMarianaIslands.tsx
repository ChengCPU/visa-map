import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const NorthernMarianaIslands:React.FC = () => {

  const { northernMarianaIslandsColor } = useContext(ColorContext)
  const { northernMarianaIslandsDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'northernMarianaIslands'} onMouseOver={() => setCountrySelect('northernMarianaIslands')}>
  <style jsx>{`
  .northernMarianaIslands {
  fill: ${northernMarianaIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mp" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(northernMarianaIslandsColor)}/>
  </pattern>
</defs>
{(northernMarianaIslandsDiff == 1) ?
<circle fill="url(#mp)" r="5" cy="396" cx="1802" stroke="black"/>
:
<circle r="5" cy="396" cx="1802" stroke="black"/>
}
</g>
)
}

export default NorthernMarianaIslands