import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Jordan:React.FC = () => {

  const { jordanColor } = useContext(ColorContext)
  const { jordanDiff } = useContext(DiffContext)

return (
<g className={'jordan'}>
  <style jsx>{`
  .jordan {
  fill: ${jordanColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="jo" x="0" y="0" width="1" height="1" viewBox="0 10 16 16">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(jordanDiff == 1) ?
<path fill="url(#jo)" d="M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z" stroke="black"/>
:
<path d="M1198.1 295.3l-0.9 1-10.4 3.2 6 6.5-1.6 1-0.7 2.2-4.1 0.9-1.1 2.3-2.1 2-6.2-1.1-0.3-0.9 1.8-10.2-0.4-2.5 0.6-1.9-0.4-4 0.7-2 6.3 2.6 9.7-6.9 3.1 7.8z" stroke="black"/>
}
</g>
)
}

export default Jordan