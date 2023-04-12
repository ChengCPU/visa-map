import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'
import gridCalculation from '../../logic/gridCalculation'

const HongKong:React.FC = () => {

  const { hongKongColor } = useContext(ColorContext)
  const { hongKongDiff } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'hongKong'} onMouseOver={() => setCountrySelect('hongKong')}>
  <style jsx>{`
  .hongKong {
  fill: ${hongKongColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="hk" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(hongKongColor)}/>
  </pattern>
</defs>
{(hongKongDiff == 1) ?
<circle fill="url(#hk)" r="4" cy="358" cx="1622" stroke="black"/>
:
<circle r="4" cy="358" cx="1622" stroke="black"/>
}
</g>
)
}

export default HongKong