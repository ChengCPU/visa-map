import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Tokelau:React.FC = () => {

  const { tk } = useContext(ColorContext)
  const { TK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tokelau'} onMouseOver={() => setCountrySelect('tokelau')}>
  <style jsx>{`
  .tokelau {
  fill: ${tk};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#tk)" />
</defs>
{TK ?
<circle fill="url(#tk)" r="5" cy="560" cx="25" stroke="black"/>
:
<circle r="5" cy="560" cx="25" stroke="black"/>
}
</g>
)
}

export default Tokelau