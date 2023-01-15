import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Eritrea:React.FC = () => {

  const { eritreaColor } = useContext(ColorContext)
  const { eritreaDiff } = useContext(DiffContext)

return (
<g className={'eritrea'}>
  <style jsx>{`
  .eritrea {
  fill: ${eritreaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="er" x="0" y="0" width="1" height="1" viewBox="0 0 30 30">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(eritreaDiff == 1) ?
<path fill="url(#er)" d="M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z" stroke="black"/>
:
<path d="M1228.9 420.3l-1.7 1.6-2.4-0.6-2-2.1-2.5-3.7-2.6-2.1-1.5-2.2-5-2.6-3.9-0.1-1.4-1.3-3.2 1.5-3.6-2.9-1.5 4.8-6.6-1.4-0.7-2.5 2-9.5 0.3-4.2 1.7-2 4-1.1 2.7-3.6 3.6 7.4 1.9 5.9 3.2 3.1 8 6.1 3.3 3.6 3.2 3.8 1.8 2.2 2.9 1.9z" stroke="black"/>
}
</g>
)
}

export default Eritrea