import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const NorthernCyprus:React.FC = () => {

  const { northernCyprusColor } = useContext(ColorContext)
  const { northernCyprusDiff } = useContext(DiffContext)

return (
<g className={'northernCyprus'}>
  <style jsx>{`
  .northernCyprus {
  fill: ${northernCyprusColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="rc" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(northernCyprusDiff == 1) ?
<circle fill="url(#rc)" r="3" cy="274.5" cx="1165" stroke="black"/>
:
<circle r="3" cy="274.5" cx="1165" stroke="black"/>
}
</g>
)
}

export default NorthernCyprus