import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Guam:React.FC = () => {

  const { guamColor } = useContext(ColorContext)
  const { guamDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'guam'} onMouseOver={() => setCountrySelect('guam')}>
  <style jsx>{`
  .guam {
  fill: ${guamColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gu" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(guamColor)}/>
  </pattern>
</defs>
{(guamDiff == 1) ?
<circle fill="url(#gu)" r="5" cy="414" cx="1800" stroke="black"/>
:
<circle r="5" cy="414" cx="1800" stroke="black"/>
}
</g>
)
}

export default Guam