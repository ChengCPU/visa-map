import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Artsakh:React.FC = () => {

  const { artsakhColor } = useContext(ColorContext)
  const { AK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'artsakh'} onMouseOver={() => setCountrySelect('artsakh')}>
  <style jsx>{`
  .artsakh {
  fill: ${artsakhColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ak" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(artsakhColor)}/>
  </pattern>
</defs>
{(AK == 1) ?
<circle fill="url(#ak)" r="2" cy="245" cx="1230" stroke="black"/>
:
<circle r="2.5" cy="245" cx="1230" stroke="black"/>
}
</g>
)
}

export default Artsakh