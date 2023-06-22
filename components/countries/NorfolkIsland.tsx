import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const NorfolkIsland:React.FC = () => {

  const { norfolkIslandColor } = useContext(ColorContext)
  const { NF } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'norfolkIsland'} onMouseOver={() => setCountrySelect('norfolkIsland')}>
  <style jsx>{`
  .norfolkIsland {
  fill: ${norfolkIslandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#nf)" />
</defs>
{(NF == 1) ?
<circle fill="url(#nf)" r="5" cy="690" cx="1900" stroke="black"/>
:
<circle r="5" cy="690" cx="1900" stroke="black"/>
}
</g>
)
}

export default NorfolkIsland