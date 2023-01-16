import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Tunisia:React.FC = () => {

  const { tunisiaColor } = useContext(ColorContext)
  const { tunisiaDiff } = useContext(DiffContext)

return (
<g className={'tunisia'}>
  <style jsx>{`
  .tunisia {
  fill: ${tunisiaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tn" x="0" y="0" width="1" height="1" viewBox="0 20 14 14">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(tunisiaDiff == 1) ?
<path fill="url(#tn)" d="M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z" stroke="black"/>
:
<path d="M1048.2 289.1l-0.1 4.9-2.6 1.8-1.6 2.1-3.6 2.5 0.6 2.6-0.4 2.8-2.6 1.4-2.6-11.5-3.4-2.6-0.1-1.5-4.5-3.9-0.6-4.8 3.2-3.6 1.1-5.3-1-6.1 1-3.3 5.7-2.5 3.7 0.7 0 3.3 4.4-2.4 0.4 1.2-2.5 3.2 0.1 2.9 1.9 1.6-0.5 5.6-3.5 3.2 1.2 3.5 2.8 0.1 1.4 3.1 2.1 1z" stroke="black"/>
}
</g>
)
}

export default Tunisia