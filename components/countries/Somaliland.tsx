import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Somaliland:React.FC = () => {

  const { xx } = useContext(ColorContext)
  const { XX } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'somaliland'} onMouseOver={() => setCountrySelect('somaliland')}>
  <style jsx>{`
  .somaliland {
  fill: ${xx};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#xx)" />
</defs>
{XX ?
<path fill="url(#xx)" d="M 1229.5 428.19922 L 1227.5996 431.69922 L 1226.4004 433.90039 L 1228.5996 437.5 L 1230.8008 440.59961 L 1233 442.90039 L 1251.6992 450.5 L 1256.3516 450.4043 L 1260.2461 443.72852 L 1260.2461 428.72852 L 1259.0996 428.80078 L 1257.0996 430 L 1254.3008 430.40039 L 1249.4004 432.40039 L 1243.3008 433.09961 L 1238.0996 434.80078 L 1235.3008 434.80078 L 1232.5996 432.09961 L 1231.4004 429.40039 L 1229.5 428.19922 z " stroke="black"/>
:
<path d="M 1229.5 428.19922 L 1227.5996 431.69922 L 1226.4004 433.90039 L 1228.5996 437.5 L 1230.8008 440.59961 L 1233 442.90039 L 1251.6992 450.5 L 1256.3516 450.4043 L 1260.2461 443.72852 L 1260.2461 428.72852 L 1259.0996 428.80078 L 1257.0996 430 L 1254.3008 430.40039 L 1249.4004 432.40039 L 1243.3008 433.09961 L 1238.0996 434.80078 L 1235.3008 434.80078 L 1232.5996 432.09961 L 1231.4004 429.40039 L 1229.5 428.19922 z " stroke="black"/>
}
</g>
)
}

export default Somaliland