import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Abkhazia:React.FC = () => {

  const { ab } = useContext(ColorContext)
  const { AB } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'abkhazia'} onMouseOver={() => setCountrySelect('abkhazia')}>
  <style jsx>{`
  .abkhazia {
  fill: ${ab};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ab" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ab)" />
</defs>
{AB ?
<circle fill="url(#ab)" r="3.5" cy="227" cx="1199" stroke="black"/>
:
<circle r="3.5" cy="227" cx="1199" stroke="black"/>
}
</g>
)
}

export default Abkhazia