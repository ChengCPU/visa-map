import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SintMaarten:React.FC = () => {

  const { sintMaartenColor } = useContext(ColorContext)
  const { sintMaartenDiff } = useContext(DiffContext)

return (
<g className={'sintMaarten'}>
  <style jsx>{`
  .sintMaarten {
  fill: ${sintMaartenColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sx" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(sintMaartenColor)}/>
  </pattern>
</defs>
{(sintMaartenDiff == 1) ?
<circle fill="url(#sx)" r="2.5" cy="384" cx="630" stroke="black"/>
:
<circle r="2.5" cy="384" cx="630" stroke="black"/>
}
</g>
)
}

export default SintMaarten