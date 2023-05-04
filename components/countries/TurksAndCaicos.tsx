import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const TurksAndCaicos:React.FC = () => {

  const { turksAndCaicosColor } = useContext(ColorContext)
  const { TC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'turksAndCaicos'} onMouseOver={() => setCountrySelect('turksAndCaicos')}>
  <style jsx>{`
  .turksAndCaicos {
  fill: ${turksAndCaicosColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(turksAndCaicosColor)}/>
  </pattern>
</defs>
{(TC == 1) ?
<circle fill="url(#tc)" r="4" cy="361" cx="587" stroke="black"/>
:
<circle r="4" cy="361" cx="587" stroke="black"/>
}
</g>
)
}

export default TurksAndCaicos