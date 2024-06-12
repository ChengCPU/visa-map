import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaintLucia:React.FC = () => {

  const { lc } = useContext(ColorContext)
  const { LC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintLucia'} onMouseOver={() => setCountrySelect('saintLucia')}>
  <style jsx>{`
  .saintLucia {
  fill: ${lc};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#lc)" />
</defs>
{LC ?
<circle fill="url(#lc)" r="3.25" cy="419" cx="645" stroke="black"/>
:
<circle r="3.25" cy="419" cx="645" stroke="black"/>
}
</g>
)
}

export default SaintLucia