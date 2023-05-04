import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const SouthOssetia:React.FC = () => {

  const { southOssetiaColor } = useContext(ColorContext)
  const { XO } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'southOssetia'} onMouseOver={() => setCountrySelect('southOssetia')}>
  <style jsx>{`
  .southOssetia {
  fill: ${southOssetiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="xo" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(southOssetiaColor)}/>
  </pattern>
</defs>
{(XO == 1) ?
<circle fill="url(#xo)" r="3.5" cy="229" cx="1212" stroke="black"/>
:
<circle r="3.5" cy="229" cx="1212" stroke="black"/>
}
</g>
)
}

export default SouthOssetia