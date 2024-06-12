import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Qatar:React.FC = () => {

  const { qa } = useContext(ColorContext)
  const { QA } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'qatar'} onMouseOver={() => setCountrySelect('qatar')}>
  <style jsx>{`
  .qatar {
  fill: ${qa};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="qa" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#qa)" />
</defs>
{QA ?
<>
<path fill="url(#qa)" d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z" />
<circle fill="url(#qa)" r="5" cy="339.5" cx="1270" stroke="black"/>
</>
:
<>
<path d="M1270.1 343.7l-1.5 0.5-1.8-1.3-0.8-4.7 1.1-3.3 1.5-0.7 1.8 2 0.5 3.7-0.8 3.8z" />
<circle r="5" cy="339.5" cx="1270" stroke="black"/>
</>
}
</g>
)
}

export default Qatar