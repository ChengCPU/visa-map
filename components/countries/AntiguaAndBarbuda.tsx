import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const AntiguaAndBarbuda:React.FC = () => {

  const { ag } = useContext(ColorContext)
  const { AG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'antiguaAndBarbuda'} onMouseOver={() => setCountrySelect('antiguaAndBarbuda')}>
  <style jsx>{`
  .antiguaAndBarbuda {
  fill: ${ag};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ag" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ag)" />
</defs>
{AG ?
<circle fill="url(#ag)" r="3.25" cy="397" cx="642" stroke="black"/>
:
<circle r="3.25" cy="397" cx="642" stroke="black"/>
}
</g>
)
}

export default AntiguaAndBarbuda