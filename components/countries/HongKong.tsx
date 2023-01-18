import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const HongKong:React.FC = () => {

  const { hongKongColor } = useContext(ColorContext)
  const { hongKongDiff } = useContext(DiffContext)

return (
<g className={'hongKong'}>
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