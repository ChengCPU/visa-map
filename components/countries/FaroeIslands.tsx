import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const FaroeIslands:React.FC = () => {

  const { faroeIslandsColor } = useContext(ColorContext)
  const { FO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'faroeIslands'} onMouseOver={() => setCountrySelect('faroeIslands')}>
  <style jsx>{`
  .faroeIslands {
  fill: ${faroeIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fo" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#fo)" />
</defs>
{(FO == 1) ?
<circle fill="url(#fo)" r="5" cy="109" cx="954" stroke="black"/>
:
<circle r="5" cy="109" cx="954" stroke="black"/>
}
</g>
)
}

export default FaroeIslands