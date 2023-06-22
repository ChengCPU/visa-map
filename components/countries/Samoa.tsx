import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Samoa:React.FC = () => {

  const { samoaColor } = useContext(ColorContext)
  const { WS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'samoa'} onMouseOver={() => setCountrySelect('samoa')}>
  <style jsx>{`
  .samoa {
  fill: ${samoaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ws" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ws)" />
</defs>
{(WS == 1) ?
<circle fill="url(#ws)" r="5" cy="590" cx="20" stroke="black"/>
:
<circle r="5" cy="590" cx="20" stroke="black"/>
}
</g>
)
}

export default Samoa