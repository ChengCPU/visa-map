import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const FrenchGuiana:React.FC = () => {

  const { frenchGuianaColor } = useContext(ColorContext)
  const { frenchGuianaDiff } = useContext(DiffContext)

return (
<g className={'frenchGuiana'}>
  <style jsx>{`
  .frenchGuiana {
  fill: ${frenchGuianaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="gf" x="0" y="0" width="1" height="1" viewBox="0 10 12 12">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(frenchGuianaDiff == 1) ?
<path fill="url(#gf)" d="M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z" stroke="black"/>
:
<path d="M677.3 487l1.5-2.8 0.5-2.9 1-2.7-2.1-3.8-0.3-4.4 3.1-5.5 1.9 0.7 4.1 1.5 5.9 5.4 0.8 2.6-3.4 5.9-1.8 4.7-2.2 2.5-2.7 0.4-0.8-1.8-1.3-0.2-1.7 1.7-2.5-1.3z" stroke="black"/>
}
</g>
)
}

export default FrenchGuiana