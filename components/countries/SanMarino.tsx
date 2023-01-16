import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

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
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
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