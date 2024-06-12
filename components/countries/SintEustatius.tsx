import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SintEustatius:React.FC = () => {

  const { xe } = useContext(ColorContext)
  const { XE } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'sintEustatius'} onMouseOver={() => setCountrySelect('sintEustatius')}>
  <style jsx>{`
  .sintEustatius {
  fill: ${xe};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xe" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xe)" />
</defs>
{XE ?
<circle fill="url(#xe)" r="2.5" cy="393.5" cx="629" stroke="black"/>
:
<circle r="2.5" cy="393.5" cx="629" stroke="black"/>
}
</g>
)
}

export default SintEustatius