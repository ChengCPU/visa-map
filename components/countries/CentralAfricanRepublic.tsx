import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const CentralAfricanRepublic:React.FC = () => {

  const { centralAfricanRepublicColor } = useContext(ColorContext)
  const { centralAfricanRepublicDiff } = useContext(DiffContext)

return (
<g className={'centralAfricanRepublic'}>
  <style jsx>{`
  .centralAfricanRepublic {
  fill: ${centralAfricanRepublicColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="cf" x="0" y="0" width="1" height="1" viewBox="10 0 40 40">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(centralAfricanRepublicDiff == 1) ?
<path fill="url(#cf)" d="M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z" stroke="black"/>
:
<path d="M1121.3 446.5l3.9 2.5 3.1 2.6 0.1 2.1 3.9 3.3 2.4 2.8 1.4 3.8 4.3 2.6 0.9 2-1.8 0.7-3.7-0.1-4.2-0.7-2.1 0.5-0.9 1.6-1.8 0.2-2.2-1.4-6.3 3.2-2.6-0.6-0.8 0.5-1.6 3.9-4.3-1.3-4.1-0.6-3.6-2.4-4.7-2.2-3 2.1-2.2 3.2-0.5 4.5-3.6-0.3-3.9-1.1-3.3 3.4-3 6-0.6-1.9-0.3-2.9-2.6-2.1-2.1-3.3-0.5-2.3-2.7-3.4 0.5-1.9-0.6-2.7 0.4-5 1.4-1.1 2.8-6.5 4.6-0.5 1-1.7 1 0.2 1.4 1.4 7.1-2.4 2.4-2.5 2.9-2.3-0.6-2.2 1.6-0.6 5.5 0.4 5.2-3 4-7 2.8-2.6 3.6-1.1 0.7 2.7 3.3 4 0 2.7-0.8 2.6 0.4 2 1.9 1.9 0.5 0.3z" stroke="black"/>
}
</g>
)
}

export default CentralAfricanRepublic