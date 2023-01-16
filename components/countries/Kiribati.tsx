import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Kiribati:React.FC = () => {

  const { kiribatiColor } = useContext(ColorContext)
  const { kiribatiDiff } = useContext(DiffContext)

return (
<g className={'kiribati'}>
  <style jsx>{`
  .kiribati {
  fill: ${kiribatiColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ki" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(kiribatiDiff == 1) ?
<circle fill="url(#ki)" r="5" cy="490" cx="1960" stroke="black"/>
:
<circle r="5" cy="490" cx="1960" stroke="black"/>
}
</g>
)
}

export default Kiribati