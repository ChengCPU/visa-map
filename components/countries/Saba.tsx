import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Saba:React.FC = () => {

  const { xs } = useContext(ColorContext)
  const { XS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saba'} onMouseOver={() => setCountrySelect('saba')}>
  <style jsx>{`
  .saba {
  fill: ${xs};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xs" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xs)" />
</defs>
{XS ?
<circle fill="url(#xs)" r="2.5" cy="392" cx="624" stroke="black"/>
:
<circle r="2.5" cy="392" cx="624" stroke="black"/>
}
</g>
)
}

export default Saba