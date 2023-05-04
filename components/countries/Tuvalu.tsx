import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Tuvalu:React.FC = () => {

  const { tuvaluColor } = useContext(ColorContext)
  const { TV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tuvalu'} onMouseOver={() => setCountrySelect('tuvalu')}>
  <style jsx>{`
  .tuvalu {
  fill: ${tuvaluColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(tuvaluColor)}/>
  </pattern>
</defs>
{(TV == 1) ?
<circle fill="url(#tv)" r="5" cy="556" cx="1998" stroke="black"/>
:
<circle r="5" cy="556" cx="1998" stroke="black"/>
}
</g>
)
}

export default Tuvalu