import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Transnistria:React.FC = () => {

  const { transnistriaColor } = useContext(ColorContext)
  const { XT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'transnistria'} onMouseOver={() => setCountrySelect('transnistria')}>
  <style jsx>{`
  .transnistria {
  fill: ${transnistriaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xt)" />
</defs>
{(XT == 1) ?
<circle fill="url(#xt)" r="2.5" cy="198" cx="1132.7" stroke="black"/>
:
<circle r="2.5" cy="198" cx="1132.7" stroke="black"/>
}
</g>
)
}

export default Transnistria