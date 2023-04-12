import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Jersey:React.FC = () => {

  const { jerseyColor } = useContext(ColorContext)
  const { jerseyDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'jersey'} onMouseOver={() => setCountrySelect('jersey')}>
  <style jsx>{`
  .jersey {
  fill: ${jerseyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="je" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(jerseyColor)}/>
  </pattern>
</defs>
{(jerseyDiff == 1) ?
<circle fill="url(#je)" r="4" cy="185" cx="973" stroke="black"/>
:
<circle r="4" cy="185" cx="973" stroke="black"/>
}
</g>
)
}

export default Jersey