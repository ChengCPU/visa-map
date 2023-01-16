import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Taiwan:React.FC = () => {

  const { taiwanColor } = useContext(ColorContext)
  const { taiwanDiff } = useContext(DiffContext)

return (
<g className={'taiwan'}>
  <style jsx>{`
  .taiwan {
  fill: ${taiwanColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tw" x="0" y="0" width="1" height="1" viewBox="0 10 7 7">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(taiwanDiff == 1) ?
<path fill="url(#tw)" d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z" stroke="black"/>
:
<path d="M1657.9 355.5l-1.4 5.3-4-5.5-1.5-4.7 1.9-6.3 3.3-4.9 3 1.9-0.1 3.9-1.2 10.3z" stroke="black"/>
}
</g>
)
}

export default Taiwan