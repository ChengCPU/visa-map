import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaintHelena:React.FC = () => {

  const { saintHelenaColor } = useContext(ColorContext)
  const { SH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintHelena'} onMouseOver={() => setCountrySelect('saintHelena')}>
  <style jsx>{`
  .saintHelena {
  fill: ${saintHelenaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sh)" />
</defs>
{(SH == 1) ?
<circle fill="url(#sh)" r="5" cy="600" cx="947" stroke="black"/>
:
<circle r="5" cy="600" cx="947" stroke="black"/>
}
</g>
)
}

export default SaintHelena