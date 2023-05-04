import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Macao:React.FC = () => {

  const { macaoColor } = useContext(ColorContext)
  const { MO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'macao'} onMouseOver={() => setCountrySelect('macao')}>
  <style jsx>{`
  .macao {
  fill: ${macaoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mo" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(macaoColor)}/>
  </pattern>
</defs>
{(MO == 1) ?
<circle fill="url(#mo)" r="4" cy="360" cx="1614" stroke="black"/>
:
<circle r="4" cy="360" cx="1614" stroke="black"/>
}
</g>
)
}

export default Macao