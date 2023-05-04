import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Seychelles:React.FC = () => {

  const { seychellesColor } = useContext(ColorContext)
  const { SC } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'seychelles'} onMouseOver={() => setCountrySelect('seychelles')}>
  <style jsx>{`
  .seychelles {
  fill: ${seychellesColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(seychellesColor)}/>
  </pattern>
</defs>
{(SC == 1) ?
<circle fill="url(#sc)" r="5" cy="531" cx="1300" stroke="black"/>
:
<circle r="5" cy="531" cx="1300" stroke="black"/>
}
</g>
)
}

export default Seychelles