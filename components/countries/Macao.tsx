import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Macao:React.FC = () => {

  const { macaoColor } = useContext(ColorContext)
  const { macaoDiff } = useContext(DiffContext)

return (
<g className={'macao'}>
  <style jsx>{`
  .macao {
  fill: ${macaoColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="mo" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(macaoDiff == 1) ?
<circle fill="url(#mo)" r="4" cy="360" cx="1614" stroke="black"/>
:
<circle r="4" cy="360" cx="1614" stroke="black"/>
}
</g>
)
}

export default Macao