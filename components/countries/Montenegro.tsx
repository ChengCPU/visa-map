import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Montenegro:React.FC = () => {

  const { montenegroColor } = useContext(ColorContext)
  const { montenegroDiff } = useContext(DiffContext)

return (
<g className={'montenegro'}>
  <style jsx>{`
  .montenegro {
  fill: ${montenegroColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="me" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
<path d="M1090.6 227.2l-0.8 1.4-1.4 0.6-0.4-1.2-1.9 3.1 0.5 2.1-1.1-0.5-1.7-2.1-2.3-1.3 0.5-1 0.4-3.5 1.6-1.5 0.9-0.6 1.4 1.1 0.9 0.9 1.7 0.7 2.1 1.3-0.4 0.5z" stroke="black"/>
{(montenegroDiff == 1) ?
<circle fill="url(#me)" r="4" cy="227" cx="1086" stroke="black"/>
:
<circle r="4" cy="227" cx="1086" stroke="black"/>
}
</g>
)
}

export default Montenegro