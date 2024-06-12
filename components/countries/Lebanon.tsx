import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Lebanon:React.FC = () => {

  const { lb } = useContext(ColorContext)
  const { LB } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'lebanon'} onMouseOver={() => setCountrySelect('lebanon')}>
  <style jsx>{`
  .lebanon {
  fill: ${lb};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lb" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#lb)" />
</defs>
{LB ?
<>
<path fill="url(#lb)" d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z" />
<circle fill="url(#lb)" r="4" cy="284" cx="1179" stroke="black"/>
</>
:
<>
<path d="M1179.1 288.2l-1.4 0.1-0.4 1.1-1.8 0 1.3-5.3 2.2-4.5 0-0.2 2.5 0.3 1.2 2.5-2.7 2.5-0.9 3.5z" />
<circle r="4" cy="284" cx="1179" stroke="black"/>
</>
}
</g>
)
}

export default Lebanon