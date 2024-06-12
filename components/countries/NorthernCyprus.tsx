import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const NorthernCyprus:React.FC = () => {

  const { rc } = useContext(ColorContext)
  const { RC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'northernCyprus'} onMouseOver={() => setCountrySelect('northernCyprus')}>
  <style jsx>{`
  .northernCyprus {
  fill: ${rc};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="rc" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#rc)" />
</defs>
{RC ?
<circle fill="url(#rc)" r="3" cy="274.5" cx="1165" stroke="black"/>
:
<circle r="3" cy="274.5" cx="1165" stroke="black"/>
}
</g>
)
}

export default NorthernCyprus