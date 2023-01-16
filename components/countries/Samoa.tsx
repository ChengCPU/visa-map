import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Samoa:React.FC = () => {

  const { samoaColor } = useContext(ColorContext)
  const { samoaDiff } = useContext(DiffContext)

return (
<g className={'samoa'}>
  <style jsx>{`
  .samoa {
  fill: ${samoaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ws" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(samoaDiff == 1) ?
<circle fill="url(#ws)" r="5" cy="590" cx="20" stroke="black"/>
:
<circle r="5" cy="590" cx="20" stroke="black"/>
}
</g>
)
}

export default Samoa