import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Switzerland:React.FC = () => {

  const { switzerlandColor } = useContext(ColorContext)
  const { switzerlandDiff } = useContext(DiffContext)

return (
<g className={'switzerland'}>
  <style jsx>{`
  .switzerland {
  fill: ${switzerlandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ch" x="0" y="0" width="1" height="1" viewBox="10 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(switzerlandDiff == 1) ?
<path fill="url(#ch)" d="M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z" stroke="black"/>
:
<path d="M1034.4 197.5l0.2 1.1-0.7 1.5 2.3 1.2 2.6 0.2-0.3 2.5-2.1 1.1-3.8-0.8-1 2.5-2.4 0.2-0.9-1-2.7 2.2-2.5 0.3-2.2-1.4-1.8-2.7-2.4 1 0-2.9 3.6-3.5-0.2-1.6 2.3 0.6 1.3-1.1 4.2 0 1-1.3 5.5 1.9z" stroke="black"/>
}
</g>
)
}

export default Switzerland