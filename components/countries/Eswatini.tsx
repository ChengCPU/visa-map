import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Eswatini:React.FC = () => {

  const { sz } = useContext(ColorContext)
  const { SZ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'eswatini'} onMouseOver={() => setCountrySelect('eswatini')}>
  <style jsx>{`
  .eswatini {
  fill: ${sz};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sz" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sz)" />
</defs>
{(SZ == 1) ?
<>
<path fill="url(#sz)" d="M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z" />
<circle fill="url(#sz)" r="5" cy="672" cx="1161" stroke="black"/>
</>
:
<>
<path d="M1161.7 667.7l0.6 2.9 0.3 2.9-1.4 2.8-3.2 0.7-3.1-3.5 0.1-2.2 1.7-2.4 0.6-1.9 1.7-0.4 2.7 1.1z" />
<circle r="5" cy="672" cx="1161" stroke="black"/>
</>
}
</g>
)
}

export default Eswatini