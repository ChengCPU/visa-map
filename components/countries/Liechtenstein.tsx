import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Liechtenstein:React.FC = () => {

  const { liechtensteinColor } = useContext(ColorContext)
  const { LI } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'liechtenstein'} onMouseOver={() => setCountrySelect('liechtenstein')}>
  <style jsx>{`
  .liechtenstein {
  fill: ${liechtensteinColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="li" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(liechtensteinColor)}/>
  </pattern>
</defs>
{(LI == 1) ?
<circle fill="url(#li)" r="4" cy="200" cx="1038" stroke="black"/>
:
<circle r="4" cy="200" cx="1038" stroke="black"/>
}
</g>
)
}

export default Liechtenstein