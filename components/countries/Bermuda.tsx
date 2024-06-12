import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Bermuda:React.FC = () => {

  const { bm } = useContext(ColorContext)
  const { BM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bermuda'} onMouseOver={() => setCountrySelect('bermuda')}>
  <style jsx>{`
  .bermuda {
  fill: ${bm};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bm" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bm)" />
</defs>
{BM ?
<circle fill="url(#bm)" r="5" cy="294" cx="637" stroke="black"/>
:
<circle r="5" cy="294" cx="637" stroke="black"/>
}
</g>
)
}

export default Bermuda