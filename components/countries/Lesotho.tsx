import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Lesotho:React.FC = () => {

  const { lesothoColor } = useContext(ColorContext)
  const { LS } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'lesotho'} onMouseOver={() => setCountrySelect('lesotho')}>
  <style jsx>{`
  .lesotho {
  fill: ${lesothoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ls" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ls)" />
</defs>
{(LS == 1) ?
<>
<path fill="url(#ls)" d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z" />
<circle fill="url(#ls)" r="5" cy="692" cx="1140" stroke="black"/>
</>
:
<>
<path d="M1139.1 697.9l-2 0.7-3.7-5 3.2-4 3.1-2.5 2.7-1.4 2.2 2 1.7 2-1.9 3.1-1.1 2.1-3.1 1-1.1 2z" />
<circle r="5" cy="692" cx="1140" stroke="black"/>
</>
}
</g>
)
}

export default Lesotho