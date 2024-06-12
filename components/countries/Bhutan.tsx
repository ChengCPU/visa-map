import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Bhutan:React.FC = () => {

  const { bt } = useContext(ColorContext)
  const { BT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'bhutan'} onMouseOver={() => setCountrySelect('bhutan')}>
  <style jsx>{`
  .bhutan {
  fill: ${bt};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#bt)" />
</defs>
{BT ?
<path fill="url(#bt)" d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" stroke="black"/>
:
<path d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" stroke="black"/>
}
</g>
)
}

export default Bhutan