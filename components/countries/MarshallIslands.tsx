import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const MarshallIslands:React.FC = () => {

  const { mh } = useContext(ColorContext)
  const { MH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'marshallIslands'} onMouseOver={() => setCountrySelect('marshallIslands')}>
  <style jsx>{`
  .marshallIslands {
  fill: ${mh};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mh" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mh)" />
</defs>
{MH ?
<circle fill="url(#mh)" r="5" cy="456" cx="1953" stroke="black"/>
:
<circle r="5" cy="456" cx="1953" stroke="black"/>
}
</g>
)
}

export default MarshallIslands