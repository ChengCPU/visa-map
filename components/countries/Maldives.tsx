import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Maldives:React.FC = () => {

  const { maldivesColor } = useContext(ColorContext)
  const { MV } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'maldives'} onMouseOver={() => setCountrySelect('maldives')}>
  <style jsx>{`
  .maldives {
  fill: ${maldivesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(maldivesColor)}/>
  </pattern>
</defs>
{(MV == 1) ?
<circle fill="url(#mv)" r="5" cy="474" cx="1402" stroke="black"/>
:
<circle r="5" cy="474" cx="1402" stroke="black"/>
}
</g>
)
}

export default Maldives