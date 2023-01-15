import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Iceland:React.FC = () => {

  const { icelandColor } = useContext(ColorContext)
  const { icelandDiff } = useContext(DiffContext)

return (
<g className={'iceland'}>
  <style jsx>{`
  .iceland {
  fill: ${icelandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="is" x="0" y="0" width="1" height="1" viewBox="12 0 14 14">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(icelandDiff == 1) ?
<path fill="url(#is)" d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z" stroke="black"/>
:
<path d="M924.8 84.5l-1.4 3.6 4.4 3.8-6.1 4.3-13.1 3.9-3.9 1.1-5.6-0.9-11.9-1.8 4.8-2.5-9-2.7 7.9-1.1 0.1-1.7-8.8-1.3 3.6-3.7 6.6-0.8 6 3.8 7-3 5.1 1.5 7.3-2.9 7 0.4z" stroke="black"/>
}
</g>
)
}

export default Iceland