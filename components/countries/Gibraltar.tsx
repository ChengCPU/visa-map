import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Gibraltar:React.FC = () => {

  const { gibraltarColor } = useContext(ColorContext)
  const { gibraltarDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'gibraltar'} onMouseOver={() => setCountrySelect('gibraltar')}>
  <style jsx>{`
  .gibraltar {
  fill: ${gibraltarColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gi" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(gibraltarColor)}/>
  </pattern>
</defs>
{(gibraltarDiff == 1) ?
<circle fill="url(#gi)" r="4" cy="270" cx="958" stroke="black"/>
:
<circle r="4" cy="270" cx="958" stroke="black"/>
}
</g>
)
}

export default Gibraltar