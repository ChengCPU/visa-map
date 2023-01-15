import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Cyprus:React.FC = () => {

  const { cyprusColor } = useContext(ColorContext)
  const { cyprusDiff } = useContext(DiffContext)

return (
<g className={'cyprus'}>
  <style jsx>{`
  .cyprus {
  fill: ${cyprusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cy" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(cyprusDiff == 1) ?
<circle fill="url(#cy)" r="4" cy="280" cx="1160" stroke="black"/>
:
<circle r="4" cy="280" cx="1160" stroke="black"/>
}
</g>
)
}

export default Cyprus