import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Kuwait:React.FC = () => {

  const { kuwaitColor } = useContext(ColorContext)
  const { kuwaitDiff } = useContext(DiffContext)

return (
<g className={'kuwait'}>
  <style jsx>{`
  .kuwait {
  fill: ${kuwaitColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="kw" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
<path d="M1247.5 309.4l1.5 2.8-0.3 1.5 2.4 4.8-3.9 0.2-1.7-3.1-5-0.6 3.3-6.2 3.7 0.6z" />
{(kuwaitDiff == 1) ?
<circle fill="url(#kw)" r="5" cy="313" cx="1247" stroke="black"/>
:
<circle r="5" cy="313" cx="1247" stroke="black"/>
}
</g>
)
}

export default Kuwait