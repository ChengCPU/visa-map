import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const TristanDaCunha:React.FC = () => {

  const { tristanDaCunhaColor } = useContext(ColorContext)
  const { TX } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tristanDaCunha'} onMouseOver={() => setCountrySelect('tristanDaCunha')}>
  <style jsx>{`
  .tristanDaCunha {
  fill: ${tristanDaCunhaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tx" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(tristanDaCunhaColor)}/>
  </pattern>
</defs>
{(TX == 1) ?
<circle fill="url(#tx)" r="4" cy="745" cx="910" stroke="black"/>
:
<circle r="4" cy="745" cx="910" stroke="black"/>
}
</g>
)
}

export default TristanDaCunha