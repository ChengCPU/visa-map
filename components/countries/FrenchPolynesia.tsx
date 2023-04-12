import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const FrenchPolynesia:React.FC = () => {

  const { frenchPolynesiaColor } = useContext(ColorContext)
  const { frenchPolynesiaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'frenchPolynesia'} onMouseOver={() => setCountrySelect('frenchPolynesia')}>
  <style jsx>{`
  .frenchPolynesia {
  fill: ${frenchPolynesiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pf" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(frenchPolynesiaColor)}/>
  </pattern>
</defs>
{(frenchPolynesiaDiff == 1) ?
<circle fill="url(#pf)" r="5" cy="614" cx="172" stroke="black"/>
:
<circle r="5" cy="614" cx="172" stroke="black"/>
}
</g>
)
}

export default FrenchPolynesia