import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const BritishIndianOceanTerritory:React.FC = () => {

  const { io } = useContext(ColorContext)
  const { IO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'britishIndianOceanTerritory'} onMouseOver={() => setCountrySelect('britishIndianOceanTerritory')}>
  <style jsx>{`
  .britishIndianOceanTerritory {
  fill: ${io};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="io" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#io)" />
</defs>
{IO ?
<circle fill="url(#io)" r="5" cy="550" cx="1395" stroke="black"/>
:
<circle r="5" cy="550" cx="1395" stroke="black"/>
}
</g>
)
}

export default BritishIndianOceanTerritory