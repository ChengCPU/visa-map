import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Cyprus:React.FC = () => {

  const { cy } = useContext(ColorContext)
  const { CY } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'cyprus'} onMouseOver={() => setCountrySelect('cyprus')}>
  <style jsx>{`
  .cyprus {
  fill: ${cy};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cy" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#cy)" />
</defs>
{CY ?
<circle fill="url(#cy)" r="4" cy="280" cx="1160" stroke="black"/>
:
<circle r="4" cy="280" cx="1160" stroke="black"/>
}
</g>
)
}

export default Cyprus