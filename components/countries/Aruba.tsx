import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Aruba:React.FC = () => {

  const { arubaColor } = useContext(ColorContext)
  const { arubaDiff } = useContext(DiffContext)

return (
<g className={'aruba'}>
  <style jsx>{`
  .aruba {
  fill: ${arubaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="aw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(arubaDiff == 1) ?
<circle fill="url(#aw)" r="2.5" cy="422" cx="590" stroke="black"/>
:
<circle r="2.5" cy="422" cx="590" stroke="black"/>
}
</g>
)
}

export default Aruba