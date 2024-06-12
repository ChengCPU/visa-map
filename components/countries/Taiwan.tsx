import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Taiwan:React.FC = () => {

  const { tw } = useContext(ColorContext)
  const { TW } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'taiwan'} onMouseOver={() => setCountrySelect('taiwan')}>
  <style jsx>{`
  .taiwan {
  fill: ${tw};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tw" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#tw)" />
</defs>
{TW ?
<path fill="url(#tw)" d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z" stroke="black"/>
:
<path d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z" stroke="black"/>
}
</g>
)
}

export default Taiwan