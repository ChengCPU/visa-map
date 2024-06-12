import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const CaymanIslands:React.FC = () => {

  const { ky } = useContext(ColorContext)
  const { KY } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'caymanIslands'} onMouseOver={() => setCountrySelect('caymanIslands')}>
  <style jsx>{`
  .caymanIslands {
  fill: ${ky};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ky" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ky)" />
</defs>
{KY ?
<circle fill="url(#ky)" r="5" cy="377" cx="532" stroke="black"/>
:
<circle r="5" cy="377" cx="532" stroke="black"/>
}
</g>
)
}

export default CaymanIslands