import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Seychelles:React.FC = () => {

  const { seychellesColor } = useContext(ColorContext)
  const { SC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'seychelles'} onMouseOver={() => setCountrySelect('seychelles')}>
  <style jsx>{`
  .seychelles {
  fill: ${seychellesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sc)" />
</defs>
{(SC == 1) ?
<circle fill="url(#sc)" r="5" cy="531" cx="1300" stroke="black"/>
:
<circle r="5" cy="531" cx="1300" stroke="black"/>
}
</g>
)
}

export default Seychelles