import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Curacao:React.FC = () => {

  const { curacaoColor } = useContext(ColorContext)
  const { CW } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'curacao'} onMouseOver={() => setCountrySelect('curacao')}>
  <style jsx>{`
  .curacao {
  fill: ${curacaoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(curacaoColor)}/>
  </pattern>
</defs>
{(CW == 1) ?
<circle fill="url(#cw)" r="2.5" cy="424" cx="598" stroke="black"/>
:
<circle r="2.5" cy="424" cx="598" stroke="black"/>
}
</g>
)
}

export default Curacao