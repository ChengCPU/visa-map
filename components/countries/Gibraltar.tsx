import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Gibraltar:React.FC = () => {

  const { gibraltarColor } = useContext(ColorContext)
  const { gibraltarDiff } = useContext(DiffContext)

return (
<g className={'gibraltar'}>
  <style jsx>{`
  .gibraltar {
  fill: ${gibraltarColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gi" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(gibraltarDiff == 1) ?
<circle fill="url(#gi)" r="4" cy="270" cx="958" stroke="black"/>
:
<circle r="4" cy="270" cx="958" stroke="black"/>
}
</g>
)
}

export default Gibraltar