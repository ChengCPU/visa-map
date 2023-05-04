import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Micronesia:React.FC = () => {

  const { micronesiaColor } = useContext(ColorContext)
  const { FM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'micronesia'} onMouseOver={() => setCountrySelect('micronesia')}>
  <style jsx>{`
  .micronesia {
  fill: ${micronesiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(micronesiaColor)}/>
  </pattern>
</defs>
{(FM == 1) ?
<circle fill="url(#fm)" r="5" cy="457" cx="1881" stroke="black"/>
:
<circle r="5" cy="457" cx="1881" stroke="black"/>
}
</g>
)
}

export default Micronesia