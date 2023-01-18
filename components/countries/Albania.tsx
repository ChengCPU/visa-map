import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Albania:React.FC = () => {

  const { albaniaColor } = useContext(ColorContext)
  const { albaniaDiff } = useContext(DiffContext)

return (
<g className={'albania'}>
  <style jsx>{`
  .albania {
  fill: ${albaniaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="al" x="0" y="0" width="1" height="1" viewBox="0 50 8 8">
    <image width="1500" height="1500" xlinkHref={gridCalculation(albaniaColor)}/>
  </pattern>
</defs>
{(albaniaDiff == 1) ?
<path fill="url(#al)" d="M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z" stroke="black"/>
:
<path d="M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z" stroke="black"/>
}
</g>
)
}

export default Albania