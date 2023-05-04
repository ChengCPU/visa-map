import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Guadeloupe:React.FC = () => {

  const { guadeloupeColor } = useContext(ColorContext)
  const { GP } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guadeloupe'} onMouseOver={() => setCountrySelect('guadeloupe')}>
  <style jsx>{`
  .guadeloupe {
  fill: ${guadeloupeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gp" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(guadeloupeColor)}/>
  </pattern>
</defs>
{(GP == 1) ?
<circle fill="url(#gp)" r="2.5" cy="403" cx="642" stroke="black"/>
:
<circle r="2.5" cy="403" cx="642" stroke="black"/>
}
</g>
)
}

export default Guadeloupe