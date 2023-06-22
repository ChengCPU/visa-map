import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Belize:React.FC = () => {

  const { belizeColor } = useContext(ColorContext)
  const { BZ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'belize'} onMouseOver={() => setCountrySelect('belize')}>
  <style jsx>{`
  .belize {
  fill: ${belizeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bz" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bz)" />
</defs>
{(BZ == 1) ?
<>
<path fill="url(#bz)" d="M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z" />
<circle fill="url(#bz)" r="5" cy="392" cx="490" stroke="black"/>
</>
:
<>
<path d="M487.8 399.8l-1.7 0 1.3-7.2 0.7-5.1 0.1-1 0.7-0.3 0.9 0.8 2.5-3.9 1.1-0.1-0.1 1 1 0-0.3 1.8-1.3 2.7 0.4 1-0.9 2.3 0.3 0.6-1 3.3-1.3 1.7-1.1 0.2-1.3 2.2z" />
<circle r="5" cy="392" cx="490" stroke="black"/>
</>
}
</g>
)
}

export default Belize