import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const WallisAndFutuna:React.FC = () => {

  const { wallisAndFutunaColor } = useContext(ColorContext)
  const { wallisAndFutunaDiff } = useContext(DiffContext)

return (
<g className={'wallisAndFutuna'}>
  <style jsx>{`
  .wallisAndFutuna {
  fill: ${wallisAndFutunaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="wf" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(wallisAndFutunaDiff == 1) ?
<circle fill="url(#wf)" r="5" cy="590" cx="2015" stroke="black"/>
:
<circle r="5" cy="590" cx="2015" stroke="black"/>
}
</g>
)
}

export default WallisAndFutuna