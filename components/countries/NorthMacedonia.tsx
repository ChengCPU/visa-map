import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const NorthMacedonia:React.FC = () => {

  const { northMacedoniaColor } = useContext(ColorContext)
  const { northMacedoniaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'northMacedonia'} onMouseOver={() => setCountrySelect('northMacedonia')}>
  <style jsx>{`
  .northMacedonia {
  fill: ${northMacedoniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mk" x="0" y="0" width="1" height="1" viewBox="20 0 7 7">
    <image width="1500" height="1500" xlinkHref={gridCalculation(northMacedoniaColor)}/>
  </pattern>
</defs>
{(northMacedoniaDiff == 1) ?
<path fill="url(#mk)" d="M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z" stroke="black"/>
:
<path d="M1105.5 236.6l-1 0.2-0.8 1.1-2.8-0.1-1.8 1.4-3.4 0.5-2.3-1.5-1-2.7 0.5-2.2 0.7 0.1 0.1-1.3 2.9-1 1.2-0.3 1.7-0.3 2.4-0.2 2.8 2.1 0.8 4.2z" stroke="black"/>
}
</g>
)
}

export default NorthMacedonia