import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Mayotte:React.FC = () => {

  const { mayotteColor } = useContext(ColorContext)
  const { YT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'mayotte'} onMouseOver={() => setCountrySelect('mayotte')}>
  <style jsx>{`
  .mayotte {
  fill: ${mayotteColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="yt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#yt)" />
</defs>
{(YT == 1) ?
<circle fill="url(#yt)" r="4" cy="585" cx="1242" stroke="black"/>
:
<circle r="4" cy="585" cx="1242" stroke="black"/>
}
</g>
)
}

export default Mayotte