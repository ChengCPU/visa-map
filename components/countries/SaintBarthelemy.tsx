import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SaintBarthelemy:React.FC = () => {

  const { saintBarthelemyColor } = useContext(ColorContext)
  const { BL } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintBarthelemy'} onMouseOver={() => setCountrySelect('saintBarthelemy')}>
  <style jsx>{`
  .saintBarthelemy {
  fill: ${saintBarthelemyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bl" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(saintBarthelemyColor)}/>
  </pattern>
</defs>
{(BL == 1) ?
<circle fill="url(#bl)" r="2.5" cy="388" cx="627" stroke="black"/>
:
<circle r="2.5" cy="388" cx="627" stroke="black"/>
}
</g>
)
}

export default SaintBarthelemy