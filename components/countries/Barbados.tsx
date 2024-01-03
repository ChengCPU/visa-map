import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Barbados:React.FC = () => {
    
  const { bb } = useContext(ColorContext)
  const { BB } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'barbados'} onMouseOver={() => setCountrySelect('barbados')}>
  <style jsx>{`
  .barbados {
  fill: ${bb};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bb" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bb)" />
</defs>
{(BB == 1) ?
<circle fill="url(#bb)" r="3.25" cy="422" cx="655" stroke="black"/>
:
<circle r="3.25" cy="422" cx="655" stroke="black"/>
}
</g>
)
}
    
export default Barbados