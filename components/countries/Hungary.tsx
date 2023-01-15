import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Hungary:React.FC = () => {

  const { hungaryColor } = useContext(ColorContext)
  const { hungaryDiff } = useContext(DiffContext)

return (
<g className={'hungary'}>
  <style jsx>{`
  .hungary {
  fill: ${hungaryColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="hu" x="0" y="0" width="1" height="1" viewBox="20 0 15 15">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(hungaryDiff == 1) ?
<path fill="url(#hu)" d="M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z" stroke="black"/>
:
<path d="M1096.2 191.9l3 1.7 0.5 1.7-2.9 1.3-1.9 4.2-2.6 4.3-3.9 1.2-3.2-0.3-3.7 1.6-1.8 1-4.3-1.2-4-2.7-1.6-0.8-1.2-2.1-0.8-0.1 1.3-4-1.1-1.4 2.8 0 0.2-2.6 2.7 1.7 1.9 0.6 4.1-0.7 0.3-1.3 1.9-0.2 2.3-0.9 0.6 0.4 2.3-0.8 1-1.5 1.6-0.4 5.5 1.9 1-0.6z" stroke="black"/>
}
</g>
)
}

export default Hungary