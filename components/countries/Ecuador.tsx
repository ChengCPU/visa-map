import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Ecuador:React.FC = () => {

  const { ecuadorColor } = useContext(ColorContext)
  const { EC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'ecuador'} onMouseOver={() => setCountrySelect('ecuador')}>
  <style jsx>{`
  .ecuador {
  fill: ${ecuadorColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ec" x="0" y="0" width="1" height="1" viewBox="0 10 20 20">
    <image width="1500" height="1500" xlinkHref={gridCalculation(ecuadorColor)}/>
  </pattern>
</defs>
{(EC == 1) ?
<path fill="url(#ec)" d="M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z" stroke="black"/>
:
<path d="M559 502.8l0.8 4.9-1.7 4.1-6.1 6.8-6.7 2.5-3.4 5.6-0.9 4.3-3.1 2.7-2.5-3.3-2.3-0.7-2.3 0.5-0.3-2.3 1.6-1.5-0.7-2.7 2.9-4.8-1.3-2.8-2.1 3-3.5-2.9 1.1-1.8-1-5.8 2-1 1-4 2.1-4.1-0.3-2.6 3.1-1.4 3.9-2.5 5.6 3.6 1.1-0.1 1.4 2.8 4.8 0.9 1.6-1 2.8 2.1 2.4 1.5z" stroke="black"/>
}
</g>
)
}

export default Ecuador