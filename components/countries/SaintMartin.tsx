import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaintMartin:React.FC = () => {

  const { mf } = useContext(ColorContext)
  const { MF } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintMartin'} onMouseOver={() => setCountrySelect('saintMartin')}>
  <style jsx>{`
  .saintMartin {
  fill: ${mf};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mf" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#mf)" />
</defs>
{MF ?
<circle fill="url(#mf)" r="2.5" cy="379" cx="630" stroke="black"/>
:
<circle r="2.5" cy="379" cx="630" stroke="black"/>
}
</g>
)
}

export default SaintMartin