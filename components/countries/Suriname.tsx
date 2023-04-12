import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Suriname:React.FC = () => {

  const { surinameColor } = useContext(ColorContext)
  const { surinameDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'suriname'} onMouseOver={() => setCountrySelect('suriname')}>
  <style jsx>{`
  .suriname {
  fill: ${surinameColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sr" x="0" y="0" width="1" height="1" viewBox="0 20 16 16">
    <image width="1500" height="1500" xlinkHref={gridCalculation(surinameColor)}/>
  </pattern>
</defs>
{(surinameDiff == 1) ?
<path fill="url(#sr)" d="M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z" stroke="black"/>
:
<path d="M681 464.9l-3.1 5.5 0.3 4.4 2.2 3.8-1.1 2.7-0.5 3-1.5 2.7-3.2-1.4-2.7 0.7-2.3-0.6-0.6 1.9 1 1.2-0.6 1.4-3.1-0.6-3.3-5.6-0.7-3.6-1.8 0-2.4-4.6 1.1-3.4-0.3-1.5 3.5-1.6 1-5.8 6.8 1.3 0.6-1.2 4.6-0.5 6.1 1.8z" stroke="black"/>
}
</g>
)
}

export default Suriname