import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Estonia:React.FC = () => {

  const { estoniaColor } = useContext(ColorContext)
  const { estoniaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'estonia'} onMouseOver={() => setCountrySelect('estonia')}>
  <style jsx>{`
  .estonia {
  fill: ${estoniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ee" x="0" y="0" width="1" height="1" viewBox="10 0 12 12">
    <image width="1500" height="1500" xlinkHref={gridCalculation(estoniaColor)}/>
  </pattern>
</defs>
{(estoniaDiff == 1) ?
<path fill="url(#ee)" d="M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z" stroke="black"/>
:
<path d="M1113.7 124.6l0.9 1-2.6 3.4 2.4 5.6-1.6 1.9-3.8-0.1-4.4-2.2-2.1-0.7-3.8 1-0.1-3.5-1.5 0.8-3.3-2.1-1-3.4 5.5-1.7 5.6-0.8 5.1 0.9 4.7-0.1z" stroke="black"/>
}
</g>
)
}

export default Estonia