import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintLucia:React.FC = () => {

  const { saintLuciaColor } = useContext(ColorContext)
  const { saintLuciaDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintLucia'} onMouseOver={() => setCountrySelect('saintLucia')}>
  <style jsx>{`
  .saintLucia {
  fill: ${saintLuciaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintLuciaColor)}/>
  </pattern>
</defs>
{(saintLuciaDiff == 1) ?
<circle fill="url(#lc)" r="3.25" cy="419" cx="645" stroke="black"/>
:
<circle r="3.25" cy="419" cx="645" stroke="black"/>
}
</g>
)
}

export default SaintLucia