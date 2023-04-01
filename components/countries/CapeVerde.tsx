import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const CapeVerde:React.FC = () => {

  const { capeVerdeColor } = useContext(ColorContext)
  const { capeVerdeDiff } = useContext(DiffContext)

return (
<g className={'capeVerde'}>
  <style jsx>{`
  .capeVerde {
  fill: ${capeVerdeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(capeVerdeColor)}/>
  </pattern>
</defs>
{(capeVerdeDiff == 1) ?
<circle fill="url(#cv)" r="5" cy="400" cx="853" stroke="black"/>
:
<circle r="5" cy="400" cx="853" stroke="black"/>
}
</g>
)
}

export default CapeVerde