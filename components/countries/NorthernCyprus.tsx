import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const NorthernCyprus:React.FC = () => {

  const { northernCyprusColor } = useContext(ColorContext)
  const { northernCyprusDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'northernCyprus'} onMouseOver={() => setCountrySelect('northernCyprus')}>
  <style jsx>{`
  .northernCyprus {
  fill: ${northernCyprusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="rc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(northernCyprusColor)}/>
  </pattern>
</defs>
{(northernCyprusDiff == 1) ?
<circle fill="url(#rc)" r="3" cy="274.5" cx="1165" stroke="black"/>
:
<circle r="3" cy="274.5" cx="1165" stroke="black"/>
}
</g>
)
}

export default NorthernCyprus