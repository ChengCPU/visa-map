import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Belgium:React.FC = () => {

  const { belgiumColor } = useContext(ColorContext)
  const { BE } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'belgium'} onMouseOver={() => setCountrySelect('belgium')}>
  <style jsx>{`
  .belgium {
  fill: ${belgiumColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="be" x="0" y="0" width="1" height="1" viewBox="5 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(belgiumColor)}/>
  </pattern>
</defs>
{(BE == 1) ?
<path fill="url(#be)" d="M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z" stroke="black"/>
:
<path d="M1016.5 177.1l-0.4 4.2-1.3 0.2-0.4 3.5-4.4-2.9-2.5 0.5-3.5-2.9-2.4-2.5-2.2-0.1-0.8-2.2 3.9-1.2 3.6 0.5 4.5-1.3 3.1 2.7 2.8 1.5z" stroke="black"/>
}
</g>
)
}
    
export default Belgium