import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const VaticanCity:React.FC = () => {

  const { va } = useContext(ColorContext)
  const { VA } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'vaticanCity'} onMouseOver={() => setCountrySelect('vaticanCity')}>
  <style jsx>{`
  .vaticanCity {
  fill: ${va};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="va" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#va)" />
</defs>
{VA ?
<circle fill="url(#va)" r="4" cy="235" cx="1053" stroke="black"/>
:
<circle r="4" cy="235" cx="1053" stroke="black"/>
}
</g>
)
}

export default VaticanCity