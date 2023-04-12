import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const FaroeIslands:React.FC = () => {

  const { faroeIslandsColor } = useContext(ColorContext)
  const { faroeIslandsDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'faroeIslands'} onMouseOver={() => setCountrySelect('faroeIslands')}>
  <style jsx>{`
  .faroeIslands {
  fill: ${faroeIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="fo" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(faroeIslandsColor)}/>
  </pattern>
</defs>
{(faroeIslandsDiff == 1) ?
<circle fill="url(#fo)" r="5" cy="109" cx="954" stroke="black"/>
:
<circle r="5" cy="109" cx="954" stroke="black"/>
}
</g>
)
}

export default FaroeIslands