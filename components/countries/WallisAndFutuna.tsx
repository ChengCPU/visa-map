import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const WallisAndFutuna:React.FC = () => {

  const { wf } = useContext(ColorContext)
  const { WF } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'wallisAndFutuna'} onMouseOver={() => setCountrySelect('wallisAndFutuna')}>
  <style jsx>{`
  .wallisAndFutuna {
  fill: ${wf};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="wf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#wf)" />
</defs>
{(WF == 1) ?
<circle fill="url(#wf)" r="5" cy="590" cx="2015" stroke="black"/>
:
<circle r="5" cy="590" cx="2015" stroke="black"/>
}
</g>
)
}

export default WallisAndFutuna