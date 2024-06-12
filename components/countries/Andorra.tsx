import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Andorra:React.FC = () => {

  const { ad } = useContext(ColorContext)
  const { AD } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'andorra'} onMouseOver={() => setCountrySelect('andorra')}>
  <style jsx>{`
  .andorra {
  fill: ${ad};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ad" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ad)" />
</defs>
{AD ?
<circle fill="url(#ad)" r="4" cy="230" cx="993" stroke="black"/>
:
<circle r="4" cy="230" cx="993" stroke="black"/>
}
</g>
)
}

export default Andorra