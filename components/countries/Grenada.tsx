import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const Grenada:React.FC = () => {

  const { grenadaColor } = useContext(ColorContext)
  const { GD } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'grenada'} onMouseOver={() => setCountrySelect('grenada')}>
  <style jsx>{`
  .grenada {
  fill: ${grenadaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gd" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(grenadaColor)}/>
  </pattern>
</defs>
{(GD == 1) ?
<circle fill="url(#gd)" r="3.25" cy="428" cx="638" stroke="black"/>
:
<circle r="3.25" cy="428" cx="638" stroke="black"/>
}
</g>
)
}

export default Grenada