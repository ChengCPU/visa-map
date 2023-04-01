import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const SanMarino:React.FC = () => {

  const { sanMarinoColor } = useContext(ColorContext)
  const { sanMarinoDiff } = useContext(DiffContext)

return (
<g className={'sanMarino'}>
  <style jsx>{`
  .sanMarino {
  fill: ${sanMarinoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(sanMarinoColor)}/>
  </pattern>
</defs>
{(sanMarinoDiff == 1) ?
<circle fill="url(#sm)" r="4" cy="223" cx="1053" stroke="black"/>
:
<circle r="4" cy="223" cx="1053" stroke="black"/>
}
</g>
)
}

export default SanMarino