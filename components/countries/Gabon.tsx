import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Gabon:React.FC = () => {

  const { gabonColor } = useContext(ColorContext)
  const { gabonDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'gabon'} onMouseOver={() => setCountrySelect('gabon')}>
  <style jsx>{`
  .gabon {
  fill: ${gabonColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ga" x="0" y="0" width="1" height="1" viewBox="0 20 23 23">
    <image width="1500" height="1500" xlinkHref={gridCalculation(gabonColor)}/>
  </pattern>
</defs>
{(gabonDiff == 1) ?
<path fill="url(#ga)" d="M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z" stroke="black"/>
:
<path d="M1060.5 487.3l-0.4 2.8 1.6 3.3 4.2-0.5 1.4 1.2-2.5 7.5 2.7 3.8 0.6 5-0.7 4.3-1.7 3-5-0.3-3.1-3.1-0.4 2.9-3.8 0.8-2 1.6 2.1 4.2-4.3 3.6-5.8-6.5-3.7-5.3-3.5-6.6 0.2-2.2 1.3-2 1.3-4.7 1.2-4.8 1.9-0.3 8.2 0 0-7.7 2.7-0.4 3.4 0.8 3.4-0.8 0.7 0.4z" stroke="black"/>
}
</g>
)
}

export default Gabon