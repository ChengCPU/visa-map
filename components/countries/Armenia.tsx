import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Armenia:React.FC = () => {

  const { armeniaColor } = useContext(ColorContext)
  const { armeniaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'armenia'} onMouseOver={() => setCountrySelect('armenia')}>
  <style jsx>{`
  .armenia {
  fill: ${armeniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="am" x="0" y="0" width="1" height="1" viewBox="0 0 12 12">
    <image width="1500" height="1500" xlinkHref={gridCalculation(armeniaColor)}/>
  </pattern>
</defs>
{(armeniaDiff == 1) ?
<path fill="url(#am)" d="M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z" stroke="black"/>
:
<path d="M1230.8 253l-1.8 0.2-2.8-3.7-0.2-1-2.3 0-1.9-1.7-1 0.1-2.4-1.8-4.2-1.6-0.1-3.1-1.3-2.2 7-1 1.4 1.6 2.2 1.1-0.7 1.6 3.2 2.2-1.1 2.1 2.6 1.7 2.5 1 0.9 4.5z" stroke="black"/>
}
</g>
)
}
    
export default Armenia