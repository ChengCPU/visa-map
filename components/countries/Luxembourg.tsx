import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Luxembourg:React.FC = () => {

  const { luxembourgColor } = useContext(ColorContext)
  const { luxembourgDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'luxembourg'} onMouseOver={() => setCountrySelect('luxembourg')}>
  <style jsx>{`
  .luxembourg {
  fill: ${luxembourgColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lu" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(luxembourgColor)}/>
  </pattern>
</defs>
{(luxembourgDiff == 1) ?
<circle fill="url(#lu)" r="4" cy="185" cx="1016" stroke="black"/>
:
<circle r="4" cy="185" cx="1016" stroke="black"/>
}
</g>
)
}

export default Luxembourg