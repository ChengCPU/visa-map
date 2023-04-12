import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SintEustatius:React.FC = () => {

  const { sintEustatiusColor } = useContext(ColorContext)
  const { sintEustatiusDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'sintEustatius'} onMouseOver={() => setCountrySelect('sintEustatius')}>
  <style jsx>{`
  .sintEustatius {
  fill: ${sintEustatiusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xe" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(sintEustatiusColor)}/>
  </pattern>
</defs>
{(sintEustatiusDiff == 1) ?
<circle fill="url(#xe)" r="2.5" cy="393.5" cx="629" stroke="black"/>
:
<circle r="2.5" cy="393.5" cx="629" stroke="black"/>
}
</g>
)
}

export default SintEustatius