import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Aruba:React.FC = () => {

  const { arubaColor } = useContext(ColorContext)
  const { arubaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'aruba'} onMouseOver={() => setCountrySelect('aruba')}>
  <style jsx>{`
  .aruba {
  fill: ${arubaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="aw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(arubaColor)}/>
  </pattern>
</defs>
{(arubaDiff == 1) ?
<circle fill="url(#aw)" r="2.5" cy="422" cx="590" stroke="black"/>
:
<circle r="2.5" cy="422" cx="590" stroke="black"/>
}
</g>
)
}

export default Aruba