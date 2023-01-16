import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Tuvalu:React.FC = () => {

  const { tuvaluColor } = useContext(ColorContext)
  const { tuvaluDiff } = useContext(DiffContext)

return (
<g className={'tuvalu'}>
  <style jsx>{`
  .tuvalu {
  fill: ${tuvaluColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(tuvaluDiff == 1) ?
<circle fill="url(#tv)" r="5" cy="556" cx="1998" stroke="black"/>
:
<circle r="5" cy="556" cx="1998" stroke="black"/>
}
</g>
)
}

export default Tuvalu