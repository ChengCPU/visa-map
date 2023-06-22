import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const BritishVirginIslands:React.FC = () => {

  const { britishVirginIslandsColor } = useContext(ColorContext)
  const { VG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'britishVirginIslands'} onMouseOver={() => setCountrySelect('britishVirginIslands')}>
  <style jsx>{`
  .britishVirginIslands {
  fill: ${britishVirginIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="vg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#vg)" />
</defs>
{(VG == 1) ?
<circle fill="url(#vg)" r="2.5" cy="382" cx="625" stroke="black"/>
:
<circle r="2.5" cy="382" cx="625" stroke="black"/>
}
</g>
)
}

export default BritishVirginIslands
