import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Palau:React.FC = () => {

  const { palauColor } = useContext(ColorContext)
  const { palauDiff } = useContext(DiffContext)

return (
<g className={'palau'}>
  <style jsx>{`
  .palau {
  fill: ${palauColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(palauDiff == 1) ?
<circle fill="url(#pw)" r="5" cy="453" cx="1747" stroke="black"/>
:
<circle r="5" cy="453" cx="1747" stroke="black"/>
}
</g>
)
}

export default Palau