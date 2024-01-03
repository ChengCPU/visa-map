import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Grenada:React.FC = () => {

  const { gd } = useContext(ColorContext)
  const { GD } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'grenada'} onMouseOver={() => setCountrySelect('grenada')}>
  <style jsx>{`
  .grenada {
  fill: ${gd};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gd" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#gd)" />
</defs>
{(GD == 1) ?
<circle fill="url(#gd)" r="3.25" cy="428" cx="638" stroke="black"/>
:
<circle r="3.25" cy="428" cx="638" stroke="black"/>
}
</g>
)
}

export default Grenada