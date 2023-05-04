import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const TrinidadAndTobago:React.FC = () => {

  const { trinidadAndTobagoColor } = useContext(ColorContext)
  const { TT } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'trinidadAndTobago'} onMouseOver={() => setCountrySelect('trinidadAndTobago')}>
  <style jsx>{`
  .trinidadAndTobago {
  fill: ${trinidadAndTobagoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tt" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(trinidadAndTobagoColor)}/>
  </pattern>
</defs>
{(TT == 1) ?
<circle fill="url(#tt)" r="3.25" cy="435" cx="640" stroke="black"/>
:
<circle r="3.25" cy="435" cx="640" stroke="black"/>
}
</g>
)
}

export default TrinidadAndTobago