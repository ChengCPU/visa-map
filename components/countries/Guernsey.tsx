import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Guernsey:React.FC = () => {

  const { guernseyColor } = useContext(ColorContext)
  const { GG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guernsey'} onMouseOver={() => setCountrySelect('guernsey')}>
  <style jsx>{`
  .guernsey {
  fill: ${guernseyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gg)" />
</defs>
{(GG == 1) ?
<circle fill="url(#gg)" r="4" cy="185" cx="965" stroke="black"/>
:
<circle r="4" cy="185" cx="965" stroke="black"/>
}
</g>
)
}

export default Guernsey