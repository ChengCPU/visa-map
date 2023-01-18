import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Bermuda:React.FC = () => {

  const { bermudaColor } = useContext(ColorContext)
  const { bermudaDiff } = useContext(DiffContext)

return (
<g className={'bermuda'}>
  <style jsx>{`
  .bermuda {
  fill: ${bermudaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="bm" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(bermudaColor)}/>
  </pattern>
</defs>
{(bermudaDiff == 1) ?
<circle fill="url(#bm)" r="5" cy="294" cx="637" stroke="black"/>
:
<circle r="5" cy="294" cx="637" stroke="black"/>
}
</g>
)
}

export default Bermuda