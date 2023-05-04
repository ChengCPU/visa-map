import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Dominica:React.FC = () => {

  const { dominicaColor } = useContext(ColorContext)
  const { DM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'dominica'} onMouseOver={() => setCountrySelect('dominica')}>
  <style jsx>{`
  .dominica {
  fill: ${dominicaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="dm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(dominicaColor)}/>
  </pattern>
</defs>
{(DM == 1) ?
<circle fill="url(#dm)" r="3.25" cy="409" cx="643" stroke="black"/>
:
<circle r="3.25" cy="409" cx="643" stroke="black"/>
}
</g>
)
}

export default Dominica