import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Iraq:React.FC = () => {

  const { iraqColor } = useContext(ColorContext)
  const { IQ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'iraq'} onMouseOver={() => setCountrySelect('iraq')}>
  <style jsx>{`
  .iraq {
  fill: ${iraqColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="iq" x="0" y="0" width="1" height="1" viewBox="0 0 36 36">
    <image width="1500" height="1500" xlinkHref={gridCalculation(iraqColor)}/>
  </pattern>
</defs>
{(IQ == 1) ?
<path fill="url(#iq)" d="M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z" stroke="black"/>
:
<path d="M1223.5 263.2l4.7 7.6 3.8 2 0.9 3.7-2.3 2.2-0.5 5 4.6 6.1 7.1 3.6 3.5 4.8-0.2 4.7 1.7 0 0.5 3.4 3.5 3.4-3.3-0.3-3.7-0.6-3.3 6.2-10.2-0.5-16.8-12.9-8.6-4.5-6.8-1.8-3.1-7.8 11-6.7 1-7.7-1.2-4.7 2.7-1.6 2.1-4 2.1-1 6.3 0.9 2.1 1.6 2.4-1.1z" stroke="black"/>
}
</g>
)
}

export default Iraq