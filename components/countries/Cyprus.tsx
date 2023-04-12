import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Cyprus:React.FC = () => {

  const { cyprusColor } = useContext(ColorContext)
  const { cyprusDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'cyprus'} onMouseOver={() => setCountrySelect('cyprus')}>
  <style jsx>{`
  .cyprus {
  fill: ${cyprusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cy" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(cyprusColor)}/>
  </pattern>
</defs>
{(cyprusDiff == 1) ?
<circle fill="url(#cy)" r="4" cy="280" cx="1160" stroke="black"/>
:
<circle r="4" cy="280" cx="1160" stroke="black"/>
}
</g>
)
}

export default Cyprus