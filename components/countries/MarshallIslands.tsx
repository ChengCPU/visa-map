import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const MarshallIslands:React.FC = () => {

  const { marshallIslandsColor } = useContext(ColorContext)
  const { MH } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'marshallIslands'} onMouseOver={() => setCountrySelect('marshallIslands')}>
  <style jsx>{`
  .marshallIslands {
  fill: ${marshallIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mh" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(marshallIslandsColor)}/>
  </pattern>
</defs>
{(MH == 1) ?
<circle fill="url(#mh)" r="5" cy="456" cx="1953" stroke="black"/>
:
<circle r="5" cy="456" cx="1953" stroke="black"/>
}
</g>
)
}

export default MarshallIslands