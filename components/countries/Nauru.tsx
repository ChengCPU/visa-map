import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Nauru:React.FC = () => {

  const { nauruColor } = useContext(ColorContext)
  const { nauruDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'nauru'} onMouseOver={() => setCountrySelect('nauru')}>
  <style jsx>{`
  .nauru {
  fill: ${nauruColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nr" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(nauruColor)}/>
  </pattern>
</defs>
{(nauruDiff == 1) ?
<circle fill="url(#nr)" r="5" cy="505" cx="1933" stroke="black"/>
:
<circle r="5" cy="505" cx="1933" stroke="black"/>
}
</g>
)
}

export default Nauru