import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SriLanka:React.FC = () => {

  const { lk } = useContext(ColorContext)
  const { LK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'sriLanka'} onMouseOver={() => setCountrySelect('sriLanka')}>
  <style jsx>{`
  .sriLanka {
  fill: ${lk};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lk" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#lk)" />
</defs>
{(LK == 1) ?
<path fill="url(#lk)" d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
:
<path d="M1445.9 462l-4.8 1.5-2.9-5.1-1.4-9.2 2-10.4 4.1 3.5 2.8 4.5 3.1 6.7-0.6 6.7-2.3 1.8z" stroke="black"/>
}
</g>
)
}

export default SriLanka