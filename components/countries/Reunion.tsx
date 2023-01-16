import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Reunion:React.FC = () => {

  const { reunionColor } = useContext(ColorContext)
  const { reunionDiff } = useContext(DiffContext)

return (
<g className={'reunion'}>
  <style jsx>{`
  .reunion {
  fill: ${reunionColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="re" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(reunionDiff == 1) ?
<circle fill="url(#re)" r="4" cy="635" cx="1295" stroke="black"/>
:
<circle r="4" cy="635" cx="1295" stroke="black"/>
}
</g>
)
}

export default Reunion