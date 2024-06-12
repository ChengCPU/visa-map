import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Kuwait:React.FC = () => {

  const { kw } = useContext(ColorContext)
  const { KW } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'kuwait'} onMouseOver={() => setCountrySelect('kuwait')}>
  <style jsx>{`
  .kuwait {
  fill: ${kw};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="kw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#kw)" />
</defs>
<path d="M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z" />
{KW ?
<circle fill="url(#kw)" r="5" cy="313" cx="1247" stroke="black"/>
:
<circle r="5" cy="313" cx="1247" stroke="black"/>
}
</g>
)
}

export default Kuwait