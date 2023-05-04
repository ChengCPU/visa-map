import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const IsleOfMan:React.FC = () => {

  const { isleOfManColor } = useContext(ColorContext)
  const { IM } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'isleOfMan'} onMouseOver={() => setCountrySelect('isleOfMan')}>
  <style jsx>{`
  .isleOfMan {
  fill: ${isleOfManColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="im" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(isleOfManColor)}/>
  </pattern>
</defs>
{(IM == 1) ?
<circle fill="url(#im)" r="4" cy="158" cx="962" stroke="black"/>
:
<circle r="4" cy="158" cx="962" stroke="black"/>
}
</g>
)
}

export default IsleOfMan