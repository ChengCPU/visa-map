import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Reunion:React.FC = () => {

  const { reunionColor } = useContext(ColorContext)
  const { RE } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'reunion'} onMouseOver={() => setCountrySelect('reunion')}>
  <style jsx>{`
  .reunion {
  fill: ${reunionColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="re" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(reunionColor)}/>
  </pattern>
</defs>
{(RE == 1) ?
<circle fill="url(#re)" r="4" cy="635" cx="1295" stroke="black"/>
:
<circle r="4" cy="635" cx="1295" stroke="black"/>
}
</g>
)
}

export default Reunion