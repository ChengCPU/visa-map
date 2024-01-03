import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Gambia:React.FC = () => {

  const { gm } = useContext(ColorContext)
  const { GM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'gambia'} onMouseOver={() => setCountrySelect('gambia')}>
  <style jsx>{`
  .gambia {
  fill: ${gm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gm)" />
</defs>
{(GM == 1) ?
<>
<path fill="url(#gm)" d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z" />
<circle fill="url(#gm)" r="5" cy="415" cx="900" stroke="black"/>
</>
:
<>
<path d="M891.6 417.4l0.8-2.9 6.1-0.1 1.3-1.6 1.8-0.1 2.2 1.6 1.7 0 1.9-1 1.1 1.8-2.5 1.5-2.4-0.2-2.4-1.3-2.1 1.5-1 0-1.4 0.9-5.1-0.1z" />
<circle r="5" cy="415" cx="900" stroke="black"/>
</>
}
</g>
)
}

export default Gambia