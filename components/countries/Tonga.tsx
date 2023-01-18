import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Tonga:React.FC = () => {

  const { tongaColor } = useContext(ColorContext)
  const { tongaDiff } = useContext(DiffContext)

return (
<g className={'tonga'}>
  <style jsx>{`
  .tonga {
  fill: ${tongaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="to" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(tongaColor)}/>
  </pattern>
</defs>
{(tongaDiff == 1) ?
<circle fill="url(#to)" r="5" cy="630" cx="13" stroke="black"/>
:
<circle r="5" cy="630" cx="13" stroke="black"/>
}
</g>
)
}

export default Tonga